import { 
    contact,
    github,
    linkedin,
    pricewise,
} from "../assets/icons";

export const experiences = [
    {
      title: "Associate Software Developer",
      company_name: "Internshala",
      icon: "",
      iconBg: "#e0f7fa",
      date: "October 2023 – Present",
      points: [
        "Implemented RabbitMQ for email batching, reducing server load and improving delivery efficiency by 30%.",
        "Migrated legacy PHP pages to Next.js, increasing site performance by 15% and reducing bugs by 21%.",
        "Developed a WebSocket-based live chat system capable of handling 1000+ users in real-time during events.",
        "Integrated Paynimo as a payment option to reduce dependency and increase payment reliability.",
        "Introduced multi-search with Elasticsearch for faster query performance (28% improvement).",
        "Refactored and modularized legacy code to improve maintainability and readability.",
        "Tech Stack: Next.js, PHP, RabbitMQ, Elasticsearch, WebSocket, React.js, Taiwind, Jquery , Typescript, Javascript."
      ],
    },
    {
      title: "Software Developer Intern",
      company_name: "Wabi Tech",
      icon: "",
      iconBg: "#ffe0b2",
      date: "October 2021 – December 2021",
      points: [
        "Conducted manual testing and identified 5 critical bugs, reducing user drop rate by 10%.",
        "Optimized mobile app features to improve responsiveness and user experience.",
        "Tech Stack: Manual Testing, Mobile App Development."
      ],
    }
  ];
  

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Prateekraj1',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/prateek-raj-729872212/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AnimeWatcher',
        description: [
            'Anime streaming platform with login/signup functionality, custom video player, JWT authentication.',
            'Utilized Axios for API data fetching, and Next.js app directory structure for server-side rendering and routing.',
            'Built with Next.js, MongoDB for user data storage, and Tailwind CSS for styling.'
        ],
        link: 'https://anime-watcher.onrender.com/'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Chatme',
        description: [
            'Real-time one-on-one messaging using Socket.io, JWT authentication.',
            'MongoDB used for storing user credentials and chat history.',
            'Middleware for authorization preventing unauthorized access to protected routes.'
        ],
        link: 'https://chat-application-2-test.onrender.com'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'NewsDekho',
        description: [
            'News app displaying top headlines from India, fetching news from NewsAPI.',
            'Built with React.js, HTML, CSS, and JavaScript.',
            'Utilizes NewsAPI to fetch real-time data for top stories in India.',
            'A simple and user-friendly interface to display current affairs for Indian audiences.'
        ],
        link: 'https://github.com/Prateekraj1/NewsDekho'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Heart Disease Prediction',
        description: [
            'Heart disease prediction using machine learning algorithms (KNN, Decision Tree, Random Forest, SVM, Logistic Regression).',
            'Achieved 95% accuracy in predicting the likelihood of heart disease based on patient data.',
            'The model was trained using a dataset of 1,500 patients and used various features to predict heart disease risk.',
            'Built using Python, scikit-learn, pandas, and other data processing libraries.'
        ],
        link: 'https://github.com/Prateekraj1/Machine_learning_work/tree/main/heartdisease'
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-Learning Website',
        description: [
            'Fully functional website for university students to access semester notes.',
            'Students can upload and download notes for various subjects and semesters.',
            'The platform is built with PHP for the backend, with a SQL database for storing notes and user data.',
            'The front-end is designed with CSS, HTML, and JavaScript for a responsive and interactive user interface.',
            'The website allows students to search and filter notes based on subjects, semesters, and keywords.',
            'Live: [E-Learning Website](https://sitnotes.rf.gd/?i=1)'
        ],
        link: 'https://sitnotes.rf.gd/?i=1'
    }
];

