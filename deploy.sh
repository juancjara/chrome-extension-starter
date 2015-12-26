#!/bin/bash

echo "building"

npm run build

cd build/
rm app.zip
zip -r app.zip .
mv app.zip ../
