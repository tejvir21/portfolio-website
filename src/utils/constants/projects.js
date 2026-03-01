import blogImage from "../../assets/blog.jpeg";
import cwcImage from "../../assets/cwc.webp";
import eshopImage from "../../assets/eshop.png";
import tinywrap from "../../assets/tinywrap.jpeg";
import weather from "../../assets/weather.png";
import candidate from "../../assets/candidate.png";
import pokemon from "../../assets/pokemon.png";
import movie from "../../assets/movie.jpeg";
import dare from "../../assets/dare.jpeg";
import omnio from "../../assets/omnio.png";
import pgradar from "../../assets/pgradar.png";
import taskManager from "../../assets/task-manager.png";

export const PROJECTS = [
  {
    title: "Omnio - Chat App",
    description:
      "A modern, real-time chat application designed for seamless communication.",
    image: omnio,
    tags: ["React", "Node.js", "MongoDB", "Express", "Axios", "Socket.io"],
    github: "https://github.com/tejvir21/Omnio",
    live: "https://omnio-chat.vercel.app/",
    features: [
      "Real-time messaging",
      "User authentication",
      "Group and private chats",
      "Responsive UI",
      "Message notifications",
      "Profile editing with image upload",
      "Support for multiple image formats in profile uploads",
      "Change chat background",
      "Improved error handling and notifications",
    ],
    technologies: [
      "React for frontend",
      "Node.js and Express for backend",
      "MongoDB for database",
      "Hosted oh Vercel and Koyeb",
      "Axios for API request",
      "MongoDB Atlas for storage",
      "Socket.io for real-time communication",
    ],
  },
  {
    title: "PG Radar Application",
    description:
      "A platform to search, discover, and visualize Paying Guest (PG) accommodations across locations, featuring map visualization, search with async suggestions, detailed info, and more.",
    image: pgradar,
    tags: ["React", "Node.js", "MongoDB", "Express", "Axios", "Tailwind CSS"],
    github: "https://github.com/tejvir21/PGradar",
    live: "https://pg-radar.vercel.app/",
    features: [
      "User authentication",
      "Async search with suggestions",
      "Leaflet map with clustered markers showing all PG locations",
      "Popup with PG info on marker click",
      "Side panel showing details of selected PG",
      "Admin Dashboard",
      "Responsive layout with Tailwind CSS",
      "Image upload functionality",
      "Auth and Search Limiter",
    ],
    technologies: [
      "React for frontend",
      "Node.js and Express for backend",
      "MongoDB for database",
      "Hosted oh Vercel and Render",
      "Axios for API request",
      "MongoDB Atlas for storage",
    ],
  },
  {
    title: "TinyWrap - URL Shortener",
    description:
      "Simplify your links with ease! 🚀 Our URL shortener helps you convert long, cluttered URLs into short, shareable links in seconds. Track clicks, customize your links, and improve your online experience—fast, free, and hassle-free!",
    image: tinywrap,
    tags: ["React", "Node.js", "MongoDB", "Express", "Axios", "ShadCN UI"],
    github: "https://github.com/tejvir21/url-shortner",
    live: "https://tinywrap.netlify.app/",
    features: [
      "User authentication",
      "Shorten URLs",
      "Generate Short Id",
      "Generate QrCode",
      "Analytics tracking",
      "User Dashboard",
    ],
    technologies: [
      "React for frontend",
      "Node.js and Express for backend",
      "MongoDB for database",
      "Hosted oh Netlify and Render",
      "Axios for API request",
      "MongoDB Atlas for storage",
    ],
  },
  {
    title: "Task Manager",
    description:
      "Task Manager is a full-stack application for managing tasks efficiently. It includes a backend built with Node.js and Express, and a frontend built with Next.js. The application supports user authentication, task creation, updates, and deletion, along with real-time notifications.",
    image: taskManager,
    tags: ["Next.js", "Node.js", "MongoDB", "Express", "Axios", "JWT"],
    github: "https://github.com/tejvir21/task-manager",
    live: "https://task-manager-nine-brown.vercel.app/",
    features: [
      "User authentication",
      "Real-time Notifications",
      "Task Management",
      "Responsive Design",
      "Server-side Rendering (SSR)",
      "Task Dashboard",
    ],
    technologies: [
      "Next.js for frontend",
      "Node.js and Express for backend",
      "MongoDB for database",
      "Hosted oh Vercel and Render",
      "Axios for API request",
      "MongoDB Atlas for storage",
    ],
  },
  {
    title: "MovieVerse Platform",
    description:
      "This project aims to provide a seamless and efficient way to find information about movies, including details such as title, release date, and synopsis.",
    image: movie,
    tags: ["React", "Axios", "react-router-dom", "framer-motion"],
    github: "https://github.com/tejvir21/movie-search-project",
    live: "https://verseofmovies.netlify.app/",
    features: [
      "Movies Searching API",
      "Trending Movies",
      "Movies Cards",
      "Movie Details",
      "Cast and Crew Details",
      "TMDb API",
    ],
    technologies: [
      "React for frontend",
      "Axios for API request",
      "TMDb API for movie data",
      "react-router-dom for navigating between pages",
      "framer-motion for smooth animations",
    ],
  },
  {
    title: "Truth or Dare",
    description:
      "A fun and interactive game where players take turns choosing between answering a revealing truth or completing a daring challenge. This project can be designed as a digital app, a card game, or a party activity, promoting engagement, laughter, and unexpected surprises!",
    image: dare,
    tags: [
      "React",
      "Netlify",
      "react-icons",
      "styled-components",
      "File Handling",
    ],
    github: "https://github.com/tejvir21/truth-or-dare",
    live: "https://daremenow.netlify.app/",
    features: ["React", "styled-components", "react-icons", "Responsive UI"],
    technologies: [
      "React for frontend",
      "Hosted on Netlify",
      "styled-components for styling",
      "File Handling to add custom tasks",
    ],
  },
  {
    title: "Climate Chaser",
    description:
      "Climate Chaser is a weather application that provides users with real-time weather information and forecasts. It allows users to search for weather conditions in their location or any other city worldwide. The app features a user-friendly interface, displaying current weather, 5-day forecasts, humidity, wind speed, and rain chances. Built with React for the frontend and Node.js with Express for the backend, Climate Chaser utilizes the OpenWeatherMap API to fetch accurate weather data. The application is designed to be responsive and visually appealing, making it easy for users to stay informed about the weather wherever they are.",
    image: weather,
    tags: ["React", "Axios", "Netlify", "OpenWeatherMap API"],
    github: "https://github.com/tejvir21/climate-chaser",
    live: "https://climatechaser.netlify.app/",
    features: [
      "Weather Searching API",
      "Weather Forcast",
      "Current Weather",
      "5-Day Weather Forecast",
      "Humidity and Wind Speed",
      "Rain Chance",
    ],
    technologies: [
      "React for frontend",
      "MongoDB for database",
      "Hosted oh Netlify",
      "Axios or Fetch for API request",
      "OpenWeatherMap API for weather data",
    ],
  },
  {
    title: "Candidate Profiles",
    description:
      "Candidate Profiles is a comprehensive platform for showcasing and managing candidate information in a professional and visually appealing way. It allows users to create detailed profiles, upload resumes, and manage their career information effectively.",
    image: candidate,
    tags: ["React", "Tailwind CSS", "Vercel", "Node.js", "MongoDB"],
    github: "https://github.com/tejvir21/candidate-profile-playground",
    live: "https://candidate-profile-playground.vercel.app/",
    features: [
      "Candidate Profile Creation",
      // "Resume Upload",
      "Career Information Management",
      "Responsive UI",
    ],
    technologies: [
      "React for frontend",
      "MongoDB for database",
      "Hosted oh Netlify and Render",
      "Axios or Fetch for API request",
      "Node.js and Express for backend",
    ],
  },
  {
    title: "Pokémon Battle Binder",
    description:
      "Pokédex is your ultimate companion for managing, organizing, and exploring your Pokémon card collection.",
    image: pokemon,
    tags: ["React", "CSS", "Netlify", "PokéAPI"],
    github: "https://github.com/tejvir21/pokemon-cards-app",
    live: "https://battlebinder.netlify.app/",
    features: [
      "Pokémon Card Management",
      "Card Search and Filtering",
      "Responsive UI",
    ],
    technologies: [
      "React for frontend",
      "Hosted oh Netlify",
      "Axios or Fetch for API request",
      "PokéAPI for Pokémon card data",
    ],
  },
  // {
  //   title: "Blog Website",
  //   description:
  //     "Tejvir's Blog is a dynamic and feature-rich blogging website built using Flask. It provides a seamless platform for creating, managing, and sharing blog posts. With a clean UI and powerful backend, this project is designed for bloggers who want a lightweight yet efficient solution.",
  //   image: blogImage,
  //   tags: ["Flask", "Python", "SQLAlchemy", "Flask-Forms", "Bootstrap"],
  //   github: "https://github.com/tejvir21/BlogWebsite",
  //   live: "https://blogbytejvir.onrender.com/",
  //   features: [
  //     "User authentication and authorization",
  //     "Rich text editor for blog posts",
  //     "Comment system with moderation",
  //     "Responsive design",
  //     "SEO optimization",
  //     "Social media sharing",
  //   ],
  //   technologies: [
  //     "Flask for backend development",
  //     "SQLAlchemy for database management",
  //     "Flask-WTF for form handling",
  //     "Bootstrap for responsive design",
  //     "CKEditor for rich text editing",
  //     "PostgreSQL for data storage",
  //   ],
  // },
  // {
  //   title: "City Without Crime",
  //   description:
  //     "A Django-based platform for reporting and tracking crime incidents in cities, helping create safer communities through data-driven insights and community engagement.",
  //   image: cwcImage,
  //   tags: ["Django", "Python", "PostgreSQL", "Django REST", "Bootstrap"],
  //   github: "https://github.com/tejvir21/city-without-crime",
  //   live: "https://citywithoutcrime.demo.com",
  //   features: [
  //     "Crime incident reporting",
  //     "Authentication",
  //     "Real-time alerts",
  //     "Emergency News",
  //     "Complaint Tracking",
  //     "Admin Dashboard",
  //   ],
  //   technologies: [
  //     "Django for backend development",
  //     "Boorstrap for responsiveness",
  //     "PostgreSQL for database",
  //     "HTML, CSS JavaScript for frontend development",
  //     "Django REST framework for API",
  //   ],
  // },
  // {
  //   title: "E-Commerce Platform",
  //   description:
  //     "A full-featured online shopping platform built with React and Node.js, providing a seamless shopping experience with modern features and robust security.",
  //   image: eshopImage,
  //   tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  //   github: "https://github.com/tejvir21/ecommerce-platform",
  //   live: "https://ecommerce-platform.demo.com",
  //   features: [
  //     "User authentication",
  //     "Product catalog",
  //     "Shopping cart",
  //     "Payment integration",
  //     "Order tracking",
  //     "Admin dashboard",
  //   ],
  //   technologies: [
  //     "React for frontend",
  //     "Node.js and Express for backend",
  //     "MongoDB for database",
  //     "Redux for state management",
  //     "Stripe for payments",
  //     "AWS S3 for image storage",
  //   ],
  // },
];
