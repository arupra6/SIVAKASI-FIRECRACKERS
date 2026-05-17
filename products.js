const officialWhatsappNumber = '919042669936';

const MINIMUM_ENQUIRY_VALUE = 3000;

const tamilNaduDistricts = [
  'Ariyalur', 'Chengalpattu', 'Chennai', 'Coimbatore', 'Cuddalore', 'Dharmapuri', 'Dindigul',
  'Erode', 'Kallakurichi', 'Kanchipuram', 'Kanniyakumari', 'Karur', 'Krishnagiri', 'Madurai',
  'Mayiladuthurai', 'Nagapattinam', 'Namakkal', 'Nilgiris', 'Perambalur', 'Pudukkottai',
  'Ramanathapuram', 'Ranipet', 'Salem', 'Sivagangai', 'Tenkasi', 'Thanjavur', 'Theni',
  'Thoothukudi', 'Tiruchirappalli', 'Tirunelveli', 'Tirupathur', 'Tiruppur', 'Tiruvallur',
  'Tiruvannamalai', 'Tiruvarur', 'Vellore', 'Viluppuram', 'Virudhunagar'
];

const exactTamilNaduPinLookup = {
  '626204': { district: 'Virudhunagar', postalArea: 'Sattur / Paraipatti area' },
  '608302': { district: 'Cuddalore', postalArea: 'Kattumannarkoil / Chidambaram area' },
  '608601': { district: 'Cuddalore', postalArea: 'Chidambaram / Bhuvanagiri area' }
};

const tamilNaduPinPrefixLookup = {
  '600': { district: 'Chennai', postalArea: 'Chennai postal area' },
  '601': { district: 'Tiruvallur', postalArea: 'Tiruvallur / Chennai suburban postal area' },
  '602': { district: 'Tiruvallur', postalArea: 'Tiruvallur / Kanchipuram postal area' },
  '603': { district: 'Chengalpattu', postalArea: 'Chengalpattu postal area' },
  '604': { district: 'Tiruvannamalai', postalArea: 'Tiruvannamalai / Villupuram postal area' },
  '605': { district: 'Viluppuram', postalArea: 'Viluppuram postal area' },
  '606': { district: 'Tiruvannamalai', postalArea: 'Tiruvannamalai / Kallakurichi postal area' },
  '607': { district: 'Cuddalore', postalArea: 'Cuddalore postal area' },
  '608': { district: 'Cuddalore', postalArea: 'Chidambaram / Cuddalore postal area' },
  '609': { district: 'Mayiladuthurai', postalArea: 'Mayiladuthurai / Nagapattinam postal area' },
  '610': { district: 'Tiruvarur', postalArea: 'Tiruvarur postal area' },
  '611': { district: 'Nagapattinam', postalArea: 'Nagapattinam postal area' },
  '612': { district: 'Thanjavur', postalArea: 'Kumbakonam / Thanjavur postal area' },
  '613': { district: 'Thanjavur', postalArea: 'Thanjavur postal area' },
  '614': { district: 'Thanjavur', postalArea: 'Thanjavur / Tiruvarur postal area' },
  '620': { district: 'Tiruchirappalli', postalArea: 'Tiruchirappalli city postal area' },
  '621': { district: 'Tiruchirappalli', postalArea: 'Tiruchirappalli / Perambalur / Ariyalur postal area' },
  '622': { district: 'Pudukkottai', postalArea: 'Pudukkottai postal area' },
  '623': { district: 'Ramanathapuram', postalArea: 'Ramanathapuram postal area' },
  '624': { district: 'Dindigul', postalArea: 'Dindigul postal area' },
  '625': { district: 'Madurai', postalArea: 'Madurai / Theni postal area' },
  '626': { district: 'Virudhunagar', postalArea: 'Virudhunagar / Sivakasi / Sattur postal area' },
  '627': { district: 'Tirunelveli', postalArea: 'Tirunelveli / Tenkasi postal area' },
  '628': { district: 'Thoothukudi', postalArea: 'Thoothukudi postal area' },
  '629': { district: 'Kanniyakumari', postalArea: 'Kanniyakumari postal area' },
  '630': { district: 'Sivagangai', postalArea: 'Sivagangai / Karaikudi postal area' },
  '631': { district: 'Ranipet', postalArea: 'Ranipet / Arakkonam postal area' },
  '632': { district: 'Vellore', postalArea: 'Vellore / Ranipet / Tirupathur postal area' },
  '635': { district: 'Krishnagiri', postalArea: 'Krishnagiri / Dharmapuri / Tirupathur postal area' },
  '636': { district: 'Salem', postalArea: 'Salem / Dharmapuri postal area' },
  '637': { district: 'Namakkal', postalArea: 'Namakkal postal area' },
  '638': { district: 'Erode', postalArea: 'Erode / Tiruppur postal area' },
  '639': { district: 'Karur', postalArea: 'Karur postal area' },
  '641': { district: 'Coimbatore', postalArea: 'Coimbatore / Tiruppur postal area' },
  '642': { district: 'Coimbatore', postalArea: 'Pollachi / Coimbatore postal area' },
  '643': { district: 'Nilgiris', postalArea: 'Nilgiris postal area' }
};

let isAutoFillingLocation = false;
let districtManuallyEdited = false;
let postalAreaManuallyEdited = false;


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

const CART_STORAGE_KEY = 'ramdevEstimateCart';
const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '{}');
const cart = savedCart && typeof savedCart === 'object' ? savedCart : {};
const categoryOrder = [...new Set(products.map(product => product.category))];

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

