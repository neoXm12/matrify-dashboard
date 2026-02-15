export interface Stat {
  id: number;
  label: string;
  value: string | number;
}

export interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
  interests: string[];
  preference: string[];
}

export interface Recommendation {
  id: number;
  text: string;
}

export interface Activity {
  id: number;
  user: string;
  action: string;
  time: string;
}
