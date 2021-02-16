import { v4 as uuid } from 'uuid';

export default [
  {
    id: uuid(),
    description: 'Find recipes online by an ingredient that you would want to cook with',
    media: '/static/images/projects/BasicFoodSearch.png',
    title: 'Food Search',
    stack: 'JavaScript',
    gitUrl: 'https://github.com/UAntonio/FoodSearch',
    liveUrl: 'https://foodfinder2020.netlify.app/',
  },
  {
    id: uuid(),
    description: 'Store special events and memories in one place',
    media: '/static/images/projects/memories.png',
    title: 'Memory Storage',
    stack: 'MongoDB, Express, React, JavaScript',
    gitUrl: 'https://github.com/UAntonio/memoryProject',
    liveUrl: 'https://memoryapp.netlify.app/',
  },
  {
    id: uuid(),
    description: 'A Pokédex for the gen 1 Pokémon',
    media: '/static/images/projects/pokedex.png',
    title: 'Flutter Poke Application',
    stack: 'Flutter, Dart, codemagic',
    gitUrl: 'https://github.com/UAntonio/PokeFlutter',
    liveUrl: 'https://play.google.com/store/apps/details?id=projects.nerd.poke_flutter',
  },
  {
    id: uuid(),
    description: 'Simple look alike of tinder, swipe left or right on the active profiles',
    media: '/static/images/projects/tinderclone.png',
    title: 'Tinder clone',
    stack: 'MongoDB, Express, React, JavaScript',
    gitUrl: 'https://github.com/UAntonio/tinder-clone',
    liveUrl: 'https://tinderclone2020.netlify.app',
  },

];
