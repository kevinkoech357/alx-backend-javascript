const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // Respond with "Hello Holberton School!" for the root URL
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    // If the URL path is /students, process student data
    const filepath = process.argv[2];
    try {
      res.write('This is the list of our students');
      countStudents(filepath)
        .then((output) => {
          res.statusCode(200);
          res.end(output);
        })
        .catch((error) => {
          console.error(error);
          res.statusCode = 500;
          res.end('Internal Server Error');
        });
    } catch (error) {
      console.error(error);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    // Return 404 Not Found for other paths
    res.statusCode = 404;
    res.end('404 Not Found\n');
  }
});

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

      // Construct the response string
      let response = `Number of students: ${totalStudents}`;
      for (const field in fields) {
        response += `Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}\n`;
      }

      resolve(response);
    });
  });
}

const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

module.exports = app;
