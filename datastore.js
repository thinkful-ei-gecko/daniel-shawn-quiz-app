"use strict";

const DATASTORE = [
  {
    question:
      'The "spiritual", if not the official, midpoint of the Appalachian Trail is located where?',
    answers: [
      "Waynesboro, VA",
      "Gatlinburg, TN",
      "Harper's Ferry, WV",
      "Pine Furnace State Park, PA"
    ],
    correctAnswer: "Harper's Ferry, WV",
    alt: "Appalachian Trail Conservancy headquarters in Harper's Ferry, WV",
    funFact:
      "Did you know: Harper's Ferry is home to some of the most significant events in US history, including John Brown's Raid and several Civil War Battles. It is also home to Storer College, one of the first colleges open to people of all races in the country."
  },
  {
    question:
      "The northbound endpoint of the trail is located in which state park?",
    answers: [
      "Acadia National Park",
      "Baxter State Park",
      "Wolfe Neck Woods State Park",
      "Two Lights State Park"
    ],
    correctAnswer: "Baxter State Park",
    alt: "Mount Katahdin summit",
    funFact:
      "Did you know: Baxter State Park spans over 200,000 acres, and was made possible by a series of 28 land donations by park benfactor and 53rd governor of Maine, Percival Baxter."
  },
  {
    question:
      'What is the slang term for taking a "shortcut" down a side trail?',
    answers: ["Shortcutting", "Running", "Blue blazing", "Slackpacking"],
    correctAnswer: "Blue blazing",
    alt: "A blue blaze on a tree",
    funFact:
      "Did you know: While normally discouraged by purists, one highly recommended 'blue blaze' is the Gulf Hagas scenic loop in Baxter State Park."
  },
  {
    question: 'The home of the celebrated "Trail Days" festival',
    answers: [
      "Damascus, VA",
      "Hot Springs, NC",
      "Andover, ME",
      "Hiawassee, GA"
    ],
    correctAnswer: "Damascus, VA",
    alt: "Trail Days parade in Damascus, VA",
    funFact:
      "Did you know: Trail Days held the weekend after Mother's day every year in Damascus. Hikers are treated to free food, great music, and even a place to stay for the weekend by the friendly locals in town."
  },
  {
    question:
      'Who completed the first ever solo "thru-hike" of the Appalachian Trail?',
    answers: [
      '"Grandma" Gatewood',
      '"Baltimore" Jack',
      '"Two Sticks"',
      "Earl Schaffer"
    ],
    correctAnswer: "Earl Schaffer",
    alt: "Earl Schaffer picture",
    funFact:
      'Did you know: Earl Schaffer was a WWII veteran and fought in the Pacific Theater. His plan to hike the AT was driven by his desire to "walk the Army out of my system".'
  },
  {
    question:
      "The first, and for many the last, outfitter encountered on the AT is located at...",
    answers: ["Blood Mountain", "Newfound Gap", "Neels Gap", "Grafton Notch"],
    correctAnswer: "Neels Gap",
    alt: "Neels Gap Outfitter",
    funFact:
      "Did you know: At 30 miles into the trail, The outfitter at Neels Gap is staffed by experts who provide much needed assistance to hikers needing to trim down their pack weight for the tough terrain ahead."
  },
  {
    question:
      "The Appalachian Trail does not cross over which of the following peaks?",
    answers: [
      "Grandfather Mountain",
      "Wildcat Mountain",
      '"The Priest"',
      "Saddleback Mountain"
    ],
    correctAnswer: "Grandfather Mountain",
    alt: "Smokey Mountains",
    funFact:
      "Did you know: The highest point on the A.T. is Clingman's Dome in Tennessee, with an altitude of over 6,600 feet!"
  },
  {
    question:
      "Kind souls who spend the hiking season providing services such as shuttles, food, and shelter to weary hikers are known affectionately as:",
    answers: ["Good Samaritans", "Trail Angels", "Caretakers", "Ridge Runners"],
    correctAnswer: "Trail Angels",
    alt: "The Doyle Hotel",
    funFact:
      'Did you know: "TrailAngel Mary" Parry is one of the most famous trail angels. Hailing from Duncannon, PA. She has been helping hikers passing through Pennsylvania for decades.'
  },
  {
    question:
      "Catching some kind of break on the trail, be it a free meal, a free stay, or even a shower is known as...",
    answers: ["Good luck", "Field Fortune", "Camp Karma", "Trail Magic"],
    correctAnswer: "Trail Magic",
    alt: "Trail Magic Sign",
    funFact:
      "Did you know: Trail magic can even be a small gesture, such as a well-placed gallon of water for hikers in an area where water is scarce. "
  },
  {
    question:
      "The Appalachian Trail merges and runs concurrently with another major long-distance trail. What is the name of that trail?",
    answers: [
      "Mountains-to-Sea Trail",
      "Art Loeb Trail",
      "The Makaye Memorial Path",
      "The Long Trail"
    ],
    correctAnswer: "The Long Trail",
    alt: "The Long Trail map",
    funFact:
      "Did you know: The Long trail is marked with the same white blazes as the Appalachian Trail. Be careful that you don't take the wrong trail!"
  }
];

const resultsMessage = {
  winHead: "You are a real thru-hiker!",
  winText:
    "Congrats! You have what it takes to make it all 2,200 miles to Maine. But remember: \"It ain't about the miles, it's about the smiles!",
  midHead: "You are a section hiker!",
  midText:
    'You are definitely up and comming. Keep pushing and you\'ll find your "trail legs" in no time!',
  lossHead: "You are a day hiker!",
  lossText:
    "Good start, but you have a ways to go before you tackle the AT. Keep pushing miles, and try to shake down that pack!"
};
