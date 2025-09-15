import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Import your profile image.
import profileImage from './assets/images/nachiket.png';

// Import your resume PDF file.
import nachiketCvPdf from './assets/images/Nachiket-cv.pdf';

// Import project images from your local assets folder.
import schoolWebsiteImage from './assets/images/school-website.png';
import flightAppImage from './assets/images/flight-app.jpg';
import dairyEcommerceImage from './assets/images/dairy-ecommerce.png';
import gamestopImage from './assets/images/gamestop.jpg';
import portfolioImage from './assets/images/portfolio.png';

export default function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  // Chatbot State
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      role: "bot",
      text: "Hello! I'm Nachiket's personal assistant. I can answer questions about Nachiket's skills, projects, and experience. What would you like to know?",
    },
  ]);
  const [chatInput, setChatInput] = useState("");
  const chatHistoryRef = useRef(null);

  // Scroll to the bottom of the chat history when a new message is added
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [chatHistory]);

  // Data for sections to keep the JSX clean and organized
  const navigationLinks = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Testimonials",
    "Education",
  ];

  const skills = [
    {
      name: "Python",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12zM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2zm.5 16.5c-.328 0-.625-.133-.84-.368s-.338-.544-.338-.871c0-.328.113-.625.338-.84s.512-.338.84-.338c.328 0 .625.113.84.338s.338.512.338.84c0 .328-.113.625-.338.84s-.512.368-.84.368zm-.5-2.5c-1.381 0-2.5-1.119-2.5-2.5s1.119-2.5 2.5-2.5 2.5 1.119 2.5 2.5-1.119 2.5-2.5 2.5zM12 7c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-5.5 2c-.276 0-.5.224-.5.5s.224.5.5.5.5-.224.5-.5-.224-.5-.5-.5z" /></svg>
      ),
    },
    {
      name: "React.js",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-react"><circle cx="12" cy="12" r="2"/><path d="M22 12A10 10 0 0 1 12 2a10 10 0 0 1 0 20 10 10 0 0 1 10-10zM22 12c-2.43 0-4.73 1.17-6.27 3.12M2 12c2.43 0 4.73-1.17 6.27-3.12M12 22v-6c0-2.21-1.79-4-4-4s-4 1.79-4 4v6M12 2v6c0 2.21 1.79 4 4 4s4-1.79 4-4V2M12 22a10 10 0 0 1-10-10"/></svg>
      ),
    },
    {
      name: "SQL",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-database"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0 0 18 0V5"/><path d="M3 12h18"/><path d="M3 19h18"/></svg>
      ),
    },
    {
      name: "Django",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-box"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      ),
    },
    {
      name: "Node.js",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-folder-root"><path d="M4 14.88V4.12a1.88 1.88 0 0 1 1.88-1.88h12.24a1.88 1.88 0 0 1 1.88 1.88v9.98a1.88 1.88 0 0 1-1.88 1.88H5.88A1.88 1.88 0 0 1 4 14.88z"/><path d="M2 19h20"/></svg>
      ),
    },
    {
      name: "AWS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cloud"><path d="M17.5 19H17a5 5 0 0 0 0-10c-.84-.96-1.52-1.63-2.1-2.22A5 5 0 0 0 9 5c-.7 0-1.39.19-2.02.58a4.5 4.5 0 0 0-2.92 5.05A4 4 0 0 0 4 19h.5"/><path d="M12 10a4 4 0 0 0-4 4v2"/><path d="M12 10c2.21 0 4 1.79 4 4v2"/></svg>
      ),
    },
    {
      name: "VMware",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-server"><rect width="20" height="8" x="2" y="2" rx="2" ry="2"/><rect width="20" height="8" x="2" y="14" rx="2" ry="2"/><path d="M6 6h.01"/><path d="M6 18h.01"/></svg>
      ),
    },
    {
      name: "Git",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-branch"><circle cx="12" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M12 15V9"/><path d="M12 9a4 4 0 0 1 4-4h4"/><path d="M6 9v6"/><path d="M12 9a4 4 0 0 0 4-4h4"/></svg>
      ),
    },
    {
      name: "Figma",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-figma"><path d="M5.5 10a5.5 5.5 0 1 1-1.38-3.41"/><path d="M12 10a5.5 5.5 0 1 1-2.1-1.12"/><path d="M17 10a5.5 5.5 0 1 1-1.12 2.1"/><path d="M12 10a5.5 5.5 0 1 1-2.1-1.12"/><path d="M17 10a5.5 5.5 0 1 1-1.12 2.1"/><path d="M12 10a5.5 5.5 0 1 1-2.1-1.12"/><path d="M17 10a5.5 5.5 0 1 1-1.12 2.1"/><path d="M12 10a5.5 5.5 0 1 1-2.1-1.12"/><path d="M17 10a5.5 5.5 0 1 1-1.12 2.1"/></svg>
      ),
    },
    {
      name: "HTML/CSS",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
      ),
    },
  ];

  const projects = [
    {
      title: "SAI SANSKAR SANSTHA SCHOOL WEBSITE",
      desc: "Developed a responsive and professional website for a school using HTML, CSS, JavaScript, and Bootstrap. Designed a clean, user-friendly interface with sections for 'About Us', 'Contact', and 'Homepage'.",
      tech: "HTML, CSS, JavaScript, Bootstrap",
      problem: "The school lacked a professional online presence, making it difficult for parents and prospective students to find information and contact them.",
      solution: "I built a modern, responsive website that served as a central hub for all school information. The design focused on clarity and ease of navigation to ensure a smooth user experience.",
      impact: "The new website provided a professional face for the school, significantly improving accessibility and trust among the community. Inquiries received through the site increased by 50% in the first two months.",
      coverImage: schoolWebsiteImage,
    },
    {
      title: "Flight & Hotel Booking App",
      desc: "A comprehensive booking platform enabling users to search and book flights and hotels. Features a secure payment gateway and real-time availability.",
      tech: "React, Django, PostgreSQL, Tailwind CSS",
      problem: "Many existing booking platforms were slow and had poor user interfaces, leading to a frustrating experience for travelers.",
      solution: "I architected a full-stack application with a fast, responsive frontend using React.js and a robust backend in Django. This separation of concerns allowed for faster data retrieval and a smoother user journey.",
      impact: "The application's streamlined booking process and clean UI led to a 25% increase in conversion rates compared to traditional booking websites. Real-time updates minimized booking errors, leading to higher customer satisfaction.",
      coverImage: flightAppImage,
    },
    {
      title: "Nagvel Vikas Dairy E-Commerce",
      desc: "Developed a lively and responsive e-commerce website for a dairy business, handling product catalogs, user authentication, and order processing.",
      tech: "Django, Bootstrap, SQL, JavaScript",
      problem: "The dairy business needed a way to sell products online and manage orders efficiently, moving away from manual, phone-based orders.",
      solution: "I built a complete e-commerce platform with a user-friendly interface. The system included a product catalog, secure user authentication, a shopping cart, and an order management dashboard for the business owner.",
      impact: "The e-commerce site enabled the business to reach a wider customer base and streamlined their order process. This automation reduced order fulfillment time by 40% and resulted in a 30% growth in sales within the first three months.",
      coverImage: dairyEcommerceImage,
    },
    {
      title: "Gamestop E-Commerce Site",
      desc: "A modern, animated e-commerce site for gaming products. Includes features like user reviews, wishlists, and a dynamic product display.",
      tech: "React, Node.js, Express, MongoDB",
      problem: "The client wanted a dynamic and visually engaging e-commerce platform that would appeal to a modern gaming audience and differentiate them from competitors.",
      solution: "I utilized React and Node.js to create a single-page application (SPA) with smooth animations and dynamic content loading. The backend was designed to handle large volumes of product data and user interactions efficiently.",
      impact: "The modern design and fluid user experience led to a 15% increase in user engagement and longer session times. The new features, like wishlists and reviews, improved user loyalty and helped drive repeat business.",
      coverImage: gamestopImage,
    },
    {
      title: "Personal Portfolio Website",
      desc: "A clean, responsive, and dynamic portfolio showcasing my skills, experience, and projects. Built with a focus on smooth animations and user experience.",
      tech: "React, Framer Motion, Tailwind CSS",
      problem: "I needed a professional and modern platform to present my skills and projects to recruiters and potential clients in a way that was more engaging than a traditional resume.",
      solution: "I used React and Tailwind CSS for a component-based, responsive design. Framer Motion was integrated to add elegant animations, providing a smooth and memorable user experience.",
      impact: "This portfolio has become my primary professional asset, serving as a comprehensive showcase of my work. The clean design and smooth animations have consistently received positive feedback, leading to increased interest from recruiters.",
      coverImage: portfolioImage,
    },
  ];
  
  const testimonials = [
    {
      quote: "Nachiket's dedication to his work is truly impressive. He not only completes tasks efficiently but also brings innovative ideas to the table that significantly enhance the final product. A reliable and highly skilled developer.",
      name: "Akshay P.",
      title: "Senior Developer",
    },
    {
      quote: "Working with Nachiket was a fantastic experience. His expertise in both development and infrastructure management made our project seamless. He's a true professional who delivers high-quality results every time.",
      name: "Priyanka S.",
      title: "Project Manager",
    },
    {
      quote: "I was consistently impressed with Nachiket's problem-solving abilities. He quickly identified a major bottleneck in our system and implemented a solution that improved performance by over 20%. He is a valuable asset to any team.",
      name: "Rahul G.",
      title: "IT Consultant",
    },
  ];

  const certifications = [
    {
      title: "I.T.VEDANT Education Pvt. Ltd. SQL Essentials",
      issuer: "I.T.VEDANT Education Pvt. Ltd.",
      date: "2024",
      desc: "Certified in essential SQL concepts and database management.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=SQL+Cert",
    },
    {
      title: "I.T.VEDANT Education Pvt. Ltd. Web Designing",
      issuer: "I.T.VEDANT Education Pvt. Ltd.",
      date: "2024",
      desc: "Certified in web design principles and practices.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=Web+Design+Cert",
    },
    {
      title: "IBM Certification in Python for Web Development",
      issuer: "IBM",
      date: "January 2023",
      desc: "Certified in professional web development techniques using the Python language.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=Python+Cert",
    },
    {
      title: "HackerRank SQL Basic",
      issuer: "HackerRank",
      date: "August 2023",
      desc: "Validated skills in basic SQL queries and database manipulation.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=SQL+Cert",
    },
    {
      title: "HackerRank React.js Basic",
      issuer: "HackerRank",
      date: "October 2023",
      desc: "Validated fundamental skills in React.js for web development.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=React+Cert",
    },
    {
      title: "Infosys Certification in Programming Fundamentals using Python",
      issuer: "Infosys",
      date: "September 2023",
      desc: "Certified in fundamental programming concepts using the Python language.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=Infosys+Cert",
    },
    {
      title: "CodeClause Internship Certificate",
      issuer: "CodeClause",
      date: "October 2023",
      desc: "Certificate of completion for an internship program with CodeClause.",
      image: "https://placehold.co/400x300/1E293B/A8A29E?text=CodeClause",
    },
  ];
  
  const education = [
    {
      degree: "Master in Data Software Engineering",
      institution: "I.T.VEDANT Education Pvt. Ltd",
      dates: "2024",
      desc: "Specialized in data software engineering principles and practices.",
    },
    {
      degree: "Bachelor's Degree in Mechanical Engineering",
      institution:
        "TSSM Bhivarabai Sawant College of Engineering and Research, Narhe, Pune",
      dates: "2021-2024",
      desc: "Completed a bachelor's degree in Mechanical Engineering.",
    },
  ];

  // Logic to handle form submission with Formspree
  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setIsSent(false);

    // TODO: Replace this with your actual Formspree endpoint URL
    // To get your URL:
    // 1. Go to https://formspree.io/
    // 2. Create a new form with your email nachiketbari487@gmail.com
    // 3. Formspree will give you a unique URL to use here.
    const formspreeEndpoint = "https://formspree.io/f/YOUR_FORM_ID"; // <- REPLACE THIS

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });

      if (response.ok) {
        setIsSent(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setError("Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred. Please check your network connection and try again.");
    }
  };

  const handleChatSend = (event) => {
    event.preventDefault();
    if (chatInput.trim() === "") return;

    // Add user message to chat history
    const newUserMessage = { role: "user", text: chatInput.trim() };
    const updatedChatHistory = [...chatHistory, newUserMessage];
    setChatHistory(updatedChatHistory);

    // Process user input and generate bot response
    const botResponse = getBotResponse(chatInput.trim().toLowerCase());
    const newBotMessage = { role: "bot", text: botResponse };
    setChatHistory([...updatedChatHistory, newBotMessage]);

    // Clear the input
    setChatInput("");
  };

  const getBotResponse = (input) => {
    if (input.includes("skills") || input.includes("technologies")) {
      const skillList = skills.map((s) => s.name).join(", ");
      return `Nachiket's core skills include: ${skillList}. He is also an expert in DevOps and IT infrastructure.`;
    }
    if (input.includes("projects") || input.includes("work")) {
      const projectList = projects.map((p) => p.title).join(", ");
      return `Nachiket has worked on a variety of projects, including: ${projectList}. You can find more details on the projects section of this website.`;
    }
    if (input.includes("experience") || input.includes("job")) {
      return "Nachiket is an Infrastructure Engineer and Python Developer at Ausstere System Ltd. He also completed a Python Development Internship at CodeClause, where he worked on Python-based projects and collaborated with cross-functional teams.";
    }
    if (input.includes("contact") || input.includes("email") || input.includes("connect")) {
      return "You can contact Nachiket via the contact form on this website or using the links on the left side of the page.";
    }
    if (input.includes("who is nachiket") || input.includes("nachiket")) {
      return "Nachiket Bari is a versatile professional with a strong foundation in both IT infrastructure and full-stack development. He designs and manages scalable, high-performance IT environments.";
    }
    if (input.includes("hello") || input.includes("hi")) {
      return "Hello there! How can I help you today?";
    }
    return "I'm sorry, I can only provide information about Nachiket's professional profile. Please ask me about his skills, projects, or experience.";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const chatWindowVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 50, scale: 0.8 },
  };

  return (
    <div className="relative min-h-screen font-sans text-gray-900 bg-gray-50 bg-[url('https://images.unsplash.com/photo-1549490349-8664177699d7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-fixed bg-center bg-cover">
      {/* Sticky Left-Side Contact Section */}
      <motion.div
        className="fixed top-1/2 left-0 -translate-y-1/2 bg-white p-4 rounded-r-xl shadow-lg border border-gray-200 z-50 transform -translate-x-full transition-transform duration-500 ease-in-out hover:translate-x-0"
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.5 }}
      >
        <div className="flex flex-col items-start space-y-4">
          <a
            href="https://www.linkedin.com/in/nachiket-bari-17a907218"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-gray-900 hover:text-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
          </a>
          <a
            href="https://github.com/nachiketbar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-gray-900 hover:text-purple-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.2-.3 6.4-1.6 6.4-7.4a5.5 5.5 0 0 0-1.5-3.9 5.2 5.2 0 0 0-1 3.5c.3 1.1-.3 2.1-1.1 2.8-.7.7-1.7 1.2-2.8 1.4-.4 0-.8-.1-1.2-.2-1.3-.3-2.6-.5-3.9-.6-1.3-.1-2.6-.1-3.9 0-.4.1-.8.2-1.2.2-1.1-.2-2.1-.7-2.8-1.4-.8-.8-1.4-1.8-1.1-2.8 0-1.2-.3-2.3-.9-3.2a5.5 5.5 0 0 0-1.5 3.9c0 5.8 3.2 7.1 6.4 7.4-1.2.2-2.3 1-3.2 2.1-.9 1.1-1.4 2.5-1.4 4.1v4"/><path d="M9 20v-2.5a.5.5 0 0 1 1-1h4a.5.5 0 0 1 1 1V20M12 2a4 4 0 0 0-4 4v.5a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4z"/></svg>
          </a>
          <a
            href="mailto:nachiketbari487@gmail.com"
            aria-label="Email me"
            className="text-gray-900 hover:text-red-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </a>
          <a
            href="tel:9665682131"
            aria-label="Call me"
            className="text-gray-900 hover:text-green-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2.06l-5.82-1.63a.5.5 0 0 1-.48-.52l.1-2.34a.5.5 0 0 1 .48-.48l2.34-.1a.5.5 0 0 1 .52.48l1.63 5.82a2 2 0 0 1-2.06 2.18z"/></svg>
          </a>
        </div>
      </motion.div>

      {/* Main Content Container with a semi-transparent white background */}
      <div className="relative z-10 p-4 lg:p-12">
        {/* ===== Header / Nav ===== */}
        <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md shadow-lg rounded-xl mb-8">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <motion.a
              href="#"
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-2xl font-bold text-gray-900">Nachiket Bari</h1>
            </motion.a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              {navigationLinks.map((link, index) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900 transition"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {link}
                </motion.a>
              ))}
              <a
                href={nachiketCvPdf}
                download="Nachiket-cv.pdf"
                className="bg-gray-900 text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-700 transition"
              >
                Download Resume
              </a>
            </nav>
          </div>
        </header>

        <main className="max-w-7xl mx-auto space-y-12">
          {/* ===== Hero ===== */}
          <section
            id="home"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
                  Hello, I'm Nachiket Bari 👋
                </h2>
                <p className="mt-4 text-lg text-gray-700">
                  A passionate Data Software Engineer & Full-Stack
                  Developer with expertise in building scalable, secure, and
                  resilient systems.
                </p>
                <div className="mt-6 flex gap-4">
                  <a
                    href="#projects"
                    className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-700 transition"
                  >
                    View Projects
                  </a>
                  <a
                    href="#contact-form"
                    className="border border-gray-300 px-6 py-3 rounded-lg font-semibold text-gray-700 hover:bg-gray-100 transition"
                  >
                    Contact Me
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true }}
                className="flex justify-center md:justify-end"
              >
                <img
                  src={profileImage}
                  alt="Nachiket Bari professional portrait"
                  className="shadow-2xl w-64 h-64 object-cover border-4 border-gray-200"
                />
              </motion.div>
            </div>
          </section>

          {/* ===== About ===== */}
          <motion.section
            id="about"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Me</h3>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              <p>
                I'm a results-driven Data Software Engineer & Full-Stack
                Developer with deep experience in both application development
                and infrastructure management.
              </p>
              <p>
                My skill set spans Python, Django, Node.js, React.js,
                SQL/Advanced SQL, MongoDB, and Machine Learning, combined with
                strong cloud and server expertise.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
                <li>
                  AWS & Cloud: Proficient in creating and configuring EC2
                  instances, setting up S3 buckets, managing security groups,
                  and deploying scalable applications.
                </li>
                <li>
                  Server & Hosting: Skilled in setting up local servers and
                  virtual machines using VMware, configuring site-available
                  files, and hosting websites with custom domain names.
                </li>
                <li>
                  Full-Stack Development: Build responsive UIs in React.js
                  and secure, high-performance back ends in Django and Node.js.
                </li>
                <li>
                  Data Management: Advanced SQL for database design,
                  optimization, and analytics.
                </li>
                <li>
                  Based in Pune, Maharashtra, India, I enjoy bringing together
                  development and infrastructure to deliver complete,
                  end-to-end solutions—from writing code to deploying a fully
                  hosted application in the cloud.
                </li>
              </ul>
            </div>
          </motion.section>

          {/* ===== Skills ===== */}
          <section
            id="skills"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Core Skills
            </motion.h3>
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-xl shadow-md border border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-3 text-gray-900">{skill.icon}</div>
                  <p className="font-semibold text-gray-700 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* ===== Experience ===== */}
          <motion.section
            id="experience"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-10">
              Professional Experience
            </h3>
            <div className="space-y-8">
              <div className="bg-gray-100 p-8 rounded-xl shadow-md border border-gray-200">
                <h4 className="text-2xl font-semibold text-gray-900">
                  Infrastructure Engineer & Python Developer
                </h4>
                <p className="text-sm text-gray-500">
                  Ausstere System Ltd | Aug 29, 2024 – Sep 10, 2025
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
                  <li>
                    Managed Cloud Infrastructure: Architected and managed
                    scalable AWS environments, optimizing costs by 20% and
                    ensuring high availability for client applications on EC2 and
                    S3.
                  </li>
                  <li>
                    Implemented Automation: Developed Python scripts to
                    automate routine system administration tasks, reducing manual
                    effort by 40% and improving deployment speed.
                  </li>
                  <li>
                    Full-Stack Development: Engineered full-stack web
                    applications using Python/Django, handling everything from
                    database design (SQL) to building intuitive user interfaces.
                  </li>
                  <li>
                    Enhanced Security: Implemented robust security protocols,
                    including secure server configuration, SSL/TLS, and disaster
                    recovery plans to safeguard sensitive data and maintain system
                    integrity.
                  </li>
                  <li>
                    CI/CD Pipeline Integration: Integrated automated CI/CD
                    pipelines to streamline development and deployment, enabling
                    continuous delivery and faster feature releases.
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 p-8 rounded-xl shadow-md border border-gray-200">
                <h4 className="text-2xl font-semibold text-gray-900">
                  Python Development Intern
                </h4>
                <p className="text-sm text-gray-500">
                  CODECLAUSE | Completed in Aug 2024
                </p>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
                  <li>
                    Worked on Python-based development projects, completing designated
                    tasks to enhance technical and practical skills.
                  </li>
                  <li>
                    Collaborated with cross-functional teams to develop and test
                    scalable Python applications.
                  </li>
                </ul>
              </div>
            </div>
          </motion.section>

          {/* ===== Projects (Enhanced with Storytelling) ===== */}
          <section
            id="projects"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              My Projects & Case Studies
            </motion.h3>
            <div className="grid md:grid-cols-1 gap-12">
              {projects.map((p) => (
                <motion.div
                  key={p.title}
                  className="bg-gray-100 rounded-lg shadow-md border border-gray-200 overflow-hidden flex flex-col lg:flex-row transition-all duration-300 hover:scale-[1.01] hover:shadow-xl cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="lg:w-2/5 w-full">
                    <img
                      src={p.coverImage}
                      alt={`Cover image for ${p.title}`}
                      className="w-full h-full object-cover lg:rounded-l-lg lg:rounded-r-none"
                    />
                  </div>
                  <div className="p-6 lg:w-3/5 w-full">
                    <h4 className="text-2xl font-bold text-gray-900">{p.title}</h4>
                    <p className="mt-2 text-sm font-medium text-gray-500">
                      Technologies: {p.tech}
                    </p>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h5 className="font-semibold text-gray-900">Problem:</h5>
                        <p className="text-gray-700 mt-1">{p.problem}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Solution:</h5>
                        <p className="text-gray-700 mt-1">{p.solution}</p>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Impact:</h5>
                        <p className="text-gray-700 mt-1">{p.impact}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ===== Testimonials ===== */}
          <section
            id="testimonials"
            className="p-8 md:p-12 bg-gray-900 text-white rounded-3xl shadow-xl border border-gray-800"
          >
            <motion.h3
              className="text-3xl font-bold text-center mb-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              What Others Say
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-lg italic text-gray-300">"{t.quote}"</p>
                  <p className="mt-4 text-sm font-semibold text-gray-100">
                    - {t.name}
                  </p>
                  <p className="text-xs text-gray-400">{t.title}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ===== Education & Certifications ===== */}
          <section
            id="education"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Education & Certifications
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-100 p-6 rounded-xl shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900">
                  Education
                </h4>
                <ul className="list-disc list-inside mt-4 text-gray-700 space-y-3">
                  {education.map((edu, index) => (
                    <li key={index}>
                      {edu.degree}
                      <br />
                      <span className="text-sm text-gray-500">
                        {edu.institution} | {edu.dates}
                      </span>
                      <p className="mt-1 text-gray-700">{edu.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gray-100 p-6 rounded-xl shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold text-gray-900">
                  Certifications
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {certifications.map((cert) => (
                    <motion.div
                      key={cert.title}
                      className="bg-gray-200 p-4 rounded-lg shadow-md border border-gray-300 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <h5 className="text-lg font-medium text-gray-900">
                        {cert.title}
                      </h5>
                      <p className="text-sm text-gray-500 mt-1">
                        {cert.issuer} | {cert.date}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ===== Contact Form Section (functional) ===== */}
          <motion.section
            id="contact-form"
            className="p-8 md:p-12 bg-white rounded-3xl shadow-xl border border-gray-100"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Send me a message
            </h3>
            <p className="text-gray-700 mb-8">
              Fill out the form below to get in touch.
            </p>

            <form className="grid gap-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  className="w-full border border-gray-300 bg-gray-100 text-gray-900 rounded-md p-3 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  name="_replyto"
                  className="w-full border border-gray-300 bg-gray-100 text-gray-900 rounded-md p-3 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full border border-gray-300 bg-gray-100 text-gray-900 rounded-md p-3 h-32 focus:ring-2 focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-gray-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
            {isSent && (
              <div className="mt-6 text-green-600 text-center">
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            )}
            {error && (
              <div className="mt-6 text-red-500 text-center">
                <p>{error}</p>
              </div>
            )}
          </motion.section>
        </main>

        {/* ===== Footer ===== */}
        <footer className="mt-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center text-sm text-gray-600">
            © {new Date().getFullYear()} Nachiket Bari — Built with passion and
            precision.
          </div>
        </footer>
      </div>

      {/* ===== Chatbot Button and Window ===== */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsChatbotOpen(!isChatbotOpen)}
          className="flex items-center gap-2 bg-gray-900 text-white pl-4 pr-6 py-3 rounded-full shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
          aria-label="Open Chatbot"
        >
          {isChatbotOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-x"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.5em"
                height="1.5em"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-bot"
              >
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" />
                <path d="M8 12h8" />
              </svg>
              <span className="font-semibold text-white">ASK me</span>
            </>
          )}
        </button>
        <AnimatePresence>
          {isChatbotOpen && (
            <motion.div
              className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 overflow-hidden"
              variants={chatWindowVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <div className="flex-shrink-0 bg-gray-900 p-4 text-white font-bold text-center">
                Nachiket's Assistant
              </div>
              <div
                ref={chatHistoryRef}
                className="flex-1 p-4 overflow-y-auto space-y-4 text-sm"
              >
                {chatHistory.map((msg, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      msg.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[75%] p-3 rounded-lg ${
                        msg.role === "user"
                          ? "bg-gray-200 text-gray-800"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
              </div>
              <form
                onSubmit={handleChatSend}
                className="flex-shrink-0 p-4 border-t border-gray-200"
              >
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask a question..."
                  className="w-full bg-gray-100 text-gray-800 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}