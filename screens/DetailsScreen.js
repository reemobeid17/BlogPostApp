import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

import {useGlobalContext} from '../context/GlobalContext';

const DetailsScreen = ({route, navigation}) => {
  const {id, title, content, image} = route.params;
  const {dispatch} = useGlobalContext();

  const showDeleteDialog = () => {
    return Alert.alert(
      'Are your sure?',
      'Are you sure you want to delete this blog?',
      [
        {
          text: 'Yes',
          onPress: () => {
            dispatch({
              type: 'DELETE_BLOG',
              payload: id,
            });
            navigation.goBack();
          },
        },
        {
          text: 'No',
        },
      ],
    );
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <TouchableOpacity style={styles.deleteBtn} onPress={showDeleteDialog}>
        <Text style={styles.btnText}>Delete Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  image: {
    height: 350,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
  },
  deleteBtn: {
    backgroundColor: '#940000',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default DetailsScreen;
