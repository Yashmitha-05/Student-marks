const express = require('express');
const app = express();
const port = 3000;
const students = [{ id: 1, name: 'Alice', grade: 'A' }, { id: 2, name: 'Bob', grade: 'B' }];
app.get('/', (req, res) => {
    res.send('<h1>Student Results</h1>' + students.map(s => `<p>${s.name}: ${s.grade}</p>`).join(''));
});
app.listen(port, () => console.log(`Running on port ${port}`));
