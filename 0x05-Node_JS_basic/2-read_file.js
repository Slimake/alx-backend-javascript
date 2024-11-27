const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');

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
  } catch (err) {
    if (err) {
      throw new Error('Cannot load the database');
    }
  }
}

module.exports = countStudents;
