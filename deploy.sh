rm -rf server/public/*
cd client/
yarn run build
cd ..
mv client/build/* server/public/