export const blurIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
    filter: "blur(10px)",
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const upward = {
  initial: {
    opacity: 0,
    y: 50,
    filter: "blur(5px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const sideward = {
  initial: {
    opacity: 0,
    x: -50,
    filter: "blur(5px)",
  },
  animate: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export const saltRounds = 10;

export const publicRoutes = ["/"];

export const authRoutes = ["/login", "/signup"];

export const authApiRoute = "/api/auth";

import { History, Home, Settings, User } from "lucide-react";

// Menu items.
export const items = [
  {
    title: "Home",
    link: "/dashboard",
    icon: Home,
  },
  {
    title: "History",
    link: "/dashboard/history",
    icon: History,
  },
  {
    title: "Profile",
    link: "/dashboard/profile",
    icon: User,
  },

  {
    title: "Settings",
    link: "/dashboard/settings",
    icon: Settings,
  },
];

export const resumeCards = [
  {
    filename: "Ankit_resume.pdf",
    image:
      "https://images.pexels.com/photos/31464235/pexels-photo-31464235/free-photo-of-romantic-flamingos-displaying-heart-shaped-pose.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://github.com/shadcn.png",
      fallback: "AK",
    },
    uploadedAt: "13 May 2025",
  },
  {
    filename: "Frontend_Developer.pdf",
    image:
      "https://images.pexels.com/photos/6476585/pexels-photo-6476585.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/men/11.jpg",
      fallback: "FD",
    },
    uploadedAt: "10 May 2025",
  },
  {
    filename: "UI_UX_Designer.pdf",
    image:
      "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
      fallback: "UX",
    },
    uploadedAt: "09 May 2025",
  },
  {
    filename: "Fullstack_Resume.pdf",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/men/13.jpg",
      fallback: "FS",
    },
    uploadedAt: "08 May 2025",
  },
  {
    filename: "Internship_Ankit.pdf",
    image:
      "https://images.pexels.com/photos/1236701/pexels-photo-1236701.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/men/14.jpg",
      fallback: "IA",
    },
    uploadedAt: "05 May 2025",
  },
  {
    filename: "Product_Manager_CV.pdf",
    image:
      "https://images.pexels.com/photos/936722/pexels-photo-936722.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/women/15.jpg",
      fallback: "PM",
    },
    uploadedAt: "03 May 2025",
  },
  {
    filename: "Backend_Dev.pdf",
    image:
      "https://images.pexels.com/photos/31701241/pexels-photo-31701241/free-photo-of-colorful-pink-and-beige-mediterranean-architecture.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/men/16.jpg",
      fallback: "BD",
    },
    uploadedAt: "30 April 2025",
  },
  {
    filename: "Marketing_Resume.pdf",
    image:
      "https://images.pexels.com/photos/617758/pexels-photo-617758.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/women/17.jpg",
      fallback: "MR",
    },
    uploadedAt: "27 April 2025",
  },
  {
    filename: "DevOps_Engineer.pdf",
    image:
      "https://images.pexels.com/photos/1181353/pexels-photo-1181353.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/men/18.jpg",
      fallback: "DO",
    },
    uploadedAt: "25 April 2025",
  },
  {
    filename: "Ankit_Portfolio.pdf",
    image:
      "https://images.pexels.com/photos/2901214/pexels-photo-2901214.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    uploader: {
      avatar: "https://randomuser.me/api/portraits/men/19.jpg",
      fallback: "AP",
    },
    uploadedAt: "22 April 2025",
  },
];

export const historyData = [
  {
    id: "001",
    name: "Ankit Kashyap",
    createdAt: "2025-05-01",
    expiry: "2025-06-01",
    type: "PRIVATE",
  },
  {
    id: "002",
    name: "Sakshi Mehta",
    createdAt: "2025-04-25",
    expiry: "2025-05-25",
    type: "PUBLIC",
  },
  {
    id: "003",
    name: "Ravi Verma",
    createdAt: "2025-04-20",
    expiry: "2025-05-20",
    type: "PRIVATE",
  },
  {
    id: "004",
    name: "Neha Sharma",
    createdAt: "2025-04-15",
    expiry: "2025-05-15",
    type: "PUBLIC",
  },
  {
    id: "005",
    name: "Aman Gupta",
    createdAt: "2025-04-10",
    expiry: "2025-05-10",
    type: "PRIVATE",
  },
  {
    id: "006",
    name: "Kritika Singh",
    createdAt: "2025-04-05",
    expiry: "2025-05-05",
    type: "PRIVATE",
  },
  {
    id: "007",
    name: "Mohit Rana",
    createdAt: "2025-04-01",
    expiry: "2025-05-01",
    type: "PRIVATE",
  },
  {
    id: "008",
    name: "Priya Desai",
    createdAt: "2025-03-28",
    expiry: "2025-04-28",
    type: "PRIVATE",
  },
  {
    id: "009",
    name: "Rohan Mishra",
    createdAt: "2025-03-25",
    expiry: "2025-04-25",
    type: "PUBLIC",
  },
  {
    id: "010",
    name: "Tanvi Rawat",
    createdAt: "2025-03-20",
    expiry: "2025-04-20",
    type: "PUBLIC",
  },
];
