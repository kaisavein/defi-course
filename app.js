import http from 'http';
import url from 'url';

const server = http.createServer((req, res) => {
    const name = url.parse(req.url,true).query.name;
    res.write('Tere, ' + name);
    res.end();
});

server.listen(3000);

console.log('Listening on port 3000...');