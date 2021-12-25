const palettes = [
  {
    one: "#C55FFC",
    two: "#EFDCF9",
    three: "#323E42",
    four: "#7954A1",
    like: "4k",
    date: "1",
    id: 1,
    category: "purple",
  },
  {
    one: "#FFBD35",
    two: "#3FA796",
    three: "#8267BE",
    four: "#502064",
    like: "4k",
    date: "3",
    id: 2,
    category: "purple",
  },
  {
    one: "#000957",
    two: "#344CB7",
    three: "#577BC1",
    four: "#EBE645",
    like: "5k",
    date: "4",
    id: 3,
    category: "blue",
  },
  {
    one: "#064635",
    two: "#519259",
    three: "#F0BB62",
    four: "#F4EEA9",
    like: "2k",
    date: "5",
    id: 4,
    category: "green",
  },
  {
    one: "#F5F5F5",
    two: "#F05454",
    three: "#30475E",
    four: "#121212",
    like: "9k",
    date: "7",
    id: 5,
    category: "red",
  },
  {
    one: "#142F43",
    two: "#FFAB4C",
    three: "#FF5F7E",
    four: "#B000B9",
    like: "7k",
    date: "8",
    id: 6,
    category: "pink",
  },
  {
    one: "#191919",
    two: "#2D4263",
    three: "#C84B31",
    four: "#ECDBBA",
    like: "2k",
    date: "6",
    id: 7,
    category: "black",
  },
  {
    one: "#000000",
    two: "#3E065F",
    three: "#700B97",
    four: "#8E05C2",
    like: "3k",
    date: "7",
    id: 8,
    category: "purple",
  },
  {
    one: "#FFBD35",
    two: "#3FA796",
    three: "#8267BE",
    four: "#502064",
    like: "4k",
    date: "4",
    id: 9,
    category: "yellow",
  },
  {
    one: "#FAF3F3",
    two: "#E1E5EA",
    three: "#A7BBC7",
    four: "#DA7F8F",
    like: "1k",
    date: "10",
    id: 10,
    category: "gray",
  },
  {
    one: "#F7F7F7",
    two: "#FFBC97",
    three: "#FF7800",
    four: "#FFE300",
    like: "8k",
    date: "12",
    id: 11,
    category: "orange",
  },
  {
    one: "#2E4C6D",
    two: "#396EB0",
    three: "#DADDFC",
    four: "#FC997C",
    like: "7k",
    date: "9",
    id: 12,
    category: "blue",
  },
  {
    one: "#F7F7F7",
    two: "#FFBC97",
    three: "#FF7800",
    four: "#FFE300",
    like: "14k",
    date: "15",
    id: 13,
    category: "white",
  },
  {
    one: "#D06224",
    two: "#AE431E",
    three: "#8A8635",
    four: "#E9C891",
    like: "11k",
    date: "17",
    id: 14,
    category: "brown",
  },
  {
    one: "#400082",
    two: "#7E0CF5",
    three: "#CD4DCC",
    four: "#F7BEFF",
    like: "12k",
    date: "16",
    id: 15,
    category: "purple",
  },
  {
    one: "#002366",
    two: "#0F52BA",
    three: "#FA8072",
    four: "#FFDAB9",
    like: "12k",
    date: "18",
    id: 16,
    category: "blue",
  },
  {
    one: "#0A1931",
    two: "#185ADB",
    three: "#FFC947",
    four: "#EFEFEF",
    like: "14k",
    date: "15",
    id: 17,
    category: "blue",
  },
  {
    one: "#FFC93C",
    two: "#07689F",
    three: "#40A8C4",
    four: "#A2D5F2",
    like: "6k",
    date: "13",
    id: 18,
    category: "yellow",
  },
  {
    one: "#342EAD",
    two: "#EA6227",
    three: "#F2A51A",
    four: "#B9EBCC",
    like: "4k",
    date: "15",
    id: 19,
    category: "blue",
  },
  {
    one: "#23374D",
    two: "#1089FF",
    three: "#E5E5E5",
    four: "#EEEEEE",
    like: "13k",
    date: "19",
    id: 20,
    category: "blue",
  },
  {
    one: "#125C13",
    two: "#3E7C17",
    three: "#F4A442",
    four: "#E8E1D9",
    like: "9k",
    date: "20",
    id: 21,
    category: "green",
  },
  {
    one: "#191A19",
    two: "#1E5128",
    three: "#4E9F3D",
    four: "#D8E9A8",
    like: "20k",
    date: "23",
    id: 22,
    category: "green",
  },
  {
    one: "#28DF99",
    two: "#99F3BD",
    three: "#D2F6C5",
    four: "#F6F7D4",
    like: "15k",
    date: "25",
    id: 23,
    category: "green",
  },
  {
    one: "#206A5D",
    two: "#81B214",
    three: "#BFDCAE",
    four: "#F1F1E8",
    like: "23k",
    date: "29",
    id: 24,
    category: "green",
  },
  {
    one: "#CDB30C",
    two: "#62760C",
    three: "#535204",
    four: "#523906",
    like: "22k",
    date: "24",
    id: 25,
    category: "green",
  },
  {
    one: "#EBECF1",
    two: "#206A5D",
    three: "#1F4068",
    four: "#1B1C25",
    like: "38k",
    date: "12",
    id: 26,
    category: "green",
  },
  {
    one: "#FFE6E6",
    two: "#FF2626",
    three: "#BD1616",
    four: "#000000",
    like: "4k",
    date: "21",
    id: 27,
    category: "red",
  },
  {
    one: "#F5E6CA",
    two: "#FB9300",
    three: "#F54748",
    four: "#343F56",
    like: "28k",
    date: "25",
    id: 28,
    category: "red",
  },
  {
    one: "#511845",
    two: "#900C3F",
    three: "#C70039",
    four: "#FF5733",
    like: "21k",
    date: "20",
    id: 29,
    category: "red",
  },
  {
    one: "#2D132C",
    two: "#801336",
    three: "#C72C41",
    four: "#EE4540",
    like: "30k",
    date: "23",
    id: 30,
    category: "red",
  },
  {
    one: "#EEEEEE",
    two: "#DEDEDE",
    three: "#FF4949",
    four: "#C10000",
    like: "30k",
    date: "40",
    id: 31,
    category: "red",
  },
  {
    one: "#4D089A",
    two: "#323EDD",
    three: "#DC2ADE",
    four: "#E8F044",
    like: "12k",
    date: "28",
    id: 32,
    category: "pink",
  },
  {
    one: "#400082",
    two: "#7E0CF5",
    three: "#CD4DCC",
    four: "#F7BEFF",
    like: "29k",
    date: "34",
    id: 33,
    category: "pink",
  },
  {
    one: "#413C69",
    two: "#4A47A3",
    three: "#AD62AA",
    four: "#F4B0C7",
    like: "21k",
    date: "30",
    id: 34,
    category: "pink",
  },
  {
    one: "#F7E8F6",
    two: "#F1C6E7",
    three: "#E5B0EA",
    four: "#BD83CE",
    like: "30k",
    date: "40",
    id: 35,
    category: "pink",
  },
  {
    one: "#3F3038",
    two: "#FDF6FA",
    three: "#FDAED8",
    four: "#F361AF",
    like: "32k",
    date: "43",
    id: 36,
    category: "pink",
  },
  {
    one: "#000000",
    two: "#3D0000",
    three: "#950101",
    four: "#FF0000",
    like: "35k",
    date: "45",
    id: 37,
    category: "black",
  },
  {
    one: "#212121",
    two: "#6D9886",
    three: "#D9CAB3",
    four: "#F6F6F6",
    like: "34k",
    date: "45",
    id: 38,
    category: "black",
  },
  {
    one: "#082032",
    two: "#2C394B",
    three: "#334756",
    four: "#FF4C29",
    like: "43k",
    date: "56",
    id: 39,
    category: "black",
  },
  {
    one: "#F0E3CA",
    two: "#FF8303",
    three: "#A35709",
    four: "#1B1A17",
    like: "35k",
    date: "64",
    id: 40,
    category: "black",
  },
  {
    one: "#FFCE45",
    two: "#D4AC2B",
    three: "#B05E27",
    four: "#7E370C",
    like: "26k",
    date: "51",
    id: 41,
    category: "yellow",
  },
  {
    one: "#F7FD04",
    two: "#F9B208",
    three: "#F98404",
    four: "#FC5404",
    like: "47k",
    date: "53",
    id: 42,
    category: "yellow",
  },
  {
    one: "#FED049",
    two: "#007580",
    three: "#282846",
    four: "#D8EBE4",
    like: "47k",
    date: "53",
    id: 43,
    category: "yellow",
  },
  {
    one: "#FFF8CD",
    two: "#FFE05D",
    three: "#FF9642",
    four: "#646464",
    like: "22k",
    date: "52",
    id: 44,
    category: "yellow",
  },
  {
    one: "#FFEFA0",
    two: "#FFD57E",
    three: "#FCA652",
    four: "#AC4B1C",
    like: "52k",
    date: "63",
    id: 45,
    category: "yellow",
  },
  {
    one: "#F6F4E6",
    two: "#FDDB3A",
    three: "#52575D",
    four: "#41444B",
    like: "67k",
    date: "44",
    id: 46,
    category: "yellow",
  },
  {
    one: "#F6F5F5",
    two: "#D3E0EA",
    three: "#1687A7",
    four: "#276678",
    like: "23k",
    date: "76",
    id: 47,
    category: "gray",
  },
  {
    one: "#E6E6E6",
    two: "#C5A880",
    three: "#532E1C",
    four: "#0F0F0F",
    like: "75k",
    date: "34",
    id: 48,
    category: "gray",
  },
  {
    one: "#F4F4F2",
    two: "#E8E8E8",
    three: "#BBBFCA",
    four: "#495464",
    like: "64k",
    date: "36",
    id: 49,
    category: "gray",
  },
  {
    one: "#EEEEEE",
    two: "#686D76",
    three: "#373A40",
    four: "#19D3DA",
    like: "14k",
    date: "15",
    id: 50,
    category: "gray",
  },
  {
    one: "#E8E4E1",
    two: "#F9C49A",
    three: "#EC823A",
    four: "#7C3C21",
    like: "68k",
    date: "36",
    id: 51,
    category: "gray",
  },
  {
    one: "#E26A2C",
    two: "#FF8243",
    three: "#FDA65D",
    four: "#FFD07F",
    like: "75k",
    date: "46",
    id: 52,
    category: "orange",
  },
  {
    one: "#F0A500",
    two: "#334756",
    three: "#082032",
    four: "#000000",
    like: "47k",
    date: "57",
    id: 53,
    category: "orange",
  },
  {
    one: "#864000",
    two: "#D44000",
    three: "#FF7A00",
    four: "#FFEFCF",
    like: "57k",
    date: "75",
    id: 54,
    category: "orange",
  },
  {
    one: "#F88F01",
    two: "#E27802",
    three: "#6A492B",
    four: "#58391C",
    like: "68k",
    date: "53",
    id: 55,
    category: "orange",
  },
  {
    one: "#2A1A5E",
    two: "#F45905",
    three: "#FB9224",
    four: "#FBE555",
    like: "26k",
    date: "75",
    id: 56,
    category: "orange",
  },
  {
    one: "#FFC15E",
    two: "#8158FC",
    three: "#692DB7",
    four: "#34314F",
    like: "14k",
    date: "36",
    id: 57,
    category: "orange",
  },
  {
    one: "#FFFFFF",
    two: "#F9F6F7",
    three: "#FFE8D6",
    four: "#FF971D",
    like: "47k",
    date: "74",
    id: 58,
    category: "white",
  },
  {
    one: "#F3F8FF",
    two: "#DEECFF",
    three: "#C6CFFF",
    four: "#E8D3FF",
    like: "87k",
    date: "97",
    id: 59,
    category: "white",
  },
  {
    one: "#F4F7F7",
    two: "#79A8A9",
    three: "#4D727E",
    four: "#1F4E5F",
    like: "75k",
    date: "37",
    id: 60,
    category: "white",
  },
  {
    one: "#C36A2D",
    two: "#E2C275",
    three: "#EADCA6",
    four: "#FBFBFB",
    like: "120k",
    date: "86",
    id: 61,
    category: "brown",
  },
  {
    one: "#2D2424",
    two: "#5C3D2E",
    three: "#B85C38",
    four: "#E0C097",
    like: "180k",
    date: "97",
    id: 62,
    category: "brown",
  },
  {
    one: "#753422",
    two: "#B05B3B",
    three: "#D79771",
    four: "#FFEBC9",
    like: "123k",
    date: "57",
    id: 63,
    category: "brown",
  },
  {
    one: "#402218",
    two: "#865439",
    three: "#C68B59",
    four: "#D7B19D",
    like: "143k",
    date: "90",
    id: 64,
    category: "brown",
  },
  {
    one: "#864000",
    two: "#D44000",
    three: "#FF7A00",
    four: "#FFEFCF",
    like: "145k",
    date: "75",
    id: 65,
    category: "brown",
  },
  {
    one: "#E8E4E1",
    two: "#F9C49A",
    three: "#EC823A",
    four: "#7C3C21",
    like: "165k",
    date: "97",
    id: 66,
    category: "brown",
  },
  {
    one: "#442727",
    two: "#EAE7D9",
    three: "#D2C6B2",
    four: "#937D14",
    like: "123k",
    date: "57",
    id: 67,
    category: "brown",
  },
  {
    one: "#400082",
    two: "#7E0CF5",
    three: "#CD4DCC",
    four: "#F7BEFF",
    like: "165k",
    date: "36",
    id: 68,
    category: "purple",
  },
  {
    one: "#6807F9",
    two: "#9852F9",
    three: "#C299FC",
    four: "#FFD739",
    like: "157k",
    date: "76",
    id: 69,
    category: "purple",
  },
  {
    one: "#6927FF",
    two: "#837DFF",
    three: "#BF81FF",
    four: "#FFD581",
    like: "124k",
    date: "75",
    id: 70,
    category: "purple",
  },
  {
    one: "#EAE7ED",
    two: "#B793E6",
    three: "#646ECB",
    four: "#3532A7",
    like: "166k",
    date: "76",
    id: 71,
    category: "purple",
  },
  {
    one: "#FFF6F6",
    two: "#EEA1EB",
    three: "#CB22D7",
    four: "#891180",
    like: "167k",
    date: "487",
    id: 72,
    category: "purple",
  },
  {
    one: "#FF6107",
    two: "#E9290F",
    three: "#C40018",
    four: "#292725",
    like: "154k",
    date: "37",
    id: 73,
    category: "brown",
  },
  {
    one: "#FF94C7",
    two: "#E760BF",
    three: "#7E49AC",
    four: "#7E49AC",
    like: "335k",
    date: "534",
    id: 74,
    category: "pink",
  },
  {
    one: "#141829",
    two: "#21294C",
    three: "#F2DEA8",
    four: "#F9F2D7",
    like: "335k",
    date: "534",
    id: 75,
    category: "black",
  },
  {
    one: "#DADDDF",
    two: "#F69314",
    three: "#C40B13",
    four: "#621295",
    like: "435k",
    date: "323",
    id: 76,
    category: "black",
  },
  {
    one: "#F8F9FC",
    two: "#C00000",
    three: "#DE3C3C",
    four: "#F7B32D",
    like: "454k",
    date: "234",
    id: 77,
    category: "red",
  },
  {
    one: "#FFFBCC",
    two: "#FD2E2E",
    three: "#CF1B1B",
    four: "#900D0D",
    like: "343k",
    date: "233",
    id: 78,
    category: "red",
  },
  {
    one: "#EDFFEA",
    two: "#75DAAD",
    three: "#216353",
    four: "#7A4D1D",
    like: "233k",
    date: "233",
    id: 79,
    category: "green",
  },
  {
    one: "#EBF0F6",
    two: "#98CCD3",
    three: "#364E68",
    four: "#132238",
    like: "234k",
    date: "123",
    id: 80,
    category: "gray",
  },
  {
    one: "#F7F7F7",
    two: "#EEEEEE",
    three: "#393E46",
    four: "#929AAB",
    like: "231k",
    date: "143",
    id: 81,
    category: "gray",
  },
  {
    one: "#064ACB",
    two: "#366ED8",
    three: "#F3A953",
    four: "#F2F3F3",
    like: "654k",
    date: "564",
    id: 82,
    category: "blue",
  },
  {
    one: "#074684",
    two: "#0EA5C6",
    three: "#A0EDF7",
    four: "#A0EDF7",
    like: "664k",
    date: "234",
    id: 83,
    category: "blue",
  },
  {
    one: "#212121",
    two: "#323232",
    three: "#0D7377",
    four: "#14FFEC",
    like: "212k",
    date: "54",
    id: 84,
    category: "black",
  },
];

export default palettes;