function categorySlug(category) {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function formatCurrency(value) {
  return '₹' + Number(value).toLocaleString('en-IN', { minimumFractionDigits: value % 1 ? 2 : 0, maximumFractionDigits: 2 });
}

function isNetRate(product) {
  return product.category.includes('Net Rates') || Number(product.mrp) === Number(product.price);
}

function productUseTag(product) {
  const c = product.category.toLowerCase();
  if (c.includes('gift') || c.includes('combo')) return 'Family Pack';
  if (c.includes('sparkler') || c.includes('children')) return 'Kids Friendly';
  if (c.includes('flower') || c.includes('chakker')) return 'Family Favourite';
  if (c.includes('night') || c.includes('fancy') || c.includes('shot')) return 'Night Show';
  if (c.includes('rocket') || c.includes('bomb') || c.includes('wala')) return 'Classic Choice';
  return 'Festival Item';
}



function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getProductImage(product) {
  return product.image || 'assets/default-product.jpg';
}

function getProductVideoMarkup(product) {
  if (product.video) {
    return `<a class="product-video-link active" href="${escapeHtml(product.video)}" target="_blank" rel="noopener">VIDEO</a>`;
  }
  return `<span class="product-video-link inactive" aria-label="Product video not available yet">VIDEO</span>`;
}

function renderProducts() {
  const productBody = document.getElementById('productBody');
  const searchInput = document.getElementById('searchInput');
  if (!productBody) return;

  const searchValue = (searchInput?.value || '').toLowerCase().trim();
  const selectedCategory = new URLSearchParams(window.location.search).get('category');

  let html = '';
  categoryOrder.forEach(category => {
    const categoryProducts = products.filter(product => product.category === category && (
      !searchValue ||
      product.name.toLowerCase().includes(searchValue) ||
      product.category.toLowerCase().includes(searchValue) ||
      product.unit.toLowerCase().includes(searchValue) ||
      String(product.id).includes(searchValue)
    ));

    if (categoryProducts.length === 0) return;
    const isSelected = selectedCategory === category;
    html += `<div class="tile-category-heading ${isSelected ? 'selected-category' : ''}" id="category-${categorySlug(category)}">
      <span>${category}</span>
      <small>${categoryProducts.length} Items</small>
    </div>`;

    html += `<div class="product-tile-grid">` + categoryProducts.map(product => {
      const qty = Number(cart[product.id] || 0);
      const total = qty * product.price;
      const netRate = isNetRate(product);
      const imageSrc = getProductImage(product);
      const safeName = escapeHtml(product.name);
      const videoMarkup = getProductVideoMarkup(product);
      return `<article class="product-tile" data-product-id="${product.id}">
        <div class="product-media-box">
          <button type="button" class="product-photo-button" onclick="openImagePopup(this.dataset.fullImage, this.dataset.productName)" data-full-image="${escapeHtml(imageSrc)}" data-product-name="${safeName}" aria-label="View larger image of ${safeName}">
            <img class="product-photo" src="${escapeHtml(imageSrc)}" alt="${safeName}" loading="lazy">
            <small>RT-${String(product.id).padStart(3, '0')}</small>
          </button>
          <div class="product-video-slot">${videoMarkup}</div>
        </div>
        <div class="product-tile-content">
          <div class="tile-topline">
            <span class="serial-chip">S.No ${product.id}</span>
            <span class="tag ${netRate ? 'tag-net' : ''}">${netRate ? 'Net Rate' : '75% Off'}</span>
          </div>
          <h3>${product.name}</h3>
          <p class="product-category-text">${product.category}</p>
          <div class="product-tag-row"><span>${productUseTag(product)}</span><span>Unit: ${product.unit}</span></div>
          <div class="price-row">
            <div><small>MRP</small><strong class="price-old">${formatCurrency(product.mrp)}</strong></div>
            <div><small>${netRate ? 'Net Price' : 'After Discount'}</small><strong class="price-new">${formatCurrency(product.price)}</strong></div>
          </div>
          <div class="tile-qty-row">
            <div class="qty-control">
              <button onclick="changeQty(${product.id}, -1)" aria-label="Decrease quantity">−</button>
              <input class="qty-input" type="number" min="0" step="1" value="${qty}" onchange="setQty(${product.id}, this.value)" oninput="setQty(${product.id}, this.value)" aria-label="Quantity for ${product.name}">
              <button onclick="changeQty(${product.id}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <div class="tile-total"><small>Total</small><strong>${formatCurrency(total)}</strong></div>
          </div>
        </div>
      </article>`;
    }).join('') + `</div>`;
  });

  productBody.innerHTML = html || '<div class="empty-cell">No products found.</div>';
  updateCartSummary();
}

function changeQty(productId, change) {
  const current = Number(cart[productId] || 0);
  const next = Math.max(0, current + change);
  if (next === 0) { delete cart[productId]; } else { cart[productId] = next; }
  saveCart();
  renderProducts();
}

function setQty(productId, rawValue) {
  let value = parseInt(rawValue, 10);
  if (Number.isNaN(value) || value < 0) value = 0;
  if (value === 0) { delete cart[productId]; } else { cart[productId] = value; }
  saveCart();
  updateCartSummary();
  updateVisibleTileTotals();
}

function updateVisibleTileTotals() {
  document.querySelectorAll('.product-tile').forEach(tile => {
    const id = Number(tile.dataset.productId);
    const product = products.find(item => item.id === id);
    if (!product) return;
    const input = tile.querySelector('.qty-input');
    const total = tile.querySelector('.tile-total strong');
    if (input) input.value = cart[id] || 0;
    if (total) total.textContent = formatCurrency((cart[id] || 0) * product.price);
  });
}

function getCartItems() {
  return Object.entries(cart).map(([id, qty]) => {
    const product = products.find(item => item.id === Number(id));
    return { ...product, qty: Number(qty), total: product.price * Number(qty) };
  }).filter(item => item && item.qty > 0);
}

function updateCartSummary() {
  const selectedItems = document.getElementById('selectedItems');
  const itemCount = document.getElementById('itemCount');
  const cartTotal = document.getElementById('cartTotal');
  const grandTotal = document.getElementById('grandTotal');
  const mobileCartText = document.getElementById('mobileCartText');
  const mobileCartBar = document.getElementById('mobileCartBar');
  const minimumStatus = document.getElementById('minimumStatus');
  const actionButtons = document.querySelectorAll('.requires-minimum');
  if (!selectedItems || !itemCount || !cartTotal || !grandTotal) return;

  const items = getCartItems();
  const totalQty = items.reduce((sum, item) => sum + Number(item.qty), 0);
  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
  const minimumMet = totalAmount >= MINIMUM_ENQUIRY_VALUE;

  if (items.length === 0) {
    selectedItems.className = 'empty-state';
    selectedItems.innerHTML = 'No products selected yet.';
  } else {
    selectedItems.className = 'selected-list';
    selectedItems.innerHTML = items.map(item => `<div class="summary-line"><span>${item.id}. ${item.name} × ${item.qty}</span><strong>${formatCurrency(item.total)}</strong></div>`).join('');
  }

  itemCount.textContent = totalQty;
  cartTotal.textContent = formatCurrency(totalAmount);
  grandTotal.textContent = formatCurrency(totalAmount);

  if (minimumStatus) {
    if (!minimumMet) {
      const balance = Math.max(0, MINIMUM_ENQUIRY_VALUE - totalAmount);
      minimumStatus.className = 'minimum-status warning';
      minimumStatus.textContent = `Minimum enquiry value is ₹3,000. Add ${formatCurrency(balance)} more to proceed.`;
    } else {
      minimumStatus.className = 'minimum-status success';
      minimumStatus.textContent = 'Minimum enquiry value reached. You can proceed.';
    }
  }

  actionButtons.forEach(button => {
    button.disabled = !minimumMet;
    button.classList.toggle('btn-disabled', !minimumMet);
    button.title = minimumMet ? '' : 'Minimum enquiry value is ₹3,000';
  });

  if (mobileCartText && mobileCartBar) {
    mobileCartText.textContent = `Items: ${totalQty} | Total: ${formatCurrency(totalAmount)}`;
    mobileCartBar.classList.toggle('has-items', totalQty > 0);
  }
}

function generateEnquiryNumber() {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}${String(now.getDate()).padStart(2,'0')}`;
  const suffix = Math.floor(1000 + Math.random() * 9000);
  return `RT-${stamp}-${suffix}`;
}

function resetEstimate() {
  const hasSelections = Object.keys(cart).length > 0;
  if (!hasSelections) { alert('No selected items to clear.'); return; }
  const confirmReset = confirm('Clear all selected quantities and start a new estimate?');
  if (!confirmReset) return;
  Object.keys(cart).forEach(key => delete cart[key]);
  localStorage.removeItem(CART_STORAGE_KEY);
  renderProducts();
  updateCartSummary();
  const wrapper = document.querySelector('.product-tile-scroll');
  if (wrapper) wrapper.scrollTo({ top: 0, behavior: 'smooth' });
}


function getCartTotalAmount() {
  return getCartItems().reduce((sum, item) => sum + item.total, 0);
}

function validateMinimumValue() {
  const totalAmount = getCartTotalAmount();
  if (totalAmount < MINIMUM_ENQUIRY_VALUE) {
    alert(`Minimum enquiry value is ₹3,000. Please add ${formatCurrency(MINIMUM_ENQUIRY_VALUE - totalAmount)} more to proceed.`);
    return false;
  }
  return true;
}

function getCustomerDetails() {
  return {
    name: document.getElementById('customerName')?.value.trim() || '',
    mobile: document.getElementById('customerMobile')?.value.trim() || '',
    city: document.getElementById('customerCity')?.value.trim() || '',
    district: document.getElementById('customerDistrict')?.value.trim() || '',
    postalArea: document.getElementById('customerPostalArea')?.value.trim() || '',
    pincode: document.getElementById('customerPincode')?.value.trim() || '',
    message: document.getElementById('customerMessage')?.value.trim() || ''
  };
}

function validateCustomerDetails() {
  const details = getCustomerDetails();
  if (!details.name || !details.mobile || !details.city || !details.district || !details.postalArea || !details.pincode) {
    alert('Please enter your name, mobile number, city/area, district, postal area and PIN code.');
    return null;
  }
  return details;
}

function lookupTamilNaduPincode(pin) {
  const cleanPin = String(pin || '').replace(/\D/g, '');
  if (cleanPin.length !== 6) return null;
  return exactTamilNaduPinLookup[cleanPin] || tamilNaduPinPrefixLookup[cleanPin.slice(0, 3)] || null;
}

function handlePincodeAutoFill() {
  const pinInput = document.getElementById('customerPincode');
  const districtInput = document.getElementById('customerDistrict');
  const postalInput = document.getElementById('customerPostalArea');
  const status = document.getElementById('pinLookupStatus');
  if (!pinInput || !districtInput || !postalInput) return;
  const cleanPin = pinInput.value.replace(/\D/g, '').slice(0, 6);
  if (pinInput.value !== cleanPin) pinInput.value = cleanPin;

  if (cleanPin.length < 6) {
    if (status) status.textContent = 'Enter 6-digit PIN code to auto-fill district and postal area where available.';
    return;
  }

  const location = lookupTamilNaduPincode(cleanPin);
  isAutoFillingLocation = true;
  if (location) {
    if (!districtManuallyEdited || !districtInput.value.trim()) districtInput.value = location.district;
    if (!postalAreaManuallyEdited || !postalInput.value.trim()) postalInput.value = location.postalArea;
    if (status) status.textContent = `Matched: ${location.district} - ${location.postalArea}. You can edit if required.`;
  } else {
    if (status) status.textContent = 'PIN code not found in the Tamil Nadu helper list. Please enter district and postal area manually.';
  }
  isAutoFillingLocation = false;
}

function showDistrictSuggestions(filterText = '') {
  const districtInput = document.getElementById('customerDistrict');
  const suggestions = document.getElementById('districtSuggestions');
  if (!districtInput || !suggestions) return;
  const value = filterText.toLowerCase().trim();
  const matches = tamilNaduDistricts.filter(district => district.toLowerCase().includes(value)).slice(0, 8);
  if (!matches.length) {
    suggestions.classList.remove('open');
    suggestions.innerHTML = '';
    return;
  }
  suggestions.innerHTML = matches.map(district => `<button type="button" class="district-suggestion-item" onclick="selectDistrictSuggestion('${escapeHtml(district)}')">${district}</button>`).join('');
  suggestions.classList.add('open');
}

function selectDistrictSuggestion(district) {
  const districtInput = document.getElementById('customerDistrict');
  const suggestions = document.getElementById('districtSuggestions');
  if (!districtInput) return;
  districtInput.value = district;
  districtManuallyEdited = true;
  if (suggestions) suggestions.classList.remove('open');
}

function makeSafeFilenamePart(value) {
  return String(value || '').replace(/[^a-z0-9-_]+/gi, '_').replace(/^_+|_+$/g, '').slice(0, 60) || 'document';
}

function formatInrForDocs(value) {
  const numberValue = Number(value || 0);
  return 'INR ' + numberValue.toLocaleString('en-IN', {
    minimumFractionDigits: numberValue % 1 ? 2 : 0,
    maximumFractionDigits: 2
  });
}

function getItemSaving(item) {
  const mrp = Number(item.mrp || 0);
  const price = Number(item.price || 0);
  const qty = Number(item.qty || 0);
  const saving = Math.max(0, (mrp - price) * qty);
  return saving;
}

function getItemSavingLabel(item) {
  const saving = getItemSaving(item);
  return saving > 0 ? formatInrForDocs(saving) : 'Net Rate';
}

function prepareDocumentPayload(enquiryNo = generateEnquiryNumber(), skipAlerts = false) {
  const items = getCartItems();
  if (items.length === 0) {
    if (!skipAlerts) alert('Please select at least one product.');
    return null;
  }
  if (!validateMinimumValue()) return null;
  const details = validateCustomerDetails();
  if (!details) return null;
  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
  const totalMrpValue = items.reduce((sum, item) => sum + (Number(item.mrp || 0) * Number(item.qty || 0)), 0);
  const totalSavings = items.reduce((sum, item) => sum + getItemSaving(item), 0);
  return {
    enquiryNo,
    generatedAt: new Date(),
    details,
    items,
    totalAmount,
    totalMrpValue,
    totalSavings
  };
}

function downloadBlob(content, filename, mimeType) {
  const blob = content instanceof Blob ? content : new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1200);
}

function buildExcelHtml(payload, type) {
  const isPacking = type === 'packing';
  const title = isPacking ? 'Shop Packing List' : 'Customer Estimate';
  const itemTableColSpan = isPacking ? 5 : 9;
  const customerRows = `
    <tr><td class="label">Enquiry No</td><td>${escapeHtml(payload.enquiryNo)}</td><td class="label">Date</td><td>${escapeHtml(payload.generatedAt.toLocaleString('en-IN'))}</td></tr>
    <tr><td class="label">Customer Name</td><td>${escapeHtml(payload.details.name)}</td><td class="label">Mobile Number</td><td>${escapeHtml(payload.details.mobile)}</td></tr>
    <tr><td class="label">City / Area</td><td>${escapeHtml(payload.details.city)}</td><td class="label">District</td><td>${escapeHtml(payload.details.district)}</td></tr>
    <tr><td class="label">Postal Area</td><td>${escapeHtml(payload.details.postalArea)}</td><td class="label">PIN Code</td><td>${escapeHtml(payload.details.pincode)}</td></tr>
    <tr><td class="label">Message</td><td colspan="3">${escapeHtml(payload.details.message || '-')}</td></tr>`;

  const tableHead = isPacking
    ? '<tr><th>S.No</th><th>Product Name</th><th>Category</th><th>Unit</th><th>Quantity</th></tr>'
    : '<tr><th>S.No</th><th>Product Name</th><th>Category</th><th>Unit</th><th>MRP</th><th>Discount Price</th><th>Qty</th><th>Item Total</th><th>You Save</th></tr>';

  const itemRows = payload.items.map((item, index) => isPacking
    ? `<tr><td class="center">${index + 1}</td><td class="wrap product-col">${escapeHtml(item.name)}</td><td class="wrap category-col">${escapeHtml(item.category)}</td><td class="center">${escapeHtml(item.unit)}</td><td class="center qty-col">${item.qty}</td></tr>`
    : `<tr><td class="center">${index + 1}</td><td class="wrap product-col">${escapeHtml(item.name)}</td><td class="wrap category-col">${escapeHtml(item.category)}</td><td class="center">${escapeHtml(item.unit)}</td><td class="money">${formatInrForDocs(item.mrp)}</td><td class="money">${formatInrForDocs(item.price)}</td><td class="center qty-col">${item.qty}</td><td class="money">${formatInrForDocs(item.total)}</td><td class="money save-col">${getItemSavingLabel(item)}</td></tr>`
  ).join('');

  const totalsBlock = isPacking ? '' : `
    <table class="totals">
      <tr><td class="label">Total MRP Value</td><td class="money">${formatInrForDocs(payload.totalMrpValue)}</td></tr>
      <tr><td class="label">Grand Total After Discount</td><td class="money strong-total">${formatInrForDocs(payload.totalAmount)}</td></tr>
      <tr><td class="label">Total Savings After Discount</td><td class="money strong-save">${formatInrForDocs(payload.totalSavings)}</td></tr>
    </table>`;

  const note = isPacking
    ? 'Packing list for shop use only. Prices are intentionally hidden.'
    : 'Customer estimate only. Final confirmation is subject to availability, permitted products and official offline confirmation. Minimum enquiry value: INR 3,000.';

  return `<!DOCTYPE html><html><head><meta charset="UTF-8"><style>
    body{font-family:Arial,Helvetica,sans-serif;color:#101827}
    table{border-collapse:collapse;width:100%;table-layout:fixed;margin-bottom:14px}
    td,th{border:1px solid #b8a67a;padding:8px;vertical-align:top;font-size:12px;line-height:1.35;white-space:normal;mso-number-format:"\\@"}
    th{background:#5f0707;color:#f7c948;text-align:center;font-weight:bold}
    .title{font-size:22px;font-weight:bold;color:#8b1111;background:#fff7df;text-align:center;border:2px solid #8b1111}
    .subtitle{font-size:14px;font-weight:bold;color:#101827;background:#fff2b8;text-align:center}
    .label{font-weight:bold;background:#fff7df;color:#5f0707;width:18%}
    .center{text-align:center}.money{text-align:right;white-space:nowrap}.wrap{white-space:normal;word-wrap:break-word}
    .product-col{width:31%}.category-col{width:20%}.qty-col{width:8%}.save-col{color:#0f5132;font-weight:bold}
    .note{background:#fff7df;font-weight:bold;color:#5f0707}
    .totals{width:45%;margin-left:auto}.totals td{font-size:13px}.strong-total{font-weight:bold;color:#8b1111}.strong-save{font-weight:bold;color:#0f5132}
  </style></head><body>
    <table>
      <tr><td class="title" colspan="4">RAMDEV TRADERS - ${title}</td></tr>
      <tr><td class="subtitle" colspan="4">The Original Sivakasi Crackers</td></tr>
      ${customerRows}
    </table>
    <table>
      <tr><td class="subtitle" colspan="${itemTableColSpan}">Selected Items Only</td></tr>
      ${tableHead}
      ${itemRows}
      <tr><td class="note" colspan="${itemTableColSpan}">${escapeHtml(note)}</td></tr>
    </table>
    ${totalsBlock}
  </body></html>`;
}

function downloadEstimateExcel(payload = prepareDocumentPayload()) {
  if (!payload) return;
  const filename = `${payload.enquiryNo}_customer_estimate.xls`;
  downloadBlob(buildExcelHtml(payload, 'estimate'), filename, 'application/vnd.ms-excel;charset=utf-8');
}

function downloadPackingExcel(payload = prepareDocumentPayload()) {
  if (!payload) return;
  const filename = `${payload.enquiryNo}_packing_list.xls`;
  downloadBlob(buildExcelHtml(payload, 'packing'), filename, 'application/vnd.ms-excel;charset=utf-8');
}

function addPdfHeader(doc, payload, title, subtitle) {
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(139, 17, 17);
  doc.setFontSize(18);
  doc.text('RAMDEV TRADERS', 12, 15);
  doc.setFontSize(12);
  doc.setTextColor(16, 24, 39);
  doc.text(title, 12, 23);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(subtitle, 12, 29);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.text(`Enquiry No: ${payload.enquiryNo}`, 118, 15);
  doc.text(`Date: ${payload.generatedAt.toLocaleDateString('en-IN')}`, 118, 22);
  doc.setDrawColor(139, 17, 17);
  doc.setLineWidth(0.7);
  doc.line(12, 34, 198, 34);
}

function drawPdfField(doc, label, value, x, y, width) {
  doc.setFont('helvetica', 'bold');
  doc.text(label, x, y);
  doc.setFont('helvetica', 'normal');
  const wrapped = doc.splitTextToSize(String(value || '-'), width - 23);
  doc.text(wrapped, x + 23, y);
  return Math.max(5.2, wrapped.length * 4.2);
}

function addPdfCustomerDetails(doc, payload, y) {
  const details = payload.details;
  const messageLines = doc.splitTextToSize(`Message: ${details.message || '-'}`, 172);
  const boxHeight = 36 + Math.max(5, messageLines.length * 4.2);
  doc.setFillColor(255, 247, 223);
  doc.setDrawColor(234, 215, 165);
  doc.roundedRect(12, y, 186, boxHeight, 2, 2, 'FD');
  doc.setFontSize(8.5);
  doc.setTextColor(16, 24, 39);
  let leftY = y + 8;
  let rightY = y + 8;
  leftY += drawPdfField(doc, 'Customer:', details.name, 16, leftY, 86);
  leftY += drawPdfField(doc, 'Mobile:', details.mobile, 16, leftY, 86);
  leftY += drawPdfField(doc, 'City/Area:', details.city, 16, leftY, 86);
  rightY += drawPdfField(doc, 'District:', details.district, 106, rightY, 86);
  rightY += drawPdfField(doc, 'Postal:', details.postalArea, 106, rightY, 86);
  rightY += drawPdfField(doc, 'PIN Code:', details.pincode, 106, rightY, 86);
  doc.setFont('helvetica', 'normal');
  doc.text(messageLines, 16, y + boxHeight - (messageLines.length * 4.2));
  return y + boxHeight + 8;
}

function ensurePdfPageSpace(doc, y, needed, payload, title, subtitle, tableHeaderFn) {
  if (y + needed <= 282) return y;
  doc.addPage();
  addPdfHeader(doc, payload, title, subtitle);
  return tableHeaderFn(42);
}

function drawTableCell(doc, text, x, y, width, options = {}) {
  const fontSize = options.fontSize || 7.2;
  doc.setFontSize(fontSize);
  const lines = doc.splitTextToSize(String(text || ''), width);
  const drawX = options.align === 'right' ? x + width : options.align === 'center' ? x + width / 2 : x;
  doc.text(lines, drawX, y, { align: options.align || 'left' });
  return lines.length;
}

function downloadEstimatePDF(payload = prepareDocumentPayload()) {
  if (!payload) return;
  const jsPDF = window.jspdf?.jsPDF;
  if (!jsPDF) { alert('PDF library is still loading. Please try again in a few seconds.'); return; }
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const title = 'Customer Estimate';
  const subtitle = 'Selected items only with MRP, discount price, quantity, total and savings.';
  addPdfHeader(doc, payload, title, subtitle);
  let y = addPdfCustomerDetails(doc, payload, 40);

  const columns = [
    { label: 'S.No', x: 12, w: 10, align: 'center' },
    { label: 'Product', x: 24, w: 54, align: 'left' },
    { label: 'Unit', x: 80, w: 13, align: 'center' },
    { label: 'MRP', x: 96, w: 21, align: 'right' },
    { label: 'Disc. Price', x: 120, w: 24, align: 'right' },
    { label: 'Qty', x: 147, w: 10, align: 'center' },
    { label: 'Item Total', x: 160, w: 20, align: 'right' },
    { label: 'You Save', x: 182, w: 16, align: 'right' }
  ];

  const drawHeader = (headerY) => {
    doc.setFillColor(95, 7, 7);
    doc.rect(10, headerY, 190, 9, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(7.2);
    doc.setTextColor(247, 201, 72);
    columns.forEach(col => doc.text(col.label, col.align === 'right' ? col.x + col.w : col.align === 'center' ? col.x + col.w / 2 : col.x, headerY + 5.8, { align: col.align }));
    return headerY + 11;
  };
  y = drawHeader(y);

  payload.items.forEach((item, index) => {
    const productLines = doc.splitTextToSize(item.name, columns[1].w);
    const rowHeight = Math.max(10, productLines.length * 4.1 + 5);
    y = ensurePdfPageSpace(doc, y, rowHeight, payload, title, subtitle, drawHeader);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.2);
    doc.setTextColor(16, 24, 39);
    doc.setDrawColor(234, 215, 165);
    doc.line(10, y + rowHeight, 200, y + rowHeight);
    drawTableCell(doc, String(index + 1), columns[0].x, y + 5, columns[0].w, { align: 'center' });
    drawTableCell(doc, item.name, columns[1].x, y + 5, columns[1].w);
    drawTableCell(doc, item.unit, columns[2].x, y + 5, columns[2].w, { align: 'center' });
    drawTableCell(doc, formatInrForDocs(item.mrp), columns[3].x, y + 5, columns[3].w, { align: 'right', fontSize: 6.7 });
    drawTableCell(doc, formatInrForDocs(item.price), columns[4].x, y + 5, columns[4].w, { align: 'right', fontSize: 6.7 });
    drawTableCell(doc, String(item.qty), columns[5].x, y + 5, columns[5].w, { align: 'center' });
    drawTableCell(doc, formatInrForDocs(item.total), columns[6].x, y + 5, columns[6].w, { align: 'right', fontSize: 6.7 });
    drawTableCell(doc, getItemSavingLabel(item), columns[7].x, y + 5, columns[7].w, { align: 'right', fontSize: 6.4 });
    y += rowHeight;
  });

  y = ensurePdfPageSpace(doc, y, 38, payload, title, subtitle, drawHeader);
  doc.setFillColor(255, 247, 223);
  doc.setDrawColor(234, 215, 165);
  doc.roundedRect(104, y + 4, 94, 28, 2, 2, 'FD');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(16, 24, 39);
  doc.text('Total MRP Value:', 108, y + 12);
  doc.text('Grand Total After Discount:', 108, y + 20);
  doc.text('Total Savings After Discount:', 108, y + 28);
  doc.setTextColor(139, 17, 17);
  doc.text(formatInrForDocs(payload.totalMrpValue), 194, y + 12, { align: 'right' });
  doc.text(formatInrForDocs(payload.totalAmount), 194, y + 20, { align: 'right' });
  doc.setTextColor(15, 81, 50);
  doc.text(formatInrForDocs(payload.totalSavings), 194, y + 28, { align: 'right' });

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(80, 80, 80);
  const note = 'Important: This is an estimate only and not an online purchase confirmation. Final availability, permitted products, payment method and pickup/delivery details will be confirmed only through official RAMDEV TRADERS contact. Minimum enquiry value: INR 3,000.';
  doc.text(doc.splitTextToSize(note, 186), 12, y + 42);
  doc.save(`${payload.enquiryNo}_customer_estimate.pdf`);
}

function downloadPackingPDF(payload = prepareDocumentPayload()) {
  if (!payload) return;
  const jsPDF = window.jspdf?.jsPDF;
  if (!jsPDF) { alert('PDF library is still loading. Please try again in a few seconds.'); return; }
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
  const title = 'Shop Packing List';
  const subtitle = 'For shop staff only. Prices are hidden intentionally.';
  addPdfHeader(doc, payload, title, subtitle);
  let y = addPdfCustomerDetails(doc, payload, 40);

  const drawHeader = (headerY) => {
    doc.setFillColor(16, 24, 39);
    doc.rect(12, headerY, 186, 9, 'F');
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8);
    doc.setTextColor(247, 201, 72);
    doc.text('S.No', 16, headerY + 5.8);
    doc.text('Product Name', 33, headerY + 5.8);
    doc.text('Category', 124, headerY + 5.8);
    doc.text('Unit', 164, headerY + 5.8);
    doc.text('Qty', 184, headerY + 5.8);
    return headerY + 11;
  };
  y = drawHeader(y);

  payload.items.forEach((item, index) => {
    const productLines = doc.splitTextToSize(item.name, 86);
    const categoryLines = doc.splitTextToSize(item.category, 36);
    const rowHeight = Math.max(10, productLines.length * 4.1 + 5, categoryLines.length * 4.1 + 5);
    y = ensurePdfPageSpace(doc, y, rowHeight, payload, title, subtitle, drawHeader);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(7.5);
    doc.setTextColor(16, 24, 39);
    doc.setDrawColor(234, 215, 165);
    doc.line(12, y + rowHeight, 198, y + rowHeight);
    doc.text(String(index + 1), 16, y + 5);
    doc.text(productLines, 33, y + 5);
    doc.text(categoryLines, 124, y + 5);
    doc.text(item.unit, 164, y + 5);
    doc.setFont('helvetica', 'bold');
    doc.text(String(item.qty), 184, y + 5);
    y += rowHeight;
  });

  y = ensurePdfPageSpace(doc, y, 18, payload, title, subtitle, drawHeader);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(139, 17, 17);
  doc.text(doc.splitTextToSize('Packing instruction: Check quantity carefully before dispatch. No pricing is shown on this staff packing list.', 182), 12, y + 9);
  doc.save(`${payload.enquiryNo}_packing_list.pdf`);
}

function downloadEstimatePdfAction() {
  const payload = prepareDocumentPayload();
  if (payload) downloadEstimatePDF(payload);
}

function downloadEstimateExcelAction() {
  const payload = prepareDocumentPayload();
  if (payload) downloadEstimateExcel(payload);
}

function downloadPackingPdfAction() {
  const payload = prepareDocumentPayload();
  if (payload) downloadPackingPDF(payload);
}

function downloadPackingExcelAction() {
  const payload = prepareDocumentPayload();
  if (payload) downloadPackingExcel(payload);
}

function downloadAllOrderDocuments(payload) {
  downloadEstimatePDF(payload);
  downloadEstimateExcel(payload);
  downloadPackingPDF(payload);
  downloadPackingExcel(payload);
}

function printSelectedEstimate() {
  const items = getCartItems();
  if (items.length === 0) { alert('Please select at least one product before printing.'); return; }
  if (!validateMinimumValue()) return;
  const details = validateCustomerDetails();
  if (!details) return;

  const enquiryNo = generateEnquiryNumber();
  const totalAmount = items.reduce((sum, item) => sum + item.total, 0);
  const rows = items.map(item => `
    <tr>
      <td>${item.id}</td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.unit)}</td>
      <td>${item.qty}</td>
      <td>${formatCurrency(item.price)}</td>
      <td>${formatCurrency(item.total)}</td>
    </tr>`).join('');

  const printHtml = `<!DOCTYPE html><html><head><title>RAMDEV TRADERS Estimate</title>
    <style>
      body{font-family:Arial,Helvetica,sans-serif;margin:24px;color:#101827}.estimate-head{display:flex;justify-content:space-between;gap:20px;border-bottom:3px solid #8b1111;padding-bottom:12px;margin-bottom:18px}.estimate-head h1{margin:0;color:#8b1111;font-size:26px}.estimate-head p{margin:4px 0}.badge{display:inline-block;background:#fff2b8;color:#5f0707;padding:6px 10px;border-radius:999px;font-weight:800}.details{display:grid;grid-template-columns:1fr 1fr;gap:8px 20px;margin:16px 0;padding:14px;background:#fff7df;border:1px solid #ead7a5;border-radius:12px}.details div{font-size:14px}table{width:100%;border-collapse:collapse;margin-top:14px}th{background:#5f0707;color:#f7c948;text-align:left}th,td{border:1px solid #ead7a5;padding:9px;font-size:13px}.total{text-align:right;font-size:22px;color:#8b1111;font-weight:900;margin-top:16px}.note{margin-top:18px;padding:12px;border:1px dashed #f97316;background:#fff7df;font-size:13px}.footer{margin-top:22px;text-align:center;color:#6b7280;font-size:12px}@media print{body{margin:14mm}.no-print{display:none}}
    </style></head><body>
      <div class="estimate-head"><div><h1>RAMDEV TRADERS</h1><p>The Original Sivakasi Crackers</p><span class="badge">Customer Estimate Only</span></div><div><p><strong>Enquiry No:</strong> ${enquiryNo}</p><p><strong>Date:</strong> ${new Date().toLocaleDateString('en-IN')}</p></div></div>
      <div class="details"><div><strong>Name:</strong> ${escapeHtml(details.name)}</div><div><strong>Mobile:</strong> ${escapeHtml(details.mobile)}</div><div><strong>City/Area:</strong> ${escapeHtml(details.city)}</div><div><strong>District:</strong> ${escapeHtml(details.district)}</div><div><strong>Postal Area:</strong> ${escapeHtml(details.postalArea)}</div><div><strong>PIN Code:</strong> ${escapeHtml(details.pincode)}</div></div>
      <table><thead><tr><th>S.No</th><th>Product</th><th>Unit</th><th>Qty</th><th>Rate</th><th>Total</th></tr></thead><tbody>${rows}</tbody></table>
      <div class="total">Grand Total: ${formatCurrency(totalAmount)}</div>
      <div class="note"><strong>Important:</strong> This is an estimate only and not an online purchase confirmation. Final availability, permitted products, payment method and pickup/delivery details will be confirmed only through official RAMDEV TRADERS contact. Minimum enquiry value: ₹3,000.</div>
      <div class="footer">அனைவருக்கும் இனிய தீபாவளி நல்வாழ்த்துகள்</div>
      <script>window.onload=function(){window.print();};<\/script>
    </body></html>`;

  const printWindow = window.open('', '_blank');
  if (!printWindow) { alert('Popup blocked. Please allow popups to print the estimate.'); return; }
  printWindow.document.open();
  printWindow.document.write(printHtml);
  printWindow.document.close();
}

function sendWhatsAppEnquiry() {
  const payload = prepareDocumentPayload();
  if (!payload) return;
  const { items, details, enquiryNo, totalAmount } = payload;

  downloadAllOrderDocuments(payload);
  const productLines = items.map(item => `- ${item.id}. ${item.name} (${item.unit}) | Qty: ${item.qty} | Rate: ${formatCurrency(item.price)} | Total: ${formatCurrency(item.total)}`).join('%0A');
  const message = `RAMDEV TRADERS Price List Enquiry%0AEnquiry No: ${encodeURIComponent(enquiryNo)}%0A%0AName: ${encodeURIComponent(details.name)}%0AMobile: ${encodeURIComponent(details.mobile)}%0ACity/Area: ${encodeURIComponent(details.city)}%0ADistrict: ${encodeURIComponent(details.district)}%0APostal Area: ${encodeURIComponent(details.postalArea)}%0APIN Code: ${encodeURIComponent(details.pincode)}%0A%0ASelected Products:%0A${productLines}%0A%0AEstimate Total: ${encodeURIComponent(formatCurrency(totalAmount))}%0A%0AMessage: ${encodeURIComponent(details.message || 'No special request')}%0A%0ANote: Please confirm availability, permitted products and next steps through official contact only.`;
  window.open(`https://wa.me/${officialWhatsappNumber}?text=${message}`, '_blank');
}

function scrollToSelectedCategory() {
  const selectedCategory = new URLSearchParams(window.location.search).get('category');
  if (!selectedCategory) return;
  const target = document.getElementById(`category-${categorySlug(selectedCategory)}`);
  const wrapper = document.querySelector('.product-tile-scroll');
  const layout = document.querySelector('.tile-layout');
  if (target && wrapper) {
    setTimeout(() => {
      if (layout) window.scrollTo({ top: layout.offsetTop - 105, behavior: 'smooth' });
      wrapper.scrollTo({ top: Math.max(0, target.offsetTop - 20), behavior: 'smooth' });
    }, 350);
  }
}


function openImagePopup(imageSrc, productName) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalCaption = document.getElementById('modalCaption');
  if (!modal || !modalImage) return;
  modalImage.src = imageSrc;
  modalImage.alt = productName || 'Product image';
  if (modalCaption) modalCaption.textContent = productName || 'Product image';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeImagePopup() {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (modalImage) modalImage.src = '';
}

document.addEventListener('click', event => {
  const modal = document.getElementById('imageModal');
  if (modal && modal.classList.contains('open') && event.target === modal) closeImagePopup();
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeImagePopup();
});

document.getElementById('searchInput')?.addEventListener('input', renderProducts);

document.getElementById('customerPincode')?.addEventListener('input', handlePincodeAutoFill);

document.getElementById('customerDistrict')?.addEventListener('focus', event => showDistrictSuggestions(event.target.value));
document.getElementById('customerDistrict')?.addEventListener('input', event => {
  if (!isAutoFillingLocation) districtManuallyEdited = true;
  showDistrictSuggestions(event.target.value);
});
document.getElementById('customerPostalArea')?.addEventListener('input', () => {
  if (!isAutoFillingLocation) postalAreaManuallyEdited = true;
});
document.addEventListener('click', event => {
  const wrap = document.querySelector('.district-autocomplete-wrap');
  const suggestions = document.getElementById('districtSuggestions');
  if (wrap && suggestions && !wrap.contains(event.target)) suggestions.classList.remove('open');
});

renderProducts();
scrollToSelectedCategory();
