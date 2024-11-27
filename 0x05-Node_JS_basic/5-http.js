const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;
const databasePath = process.argv[2];

const app = createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.method === 'GET' && req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.method === 'GET' && req.url === '/students') {
    const fieldPromise = countStudents(databasePath);
    fieldPromise.then((students) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${students.total}\n`);
      res.write(`Number of students in CS: ${students.CS.length}. List: ${students.CS.join(', ')}\n`);
      res.write(`Number of students in SWE: ${students.SWE.length}. List: ${students.SWE.join(', ')}`);
      res.end();
    }).catch((err) => {
      res.statusCode = 404;
      res.end(`${err.message}\n`);
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(port, hostname);

module.exports = app;
