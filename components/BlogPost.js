import React from 'react';
import {StyleSheet, TouchableOpacity, Image, Text, View} from 'react-native';

import Card from '../shared/Card';
import favoriteIcon from '../assets/icons/favorite.png';

const BlogPost = ({
  title,
  content,
  image,
  favorite,
  onPress,
  toggleFavorite,
}) => {
  return (
    <View>
      <Card>
        <TouchableOpacity style={styles.card} onPress={onPress}>
          <Image style={styles.image} source={image} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
          </View>
          <TouchableOpacity onPress={toggleFavorite}>
            <Image
              style={{
                ...styles.favIcon,
                tintColor: favorite ? '#b00c00' : '#ddd',
              }}
              source={favoriteIcon}
            />
          </TouchableOpacity>
        </TouchableOpacity>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 120,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    flex: 3,
  },
  contentContainer: {
    padding: 10,
    flex: 5,
  },
  title: {fontSize: 17, fontWeight: 'bold'},
  content: {},
  favIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
    marginRight: 10,
  },
});

export default BlogPost;
