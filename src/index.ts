import { app } from './app';
import { createStudent } from './endpoints/createStudent';

app.post('/student', createStudent);
