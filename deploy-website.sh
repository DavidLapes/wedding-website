npm run build
aws s3 sync build/ s3://terkaberedavida.cz
aws cloudfront create-invalidation --distribution-id E73O8TVBW4WB0 --paths "/*"
