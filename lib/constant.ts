export const navItems = [
  {
    name: "Features",
    link: "/",
  },
  {
    name: "Pricing",
    link: "#pricing",
  },
  {
    name: "Contact",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc4XPjHJ3EZDaiDgs5ze1xyVWHnlxpF4fSnHdkzAYxuMl4ABw/viewform",
  },
];

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
