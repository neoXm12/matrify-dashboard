import { Stat, Profile, Recommendation, Activity } from "../types";

export const stats: Stat[] = [
  { id: 1, label: "New Matches", value: 24 },
  { id: 2, label: "Messages", value: 12 },
  { id: 3, label: "Profile Views", value: 87 },
];

export const profiles: Profile[] = [
  {
    id: 1,
    name: "John Doe",
    age: 29,
    location: "Dallas, USA",
    image: "",
    interests: ["Everyone", "No biases"],
    preference: ["Anything"],
  },
  {
    id: 2,
    name: "Johnny Doe",
    age: 29,
    location: "Virginia, USA",
    image: "",
    interests: ["Men", "Persuade Me!"],
    preference: ["Nothing specific"],
  },
  {
    id: 3,
    name: "Johnnier Doe",
    age: 18,
    location: "New Hampshire, USA",
    image: "",
    interests: ["Women", "Beautiful ones"],
    preference: ["Bread winner"],
  },
];

export const recommendations: Recommendation[] = [
  { id: 1, text: "Update your profile to get better matches" },
  { id: 2, text: "Reach out to people with similar interests" },
];

export const activities: Activity[] = [
  { id: 1, user: "Aisha", action: "sent you a message", time: "2h ago" },
  { id: 2, user: "Randy", action: "viewed your profile", time: "5h ago" },
  { id: 3, user: "Sara", action: "liked your profile", time: "1d ago" },
];
