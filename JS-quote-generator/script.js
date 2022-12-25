//Variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [
  {
    quote:
      "The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it.",
    person: "Kid Cudi",
  },
  {
    quote:
      "I am a work in progress. I am not perfect and never will be, but I will always strive to be the best version of myself.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "You can't just sit there and wait for people to give you that golden dream. You've got to get out there and make it happen for yourself.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I believe that if you want to achieve something in life, you have to work hard for it and be dedicated. Nothing comes easily.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "Life is too short to waste time on things that don't matter. Focus on what's important and let go of the rest.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "Don't let anyone tell you that you can't do something. If you have a dream, chase it with all your heart and don't give up until you achieve it.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I am a firm believer in the power of positive thinking. If you believe in yourself and have the courage to chase your dreams, anything is possible.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I have learned that no matter how tough a situation may seem, there is always a way to overcome it. All you need is determination and a positive attitude.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I believe that life is a journey and we are all on it together. We should try to help each other and support one another on this journey called life.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I believe that we all have the power to make our own destiny. It's up to us to decide what we want in life and then go out and make it happen.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I believe that we should always be true to ourselves and never compromise our values or beliefs for anyone or anything.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I believe that we should never give up on our dreams, no matter how difficult they may seem. With hard work and perseverance, anything is possible.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "I believe that we should always strive to be the best version of ourselves and never settle for less. We are all capable of greatness if we believe in ourselves.",
    person: "Hrithik Roshan",
  },
  {
    quote: "I'm your little scarlet starlet, singing in the garden.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm your cherry bomb, baby, and I'm about to blow.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm the queen of Coney Island, baby, and I'm about to drown.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm your little American beauty, rose, and I'm so f*cking pretty.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm your gangsta Nancy Sinatra, and I'm ready to kill.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm your Hula-Hoop, baby, and I'm spinning out of control.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm your Venus, baby, and I'm your fire, your desire.",
    person: "Lana Del Ray",
  },
  {
    quote:
      "I'm the magic in the summertime, baby, and I'm the cool in the fall.",
    person: "Lana Del Ray",
  },
  {
    quote: "I'm the queen of the world, baby, and I'm about to reign.",
    person: "Lana Del Ray",
  },
  {
    quote:
      "I'm the heat in the wintertime, baby, and I'm the chill in the spring.",
    person: "Lana Del Ray",
  },
  {
    quote: "The blood jet is poetry, and there is no stopping it.",
    person: "Sylvia Plath",
  },
  {
    quote: "The blood jet is a flower, and I am the stem.",
    person: "Sylvia Plath",
  },
  {
    quote: "The blood jet is a symbol, and I am the writing.",
    person: "Sylvia Plath",
  },
  {
    quote: "The blood jet is a message, and I am the messenger.",
    person: "Sylvia Plath",
  },
  {
    quote: "The blood jet is a language, and I am the speaker.",
    person: "Sylvia Plath",
  },
  {
    quote: "Once upon a midnight dreary, while I pondered, weak and weary.",
    person: "Edgar Allan Poe",
  },
  {
    quote: "Over many a quaint and curious volume of forgotten lore.",
    person: "Edgar Allan Poe",
  },
  {
    quote: "While I nodded, nearly napping, suddenly there came a tapping.",
    person: "Edgar Allan Poe",
  },
  {
    quote: "As of some one gently rapping, rapping at my chamber door.",
    person: "Edgar Allan Poe",
  },
  {
    quote: "Tis some visitor, I muttered, tapping at my chamber door.",
    person: "Edgar Allan Poe",
  },
  { quote: "Only this and nothing more.", person: "Edgar Allan Poe" },
  {
    quote:
      "Deep into that darkness peering, long I stood there wondering, fearing.",
    person: "Edgar Allan Poe",
  },
  {
    quote:
      "I am not a hero. I am just an ordinary man who wants to live his life with dignity.",
    person: "Hrithik Roshan",
  },
  {
    quote: "Life is too short to waste time on things that don't matter.",
    person: "Kid Kudi",
  },
  {
    quote:
      "Success is not the key to happiness. Happiness is the key to success.",
    person: "Hrithik Roshan",
  },
  {
    quote: "The only way to do great work is to love what you do.",
    person: "Kid Kudi",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    person: "Hrithik Roshan",
  },
  {
    quote: "The only thing that comes to a sleeping man is dreams.",
    person: "Kid Kudi",
  },
  {
    quote:
      "The only thing that stands between you and your dream is the will to try and the belief that it is actually possible.",
    person: "Hrithik Roshan",
  },
  {
    quote: "The only way to truly be alive is to embrace the present moment.",
    person: "Kid Kudi",
  },
  {
    quote:
      "The only way to do great work is to be passionate about what you do.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "The only way to achieve true success is to embrace your fears and use them as fuel for your journey.",
    person: "Kid Kudi",
  },
  {
    quote:
      "The only way to achieve greatness is to constantly strive for improvement.",
    person: "Hrithik Roshan",
  },
  {
    quote: "The only way to overcome adversity is to face it head on.",
    person: "Kid Kudi",
  },
  {
    quote: "The only way to succeed is to never give up.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "The only way to truly be happy is to follow your dreams and live life on your own terms.",
    person: "Kid Kudi",
  },
  {
    quote:
      "The only way to truly make a difference is to be the change you wish to see in the world.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "The only way to achieve greatness is to have the courage to take risks and embrace change.",
    person: "Kid Kudi",
  },
  {
    quote:
      "The only way to achieve success is to have the determination and perseverance to see things through to the end.",
    person: "Hrithik Roshan",
  },
  {
    quote:
      "The only way to achieve your goals is to believe in yourself and never give up.",
    person: "Kid Kudi",
  },
];

btn.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerText = "'" + quotes[random].quote + "'";
  person.innerText = quotes[random].person;
});
