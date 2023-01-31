const http = require('http');

process.argv[2] = '9999'; // port
process.env.NAME = 'Test';

require('./index'); // will launch the server

http.get(`http://localhost:9999`, res => {
    let data = [];

    res.on('data', chunk => {
      data.push(chunk);
    });

    res.on('end', () => {
      const output = Buffer.concat(data).toString();
      if(output.includes('<title>Salut Test !</title>')){
        console.log('OK');
        process.exit(0);
      } else {
        throw new Error('Epic Fail !');
      }
    });

  });


