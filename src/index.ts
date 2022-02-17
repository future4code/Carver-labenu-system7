import { app } from './app';
import { createClass } from './endpoints/createClass';
import { createStudent } from './endpoints/createStudent';

app.post('/student', createStudent);
app.post('/class', createClass)
