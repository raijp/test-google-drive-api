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
