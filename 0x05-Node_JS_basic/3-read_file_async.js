const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    const students = {
      CS: [],
      SWE: [],
    };
    const fields = {
      CS: 0,
      SWE: 0,
    };

    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.toString().split('\n');

      for (let i = 0; i < lines.length; i++) {
        if (lines[i]) {
          const fieldsArr = lines[i].toString().split(',');

          // Extract the relevant fields (CS and SWE)
          const field = fieldsArr[3];

          // If the field is either CS or SWE
          if (field === 'CS' || field === 'SWE') {
            fields[field]++;
            students[field].push(fieldsArr[0]);
          }
        }
      }

      // Calculate the total number of students
      const totalStudents = students.CS.length + students.SWE.length;

      // Log the total number of students
      console.log(`Number of students: ${totalStudents}`);

      // Log the number of students in each field and their respective lists
      for (const field in fields) {
        console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
