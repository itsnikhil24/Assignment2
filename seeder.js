// seeder.js
require('dotenv').config();
const mongoose = require('mongoose');
const Activity = require('./models/Activity'); // adjust path if different

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const activities = [
  {
    title: 'Football Match',
    description: 'Local football event for fans.',
    location: 'City Stadium',
    date: '2025-05-15',
    time: '16:00',
  },
  {
    title: 'Movie Night',
    description: 'Watch a blockbuster movie.',
    location: 'Galaxy Cinema',
    date: '2025-05-18',
    time: '20:30',
  },
  {
    title: 'Cricket Tournament',
    description: 'College cricket finals.',
    location: 'Cricket Ground',
    date: '2025-05-22',
    time: '14:00',
  },
];

const seedActivities = async () => {
  try {
    await Activity.deleteMany({});
    await Activity.insertMany(activities);
    console.log('Activities seeded successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Seeding failed:', err.message);
    mongoose.connection.close();
  }
};

seedActivities();
