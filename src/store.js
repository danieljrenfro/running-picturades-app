const store = {
  users: [
    {
      id: 1,
      user_name: 'Daniel Renfro',
      password: 'password',
      email: 'daniel@example.com'
    },
    {
      id: 2,
      user_name: 'Laurie Renfro',
      password: 'easypassword',
      email: 'laurie@example.com'
    }
  ],
  lists: [
    {
      id: 1,
      title: 'Misc Actions 1',
      type: 'Charades',
      date_created: '1/6/2021 1:30PM',
      user_id: 1
    },
    {
      id: 2,
      title: 'Misc Actions 2',
      type: 'Charades',
      date_created: '1/6/2021 1:30PM',
      user_id: 2
    },
    {
      id: 3,
      title: 'Famous Cartoon Characters',
      type: 'Pictionary',
      date_created: '1/6/2021 1:30PM',
      user_id: 2
    },
    {
      id: 4,
      title: 'Vacation Spots: US', 
      type: 'Pictionary',
      date_created: '1/6/2021 1:30PM',
      user_id: 2
    },
    {
      id: 5,
      title: 'Seasons: Summer',
      type: 'Pictionary',
      date_created: '1/6/2021 1:30PM',
      user_id: 1
    }
  ],
  words: [
    {id: 1, list_id: 1, word: 'Washing Windows'},
    {id: 2, list_id: 1, word: 'Playing Twister'},
    {id: 3, list_id: 1, word: 'Diving in a Pool'},
    {id: 4, list_id: 1, word: 'Hiking'},
    {id: 5, list_id: 1, word: 'Taking a Picture'},
    {id: 6, list_id: 1, word: 'Cutting hair'},
    {id: 7, list_id: 1, word: 'Putting out a Fire'},
    {id: 8, list_id: 1, word: 'Opening Birthday Presents'},
    {id: 9, list_id: 1, word: 'Riding a Rollercoaster'},
    {id: 10, list_id: 1, word: 'Eating Spaghetti'},
    {id: 11, list_id: 1, word: 'Surfing'},
    {id: 12, list_id: 1, word: 'Climbing a Tree'},
    {id: 13, list_id: 1, word: 'Texting while Driving'},
    {id: 14, list_id: 1, word: 'Putting Makeup On'},
    {id: 15, list_id: 1, word: 'Running from a Bear'},
    {id: 16, list_id: 2, word: 'Skydiving'},
    {id: 17, list_id: 2, word: 'Sneezing'},
    {id: 18, list_id: 2, word: 'Jumping in Puddles'},
    {id: 19, list_id: 2, word: 'Putting a Baby to Sleep'},
    {id: 20, list_id: 2, word: 'Riding on a Zipline'},
    {id: 21, list_id: 2, word: 'Swing Dancing'},
    {id: 22, list_id: 2, word: 'Proposing'},
    {id: 23, list_id: 2, word: 'Building Sandcastles'},
    {id: 24, list_id: 2, word: 'Going down a waterslide'},
    {id: 25, list_id: 2, word: 'Jumping on a Trampoline'},
    {id: 26, list_id: 2, word: 'Studying at a Coffee Shop'},
    {id: 27, list_id: 2, word: 'Burping a baby'},
    {id: 28, list_id: 2, word: 'Trying on Clothes'},
    {id: 29, list_id: 2, word: 'Playing Hide & Seek'},
    {id: 30, list_id: 2, word: 'Making a Campfire'},
    {id: 31, list_id: 3, word: 'Bugs Bunny'},
    {id: 32, list_id: 3, word: 'Winnie the Pooh'},
    {id: 33, list_id: 3, word: 'Mickey Mouse'},
    {id: 34, list_id: 3, word: 'Fred Flinstone'},
    {id: 35, list_id: 3, word: 'Curious George'},
    {id: 36, list_id: 3, word: 'Popeye'},
    {id: 37, list_id: 3, word: 'The Grinch'},
    {id: 38, list_id: 3, word: 'Elmo'},
    {id: 39, list_id: 3, word: 'Donald Duck'},
    {id: 40, list_id: 3, word: 'Tom & Jerry'},
    {id: 41, list_id: 3, word: 'Pinnocchio'},
    {id: 42, list_id: 3, word: 'Tarzan'},
    {id: 43, list_id: 3, word: 'Clifford the Big Red Dog'},
    {id: 44, list_id: 3, word: 'Nemo'},
    {id: 45, list_id: 3, word: 'Tigger'},
    {id: 46, list_id: 4, word: 'Disney World'},
    {id: 47, list_id: 4, word: 'Niagara Falls'},
    {id: 48, list_id: 4, word: 'Golden Gate Bridge'},
    {id: 49, list_id: 4, word: 'Grand Canyon'},
    {id: 50, list_id: 4, word: 'Mount Rushmore'},
    {id: 51, list_id: 4, word: 'The Alamo'},
    {id: 52, list_id: 4, word: 'Statue of Liberty'},
    {id: 53, list_id: 4, word: 'Yellowstone National Park'},
    {id: 54, list_id: 4, word: 'Brooklyn Bridge'},
    {id: 55, list_id: 4, word: 'Empire State Building'},
    {id: 56, list_id: 4, word: 'Pearl Harbor'},
    {id: 57, list_id: 4, word: 'Six Flags'},
    {id: 58, list_id: 4, word: 'Alaska'},
    {id: 59, list_id: 4, word: 'Sea World'},
    {id: 60, list_id: 4, word: 'Redwoods'},
    {id: 61, list_id: 5, word: 'Swimming'},
    {id: 62, list_id: 5, word: 'Watermelon'},
    {id: 63, list_id: 5, word: 'Beach'},
    {id: 64, list_id: 5, word: '4th of July'},
    {id: 65, list_id: 5, word: 'Fireworks'},
    {id: 66, list_id: 5, word: 'Sandals'},
    {id: 67, list_id: 5, word: 'Pool Party'},
    {id: 68, list_id: 5, word: 'Road Trip'},
    {id: 69, list_id: 5, word: 'Sunscreen'},
    {id: 70, list_id: 5, word: 'Lemonade'},
    {id: 71, list_id: 5, word: 'No School'},
    {id: 72, list_id: 5, word: 'Tubing'},
    {id: 73, list_id: 5, word: 'Ice Cream'},
    {id: 74, list_id: 5, word: 'Fireflies'},
    {id: 75, list_id: 5, word: 'Picnic'},
  ]
}



export default store;