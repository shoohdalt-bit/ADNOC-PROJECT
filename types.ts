
export interface Meal {
  id: string;
  name: string;
  category: 'Vegetarian' | 'Vegan' | 'Gluten-Free' | 'High-Protein';
  description: string;
  price: number;
  calories: number;
  image: string;
  ingredients: string[];
}

export interface InventoryItem {
  name: string;
  stock: number;
  unit: string;
  status: 'Critical' | 'Low' | 'Stable';
}

export interface WasteRecord {
  date: string;
  amount: number;
}

export interface EnergyReading {
  time: string;
  usage: number;
}

export interface UserHealthData {
  age: number;
  height: number;
  weight: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: string;
  category: 'Health' | 'Eco';
  deadline: string;
}

export interface LeaderboardEntry {
  rank: number;
  name: string;
  points: number;
  badge: string;
}

export interface Reward {
  id: string;
  name: string;
  cost: number;
  image: string;
}
