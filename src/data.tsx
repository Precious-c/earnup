import catsImg from "@/assets/images/cats-logo.png";
import rLogo from "@/assets/images/logo-1734290083.png";
// import youtubeImg from "@/assets/icons/youtube.svg";
// import telegramImg from "@/assets/icons/telegram.svg";
import crypoCardsImg from "@/assets/images/card-type-1f39398b.png";
import cryptoWalletImg from "@/assets/images/wallet-bg-7be46582.png";
import tonWalletImg from "@/assets/images/web3-type-6249bc51.png";
import checkinIcon from "@/assets/icons/daily-24.png";
import referIcon from   "@/assets/icons/add-user-26.png";
import tonIcon from "@/assets/icons/toncoin-ton-logo.svg"
import usdtIcon from "@/assets/icons/tether-usdt-logo.svg"
import starsIcon from "@/assets/icons/tg-stars.png"


import { Task, TopUpOption } from "./types";

export const tasksData: Task[] = [
  {
    id: "boost-Muna-Wallet-channel",
    title: "Boost Muna Wallet Channel",
    description: "Boost the Muna Wallet Telegram channel to earn rewards",
    icon: "telegram",
    totalPoints: 15000,
    type: "single",
    status: "pending",
    backgroundPattern: "coins",
  },
  {
    id: "cats-quest",
    title: "CATS Quest",
    description: "Complete quest to qualify for the $CATS drop!",
    icon: catsImg,
    totalPoints: 13500,
    type: "multi",
    status: "pending",
    backgroundPattern: "coins",
    subTasks: [
      {
        id: "follow-cats-telegram",
        title: "Follow CATS on Telegram",
        points: 4500,
        type: "telegram_follow",
        status: "pending",
        link: "https://t.me/cats",
      },
      {
        id: "follow-Muna-Wallet-telegram",
        title: "Follow Muna Wallet on Telegram",
        points: 4500,
        type: "telegram_follow",
        status: "pending",
        link: "https://t.me/munawallet",
      },
      {
        id: "retweet-cats-drop",
        title: "ReTweet $CATS Drop",
        points: 4500,
        type: "twitter_retweet",
        status: "pending",
        link: "https://twitter.com/cats/status/123",
      },
    ],
  },
  {
    id: "ton-dex-quest",
    title: "Join new DEX on TON",
    description: "Complete tasks to earn rewards on the new TON DEX",
    icon: rLogo,
    totalPoints: 9000,
    type: "multi",
    status: "pending",
    backgroundPattern: "coins",
    subTasks: [
      {
        id: "join-ton-community",
        title: "Join TON Community",
        points: 3000,
        type: "telegram_follow",
        status: "pending",
        link: "https://t.me/toncommunity",
      },
      {
        id: "connect-wallet",
        title: "Connect Wallet to DEX",
        points: 3000,
        type: "other",
        status: "pending",
        link: "https://ton-dex.app",
      },
      {
        id: "make-swap",
        title: "Make your first swap",
        points: 3000,
        type: "other",
        status: "pending",
        link: "https://ton-dex.app/swap",
      },
    ],
  },
  {
    id: "muna-wallet-podcast",
    title: "Watch Muna Wallet Podcast №1",
    description: "Watch the first episode of the Muna Wallet podcast",
    icon: "youtube",
    totalPoints: 7500,
    type: "single",
    link: "https://youtube.com/munawallet/podcast/1",
    status: "pending",
    backgroundPattern: "coins",
  },
  {
    id: "refer-friends",
    title: "Invite Friends to Muna Wallet",
    description: "Invite your friends to join Muna Wallet and earn rewards for each signup",
    icon: referIcon,
    totalPoints: 20000,
    type: "multi",
    status: "pending",
    backgroundPattern: "coins",
    subTasks: [
      {
        id: "share-invite-link",
        title: "Share your invite link",
        points: 5000,
        type: "other",
        status: "pending",
        link: "https://munawallet.app/invite",
      },
      {
        id: "first-friend-signup",
        title: "First friend signs up",
        points: 7500,
        type: "other",
        status: "pending",
      },
      {
        id: "three-friends-signup",
        title: "Three friends sign up",
        points: 7500,
        type: "other",
        status: "pending",
      },
    ],
  },
  {
    id: "daily-streak",
    title: "Daily Login Streak",
    description: "Log in daily to build your streak and earn increasing rewards",
    icon: checkinIcon,
    totalPoints: 12000,
    type: "multi",
    status: "pending",
    backgroundPattern: "coins",
    subTasks: [
      {
        id: "login-3-days",
        title: "Login for 3 consecutive days",
        points: 3000,
        type: "other",
        status: "pending",
      },
      {
        id: "login-7-days",
        title: "Login for 7 consecutive days",
        points: 4000,
        type: "other",
        status: "pending",
      },
      {
        id: "login-14-days",
        title: "Login for 14 consecutive days",
        points: 5000,
        type: "other",
        status: "pending",
      },
    ],
  },
  {
    id: "crypto-basics",
    title: "Learn Crypto Basics",
    description: "Complete the crypto basics course to earn rewards",
    icon: "youtube",
    totalPoints: 10000,
    type: "multi",
    status: "pending",
    backgroundPattern: "coins",
    subTasks: [
      {
        id: "blockchain-101",
        title: "Complete Blockchain 101",
        points: 2500,
        type: "other",
        status: "pending",
        link: "https://munawallet.app/learn/blockchain",
      },
      {
        id: "crypto-wallets",
        title: "Learn about Crypto Wallets",
        points: 2500,
        type: "other",
        status: "pending",
        link: "https://munawallet.app/learn/wallets",
      },
      {
        id: "defi-basics",
        title: "DeFi Fundamentals",
        points: 2500,
        type: "other",
        status: "pending",
        link: "https://munawallet.app/learn/defi",
      },
      {
        id: "crypto-security",
        title: "Crypto Security Best Practices",
        points: 2500,
        type: "other",
        status: "pending",
        link: "https://munawallet.app/learn/security",
      },
    ],
  },
  {
    id: "twitter-engagement",
    title: "Twitter Engagement",
    description: "Engage with Muna Wallet on Twitter to earn rewards",
    icon: "x",
    totalPoints: 8500,
    type: "multi",
    status: "pending",
    backgroundPattern: "coins",
    subTasks: [
      {
        id: "follow-muna-wallet-twitter",
        title: "Follow Muna Wallet on Twitter",
        points: 2000,
        type: "twitter_retweet",
        status: "pending",
        link: "https://twitter.com/munawallet",
      },
      {
        id: "retweet-announcement",
        title: "Retweet our latest announcement",
        points: 3000,
        type: "twitter_retweet",
        status: "pending",
        link: "https://twitter.com/munawallet/status/latest",
      },
      {
        id: "tweet-with-hashtag",
        title: "Tweet with #MunaWalletRewards hashtag",
        points: 3500,
        type: "twitter_retweet",
        status: "pending",
        link: "https://twitter.com/intent/tweet?text=I%27m%20earning%20rewards%20with%20%23MunaWalletRewards",
      },
    ],
  },
  {
    id: "first-transaction",
    title: "Complete Your First Transaction",
    description: "Make your first transaction using Muna Wallet wallet",
    icon: "telegram",
    totalPoints: 15000,
    type: "single",
    link: "https://ton-keeper/wallet",
    status: "pending",
    backgroundPattern: "coins",
  },
]

