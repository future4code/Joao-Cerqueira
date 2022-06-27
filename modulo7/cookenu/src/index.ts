import { app } from './app';
import login from './endpoints/login';
import signUp from './endpoints/signUp';
import profile from './endpoints/profile';
import users from './endpoints/users';

app.post('/signup', signUp) 
app.post('/login', login) 
app.get('/user/profile', profile)
app.get('/user/:id', users) 