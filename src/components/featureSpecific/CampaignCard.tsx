import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Campaign } from '../../types/types';
import { COLORS, CURRENCY } from '../../config/Constants';
//import { ProgressBar } from './ProgressBar';

interface CampaignCardProps {
  campaign: Campaign;
  onPress: () => void;
}

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaign, onPress }) => {
  const progress = (campaign.amountRaised / campaign.goal) * 100;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: campaign.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{campaign.title}</Text>
      <Text style={styles.amount}>
        {new Intl.NumberFormat('en-MY', { style: 'currency', currency: CURRENCY }).format(campaign.amountRaised)} /{' '}
        {new Intl.NumberFormat('en-MY', { style: 'currency', currency: CURRENCY }).format(campaign.goal)}
      </Text>
    {/* <ProgressBar progress={progress} />  */}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.WHITE,
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
    color: COLORS.PRIMARY,
    marginBottom: 8,
  },
});