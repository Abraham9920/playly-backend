const { PrismaClient } = require("@prisma/client");
const p = new PrismaClient();
const hostId = "cmp2su7ct00007x4xzf80e63i";
const d = (days, hours) => {
  const dt = new Date();
  dt.setDate(dt.getDate() + days);
  dt.setHours(hours, 0, 0, 0);
  return dt;
};
const games = [
  {
    title: "Pickup Basketball 3v3",
    sport: "BASKETBALL",
    skillLevel: "BEGINNER",
    venueId: "v1",
    duration: 60,
    maxPlayers: 6,
    pricePerPlayer: 0,
    startsAt: d(0, 18),
  },
  {
    title: "Tennis Singles Match",
    sport: "TENNIS",
    skillLevel: "INTERMEDIATE",
    venueId: "v2",
    duration: 90,
    maxPlayers: 2,
    pricePerPlayer: 15,
    startsAt: d(1, 9),
  },
  {
    title: "5v5 Soccer Game",
    sport: "SOCCER",
    skillLevel: "BEGINNER",
    venueId: "v3",
    duration: 90,
    maxPlayers: 10,
    pricePerPlayer: 0,
    startsAt: d(2, 10),
  },
  {
    title: "Padel Doubles",
    sport: "PADEL",
    skillLevel: "BEGINNER",
    venueId: "v4",
    duration: 90,
    maxPlayers: 4,
    pricePerPlayer: 22,
    startsAt: d(1, 11),
  },
  {
    title: "Morning Run Club",
    sport: "RUNNING",
    skillLevel: "BEGINNER",
    venueId: "v5",
    duration: 45,
    maxPlayers: 20,
    pricePerPlayer: 0,
    startsAt: d(1, 7),
  },
  {
    title: "Beach Volleyball",
    sport: "VOLLEYBALL",
    skillLevel: "BEGINNER",
    venueId: "v5",
    duration: 90,
    maxPlayers: 12,
    pricePerPlayer: 5,
    startsAt: d(4, 15),
  },
  {
    title: "Flag Football",
    sport: "FOOTBALL",
    skillLevel: "BEGINNER",
    venueId: "v8",
    duration: 90,
    maxPlayers: 14,
    pricePerPlayer: 8,
    startsAt: d(3, 14),
  },
  {
    title: "Yoga in the Park",
    sport: "YOGA",
    skillLevel: "ALL_LEVELS",
    venueId: "v5",
    duration: 60,
    maxPlayers: 20,
    pricePerPlayer: 0,
    startsAt: d(0, 8),
  },
];
async function main() {
  for (const g of games) {
    await p.game.create({ data: { ...g, status: "OPEN", hostId } });
    console.log("Created:", g.title);
  }
  console.log("Done!");
}
main()
  .catch(console.error)
  .finally(() => p.$disconnect());
