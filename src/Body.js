import React, { useEffect, useState } from 'react';
import './Body.css';

function Body() {
  const [activeSection, setActiveSection] = useState('A');
  const [showSidebar, setShowSidebar] = useState(false);
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  const handleScroll = () => {
    const headingA = document.querySelector('.Body_SubHeading');
    const headingRect = headingA.getBoundingClientRect();
    const isPassedHeadingA = headingRect.bottom <= 0;

    if (isPassedHeadingA) {
      if (isMobileDevice) {
        setShowSidebar(true);
      }
    } else {
      setShowSidebar(false);
    }
  };

  const handleResize = () => {
    setIsMobileDevice(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    // Call handleScroll and handleResize once to set initial state
    handleScroll();
    handleResize();

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobileDevice, activeSection]);


  return (
    <div className='Body'>
      <div className={`Sidebar ${showSidebar ? 'show' : 'hide'}`}>
        <button onClick={() => setActiveSection('A')}>A</button>
        <button onClick={() => setActiveSection('B')}>B</button>
        <button onClick={() => setActiveSection('C')}>C</button>
        <button onClick={() => setActiveSection('D')}>D</button>
        <button onClick={() => setActiveSection('E')}>E</button>
        <button onClick={() => setActiveSection('F')}>F</button>
        <button onClick={() => setActiveSection('G')}>G</button>
        <button onClick={() => setActiveSection('H')}>H</button>
        <button onClick={() => setActiveSection('I')}>I</button>
        <button onClick={() => setActiveSection('J')}>J</button>
        <button onClick={() => setActiveSection('K')}>K</button>
        <button onClick={() => setActiveSection('L')}>L</button>
        <button onClick={() => setActiveSection('M')}>M</button>
        <button onClick={() => setActiveSection('N')}>N</button>
        <button onClick={() => setActiveSection('O')}>O</button>
        <button onClick={() => setActiveSection('P')}>P</button>
        <button onClick={() => setActiveSection('Q')}>Q</button>
        <button onClick={() => setActiveSection('R')}>R</button>
        <button onClick={() => setActiveSection('S')}>S</button>
        <button onClick={() => setActiveSection('T')}>T</button>
        <button onClick={() => setActiveSection('U')}>U</button>
        <button onClick={() => setActiveSection('V')}>V</button>
        <button onClick={() => setActiveSection('W')}>W</button>
        <button onClick={() => setActiveSection('X')}>X</button>
        <button onClick={() => setActiveSection('Y')}>Y</button>
        <button onClick={() => setActiveSection('Z')}>Z</button>
      </div>
      <div className='A_Z_Box'>
        <button onClick={() => setActiveSection('A')}>A</button>
        <button onClick={() => setActiveSection('B')}>B</button>
        <button onClick={() => setActiveSection('C')}>C</button>
        <button onClick={() => setActiveSection('D')}>D</button>
        <button onClick={() => setActiveSection('E')}>E</button>
        <button onClick={() => setActiveSection('F')}>F</button>
        <button onClick={() => setActiveSection('G')}>G</button>
        <button onClick={() => setActiveSection('H')}>H</button>
        <button onClick={() => setActiveSection('I')}>I</button>
        <button onClick={() => setActiveSection('J')}>J</button>
        <button onClick={() => setActiveSection('K')}>K</button>
        <button onClick={() => setActiveSection('L')}>L</button>
        <button onClick={() => setActiveSection('M')}>M</button>
        <button onClick={() => setActiveSection('N')}>N</button>
        <button onClick={() => setActiveSection('O')}>O</button>
        <button onClick={() => setActiveSection('P')}>P</button>
        <button onClick={() => setActiveSection('Q')}>Q</button>
        <button onClick={() => setActiveSection('R')}>R</button>
        <button onClick={() => setActiveSection('S')}>S</button>
        <button onClick={() => setActiveSection('T')}>T</button>
        <button onClick={() => setActiveSection('U')}>U</button>
        <button onClick={() => setActiveSection('V')}>V</button>
        <button onClick={() => setActiveSection('W')}>W</button>
        <button onClick={() => setActiveSection('X')}>X</button>
        <button onClick={() => setActiveSection('Y')}>Y</button>
        <button onClick={() => setActiveSection('Z')}>Z</button>
      </div>
         <div id='A' className='Body_Set'>
        <div className='Body_SubHeading' > A </div>
        <div className='Body_names'>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        </div>
        </div>
        <div id='B' className='Body_Set'>
        <div className='Body_SubHeading'> B </div>
        <div className='Body_names'>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        </div>
        </div>
        <div id='C' className='Body_Set'>
        <div className='Body_SubHeading'> C </div>
        <div className='Body_names'>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        </div>
        </div>
         <div id='D' className='Body_Setl'>
        <div className='Body_SubHeading'> D </div>
        <div className='Body_names'>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        <div className='Body_name'>Absolute Advantage</div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </div>
    </div>
  )
}

export default Body