// Function to get a task by ID
export function getTaskById(taskId: string | undefined): Task | undefined {
  return tasksData.find((task) => task.id === taskId)
}

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

export const plansData = {
  basic: {
    id: "basic",
    name: "Basic Plan",
    price: 1000,
    description: "Get started with basic rewards and features",
    color: "#4CD964",
    image: cryptoWalletImg,
    features: [
      "Up to 10 standard tasks per day",
      "Base rate for all tasks (1x multiplier)",
      "5% fee on withdrawals",
      "₦2,000 minimum withdrawal threshold",
    ],
  },
  gold: {
    id: "gold",
    name: "Gold Plan",
    price: 5000,
    description: "Unlock premium features and weekly rewards",
    color: "#FFD700",
    image: crypoCardsImg,
    features: [
      "Up to 25 tasks per day, including premium tasks",
      "1.5x earnings multiplier on all tasks",
      "2% fee on withdrawals",
      "₦1,000 minimum withdrawal threshold",
    ],
  },
  diamond: {
    id: "diamond",
    name: "Diamond Plan",
    price: 10000,
    description: "Experience VIP treatment and priority support",
    color: "#00BFFF",
    image: tonWalletImg,
    features: [
      "Unlimited tasks per day, including VIP tasks",
      "2x earnings multiplier on all tasks",
      "No fees on withdrawals",
      "No minimum withdrawal threshold",
    ],
  },
}

export const plansDataArray = [
     {
      id: "basic",
      name: "Basic Plan",
      price: 1000,
      description: "Get started with basic rewards and features",
      color: "#4CD964",
      image: cryptoWalletImg,
      features: [
        "Up to 10 standard tasks per day",
        "Base rate for all tasks (1x multiplier)",
        "5% fee on withdrawals",
        "₦2,000 minimum withdrawal threshold",
      ],
    },
     {
      id: "gold",
      name: "Gold Plan",
      price: 5000,
      description: "Unlock premium features and weekly rewards",
      color: "#FFD700",
      image: crypoCardsImg,
      features: [
        "Up to 25 tasks per day, including premium tasks",
        "1.5x earnings multiplier on all tasks",
        "2% fee on withdrawals",
        "₦1,000 minimum withdrawal threshold",
      ],
    },
     {
      id: "diamond",
      name: "Diamond Plan",
      price: 10000,
      description: "Experience VIP treatment and priority support",
      color: "#00BFFF",
      image: tonWalletImg,
      features: [
        "Unlimited tasks per day, including VIP tasks",
        "2x earnings multiplier on all tasks",
        "No fees on withdrawals",
        "No minimum withdrawal threshold",
      ],
    },
]

export const topUpOptions: TopUpOption[] = [
  {
    id: "ton",
    name: "TON",
    symbol: "TON",
    icon: tonIcon,
    address: "EQAigd8MjqsJejMuIB0UPhErOIGe22dezkpjvpWt9kOrtkG8",
    memo: "2817225727",
    minimum: "1 TON",
    confirmations: 1,
    fee: "0 TON",
  },
  {
    id: "usdt",
    name: "Tether",
    symbol: "USDT",
    icon: usdtIcon,
    address: "TYuK8rEKkzGXvQxbxjwcXbJ3MeHnZYxw7M",
    minimum: "1 USDT",
    confirmations: 2,
    fee: "1 USDT",
  },
  {
    id: "stars",
    name: "Telegram Stars",
    symbol: "STARS",
    icon: starsIcon,
    minimum: "10 STARS",
    fee: "0 STARS",
  },
]