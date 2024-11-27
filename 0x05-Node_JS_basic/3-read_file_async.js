const fs = require('node:fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        }
        else {
          const dataList = data.split('\n').slice(1, -1);
          const NUMBER_OF_STUDENTS = dataList.length;
          console.log(`Number of students: ${NUMBER_OF_STUDENTS}`);

          const fieldObj = {
              CS: [],
              SWE: [],
          };

          dataList.forEach((item) => {
              const FIELD = item.split(',').slice(-1).join('');
              fieldObj[FIELD].push(item.split(',').slice(0, 1).join(''));
          });

          console.log(`Number of students in CS: ${fieldObj.CS.length}. List: ${fieldObj.CS.join(', ')}`);
          console.log(`Number of students in SWE: ${fieldObj.SWE.length}. List: ${fieldObj.SWE.join(', ')}`);
          resolve('');
        }
    });
  });
}

module.exports = countStudents;
