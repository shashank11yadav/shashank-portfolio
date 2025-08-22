import pitchPerfectImage from "../assets/pitch_perfect.png";
import accuscanImage from "../assets/Accuscan.png";
import buzzroomImage from "../assets/Buzzroom.png";
import coronaTrackerImage from "../assets/corona_tracker.png";
import gestureImage from "../assets/Gesture_Sign.png";
import lipnetImage from "../assets/Lipnet.png";
import snakeGameImage from "../assets/snake_game.png";
import sudokuImage from "../assets/sudoku.png";

// Project data
export const projects = [
    {
      id: 1,
      title: "Pitch Perfect",
      description:
        "Developed a full-stack web application enabling users to learn and practice sales skills, integrating user authentication and profile management for personalized learning. Implemented interactive roleplay and active learning features, allowing users to engage in real-time sales training simulations with AI-driven feedback. Designed employer and learner workflows, facilitating career opportunities, employer connections, and AI-based skill assessments, with an AI tool currently in development to enhance training efficiency.",
      image: pitchPerfectImage,
      tags: [
        "Python",
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Full-Stack Development",
        "Web Application",
        "User Authentication",
        "API Integration",
        "Software Design",
      ],
      link: "https://amie-jobs-wat9.vercel.app/signin",
    },
    {
      id: 2,
      title: "AccuScan",
      description:
        "Developed an OCR model using DonutProcessor and Vision Encoder Decoder Model for document text extraction. Integrated Gradual Augmentation Strategy, enhancing model robustness. Optimized training pipeline with PyTorch Lightning, and implemented AdamW optimizer with learning rate scheduling for efficiency.",
      image: accuscanImage,
      tags: [
        "Python",
        "PyTorch",
        "Transformers",
        "OCR",
        "Deep Learning",
        "Computer Vision",
        "Model Optimization",
        "PyTorch Lightning",
        "AdamW",
      ],
      link: "https://github.com/shashank11yadav/AccuScan",
    },
    {
      id: 3,
      title: "GestureSign",
      description:
        "Developed a real-time Sign Language Recognition System using Recurrent Neural Networks (RNNs). Implemented hand landmark detection and an adaptive feature extraction pipeline, optimizing gesture recognition across various hand visibility scenarios.",
      image: gestureImage,
      tags: [
        "Python",
        "Google Colab",
        "RNN",
        "Sign Language Recognition",
        "Computer Vision",
        "Deep Learning",
        "Hand Landmark Detection",
        "Feature Extraction",
      ],
      link: "https://github.com/shashank11yadav/GestureSign",
    },
    {
      id: 4,
      title: "LipNet",
      description:
        "Developed an AI-driven sentence-level lipreading model for real-time speech-to-text conversion from lip movements. Integrated Spatiotemporal Convolutions and Recurrent Neural Networks (RNNs) to enhance visual feature extraction and sequence modeling for improved text prediction.",
      image: lipnetImage,
      tags: [
        "Python",
        "Google Colab",
        "AI",
        "Lip-Reading",
        "Speech-to-Text",
        "RNN",
        "Spatiotemporal Convolutions",
        "Deep Learning",
        "Visual Feature Extraction",
      ],
      link: "https://github.com/shashank11yadav/Lipnet",
    },
    {
      id: 5,
      title: "Buzz Room",
      description:
        "Developed a high-performance Android chat application with real-time messaging, image sharing, and OTP-based authentication, enhancing user security and engagement. Integrated advanced features such as status updates, message reactions, profile customization, and group/individual chat, ensuring seamless user experience across devices.",
      image: buzzroomImage,
      tags: [
        "Java",
        "Android Studio",
        "Firebase",
        "Mobile Application Development",
        "Real-Time Messaging",
        "OTP Authentication",
        "UI/UX Design",
        "Backend Integration",
      ],
      link: "https://github.com/shashank11yadav/BuzzRoom",
    },
    {
      id: 6,
      title: "India Corona Tracker",
      description:
        "Developed an Android application for real-time COVID-19 statistics, integrating APIs to provide state-wise updates on active cases, deaths, and recoveries.",
      image: coronaTrackerImage,
      tags: [
        "Java",
        "Android Studio",
        "API Integration",
        "Mobile Application Development",
        "Data Visualization",
      ],
      link: "https://github.com/shashank11yadav/India-Corona-Tracker",
    },
    {
      id: 7,
      title: "Snake Game",
      description:
        "Implemented a classic Snake Game using JavaScript and HTML5 Canvas, featuring dynamic snake movement, food spawning, score tracking, and game over alerts.",
      image: snakeGameImage,
      tags: [
        "JavaScript",
        "HTML5 Canvas",
        "CSS",
        "Game Development",
        "UI Design",
        "Event Handling",
      ],
      link: "https://github.com/shashank11yadav/Snake-game",
    },
    {
      id: 8,
      title: "Sudoku Solver",
      description:
        "Developed a web-based Sudoku Solver with puzzle generation and solving capabilities, utilizing HTML, CSS, JavaScript, and Bootstrap. Implemented a backtracking algorithm for puzzle solutions and AJAX for API requests.",
      image: sudokuImage,
      tags: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "AJAX",
        "Web Development",
        "Algorithm Implementation",
        "Backtracking",
        "API Communication",
      ],
      link: "https://github.com/shashank11yadav/Sudoku",
    },
  ];