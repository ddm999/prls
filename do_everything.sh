cd ingest
cargo build
cd ../webrtc
export GO111MODULE=on
go build
cd ../frontend
npm run build
rm -r /var/www/html
mv build/* /var/www/html