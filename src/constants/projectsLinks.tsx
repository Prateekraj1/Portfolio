type ProjectProps = {
  name: string;
  description: string[];
  iconUrl: FC<{ className?: string }>;
  theme: string;
  live_link?: string;
  github_link?: string;
};
import { PricewiseIcon } from "@/components/icons";
import { FC } from "react";

export const projects: ProjectProps[] = [
  {
    iconUrl: () => <PricewiseIcon className="w-2/5 h-2/5 object-contain" />,
    theme: "btn-back-red",
    name: "Anime Watcher",
    description: [
      "Anime streaming platform with login/signup functionality, custom video player, JWT authentication.",
      "Utilized Axios for API data fetching, and Next.js app directory structure for server-side rendering and routing.",
      "Built with Next.js, MongoDB for user data storage, and Tailwind CSS for styling.",
    ],
    live_link: "https://anime-watcher.onrender.com/",
    github_link: "https://github.com/Prateekraj1/anime-watcher",
  },
  {
    iconUrl: () => <PricewiseIcon className="w-2/5 h-2/5 object-contain" />,
    theme: "btn-back-red",
    name: "Chatme",
    description: [
      "Real-time one-on-one messaging using Socket.io, JWT authentication.",
      "MongoDB used for storing user credentials and chat history.",
      "Middleware for authorization preventing unauthorized access to protected routes.",
    ],
    live_link: "https://chat-application-2-test.onrender.com",
    github_link: "https://github.com/Prateekraj1/chat-application-2",
  },
  {
    iconUrl: () => <PricewiseIcon className="w-2/5 h-2/5 object-contain" />,
    theme: "btn-back-red",
    name: "NewsDekho",
    description: [
      "News app displaying top headlines from India, fetching news from NewsAPI.",
      "Built with React.js, HTML, CSS, and JavaScript.",
      "Utilizes NewsAPI to fetch real-time data for top stories in India.",
      "A simple and user-friendly interface to display current affairs for Indian audiences.",
    ],
    github_link: "https://github.com/Prateekraj1/NewsDekho",
  },
  {
    iconUrl: () => <PricewiseIcon className="w-2/5 h-2/5 object-contain" />,
    theme: "btn-back-red",
    name: "Heart Disease Prediction",
    description: [
      "Heart disease prediction using machine learning algorithms (KNN, Decision Tree, Random Forest, SVM, Logistic Regression).",
      "Achieved 95% accuracy in predicting the likelihood of heart disease based on patient data.",
      "The model was trained using a dataset of 1,500 patients and used various features to predict heart disease risk.",
      "Built using Python, scikit-learn, pandas, and other data processing libraries.",
    ],
    github_link:
      "https://github.com/Prateekraj1/Machine_learning_work/tree/main/heartdisease",
  },
  {
    iconUrl: () => <PricewiseIcon className="w-2/5 h-2/5 object-contain" />,
    theme: "btn-back-red",
    name: "E-Learning Website",
    description: [
      "Fully functional website for university students to access semester notes.",
      "Students can upload and download notes for various subjects and semesters.",
      "The platform is built with PHP for the backend, with a SQL database for storing notes and user data.",
      "The front-end is designed with CSS, HTML, and JavaScript for a responsive and interactive user interface.",
      "The website allows students to download notes based on subjects and semesters.",
    ],
    live_link: "https://sitnotes.rf.gd/?i=1",
    github_link: "https://github.com/Prateekraj1/Elearning-Website",
  },
];
