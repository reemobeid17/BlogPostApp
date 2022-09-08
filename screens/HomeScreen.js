import React from 'react';
import {StyleSheet, ScrollView, Text} from 'react-native';

import BlogPost from '../components/BlogPost';
import {useGlobalContext} from '../context/GlobalContext';

const HomeScreen = ({navigation, favoriteScreen}) => {
  const {state, dispatch} = useGlobalContext();
  const noBlogs = !state.blogs.length;
  const noFavoriteBlogs = !state.blogs.filter(blog => blog.favorite).length;

  const viewMoreDetails = blog => {
    console.log('HomeScreem', favoriteScreen);

    navigation.navigate('DetailsScreen', {
      ...blog,
    });
  };

  const toggleFavorite = blog => {
    dispatch({
      type: 'TOGGLE_FAVORITE',
      payload: blog,
    });
  };

  return (
    <ScrollView
      contentContainerStyle={{
        paddingBottom: 120,
      }}
      style={styles.container}>
      {noBlogs && <Text style={styles.noBlogsText}>No blogs were found</Text>}
      {favoriteScreen && noFavoriteBlogs && (
        <Text style={styles.noBlogsText}>No favorite blogs were found</Text>
      )}
      {state.blogs.map((blog, index) =>
        favoriteScreen && blog.favorite ? (
          <BlogPost
            key={index}
            {...blog}
            onPress={() => viewMoreDetails(blog)}
            toggleFavorite={() => toggleFavorite(blog)}
          />
        ) : !favoriteScreen ? (
          <BlogPost
            key={index}
            {...blog}
            onPress={() => viewMoreDetails(blog)}
            toggleFavorite={() => toggleFavorite(blog)}
          />
        ) : null,
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    height: '100%',
  },
  noBlogsText: {
    flex: 2,
    alignSelf: 'center',
    fontSize: 30,
    textAlign: 'center',
    width: 250,
  },
});

export default HomeScreen;
