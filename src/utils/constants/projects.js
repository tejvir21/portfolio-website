import blogImage from '../../assets/blog.jpeg';
import cwcImage from '../../assets/cwc.webp';
import eshopImage from '../../assets/eshop.png';

export const PROJECTS = [
  {
    title: "Blog Website",
    description: "A full-featured blogging platform built with Flask, featuring user authentication, blog post creation/editing, and commenting system. The platform provides a seamless experience for both writers and readers.",
    image: blogImage,
    tags: ["Flask", "Python", "SQLAlchemy", "Flask-Forms", "Bootstrap"],
    github: "https://github.com/tejvir21/BlogWebsite",
    live: "https://blog-website.demo.com",
    features: [
      "User authentication and authorization",
      "Rich text editor for blog posts",
      "Comment system with moderation",
      "Responsive design",
      "SEO optimization",
      "Social media sharing"
    ],
    technologies: [
      "Flask for backend development",
      "SQLAlchemy for database management",
      "Flask-WTF for form handling",
      "Bootstrap for responsive design",
      "CKEditor for rich text editing",
      "PostgreSQL for data storage"
    ]
  },
  {
    title: "City Without Crime",
    description: "A Django-based platform for reporting and tracking crime incidents in cities, helping create safer communities through data-driven insights and community engagement.",
    image: cwcImage,
    tags: ["Django", "Python", "PostgreSQL", "Django REST", "React"],
    github: "https://github.com/tejvir21/city-without-crime",
    live: "https://citywithoutcrime.demo.com",
    features: [
      "Crime incident reporting",
      "Interactive crime map",
      "Real-time alerts",
      "Statistical analysis",
      "Community forums",
      "Anonymous reporting"
    ],
    technologies: [
      "Django for backend development",
      "React for frontend interface",
      "PostgreSQL for database",
      "Redis for caching",
      "Mapbox for interactive maps",
      "Django REST framework for API"
    ]
  },
  {
    title: "E-Commerce Platform",
    description: "A full-featured online shopping platform built with React and Node.js, providing a seamless shopping experience with modern features and robust security.",
    image: eshopImage,
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    github: "https://github.com/tejvir21/ecommerce-platform",
    live: "https://ecommerce-platform.demo.com",
    features: [
      "User authentication",
      "Product catalog",
      "Shopping cart",
      "Payment integration",
      "Order tracking",
      "Admin dashboard"
    ],
    technologies: [
      "React for frontend",
      "Node.js and Express for backend",
      "MongoDB for database",
      "Redux for state management",
      "Stripe for payments",
      "AWS S3 for image storage"
    ]
  }
];