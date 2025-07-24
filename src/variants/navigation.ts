export const hamburgerMenuVariants = {
  initial: {
    scaleY: 0,
  },
  animate: {
    scaleY: 1,
    transition: {
      duration: 0.25,
      staggerChildren: 0.05,
      when: "beforeChildren",
    },
  },
  exit: {
    scaleY: 0,
    transition: {
      duration: 0.25,
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

export const hamburgerMenuItemVariants = {
  initial: {
    opacity: 0,
    x: -5,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
  exit: {
    opacity: 0,
    x: -5,
    transition: {
      duration: 0.25,
    },
  },
};
