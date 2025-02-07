export const rooms = {
  start: { name: 'Katsomo', background: 'room1.jpg', connections: ['hallway1', 'hallway6'], timePenalty: 5 },
  // Hallways
  hallway1: { name: 'Käytävä1', background: 'hallway.jpg', connections: ['start', 'wc1', 'hallway2'], timePenalty: 10 },
  hallway2: { name: 'Käytävä2', background: 'hallway.jpg', connections: ['hallway1', 'bar2', 'merchStand', 'sideHallway'], timePenalty: 10 },
  hallway3: { name: 'Käytävä3', background: 'hallway.jpg', connections: ['bar2', 'wc3', 'sideHallway', 'istumakatsomo', 'barVip'], timePenalty: 10 },
  hallway4: { name: 'Käytävä4', background: 'hallway.jpg', connections: ['wc2', 'sideHallway', 'bar3'], timePenalty: 10 },
  hallway5: { name: 'Käytävä5', background: 'hallway.jpg', connections: ['entrance', 'narikka', 'wc3', 'firstAid', 'info'], timePenalty: 10 },
  hallway6: { name: 'Käytävä6', background: 'hallway.jpg', connections: ['start', 'backstage', 'burgerStand', 'firstAid'], timePenalty: 10 },
  sideHallway: { name: 'Sivukäytävä', background: 'hallway.jpg', connections: ['hallway2', 'hallway3', 'hallway4', 'blackHole'], timePenalty: 10 },
  cellar: { name: 'Kellarikäytävä', background: 'cellar.jpg', connections: ['ugRave', 'vineCellar', 'storage'], timePenalty: 10 },
  // Bars
  bar1: { name: 'Baari1', background: 'bar.jpg', connections: ['merchStand'], timePenalty: 7 },
  bar2: { name: 'Baari2', background: 'bar.jpg', connections: ['hallway2', 'hallway3', 'entrance'], timePenalty: 7 },
  bar3: { name: 'Baari3', background: 'bar.jpg', connections: ['hallway4', 'hotdogStand'], timePenalty: 7 },
  bar4: { name: 'Baari4', background: 'bar.jpg', connections: ['hotdogStand'], timePenalty: 7 },
  barVip: { name: 'VIP Baari', background: 'barvip.jpg', connections: ['hallway3', 'hotdogStand'], timePenalty: 7 },
  barSecret: { name: 'Laiton Salainen Baari', background: 'barsecret.jpg', connections: ['ugRave'], timePenalty: 7 },
  vineCellar: { name: 'Viinikellari', background: 'vinecellar.jpg', connections: ['cellar'], timePenalty: 7 },
  // WC
  wc1: { name: 'Vessa1', background: 'wc.jpg', connections: ['hallway1', 'merchStand'], timePenalty: 7 },
  wc2: { name: 'Vessa2', background: 'wc.jpg', connections: ['hallway4', 'hotdogStand'], timePenalty: 7 },
  wc3: { name: 'Vessa3', background: 'wc.jpg', connections: ['hallway5', 'smoke'], timePenalty: 7 },
  // Stands
  hotdogStand: { name: 'Hodarikiska', background: 'hotdogStand.jpg', connections: ['bar3', 'wc2', 'barVip', 'bar4'], timePenalty: 7 },
  burgerStand: { name: 'Burgerkoju', background: 'burgerstand.jpg', connections: ['info', 'hallway6'], timePenalty: 7 },
  merchStand: { name: 'Mechimyynti', background: 'room3.jpg', connections: ['hallway2', 'bar1'], timePenalty: 7 },
  // Stages
  istumakatsomo: { name: 'istumakatsomo', background: 'istumakatsomo.jpg', connections: ['hallway3'], timePenalty: 7 },
  backstage: { name: 'Bäkkäri', background: 'backstage.jpg', connections: ['hallway6'], timePenalty: 7 },
  // Other
  entrance: { name: 'Sisäänkäynti', background: 'entrance.jpg', connections: ['bar2', 'narikka', 'hallway5'], timePenalty: 7 },
  narikka: { name: 'Narikka', background: 'narikka.jpg', connections: ['entrance', 'hallway5'], timePenalty: 7 },
  smoke: { name: 'Röökipaikka', background: 'smoke.jpg', connections: ['hallway5', 'wc3'], timePenalty: 7 },
  firstAid: { name: 'Ensiapu', background: 'firstaid.jpg', connections: ['hallway5', 'hallway6'], timePenalty: 7 },
  info: { name: 'Infopiste', background: 'info.jpg', connections: ['hallway5', 'burgerStand'], timePenalty: 7 },
  storage: { name: 'Varasto', background: 'storage.jpg', connections: ['sideHallway'], timePenalty: 7 },
  // Secret
  blackHole: { name: 'Musta-aukko', background: 'blackhole.jpg', connections: ['ugRave'], timePenalty: 7 },
  ugRave: { name: 'Laittomat UG reivit', background: 'ugrave.jpg', connections: ['barSecret', 'cellar'], timePenalty: 7 },
};
