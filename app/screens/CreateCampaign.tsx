// screens/CreateCampaign.tsx
import React, { useState } from 'react';
import {  View,  Text,  TextInput,  Button,  StyleSheet,  Alert,  Image,  TouchableOpacity,} from 'react-native';
import { db, FIREBASE_AUTH } from '../../FirebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';


const CreateCampaignScreen = ({ navigation }: any) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goal, setGoal] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    if (!title || !description || !goal || !image) {
      Alert.alert('Error', 'Please fill all fields and select an image');
      return;
    }

    try {
      await addDoc(collection(db, 'campaigns'), {
        title,
        description,
        goal: parseFloat(goal),
        amountRaised: 0,
        imageUrl: image,
        createdBy: FIREBASE_AUTH.currentUser?.uid,
        createdAt: new Date(),
      });
      Alert.alert('Success', 'Campaign created!');
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Error', 'Failed to create campaign');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Description</Text>
      <TextInput style={styles.input} value={description} onChangeText={setDescription} multiline />

      <Text style={styles.label}>Goal (MYR)</Text>
      <TextInput style={styles.input} value={goal} onChangeText={setGoal} keyboardType="numeric" />

      <TouchableOpacity onPress={pickImage} style={styles.imageButton}>
        <Text style={styles.imageButtonText}>
          {image ? 'Change Image' : 'Pick Campaign Image'}
        </Text>
      </TouchableOpacity>

      {image && <Image source={{ uri: image }} style={styles.previewImage} />}

      <Button title="Create Campaign" onPress={handleSubmit} color="#007AFF" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  imageButton: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  imageButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  previewImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
});

export default CreateCampaignScreen;