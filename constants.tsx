
import { Meal, InventoryItem, WasteRecord, EnergyReading, Challenge, LeaderboardEntry, Reward } from './types';

export const MEALS: Meal[] = [
  {
    id: '1',
    name: 'Herbed Baked Salmon',
    category: 'High-Protein',
    description: 'Fresh Atlantic salmon fillet baked with lemon zests, organic rosemary, and a side of wild rice.',
    price: 9.50,
    calories: 480,
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Salmon', 'Lemon', 'Rosemary', 'Wild Rice', 'Olive Oil']
  },
  {
    id: '2',
    name: 'Garlic Chicken & Greens',
    category: 'High-Protein',
    description: 'Lean chicken breast marinated in garlic and herbs, served with seasonal steamed broccoli and snap peas.',
    price: 8.25,
    calories: 320,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Chicken Breast', 'Garlic', 'Broccoli', 'Snap Peas', 'Thyme']
  },
  {
    id: '3',
    name: 'Rainbow Garden Salad',
    category: 'Vegan',
    description: 'A vibrant mix of kale, cherry tomatoes, cucumbers, shredded carrots, and toasted sunflower seeds.',
    price: 6.50,
    calories: 210,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Kale', 'Cherry Tomatoes', 'Cucumber', 'Carrots', 'Sunflower Seeds']
  },
  {
    id: '4',
    name: 'Mediterranean Power Bowl',
    category: 'Vegetarian',
    description: 'Crispy chickpeas, kalamata olives, feta cheese, and quinoa over a bed of fresh baby spinach.',
    price: 7.50,
    calories: 380,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Quinoa', 'Chickpeas', 'Olives', 'Feta', 'Spinach']
  },
  {
    id: '5',
    name: 'Lemon-Herb Turkey Breast',
    category: 'High-Protein',
    description: 'Slices of roasted turkey breast with sage and thyme, accompanied by steamed green beans.',
    price: 8.75,
    calories: 310,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Turkey', 'Sage', 'Thyme', 'Green Beans']
  },
  {
    id: '6',
    name: 'Strawberry Spinach Bliss',
    category: 'Vegetarian',
    description: 'Fresh spinach leaves with sweet strawberry slices, walnuts, and a light balsamic vinaigrette.',
    price: 6.95,
    calories: 240,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Spinach', 'Strawberries', 'Walnuts', 'Balsamic']
  },
  {
    id: '7',
    name: 'Baked Cod & Asparagus',
    category: 'High-Protein',
    description: 'Flaky Atlantic cod baked with lemon-garlic butter and served with tender roasted asparagus.',
    price: 9.25,
    calories: 280,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Cod', 'Asparagus', 'Lemon', 'Garlic']
  },
  {
    id: '8',
    name: 'Quinoa Stuffed Peppers',
    category: 'Vegan',
    description: 'Bell peppers stuffed with a savory mix of quinoa, black beans, corn, and fresh cilantro.',
    price: 7.25,
    calories: 320,
    image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?q=80&w=800&auto=format&fit=crop',
    ingredients: ['Bell Pepper', 'Quinoa', 'Black Beans', 'Corn', 'Cilantro']
  }
];

export const CHALLENGES: Challenge[] = [
  { id: 'c1', title: 'Veggie Victory', description: 'Eat 5 portions of vegetables this week.', points: 500, icon: '🥗', category: 'Health', deadline: '3 days left' },
  { id: 'c2', title: 'Plastic Purge', description: 'Use zero single-use plastics for 7 days.', points: 1000, icon: '🚫', category: 'Eco', deadline: '5 days left' },
  { id: 'c3', title: 'Compost King', description: 'Compost all your lunch scraps for a week.', points: 750, icon: '🌱', category: 'Eco', deadline: 'Ends Sunday' },
  { id: 'c4', title: 'Fruit Fanatic', description: 'Swap processed snacks for fresh fruit for 5 days.', points: 400, icon: '🍎', category: 'Health', deadline: '2 days left' },
];

export const LEADERBOARD: LeaderboardEntry[] = [
  { rank: 1, name: 'Alex Rivera', points: 12450, badge: '🏆' },
  { rank: 2, name: 'Sarah Chen', points: 11200, badge: '🌟' },
  { rank: 3, name: 'Liam Foster', points: 9800, badge: '🥑' },
  { rank: 4, name: 'Emma Wilson', points: 8900, badge: '🍃' },
  { rank: 5, name: 'Jordan Smith', points: 7500, badge: '🥈' },
];

export const REWARDS: Reward[] = [
  { 
    id: 'r1', 
    name: 'EcoBite Water Bottle', 
    cost: 5000, 
    image: 'https://www.thegoodtrade.com/wp-content/uploads/2022/10/best-water-bottles28129-423x520.jpg' 
  },
  { 
    id: 'r2', 
    name: 'Sustainable Tote Bag', 
    cost: 3500, 
    image: 'https://greenbagsuae.com/media/Products/Cotton-big-shopper.webp' 
  },
  { 
    id: 'r3', 
    name: 'Lunch Discount (50%)', 
    cost: 2000, 
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800&auto=format&fit=crop' 
  },
];

export const INVENTORY: InventoryItem[] = [
  { name: 'Atlantic Salmon', stock: 15, unit: 'kg', status: 'Low' },
  { name: 'Organic Chicken', stock: 45, unit: 'kg', status: 'Stable' },
  { name: 'Kale & Spinach', stock: 12, unit: 'kg', status: 'Critical' },
  { name: 'Fresh Berries', stock: 25, unit: 'kg', status: 'Stable' },
];

export const WASTE_DATA: WasteRecord[] = [
  { date: 'Mon', amount: 12 },
  { date: 'Tue', amount: 15 },
  { date: 'Wed', amount: 8 },
  { date: 'Thu', amount: 10 },
  { date: 'Fri', amount: 6 },
];

export const ENERGY_DATA: EnergyReading[] = [
  { time: '08:00', usage: 2.5 },
  { time: '10:00', usage: 4.8 },
  { time: '12:00', usage: 7.2 },
  { time: '14:00', usage: 3.5 },
  { time: '16:00', usage: 1.2 },
];
