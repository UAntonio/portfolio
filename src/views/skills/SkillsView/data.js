import { BACKEND,FRONTEND,OTHER } from 'src/constants/skillTypes';
import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    title: 'Javascript',
    image: '/static/images/projects/product_1.png',
    type: FRONTEND
  },
  {
    id: uuid(),
    title: 'React',
    image: '/static/images/projects/product_1.png',
    type: FRONTEND
  },
  {
    id: uuid(),
    title: 'MongoDB',
    image: '/static/images/projects/product_1.png',
    type: BACKEND
  },
  {
    id: uuid(),
    title: 'GIT',
    image: '/static/images/projects/product_1.png',
    type: OTHER
  },
 
];
