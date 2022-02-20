import { app } from './app';
import { changeStudentTeam } from './endpoints/changeStudentTeam';
import { createClass } from './endpoints/createClass';
import { createStudent } from './endpoints/createStudent';
import { getStudent } from './endpoints/getStudent';
import {createTeacher} from './endpoints/createTeacher'
import { getActiveClass } from './endpoints/activeClasses';
import { changeClass } from './endpoints/changeClass';


app.get('/student', getStudent);
app.post('/student', createStudent);
app.post('/student/:id', changeStudentTeam);

app.post('/class', createClass);
app.get('/class/activeClass', getActiveClass);
app.put('/class/changeClass', changeClass)

app.post('/teacher', createTeacher)




