import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.venue.upsert({
    where: { id: 'v1' },
    update: {},
    create: {
      id: 'v1',
      name: 'West 4th Street Courts',
      address: 'W 4th St, NYC',
      neighborhood: 'Greenwich Village',
      lat: 40.7308,
      lng: -74.0002,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v2' },
    update: {},
    create: {
      id: 'v2',
      name: 'Central Park Tennis',
      address: 'Central Park West',
      neighborhood: 'Upper West Side',
      lat: 40.7794,
      lng: -73.9632,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v3' },
    update: {},
    create: {
      id: 'v3',
      name: 'Pier 40',
      address: 'Hudson River Park',
      neighborhood: 'West Village',
      lat: 40.7282,
      lng: -74.0094,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v4' },
    update: {},
    create: {
      id: 'v4',
      name: 'Padel Haus',
      address: '160 Imlay St, Brooklyn',
      neighborhood: 'Williamsburg',
      lat: 40.6782,
      lng: -73.9442,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v5' },
    update: {},
    create: {
      id: 'v5',
      name: 'Prospect Park',
      address: 'Prospect Park, Brooklyn',
      neighborhood: 'Park Slope',
      lat: 40.6602,
      lng: -73.969,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v6' },
    update: {},
    create: {
      id: 'v6',
      name: "Gleason's Gym",
      address: '130 Water St, Brooklyn',
      neighborhood: 'DUMBO',
      lat: 40.7024,
      lng: -73.9875,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v7' },
    update: {},
    create: {
      id: 'v7',
      name: 'Sky Rink Chelsea Piers',
      address: 'Pier 61, NYC',
      neighborhood: 'Chelsea',
      lat: 40.7484,
      lng: -74.0089,
    },
  });
  await prisma.venue.upsert({
    where: { id: 'v8' },
    update: {},
    create: {
      id: 'v8',
      name: "Randall's Island",
      address: "Randall's Island, NYC",
      neighborhood: "Randall's Island",
      lat: 40.792,
      lng: -73.9274,
    },
  });

  const d = (days: number, hours: number) => {
    const d = new Date();
    d.setDate(d.getDate() + days);
    d.setHours(hours, 0, 0, 0);
    return d;
  };

  const games = [
    {
      title: 'Pickup Basketball 3v3',
      sport: 'Basketball',
      skillLevel: 'beginner',
      venueId: 'v1',
      duration: 60,
      maxPlayers: 6,
      pricePerPlayer: 0,
      startsAt: d(0, 18),
    },
    {
      title: 'Tennis Singles Match',
      sport: 'Tennis',
      skillLevel: 'intermediate',
      venueId: 'v2',
      duration: 90,
      maxPlayers: 2,
      pricePerPlayer: 15,
      startsAt: d(1, 9),
    },
    {
      title: '5v5 Soccer Game',
      sport: 'Soccer',
      skillLevel: 'beginner',
      venueId: 'v3',
      duration: 90,
      maxPlayers: 10,
      pricePerPlayer: 0,
      startsAt: d(2, 10),
    },
    {
      title: 'Padel Doubles',
      sport: 'Padel',
      skillLevel: 'beginner',
      venueId: 'v4',
      duration: 90,
      maxPlayers: 4,
      pricePerPlayer: 22,
      startsAt: d(1, 11),
    },
    {
      title: 'Morning Run Club',
      sport: 'Running',
      skillLevel: 'beginner',
      venueId: 'v5',
      duration: 45,
      maxPlayers: 20,
      pricePerPlayer: 0,
      startsAt: d(1, 7),
    },
    {
      title: 'Boxing Sparring',
      sport: 'Boxing',
      skillLevel: 'intermediate',
      venueId: 'v6',
      duration: 60,
      maxPlayers: 4,
      pricePerPlayer: 25,
      startsAt: d(3, 17),
    },
    {
      title: 'Ice Hockey Pickup',
      sport: 'Hockey',
      skillLevel: 'intermediate',
      venueId: 'v7',
      duration: 60,
      maxPlayers: 12,
      pricePerPlayer: 35,
      startsAt: d(2, 20),
    },
    {
      title: 'Flag Football',
      sport: 'Football',
      skillLevel: 'beginner',
      venueId: 'v8',
      duration: 90,
      maxPlayers: 14,
      pricePerPlayer: 8,
      startsAt: d(3, 14),
    },
    {
      title: 'Beach Volleyball',
      sport: 'Volleyball',
      skillLevel: 'beginner',
      venueId: 'v5',
      duration: 90,
      maxPlayers: 12,
      pricePerPlayer: 5,
      startsAt: d(4, 15),
    },
    {
      title: 'Cycling Group Ride',
      sport: 'Cycling',
      skillLevel: 'intermediate',
      venueId: 'v5',
      duration: 120,
      maxPlayers: 15,
      pricePerPlayer: 0,
      startsAt: d(5, 8),
    },
    {
      title: 'BJJ Training',
      sport: 'MartialArts',
      skillLevel: 'beginner',
      venueId: 'v6',
      duration: 60,
      maxPlayers: 10,
      pricePerPlayer: 30,
      startsAt: d(2, 19),
    },
    {
      title: 'Pickleball Doubles',
      sport: 'Pickleball',
      skillLevel: 'beginner',
      venueId: 'v1',
      duration: 60,
      maxPlayers: 4,
      pricePerPlayer: 10,
      startsAt: d(1, 16),
    },
    {
      title: 'Yoga in the Park',
      sport: 'Yoga',
      skillLevel: 'beginner',
      venueId: 'v5',
      duration: 60,
      maxPlayers: 20,
      pricePerPlayer: 0,
      startsAt: d(0, 8),
    },
    {
      title: 'Swimming Laps',
      sport: 'Swimming',
      skillLevel: 'intermediate',
      venueId: 'v3',
      duration: 60,
      maxPlayers: 8,
      pricePerPlayer: 20,
      startsAt: d(3, 7),
    },
  ];

  for (const g of games) {
    await prisma.game.create({ data: { ...g, status: 'OPEN' } });
  }

  console.log('✅ Seeded 14 games and 8 venues!');
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
