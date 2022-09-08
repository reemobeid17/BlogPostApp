import React, {useContext, createContext, useState} from 'react';

import reemMourinho from '../assets/images/reem-mourinho.png';
import reemOldTrafford from '../assets/images/reem-old-trafford.png';
import reemPogba from '../assets/images/reem-pogba.png';
import reemVictorious from '../assets/images/reem-victorious.png';

const BlogContext = createContext();
const AddBlogContext = createContext();
const ToggleFavoriteContext = createContext();

export const useBlog = () => {
  return useContext(BlogContext);
};

export const useAddBlog = () => {
  return useContext(AddBlogContext);
};

export const useToggleFavorite = () => {
  return useContext(ToggleFavoriteContext);
};

const BlogProvider = ({children}) => {
  const blogsInit = [
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
  ];

  const [blogs, setBlogs] = useState(blogsInit);

  const addBlog = blog => {
    const id = Math.floor(Math.random() * 10000 + 4);
    setBlogs([...blogs, {...blog, id, image: reemMourinho}]);
  };

  const toggleFavorite = blog => {
    const updatedBlogs = blogs.map(blg =>
      blg.id === blog.id ? {...blg, favorite: !blog.favorite} : blg,
    );

    setBlogs(updatedBlogs);
  };

  return (
    <BlogContext.Provider value={blogs}>
      <AddBlogContext.Provider value={addBlog}>
        <ToggleFavoriteContext.Provider value={toggleFavorite}>
          {children}
        </ToggleFavoriteContext.Provider>
      </AddBlogContext.Provider>
    </BlogContext.Provider>
  );
};

export default BlogProvider;
