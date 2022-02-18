import { app } from './app';
import { changeStudentTeam } from './endpoints/changeStudentTeam';
import { createClass } from './endpoints/createClass';
import { createStudent } from './endpoints/createStudent';
import { getStudent } from './endpoints/getStudent';
import {createTeacher} from './endpoints/createTeacher'


app.post('/student', createStudent);
app.post('/class', createClass);
app.post('/student/:id', changeStudentTeam);
app.post('/teacher', createTeacher)

app.get('/student', getStudent);

