import { app } from './app';
import { changeStudentTeam } from './endpoints/Estudantes/changeStudentTeam';
import { createClass } from './endpoints/Turma/createClass';
import { createStudent } from './endpoints/Estudantes/createStudent';
import { getStudent } from './endpoints/Estudantes/getStudent';
import {createTeacher} from './endpoints/Docente/createTeacher'
import { getActiveClass } from './endpoints/Turma/activeClasses';
import { changeClass } from './endpoints/Turma/changeClass';


app.get('/student', getStudent);
app.post('/student', createStudent);
app.post('/student/:id', changeStudentTeam);

app.post('/class', createClass);
app.get('/class/activeClass', getActiveClass);
app.put('/class/changeClass', changeClass)

app.post('/teacher', createTeacher)




