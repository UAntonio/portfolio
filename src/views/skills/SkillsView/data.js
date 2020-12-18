import { BACKEND,FRONTEND,OTHER } from 'src/constants/skillTypes';
import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    title: 'Javascript',
    image: '/static/images/skills/frontend/javascript.png',
    type: FRONTEND
  },
  {
    id: uuid(),
    title: 'React',
    image: '/static/images/skills/frontend/react.png',
    type: FRONTEND
  },
  {
    id: uuid(),
    title: 'MongoDB',
    image: '/static/images/skills/backend/mongodb.png',
    type: BACKEND
  },
  {
    id: uuid(),
    title: 'GIT',
    image: '/static/images/skills/other/github.png',
    type: OTHER
  },  {
    id: uuid(),
    title: 'Heroku',
    image: '/static/images/skills/other/heroku.png',
    type: OTHER
  },
  {
    id: uuid(),
    title: 'Flutter',
    image: '/static/images/skills/frontend/Google-flutter-logo.png',
    type: FRONTEND
  },
 
];
