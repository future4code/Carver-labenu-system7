import { app } from './app';
import { changeStudentTeam } from './endpoints/changeStudentTeam';
import { createClass } from './endpoints/createClass';
import { createStudent } from './endpoints/createStudent';
import { getStudent } from './endpoints/getStudent';

app.post('/student', createStudent);
app.post('/class', createClass);
app.post('/student/:id', changeStudentTeam);

app.get('/student', getStudent);
