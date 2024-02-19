<?php
// Function to execute shell commands securely
function exec_shell_command($command) {
    $output = [];
    $status = -1;
    exec($command, $output, $status);
    return [
        'output' => implode("\n", $output),
        'status' => $status,
    ];
}

// Define the path to the Node.js application
$repoPath = '/var/www/realestate.parecsa.com/nodejs/realestate_node';
$gitRepo = 'https://github.com/mdnelles/realestate_nodejs.git';

// Endpoint to sync and update the application
if (isset($_GET['update_app'])) {
    try {
        // 1. Sync changes from Git repository
        $syncResult = exec_shell_command("git -C $repoPath/realestate_nodejs pull");
        if ($syncResult['status'] !== 0) {
            throw new Exception("Failed to sync Git repository: " . $syncResult['output']);
        }

        // 2. Install dependencies
        $npmResult = exec_shell_command("cd $repoPath/myGitRepo && npm i");
        if ($npmResult['status'] !== 0) {
            throw new Exception("Failed to install dependencies: " . $npmResult['output']);
        }

        // 3. Copy .env file (optional, based on your setup)
        $copyEnvResult = exec_shell_command("cp $repoPath/../.env $repoPath/myGitRepo/.env");
        if ($copyEnvResult['status'] !== 0) {
            throw new Exception("Failed to copy .env file: " . $copyEnvResult['output']);
        }

        // 4. Restart PM2 process
        $pm2Result = exec_shell_command("pm2 restart real_server");
        if ($pm2Result['status'] !== 0) {
            throw new Exception("Failed to restart PM2 process: " . $pm2Result['output']);
        }

        echo "Application updated successfully!";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
        // Consider logging errors for better debugging
    }
}
?>