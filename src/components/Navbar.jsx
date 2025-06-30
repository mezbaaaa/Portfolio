import { useEffect, useState } from 'react';
import { MessageSquareMore } from 'lucide-react';

const navLinks = ['Home', 'Portfolio', 'About Me', 'Resume', 'Contact'];

const sectionIds = ['home', 'portfolio', 'about', 'resume', 'contact'];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }

      },
      {
        threshold: 0.6,
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 syne-font sticky top-15 z-50 px-4 py-4 max-sm:hidden">
      <div className="flex gap-5 items-center flex-wrap justify-center">
        {navLinks.map((item, i) => {
          const id = sectionIds[i];

          return (
            <p
              key={item}
              onClick={() => scrollTo(id)}
              className={`cursor-pointer text-xl backdrop-blur-md transition-all duration-300 ease-in-out transform 
                  ${activeSection === id
                  ? 'text-xl font-bold border border-[#E4B8BF30] px-5 py-3.5 rounded-3xl scale-105 -translate-y-1'
                  : 'text-xl font-bold text-[#8A8B91] px-5 py-3.5 rounded-3xl'
                }`}

            >
              {item}
            </p>
          );
        })}
      </div>
      <div>
        <a
          href="#contact"
          className="flex items-center gap-1.5 border border-[#CEC4EF] px-8 py-3.5 text-2xl rounded-3xl bg-gradient-to-r from-[#CEC4EF] to-[#E4B8BF] text-black font-bold cursor-pointer"
        >
          Let's Talk <MessageSquareMore />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
