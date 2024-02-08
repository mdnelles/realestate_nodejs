//import fs from 'fs';
import * as ftp from 'basic-ftp';

// FTP server credentials
const ftpConfig = {
  host: 'xxx',
  user: 'xxx',
  password: 'xxx',
};

// Remote directory path where files are located
const remoteDirectory = '/';

// Local directory path to save downloaded files
const localDirectory = '/var/www/ftp-idx-app/tmp';

// List of files to download
const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, '');
const filesToDownload = [
  `agt${currentDate}.csv`,
  `com${currentDate}.csv`,
  `link${currentDate}.csv`,
  `ofc${currentDate}.csv`,
  `photo${currentDate}.zip`,
  `res${currentDate}.csv`,
];

(async () => {
  const client: any = new ftp.Client();
  try {
    await client.access(ftpConfig);
    console.log('FTP connected');

    // Switch to passive mode (optional, depending on your server configuration)
    await client.usePasv(true);
    console.log('Passive mode enabled');

    for (const file of filesToDownload) {
      const remoteFile = `${remoteDirectory}/${file}`;
      const localFile = `${localDirectory}/${file}`;

      // Download the file
      await client.downloadTo(localFile, remoteFile);
      console.log(`Downloaded ${file} successfully`);
    }
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
  } finally {
    client.close();
    console.log('FTP connection closed');
  }
})();
