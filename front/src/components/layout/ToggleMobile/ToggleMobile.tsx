"use client";

import React, { useState, useRef } from "react";
import { useRouter } from 'next/navigation';
import { FaTimes, FaBars } from "react-icons/fa";

const ToggleMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMenu = (): void => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block z-50">
      <button className="md:hidden" onClick={toggleMenu}>
        {isOpen ? (
          <FaTimes className="h-6 w-6 text-secondary" />
        ) : (
          <FaBars className="h-6 w-6 text-secondary" />
        )}
      </button>
      {isOpen && (
        <div
          ref={menuRef}
          className="absolute top-full right-0 bg-accent shadow-md rounded-md w-48"
        >
          <div className="space-y-4 p-4">
            <hr className="mx-auto my-2 w-[90%] border-gray-700" />
            <button
              onClick={() => handleNavigation('/')}
              className="block w-full py-2 text-left font-bold transition-all duration-300 ease-in-out hover:font-bold hover:text-error"
            >
              INICIO
            </button>
            <button
              onClick={() => handleNavigation('/about')}
              className="block w-full py-2 text-left font-bold transition-all duration-300 ease-in-out hover:font-bold hover:text-error"
            >
              NOSOTROS
            </button>
            <button
              onClick={() => handleNavigation('/products')}
              className="block w-full py-2 text-left font-bold transition-all duration-300 ease-in-out hover:font-bold hover:text-error"
            >
              PRODUCTOS
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ToggleMobile;