import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../pages/Home';
import PokemonDetail from '../pages/PokemonDetail';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/pokemon/:name',
    element: <PokemonDetail/>
  }
])

export default Router;