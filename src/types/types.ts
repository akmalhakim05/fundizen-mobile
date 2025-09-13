export interface Campaign {
  id: string;
  title: string;
  imageUrl: string;
  amountRaised: number;
  goal: number;
}

export type RootStackParamList = {
  Main: undefined;
  Login: undefined;
  Register: undefined;
  Verification: undefined;
  Details: { campaignId: string };
  
};