import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db, FIREBASE_AUTH } from '../../config/Firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Campaign } from '../../../types';

const MyCampaignScreen = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);

  useEffect(() => {
    const fetchMyCampaigns = async () => {
      const q = query(collection(db, 'campaigns'), where('createdBy', '==', FIREBASE_AUTH.currentUser?.uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Campaign[];
      setCampaigns(data);
    };
    fetchMyCampaigns();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Campaigns</Text>
      <FlatList
        data={campaigns}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.campaignTitle}>{item.title}</Text>
            <Text>{item.amountRaised} / {item.goal} MYR</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  campaignTitle: {
    fontWeight: 'bold',
  },
});

export default MyCampaignScreen;