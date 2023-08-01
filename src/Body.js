import React, { useEffect, useState } from 'react'
import './Body.css'

function Body() {
  const [activeSection, setActiveSection] = useState('A');

  useEffect(() => {
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  useEffect(() => {
    const isMobileDevice = window.innerWidth <= 768;
    const sidebar = document.querySelector('.Sidebar');
    const headingA = document.querySelector('.Body_SubHeading');

    const handleScroll = () => {
      const headingRect = headingA.getBoundingClientRect();
      const isPassedHeadingA = headingRect.bottom <= 0;

      if (isPassedHeadingA && !isMobileDevice ) {
        sidebar.style.display = 'flex'; // Show the sidebar when not passing through heading A
      } else {
        sidebar.style.display = 'none'; // Hide the sidebar when passing through heading A
      }
      
    };

    // Attach the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Cleanup: Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='Body'>
      <div className='Sidebar'>
        <button onClick={() => setActiveSection('A')}>A</button>
        <button onClick={() => setActiveSection('B')}>.</button>
        <button onClick={() => setActiveSection('C')}>.</button>
        <button onClick={() => setActiveSection('D')}>D</button>
        <button onClick={() => setActiveSection('E')}>.</button>
        <button onClick={() => setActiveSection('F')}>.</button>
        <button onClick={() => setActiveSection('G')}>G</button>
        <button onClick={() => setActiveSection('H')}>.</button>
        <button onClick={() => setActiveSection('I')}>.</button>
        <button onClick={() => setActiveSection('J')}>J</button>
        <button onClick={() => setActiveSection('K')}>.</button>
        <button onClick={() => setActiveSection('L')}>.</button>
        <button onClick={() => setActiveSection('M')}>M</button>
        <button onClick={() => setActiveSection('N')}>.</button>
        <button onClick={() => setActiveSection('O')}>.</button>
        <button onClick={() => setActiveSection('P')}>P</button>
        <button onClick={() => setActiveSection('Q')}>.</button>
        <button onClick={() => setActiveSection('R')}>.</button>
        <button onClick={() => setActiveSection('S')}>S</button>
        <button onClick={() => setActiveSection('T')}>.</button>
        <button onClick={() => setActiveSection('U')}>.</button>
        <button onClick={() => setActiveSection('V')}>V</button>
        <button onClick={() => setActiveSection('W')}>.</button>
        <button onClick={() => setActiveSection('X')}>.</button>
        <button onClick={() => setActiveSection('Y')}>Y</button>
        <button onClick={() => setActiveSection('Z')}>Z</button>


        {/* Add the rest of the alphabet buttons here */}
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