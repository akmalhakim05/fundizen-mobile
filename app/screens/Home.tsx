import React, { useEffect, useState } from 'react';
import {  View,  Text,  FlatList,  StyleSheet,  Image,  TouchableOpacity,  Alert,  ActivityIndicator } from 'react-native';
import { db } from '../../FirebaseConfig'; 
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useAuth } from '../../AuthContext'; 
import { RootStackParamList } from '../../types'; 
import { DrawerNavigationProp } from '@react-navigation/drawer';

// Define Campaign type
type Campaign = {
  id: string;
  title: string;
  imageUrl: string;
  amountRaised: number;
  goal: number;
};


type Props = {
  navigation: DrawerNavigationProp<RootStackParamList, 'Main'>;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuth();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchCampaigns = async () => {
    try {
      const q = query(collection(db, 'campaigns'));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Campaign[];
      setCampaigns(data);
    } catch (error) {
      Alert.alert('Error', 'Failed to load campaigns');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const renderCampaign = ({ item }: { item: Campaign }) => {
    const progress = (item.amountRaised / item.goal) * 100;

    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Details', { campaignId: item.id })}
      >
        <Image source={{ uri: item.imageUrl }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.amount}>
          {new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' }).format(item.amountRaised)} /{' '}
          {new Intl.NumberFormat('en-MY', { style: 'currency', currency: 'MYR' }).format(item.goal)}
        </Text>
        <View style={styles.progressBarContainer}>
          <View style={[styles.progressBar, { width: `${Math.min(progress, 100)}%` }]} />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Text style={styles.menuButton}>☰</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Campaign Listing</Text>
      </View>

      {/* Search Bar (Optional) */}
      <View style={styles.searchBar}>
        <Text>🔍 Search campaigns...</Text>
      </View>

      {/* Campaign List */}
      {loading ? (
        <ActivityIndicator size="large" color="#007AFF" />
      ) : (
        <FlatList
          data={campaigns}
          keyExtractor={(item) => item.id}
          renderItem={renderCampaign}
          contentContainerStyle={styles.list}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f8',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007AFF',
    padding: 15,
  },
  menuButton: {
    fontSize: 24,
    color: '#fff',
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  searchBar: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  list: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 15,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  amount: {
    fontSize: 14,
    color: '#007AFF',
    marginBottom: 8,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#ddd',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#007AFF',
  },
});

export default HomeScreen;