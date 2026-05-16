const officialWhatsappNumber = '919999999999';

const products = [
  {
    "id": 1,
    "name": "3½ Lakshmi",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 65.0,
    "price": 16.25
  },
  {
    "id": 2,
    "name": "4' Lakshmi",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 80.0,
    "price": 20.0
  },
  {
    "id": 3,
    "name": "4' Lakshmi Deluxe",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 100.0,
    "price": 25.0
  },
  {
    "id": 4,
    "name": "Gold Lakshmi",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 160.0,
    "price": 40.0
  },
  {
    "id": 5,
    "name": "Hulk Deluxe",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 170.0,
    "price": 42.5
  },
  {
    "id": 6,
    "name": "Bagubali",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 200.0,
    "price": 50.0
  },
  {
    "id": 7,
    "name": "Jallikattu",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 225.0,
    "price": 56.25
  },
  {
    "id": 8,
    "name": "Two Sound",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 160.0,
    "price": 40.0
  },
  {
    "id": 9,
    "name": "2¾ Kuruvi",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 45.0,
    "price": 11.25
  },
  {
    "id": 10,
    "name": "Elephant Deluxe",
    "category": "One Sound Crackers",
    "unit": "PKT",
    "mrp": 160.0,
    "price": 40.0
  },
  {
    "id": 11,
    "name": "Flowerpots Small",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 240.0,
    "price": 60.0
  },
  {
    "id": 12,
    "name": "Flowerpots Big",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 450.0,
    "price": 112.5
  },
  {
    "id": 13,
    "name": "Flowerpots Special",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 675.0,
    "price": 168.75
  },
  {
    "id": 14,
    "name": "Flowerpots Ashoka",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 825.0,
    "price": 206.25
  },
  {
    "id": 15,
    "name": "Flowerpots Colour Koti",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 1200.0,
    "price": 300.0
  },
  {
    "id": 16,
    "name": "Flowerpots Multi Colour Gaint",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 1625.0,
    "price": 406.25
  },
  {
    "id": 17,
    "name": "Flowerpots Colour Koti Deluxe",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 1600.0,
    "price": 400.0
  },
  {
    "id": 18,
    "name": "Flowerpots Deluxe",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 800.0,
    "price": 200.0
  },
  {
    "id": 19,
    "name": "Tri Colour (5Pcs)",
    "category": "Flowerpots (10Pcs)",
    "unit": "BOX",
    "mrp": 1200.0,
    "price": 300.0
  },
  {
    "id": 20,
    "name": "Chakker Small",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 175.0,
    "price": 43.75
  },
  {
    "id": 21,
    "name": "Chakker Small (25Pcs)",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 550.0,
    "price": 137.5
  },
  {
    "id": 22,
    "name": "Chakker Ashoka",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 375.0,
    "price": 93.75
  },
  {
    "id": 23,
    "name": "Chakker Special",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 600.0,
    "price": 150.0
  },
  {
    "id": 24,
    "name": "Chakker Deluxe",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 750.0,
    "price": 187.5
  },
  {
    "id": 25,
    "name": "Disco Wheel (5Pcs)",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 350.0,
    "price": 87.5
  },
  {
    "id": 26,
    "name": "Whistling Wheel (5Pcs)",
    "category": "Ground Chakker (10Pcs)",
    "unit": "BOX",
    "mrp": 675.0,
    "price": 168.75
  },
  {
    "id": 27,
    "name": "7Cm Electric Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 45.0,
    "price": 11.25
  },
  {
    "id": 28,
    "name": "7Cm Colour Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 50.0,
    "price": 12.5
  },
  {
    "id": 29,
    "name": "7Cm Green Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 60.0,
    "price": 15.0
  },
  {
    "id": 30,
    "name": "7Cm Red Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 70.0,
    "price": 17.5
  },
  {
    "id": 31,
    "name": "10Cm Electric Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 105.0,
    "price": 26.25
  },
  {
    "id": 32,
    "name": "10Cm Colour Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 120.0,
    "price": 30.0
  },
  {
    "id": 33,
    "name": "10Cm Green Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 125.0,
    "price": 31.25
  },
  {
    "id": 34,
    "name": "10Cm Red Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 130.0,
    "price": 32.5
  },
  {
    "id": 35,
    "name": "12Cm Electric Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 170.0,
    "price": 42.5
  },
  {
    "id": 36,
    "name": "12Cm Colour Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 175.0,
    "price": 43.75
  },
  {
    "id": 37,
    "name": "12Cm Green Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 180.0,
    "price": 45.0
  },
  {
    "id": 38,
    "name": "12Cm Red Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 190.0,
    "price": 47.5
  },
  {
    "id": 39,
    "name": "15Cm Electric Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 240.0,
    "price": 60.0
  },
  {
    "id": 40,
    "name": "15Cm Colour Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 250.0,
    "price": 62.5
  },
  {
    "id": 41,
    "name": "15Cm Green Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 260.0,
    "price": 65.0
  },
  {
    "id": 42,
    "name": "15Cm Red Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 270.0,
    "price": 67.5
  },
  {
    "id": 43,
    "name": "30Cm Electric Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 240.0,
    "price": 60.0
  },
  {
    "id": 44,
    "name": "30Cm Colour Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 250.0,
    "price": 62.5
  },
  {
    "id": 45,
    "name": "30Cm Green Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 260.0,
    "price": 65.0
  },
  {
    "id": 46,
    "name": "30Cm Red Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 270.0,
    "price": 67.5
  },
  {
    "id": 47,
    "name": "50Cm Electric Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 750.0,
    "price": 187.5
  },
  {
    "id": 48,
    "name": "50Cm Colour Sparklers",
    "category": "Sparklers",
    "unit": "BOX",
    "mrp": 800.0,
    "price": 200.0
  },
  {
    "id": 49,
    "name": "1½ Twinkling Star",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 120.0,
    "price": 30.0
  },
  {
    "id": 50,
    "name": "4' Twinkling Star",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 300.0,
    "price": 75.0
  },
  {
    "id": 51,
    "name": "7' Pencil",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 150.0,
    "price": 37.5
  },
  {
    "id": 52,
    "name": "10' Pencil",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 300.0,
    "price": 75.0
  },
  {
    "id": 53,
    "name": "Ultra-Colour Pencil (3Pcs)",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 350.0,
    "price": 87.5
  },
  {
    "id": 54,
    "name": "Sivakasi Special",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 1050.0,
    "price": 262.5
  },
  {
    "id": 55,
    "name": "Pop Corn Pencil (5Pcs)",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 900.0,
    "price": 225.0
  },
  {
    "id": 56,
    "name": "Cartoon Pots",
    "category": "Pencil Sparkling Varieties",
    "unit": "BOX",
    "mrp": 100.0,
    "price": 25.0
  },
  {
    "id": 57,
    "name": "Baby Rocket",
    "category": "Sky Rockets",
    "unit": "BOX",
    "mrp": 175.0,
    "price": 43.75
  },
  {
    "id": 58,
    "name": "Rocket Bomb",
    "category": "Sky Rockets",
    "unit": "BOX",
    "mrp": 400.0,
    "price": 200.0
  },
  {
    "id": 59,
    "name": "Lunic Rocket",
    "category": "Sky Rockets",
    "unit": "BOX",
    "mrp": 600.0,
    "price": 150.0
  },
  {
    "id": 60,
    "name": "Two Sound Rocket",
    "category": "Sky Rockets",
    "unit": "BOX",
    "mrp": 650.0,
    "price": 162.5
  },
  {
    "id": 61,
    "name": "Echo Music Rocket",
    "category": "Sky Rockets",
    "unit": "BOX",
    "mrp": 725.0,
    "price": 181.25
  },
  {
    "id": 62,
    "name": "Red Bijili (50Pcs)",
    "category": "Bijili Crackers",
    "unit": "PKT",
    "mrp": 75.0,
    "price": 18.75
  },
  {
    "id": 63,
    "name": "Red Bijili (100Pcs)",
    "category": "Bijili Crackers",
    "unit": "PKT",
    "mrp": 175.0,
    "price": 43.75
  },
  {
    "id": 64,
    "name": "Bullet Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 110.0,
    "price": 27.5
  },
  {
    "id": 65,
    "name": "Atom Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 225.0,
    "price": 56.25
  },
  {
    "id": 66,
    "name": "Hydro Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 325.0,
    "price": 81.25
  },
  {
    "id": 67,
    "name": "King of Kings",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 425.0,
    "price": 106.25
  },
  {
    "id": 68,
    "name": "Classic Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 550.0,
    "price": 137.5
  },
  {
    "id": 69,
    "name": "Dinosaur Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 990.0,
    "price": 247.5
  },
  {
    "id": 70,
    "name": "Agni Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 950.0,
    "price": 237.5
  },
  {
    "id": 71,
    "name": "Digital Deluxe Bomb",
    "category": "Bomb Crackers",
    "unit": "BOX",
    "mrp": 1100.0,
    "price": 275.0
  },
  {
    "id": 72,
    "name": "Adiyal ¼ Kg",
    "category": "Paper Bomb",
    "unit": "BOX",
    "mrp": 300.0,
    "price": 75.0
  },
  {
    "id": 73,
    "name": "Adiyal ½ Kg",
    "category": "Paper Bomb",
    "unit": "BOX",
    "mrp": 600.0,
    "price": 150.0
  },
  {
    "id": 74,
    "name": "Colour Paper Veedu (5Pcs)",
    "category": "Paper Bomb",
    "unit": "PKT",
    "mrp": 450.0,
    "price": 112.5
  },
  {
    "id": 75,
    "name": "Avatar Bomb (10Pcs)",
    "category": "Paper Bomb",
    "unit": "BOX",
    "mrp": 1250.0,
    "price": 312.5
  },
  {
    "id": 76,
    "name": "Crorepathy Bomb",
    "category": "Paper Bomb",
    "unit": "BOX",
    "mrp": 1470.0,
    "price": 367.5
  },
  {
    "id": 77,
    "name": "24 Deluxe",
    "category": "Wala Garland",
    "unit": "PKT",
    "mrp": 225.0,
    "price": 56.25
  },
  {
    "id": 78,
    "name": "50 Deluxe",
    "category": "Wala Garland",
    "unit": "PKT",
    "mrp": 525.0,
    "price": 131.25
  },
  {
    "id": 79,
    "name": "100 Deluxe",
    "category": "Wala Garland",
    "unit": "PKT",
    "mrp": 1050.0,
    "price": 262.5
  },
  {
    "id": 80,
    "name": "28 Chorsa",
    "category": "Wala Garland",
    "unit": "PKT",
    "mrp": 75.0,
    "price": 18.75
  },
  {
    "id": 81,
    "name": "28 Gaint",
    "category": "Wala Garland",
    "unit": "PKT",
    "mrp": 150.0,
    "price": 37.5
  },
  {
    "id": 82,
    "name": "56 Gaint",
    "category": "Wala Garland",
    "unit": "PKT",
    "mrp": 225.0,
    "price": 56.25
  },
  {
    "id": 83,
    "name": "100 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 200.0,
    "price": 50.0
  },
  {
    "id": 84,
    "name": "200 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 400.0,
    "price": 100.0
  },
  {
    "id": 85,
    "name": "300 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 525.0,
    "price": 131.25
  },
  {
    "id": 86,
    "name": "600 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 675.0,
    "price": 168.75
  },
  {
    "id": 87,
    "name": "1000 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 750.0,
    "price": 187.5
  },
  {
    "id": 88,
    "name": "1000 Wala Power",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 1250.0,
    "price": 312.5
  },
  {
    "id": 89,
    "name": "2000 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 2600.0,
    "price": 650.0
  },
  {
    "id": 90,
    "name": "5000 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 4750.0,
    "price": 1187.5
  },
  {
    "id": 91,
    "name": "5000 Wala Power",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 7250.0,
    "price": 1812.5
  },
  {
    "id": 92,
    "name": "10000 Wala",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 9000.0,
    "price": 2250.0
  },
  {
    "id": 93,
    "name": "10000 Wala Power",
    "category": "Wala Garland",
    "unit": "BOX",
    "mrp": 12000.0,
    "price": 3000.0
  },
  {
    "id": 94,
    "name": "Chota Pipe Multi Colour",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 225.0,
    "price": 56.25
  },
  {
    "id": 95,
    "name": "7 Ahot (5Pcs)",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 550.0,
    "price": 137.5
  },
  {
    "id": 96,
    "name": "Sky King Multi Colour (5Pcs)",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 675.0,
    "price": 168.75
  },
  {
    "id": 97,
    "name": "Penta Park Multi Colour (5Pcs)",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 850.0,
    "price": 212.5
  },
  {
    "id": 98,
    "name": "2' Fancy Pipe (3Pcs)",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1250.0,
    "price": 312.5
  },
  {
    "id": 99,
    "name": "2½ Fancy",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 600.0,
    "price": 150.0
  },
  {
    "id": 100,
    "name": "3½ Fancy",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1100.0,
    "price": 275.0
  },
  {
    "id": 101,
    "name": "3½ Double Ball",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1850.0,
    "price": 462.5
  },
  {
    "id": 102,
    "name": "3½ Fancy Pipe (2Pcs)",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 2750.0,
    "price": 687.5
  },
  {
    "id": 103,
    "name": "4' Fancy",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1400.0,
    "price": 350.0
  },
  {
    "id": 104,
    "name": "4' Fancy (2Pcs)",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 3250.0,
    "price": 812.5
  },
  {
    "id": 105,
    "name": "12 Step",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1650.0,
    "price": 412.5
  },
  {
    "id": 106,
    "name": "12 Shot",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 900.0,
    "price": 225.0
  },
  {
    "id": 107,
    "name": "30 Peacock Shot",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1750.0,
    "price": 437.5
  },
  {
    "id": 108,
    "name": "30 Shot Multi Colour",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 1900.0,
    "price": 475.0
  },
  {
    "id": 109,
    "name": "60 Shot Multi Colour",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 3750.0,
    "price": 937.5
  },
  {
    "id": 110,
    "name": "120 Shot Multi Colour",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 7250.0,
    "price": 1812.5
  },
  {
    "id": 111,
    "name": "240 Shot Multi Colour",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 13000.0,
    "price": 3250.0
  },
  {
    "id": 112,
    "name": "IPL 10 X 10 Sizzling Shot",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 13500.0,
    "price": 3375.0
  },
  {
    "id": 113,
    "name": "IPL 10 X 10 Tail Light",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 16000.0,
    "price": 4000.0
  },
  {
    "id": 114,
    "name": "20 X 2.5' Thriller Set Grand",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 16000.0,
    "price": 4000.0
  },
  {
    "id": 115,
    "name": "32 X 3.5' Mega Thriller Set Grand",
    "category": "Sky Night Celebration",
    "unit": "BOX",
    "mrp": 23750.0,
    "price": 5937.5
  },
  {
    "id": 116,
    "name": "Asrafi (5Pcs)",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 225.0,
    "price": 56.25
  },
  {
    "id": 117,
    "name": "4' Angry Bird",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 300.0,
    "price": 75.0
  },
  {
    "id": 118,
    "name": "Ganga Jamuna (5Pcs)",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 375.0,
    "price": 93.75
  },
  {
    "id": 119,
    "name": "Photo Flash (5Pcs)",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 325.0,
    "price": 81.25
  },
  {
    "id": 120,
    "name": "Star Light (5Pcs)",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 350.0,
    "price": 87.5
  },
  {
    "id": 121,
    "name": "Dancing Butterfly",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 375.0,
    "price": 93.75
  },
  {
    "id": 122,
    "name": "Feather Pop Shower",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 650.0,
    "price": 162.5
  },
  {
    "id": 123,
    "name": "Colour Rain",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 625.0,
    "price": 156.25
  },
  {
    "id": 124,
    "name": "2' Sun Feast Multi Colour",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 700.0,
    "price": 175.0
  },
  {
    "id": 125,
    "name": "Golden Rise",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 625.0,
    "price": 156.25
  },
  {
    "id": 126,
    "name": "Mini Siren",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 675.0,
    "price": 168.75
  },
  {
    "id": 127,
    "name": "Mega Siren",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 825.0,
    "price": 206.25
  },
  {
    "id": 128,
    "name": "Peacock Fancy",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 825.0,
    "price": 206.25
  },
  {
    "id": 129,
    "name": "Bada Peacock",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 1875.0,
    "price": 468.75
  },
  {
    "id": 130,
    "name": "Silky Shower",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 550.0,
    "price": 137.5
  },
  {
    "id": 131,
    "name": "Tin Beer Shower",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 600.0,
    "price": 150.0
  },
  {
    "id": 132,
    "name": "Star Shown Popcorn",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 850.0,
    "price": 212.5
  },
  {
    "id": 133,
    "name": "Apple Shower",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 900.0,
    "price": 225.0
  },
  {
    "id": 134,
    "name": "3' Red Sun Shower",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 1050.0,
    "price": 262.5
  },
  {
    "id": 135,
    "name": "Smoke Fountain Celebration",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 1100.0,
    "price": 275.0
  },
  {
    "id": 136,
    "name": "Bambara Spinner",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 675.0,
    "price": 168.75
  },
  {
    "id": 137,
    "name": "Tim Tom/Bim Bam",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 425.0,
    "price": 106.25
  },
  {
    "id": 138,
    "name": "Kit Kat",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 150.0,
    "price": 37.5
  },
  {
    "id": 139,
    "name": "Zee Boom Baa",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 75.0,
    "price": 18.75
  },
  {
    "id": 140,
    "name": "Electric Stone",
    "category": "Night Fancy Celebration",
    "unit": "BOX",
    "mrp": 75.0,
    "price": 18.75
  },
  {
    "id": 141,
    "name": "Chun Mun Barrels",
    "category": "Fancy Flower Balls",
    "unit": "BOX",
    "mrp": 975.0,
    "price": 243.75
  },
  {
    "id": 142,
    "name": "Two in One",
    "category": "Fancy Flower Balls",
    "unit": "BOX",
    "mrp": 2250.0,
    "price": 562.5
  },
  {
    "id": 143,
    "name": "Mega Deluxe",
    "category": "Fancy Flower Balls",
    "unit": "BOX",
    "mrp": 2750.0,
    "price": 687.5
  },
  {
    "id": 144,
    "name": "Royal 5 in 1 Matches",
    "category": "Colour Matches",
    "unit": "BOX",
    "mrp": 400.0,
    "price": 100.0
  },
  {
    "id": 145,
    "name": "Royal Lamba Matches",
    "category": "Colour Matches",
    "unit": "BOX",
    "mrp": 800.0,
    "price": 200.0
  },
  {
    "id": 146,
    "name": "Mega Laptop Matches",
    "category": "Colour Matches",
    "unit": "BOX",
    "mrp": 1250.0,
    "price": 312.5
  },
  {
    "id": 147,
    "name": "Roll Cap",
    "category": "Children Gun Items",
    "unit": "BOX",
    "mrp": 400.0,
    "price": 100.0
  },
  {
    "id": 148,
    "name": "Snake Tablet",
    "category": "Children Gun Items",
    "unit": "BOX",
    "mrp": 175.0,
    "price": 43.75
  },
  {
    "id": 149,
    "name": "Small Size Gun",
    "category": "Children Gun Items",
    "unit": "BOX",
    "mrp": 250.0,
    "price": 62.5
  },
  {
    "id": 150,
    "name": "Mega Gun",
    "category": "Children Gun Items",
    "unit": "BOX",
    "mrp": 500.0,
    "price": 125.0
  },
  {
    "id": 151,
    "name": "King Star",
    "category": "New Fancy Arrivals",
    "unit": "BOX",
    "mrp": 1475.0,
    "price": 368.75
  },
  {
    "id": 152,
    "name": "Old is Gold",
    "category": "New Fancy Arrivals",
    "unit": "PKT",
    "mrp": 950.0,
    "price": 237.5
  },
  {
    "id": 153,
    "name": "Star Wheel",
    "category": "New Fancy Arrivals",
    "unit": "PKT",
    "mrp": 875.0,
    "price": 218.75
  },
  {
    "id": 154,
    "name": "Water Queen Falls",
    "category": "New Fancy Arrivals",
    "unit": "PKT",
    "mrp": 950.0,
    "price": 237.5
  },
  {
    "id": 155,
    "name": "Top Gun Fancy",
    "category": "New Fancy Arrivals",
    "unit": "PKT",
    "mrp": 1050.0,
    "price": 262.5
  },
  {
    "id": 156,
    "name": "Moon Light",
    "category": "New Fancy Arrivals",
    "unit": "BOX",
    "mrp": 350.0,
    "price": 87.5
  },
  {
    "id": 157,
    "name": "Helicopter",
    "category": "New Fancy Arrivals",
    "unit": "BOX",
    "mrp": 650.0,
    "price": 162.5
  },
  {
    "id": 158,
    "name": "Fun Zone Crackling (5Pcs)",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 1850.0,
    "price": 462.5
  },
  {
    "id": 159,
    "name": "Rotating Sparkling",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 750.0,
    "price": 187.5
  },
  {
    "id": 160,
    "name": "Magic Whip",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 725.0,
    "price": 181.25
  },
  {
    "id": 161,
    "name": "Star World (5Pcs)",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 800.0,
    "price": 200.0
  },
  {
    "id": 162,
    "name": "4' Pipe 7 Wonder",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 1850.0,
    "price": 462.5
  },
  {
    "id": 163,
    "name": "4' Pipe Wow Purple",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 1850.0,
    "price": 462.5
  },
  {
    "id": 164,
    "name": "4' Pipe Wow Orange",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 1850.0,
    "price": 462.5
  },
  {
    "id": 165,
    "name": "30 Flash Colour Shot",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 2100.0,
    "price": 525.0
  },
  {
    "id": 166,
    "name": "30 Crack Jack Colour Shot",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 2400.0,
    "price": 600.0
  },
  {
    "id": 167,
    "name": "Blast Gun (or) Pistal 5G",
    "category": "New Arrivals 2025",
    "unit": "BOX",
    "mrp": 1050.0,
    "price": 262.5
  },
  {
    "id": 168,
    "name": "25 Items Gift Box",
    "category": "Gift Box - Net Rates",
    "unit": "BOX",
    "mrp": 450.0,
    "price": 450.0
  },
  {
    "id": 169,
    "name": "30 Items Gift Box",
    "category": "Gift Box - Net Rates",
    "unit": "BOX",
    "mrp": 550.0,
    "price": 550.0
  },
  {
    "id": 170,
    "name": "35 Items Gift Box",
    "category": "Gift Box - Net Rates",
    "unit": "BOX",
    "mrp": 650.0,
    "price": 650.0
  },
  {
    "id": 171,
    "name": "40 Items Gift Box",
    "category": "Gift Box - Net Rates",
    "unit": "BOX",
    "mrp": 750.0,
    "price": 750.0
  },
  {
    "id": 172,
    "name": "50 Items Gift Box",
    "category": "Gift Box - Net Rates",
    "unit": "BOX",
    "mrp": 950.0,
    "price": 950.0
  },
  {
    "id": 173,
    "name": "Children's Combo",
    "category": "Combo Pack - Net Rates",
    "unit": "CASE",
    "mrp": 4000.0,
    "price": 4000.0
  },
  {
    "id": 174,
    "name": "Family Pack",
    "category": "Combo Pack - Net Rates",
    "unit": "CASE",
    "mrp": 6000.0,
    "price": 6000.0
  },
  {
    "id": 175,
    "name": "Thala Diwali Pack",
    "category": "Combo Pack - Net Rates",
    "unit": "CASE",
    "mrp": 8000.0,
    "price": 8000.0
  }
];

