export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Starters' | 'Main Course' | 'Desserts' | 'Vegan' | 'Beverages';
  image: string;
  tags?: string[];
  popular?: boolean;
  chefSpecial?: boolean;
  inventory?: number;
}

export interface Order {
  id: string;
  customer: {
    name: string;
    avatar: string;
    email: string;
  };
  items: {
    menuItemId: string;
    quantity: number;
    name: string;
    price: number;
  }[];
  total: number;
  status: 'Pending' | 'Preparing' | 'Out for Delivery' | 'Completed' | 'Processing' | 'Delivered';
  timestamp: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai' | 'admin';
  text: string;
  timestamp: string;
}

export interface Conversation {
  id: string;
  customer: {
    name: string;
    avatar: string;
    email: string;
    table?: string;
    isVIP?: boolean;
  };
  lastMessage: string;
  timestamp: string;
  status: 'AI Active' | 'Manual Required' | 'Resolved';
  messages: ChatMessage[];
}
