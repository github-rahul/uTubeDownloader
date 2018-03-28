const https = require('https');
const fs = require('fs');
https.get('https://www.youtube.com/watch?v=MIn833dnEEM', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);
    
  res.on('data', (d) => {
    //process.stdout.write(d);
    fs.appendFileSync('response.html',d);
  });

}).on('error', (e) => {
  console.error(e);
});