const cart = {};
const categoryOrder = [...new Set(products.map(product => product.category))];

function categorySlug(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatCurrency(value) {
  return '₹' + Number(value).toLocaleString('en-IN', { minimumFractionDigits: value % 1 ? 2 : 0, maximumFractionDigits: 2 });
}

function renderProducts() {
  const productBody = document.getElementById('productBody');
  const searchInput = document.getElementById('searchInput');
  const searchValue = (searchInput?.value || '').toLowerCase().trim();
  const selectedCategory = new URLSearchParams(window.location.search).get('category');

  let html = '';
  categoryOrder.forEach(category => {
    const categoryProducts = products.filter(product => product.category === category && (
      !searchValue ||
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      String(product.id).includes(searchValue)
    ));

    if (categoryProducts.length === 0) return;

    const isSelected = selectedCategory === category;
    html += `<tr class="category-row ${isSelected ? 'selected-category' : ''}" id="category-${categorySlug(category)}">
      <td colspan="7">${category}</td>
    </tr>`;

    html += categoryProducts.map(product => {
      const qty = cart[product.id] || 0;
      const total = qty * product.price;
      return `<tr>
        <td>${product.id}</td>
        <td><div class="product-name">${product.name}</div></td>
        <td>${product.unit}</td>
        <td><div class="price-old">${formatCurrency(product.mrp)}</div></td>
        <td><div class="price-new">${formatCurrency(product.price)}</div></td>
        <td>
          <div class="qty-control">
            <button onclick="changeQty(${product.id}, -1)" aria-label="Decrease quantity">−</button>
            <input class="qty-input" type="number" min="0" step="1" value="${qty}" onchange="setQty(${product.id}, this.value)" oninput="setQty(${product.id}, this.value)" aria-label="Quantity for ${product.name}">
            <button onclick="changeQty(${product.id}, 1)" aria-label="Increase quantity">+</button>
          </div>
        </td>
        <td><strong>${formatCurrency(total)}</strong></td>
      </tr>`;
    }).join('');
  });

  productBody.innerHTML = html || '<tr><td colspan="7" class="empty-cell">No products found.</td></tr>';
  updateCartSummary();
}

function changeQty(productId, change) {
  const current = cart[productId] || 0;
  const next = Math.max(0, current + change);
  if (next === 0) { delete cart[productId]; } else { cart[productId] = next; }
  renderProducts();
}

function setQty(productId, rawValue) {
  let value = parseInt(rawValue, 10);
  if (Number.isNaN(value) || value < 0) value = 0;
  if (value === 0) { delete cart[productId]; } else { cart[productId] = value; }
  updateCartSummary();
  updateVisibleRowTotals();
}

function updateVisibleRowTotals() {
  document.querySelectorAll('.qty-input').forEach(input => {
    const match = input.getAttribute('onchange')?.match(/setQty\((\d+)/);
    if (!match) return;
    const id = Number(match[1]);
    const product = products.find(item => item.id === id);
    const row = input.closest('tr');
    if (!product || !row) return;
    input.value = cart[id] || 0;
    row.querySelector('td:last-child strong').textContent = formatCurrency((cart[id] || 0) * product.price);
  });
}

function getCartItems() {
  return Object.entries(cart).map(([id, qty]) => {
    const product = products.find(item => item.id === Number(id));
    return { ...product, qty: Number(qty), total: product.price * Number(qty) };
  });
}

function updateCartSummary() {
  const selectedItems = document.getElementById('selectedItems');
  const itemCount = document.getElementById('itemCount');
  const cartTotal = document.getElementById('cartTotal');
  const grandTotal = document.getElementById('grandTotal');
  if (!selectedItems || !itemCount || !cartTotal || !grandTotal) return;

  const items = getCartItems();
  const totalQty = items.reduce((sum, item) => sum + Number(item.qty), 0);
  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);

  if (items.length === 0) {
    selectedItems.className = 'empty-state';
    selectedItems.innerHTML = 'No products selected yet.';
  } else {
    selectedItems.className = '';
    selectedItems.innerHTML = items.map(item => `<div class="summary-line"><span>${item.id}. ${item.name} × ${item.qty}</span><strong>${formatCurrency(item.total)}</strong></div>`).join('');
  }

  itemCount.textContent = totalQty;
  cartTotal.textContent = formatCurrency(totalAmount);
  grandTotal.textContent = formatCurrency(totalAmount);
}

function sendWhatsAppEnquiry() {
  const items = getCartItems();
  if (items.length === 0) { alert('Please select at least one product before sending enquiry.'); return; }

  const name = document.getElementById('customerName').value.trim();
  const mobile = document.getElementById('customerMobile').value.trim();
  const city = document.getElementById('customerCity').value.trim();
  const msg = document.getElementById('customerMessage').value.trim();
  if (!name || !mobile || !city) { alert('Please enter your name, mobile number and city/area.'); return; }

  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
  const productLines = items.map(item => `- ${item.id}. ${item.name} (${item.unit}) | Qty: ${item.qty} | Total: ${formatCurrency(item.total)}`).join('%0A');
  const message = `RAAMDEV TRADERS Price List Enquiry%0A%0AName: ${encodeURIComponent(name)}%0AMobile: ${encodeURIComponent(mobile)}%0ACity/Area: ${encodeURIComponent(city)}%0A%0ASelected Products:%0A${productLines}%0A%0AEstimate Total: ${encodeURIComponent(formatCurrency(totalAmount))}%0A%0AMessage: ${encodeURIComponent(msg || 'No special request')}%0A%0ANote: Please confirm availability, permitted products and next steps.`;
  window.open(`https://wa.me/${officialWhatsappNumber}?text=${message}`, '_blank');
}

function scrollToSelectedCategory() {
  const selectedCategory = new URLSearchParams(window.location.search).get('category');
  if (!selectedCategory) return;
  const target = document.getElementById(`category-${categorySlug(selectedCategory)}`);
  if (target) {
    setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 350);
  }
}

document.getElementById('searchInput')?.addEventListener('input', renderProducts);
renderProducts();
scrollToSelectedCategory();
