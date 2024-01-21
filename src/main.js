const { google } = require('googleapis');
const { JWT } = require('google-auth-library');
const fs = require('fs');

// Path to the service account JSON key file
const keyPath = '/test/src/service-account.json';

// Set the path to the file you want to upload
const filePath = '/test/src/upload.txt';

// Set the ID of the Google Drive folder where you want to upload the file
const folderId = '';

// Load the service account key file
const keyFile = require(keyPath);

// Create a JWT client using the service account key
const auth = new JWT({
    email: keyFile.client_email,
    key: keyFile.private_key,
    scopes: ['https://www.googleapis.com/auth/drive'],
});

// Create a Google Drive API service
const drive = google.drive({ version: 'v3', auth });

// Read the file content
const fileContent = fs.createReadStream(filePath);

// Create a file metadata
const fileMetadata = {
    name: require('path').basename(filePath),
    parents: [folderId],
};

// Upload the file
drive.files.create(
    {
        resource: fileMetadata,
        media: {
            body: fileContent,
        },
    },
    (err, file) => {
        if (err) {
            console.error('Error uploading file:', err);
        } else {
            console.log('File ID:', file.data.id);
        }
    }
);
