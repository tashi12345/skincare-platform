export interface Service {
  id: string;
  name: string;
  category: string;
  price: number;
  duration: string;
  description: string;
  icon: string;
  available: boolean;
}

export const SERVICES_DATA: Service[] = [
  {
    id: 'laser-hair-removal',
    name: 'Laser Hair Removal',
    category: 'Laser Treatment',
    price: 8000,
    duration: '45 min',
    description: 'Advanced laser technology for permanent hair reduction. Safe, effective, and suitable for all skin types',
    icon: 'Zap',
    available: true
  },
  {
    id: 'hydra-facial',
    name: 'Hydra Facial',
    category: 'Facial Treatment',
    price: 12000,
    duration: '60 min',
    description: 'Deep cleansing and hydrating facial treatment. Reduces dark patches, pigmentation, and gives you glowing skin',
    icon: 'Droplet',
    available: true
  },
  {
    id: 'chemical-peel',
    name: 'Chemical Peel',
    category: 'Facial Treatment',
    price: 6000,
    duration: '40 min',
    description: 'Exfoliating treatment to improve skin texture, reduce acne scars, and brighten complexion',
    icon: 'Sparkles',
    available: true
  },
  {
    id: 'botox-fillers',
    name: 'Botox & Fillers',
    category: 'Anti-Aging',
    price: 25000,
    duration: '30 min',
    description: 'Non-surgical cosmetic treatment to reduce wrinkles and restore facial volume',
    icon: 'Syringe',
    available: true
  },
  {
    id: 'acne-treatment',
    name: 'Acne Treatment',
    category: 'Medical',
    price: 5000,
    duration: '30 min',
    description: 'Comprehensive acne treatment including medication, chemical peels, and laser therapy',
    icon: 'Heart',
    available: true
  },
  {
    id: 'prp-therapy',
    name: 'PRP Microneedling',
    category: 'Anti-Aging',
    price: 15000,
    duration: '60 min',
    description: 'Platelet-Rich Plasma therapy for skin rejuvenation, hair growth, and reducing fine lines',
    icon: 'Stars',
    available: true
  },
  {
    id: 'skin-whitening',
    name: 'Skin Brightening',
    category: 'Treatment',
    price: 10000,
    duration: '50 min',
    description: 'Safe skin brightening treatment using glutathione injections and topical solutions',
    icon: 'Sun',
    available: true
  },
  {
    id: 'consultation',
    name: 'Dermatology Consultation',
    category: 'Consultation',
    price: 2500,
    duration: '20 min',
    description: 'Expert consultation with dermatologist for skin concerns and treatment planning',
    icon: 'Search',
    available: true
  }
];
