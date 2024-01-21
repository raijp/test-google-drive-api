```
docker build -t test-google-drive-api .
```

```
docker rm -f test-google-drive-api
docker run -itd \
  -v $(pwd)/src:/test/src \
  --log-driver=none \
  --name test-google-drive-api \
  test-google-drive-api \
  /bin/bash
```
```
docker exec -it test-google-drive-api /bin/bash
```

# Google Drive Permissions:
If you are working with Google Drive API, you may want to grant the service account permissions to access specific files or folders in Google Drive.

For Individual Files or Folders:
Open Google Drive in your web browser.
Right-click on the file or folder you want to share.
Click on "Share."
Enter the email address of the service account in the sharing dialog.
Set the desired permissions (e.g., "Viewer," "Editor") for the service account.
Click "Send."
