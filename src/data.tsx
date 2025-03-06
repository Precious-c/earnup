import catsImg from "@/assets/images/cats-logo.png";
import rLogo from "@/assets/images/logo-1734290083.png";
import youtubeImg from "@/assets/icons/youtube.svg";
import telegramImg from "@/assets/icons/telegram.svg";

export const questsData = [
  {
    icon: telegramImg,
    title: "Boost Kolo Channel",
    points: 15000,
  },
  {
    icon: catsImg,
    title: "CATS Quest",
    points: 13500,
  },
  {
    icon: rLogo,
    title: "Join new DEX on TON",
    points: 9000,
  },
  {
    icon: youtubeImg,
    title: "Watch Kolo Podcast №1",
    points: 7500,
  },
];


export interface QuizQuestion {
  id: number
  question: string
  correctAnswer: "YES" | "NO"
  explanation: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question:
      "Isn't a 'crypto whale' an individual or entity that holds a significant amount of a particular cryptocurrency, yeah?",
    correctAnswer: "YES",
    explanation:
      "Correct! A 'crypto whale' refers to individuals or entities that hold large amounts of cryptocurrency, enough to potentially influence market prices with their trading activities.",
  },
  {
    id: 2,
    question: "Is Bitcoin's maximum supply capped at 30 million coins?",
    correctAnswer: "NO",
    explanation:
      "Bitcoin's maximum supply is capped at 21 million coins, not 30 million. This scarcity is a fundamental aspect of Bitcoin's design and value proposition.",
  },
  {
    id: 3,
    question: "Was Ethereum originally created to be a payment system like Bitcoin?",
    correctAnswer: "NO",
    explanation:
      "Ethereum was created primarily as a platform for decentralized applications (dApps) and smart contracts, not just as a payment system like Bitcoin.",
  },
  {
    id: 4,
    question: "Is 'HODL' a deliberate misspelling of 'hold' that became a popular term in crypto communities?",
    correctAnswer: "YES",
    explanation:
      "HODL originated from a typo in a Bitcoin forum post in 2013 where someone wrote 'I AM HODLING' instead of 'holding'. It became a meme and philosophy about holding onto crypto despite market volatility.",
  },
  {
    id: 5,
    question: "Does a 'cold wallet' refer to a cryptocurrency wallet that's connected to the internet?",
    correctAnswer: "NO",
    explanation:
      "A 'cold wallet' is actually a wallet that's NOT connected to the internet, making it more secure against online hacking attempts. Hot wallets are the ones connected to the internet.",
  },
  {
    id: 6,
    question: "Is 'gas' in Ethereum the fee paid to miners for processing transactions?",
    correctAnswer: "YES",
    explanation:
      "Gas is indeed the fee paid to miners (now validators after The Merge) for processing transactions and executing smart contracts on the Ethereum network.",
  },
  {
    id: 7,
    question: "Is a 'rug pull' a positive event where developers rapidly increase the value of their cryptocurrency?",
    correctAnswer: "NO",
    explanation:
      "A 'rug pull' is a type of scam where developers abandon a project and run away with investors' funds, causing the token's value to crash to zero or near-zero.",
  },
]

