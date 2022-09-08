import React, {createContext, useReducer, useContext} from 'react';

import reemMourinho from '../assets/images/reem-mourinho.png';
import reemOldTrafford from '../assets/images/reem-old-trafford.png';
import reemPogba from '../assets/images/reem-pogba.png';
import reemVictorious from '../assets/images/reem-victorious.png';

const initialState = {
  blogs: [
    {
      id: 1,
      title: 'Meeting Jose',
      content:
        'During FIFA Football for Schools festival, I got to meet many football legends including the special one',
      image: reemMourinho,
    },
    {
      id: 2,
      title: 'Playing at Old Trafford',
      content:
        'Back in 2017, I got the chance to play a game at Old Trafford thanks to Chevrolet',
      image: reemOldTrafford,
    },
    {
      id: 3,
      title: 'The Victorious Football Show',
      content:
        "Back in 2015, I was part of one of The Victorious Show's primes",
      image: reemVictorious,
    },
    {
      id: 4,
      title: 'Zoom meeting with Pogba',
      content:
        'Met Pogba through Zoom and got to chat with him as well as Victor Lindelof',
      image: reemPogba,
    },
  ],
};

const GlobalContext = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      const id = Math.floor(Math.random() * 10000 + 4);
      return {
        ...state,
        blogs: [...state.blogs, {...action.payload, id, image: reemMourinho}],
      };
    case 'DELETE_BLOG':
      const filteredBlogs = state.blogs.filter(
        blog => blog.id !== action.payload,
      );

      return {
        ...state,
        blogs: filteredBlogs,
      };
    case 'TOGGLE_FAVORITE':
      const blogs = state.blogs.map(blg =>
        blg.id === action.payload.id
          ? {...blg, favorite: !action.payload.favorite}
          : blg,
      );
      return {
        ...state,
        blogs,
      };
    default:
      return state;
  }
};

const GlobalProvider = ({children}) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
