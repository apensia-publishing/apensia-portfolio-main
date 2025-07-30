import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  hamburgerMenuVariants,
  hamburgerMenuItemVariants,
} from "../variants/navigation";

export default function Navigation() {
  const navMenus = [
    { id: "about_me", text: "About Me" },
    { id: "works", text: "Works" },
    { id: "contact", text: "Contact" },
  ];

  // Hamburger menu edge function
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const handleMenuOpen = () => setMenuOpen((prev) => !prev);
  const onClickMenuClose = () => setMenuOpen(false); // Always close hamburger menu when link has been clicked

  return (
    <header className="fixed left-0 top-0 h-15 w-full md:h-30 xl:w-[250px] xl:h-svh bg-white">
      <nav className="w-full h-full flex flex-col justify-center xl:justify-start gap-5 relative py-5 px-[20px] md:px-[32px] xl:border-r-[0.1px] xl:border-r-gray-300">
        <div className="flex justify-between items-center xl:hidden">
          <a href="#hero" className="text-xl font-semibold">
            Apensia Studio
          </a>
          <a href="" className="hidden text-gray-400 text-paragraph md:block">
            Contact Me
          </a>
          <button onClick={handleMenuOpen} className="text-sm md:hidden">
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Hamburger menu on mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul
              className="bg-white text-paragraph absolute top-14 left-0 flex flex-col gap-5 w-full origin-top justify-between py-5 px-[20px] md:hidden"
              variants={hamburgerMenuVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {navMenus.map((i, index) => (
                <motion.li key={i.id} variants={hamburgerMenuItemVariants}>
                  <a href={`#${i.id}`} onClick={onClickMenuClose}>
                    {i.text}
                  </a>
                  <sup className="text-gray-400">0{index + 1}</sup>
                </motion.li>
              ))}
              <motion.hr
                className="border-[0.25px] border-gray-200"
                variants={hamburgerMenuItemVariants}
              />
              <motion.li variants={hamburgerMenuItemVariants}>
                <a
                  href=""
                  className="text-gray-400 md:hidden"
                  onClick={onClickMenuClose}
                >
                  Contact Me
                </a>
              </motion.li>
            </motion.ul>
          )}
        </AnimatePresence>

        <ul className="hidden md:flex md:justify-between xl:flex-col xl:gap-5 xl:mt-10">
          {navMenus.map((i, index) => (
            <li key={i.id}>
              <a href={`/#${i.id}`}>{i.text}</a>
              <sup className="text-gray-400">0{index + 1}</sup>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
