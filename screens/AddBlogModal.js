import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useGlobalContext} from '../context/GlobalContext';

const AddBlogModal = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState({
    title: null,
    content: null,
  });
  const {dispatch} = useGlobalContext();

  const validate = () => {
    const errors = {};

    if (!title) {
      errors.title = 'Name is required';
    } else {
      errors.title = null;
    }

    if (!content) {
      errors.content = 'Content is required';
    } else {
      errors.content = null;
    }

    setError(errors);

    return errors;
  };

  const handleSubmit = () => {
    const errors = validate();

    const noMoreErrors = Object.values(errors).every(val => val === null);

    if (noMoreErrors) {
      dispatch({type: 'ADD_BLOG', payload: {title, content, favorite: false}});
      navigation.pop();
    }
  };

  return (
    <View style={styles.containerView}>
      <TouchableOpacity
        style={styles.closeBtn}
        onPress={() => navigation.pop()}>
        <Text>Close</Text>
      </TouchableOpacity>
      <View style={styles.centeredView}>
        <View style={styles.relativeView}>
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={setTitle}
            value={title}
          />
          {error.title && (
            <Text style={styles.errorMessage}>{error.title}</Text>
          )}
        </View>
        <View style={styles.relativeView}>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Content"
            multiline
            numberOfLines={6}
            onChangeText={setContent}
            value={content}
          />
          {error.content && (
            <Text style={styles.errorMessage}>{error.content}</Text>
          )}
        </View>
        <TouchableOpacity style={styles.addBtn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Add Blog</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  centeredView: {
    padding: 20,
  },
  relativeView: {
    position: 'relative',
    alignSelf: 'stretch',
  },
  input: {
    alignSelf: 'stretch',
    marginBottom: 30,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  textArea: {
    height: 100,
  },
  errorMessage: {
    color: 'red',
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
  closeBtn: {
    alignSelf: 'flex-end',
    marginTop: 50,
    marginRight: 30,
  },
  addBtn: {
    backgroundColor: '#000',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  btnText: {
    color: '#fff',
  },
});

export default AddBlogModal;
