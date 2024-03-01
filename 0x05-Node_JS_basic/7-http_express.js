const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const filepath = process.argv[2];

  try {
    const output = countStudents(filepath);
    res.write('This is the list of our students\n');
    res.status(200).end(output);
  } catch (error) {
    console.error(error);
    res.status(500).end('Internal Server Error');
  }
});

function countStudents(filepath) {
  const students = {
    CS: [],
    SWE: [],
  };
  const fields = {
    CS: 0,
    SWE: 0,
  };

  const data = fs.readFileSync(filepath, 'utf-8');
  const lines = data.toString().split('\n');

  for (let i = 0; i < lines.length; i++) {
    if (lines[i]) {
      const fieldsArr = lines[i].toString().split(',');

      const field = fieldsArr[3];

      if (field === 'CS' || field === 'SWE') {
        fields[field]++;
        students[field].push(fieldsArr[0]);
      }
    }
  }

  let response = '';
  const totalStudents = students.CS.length + students.SWE.length;
  response += `Number of students: ${totalStudents}\n`;

  for (const field in fields) {
    response += `Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}\n`;
  }

  return response;
}

const PORT = 1245;
app.listen(PORT, () => {
  console.log('...');
});

module.exports = app;
