import React, { useEffect, useState } from 'react'
import './Body.css'

function Body() {
  const [activeSection, setActiveSection] = useState('A');

  useEffect(() => {
    // Scroll to the active section
    const sectionElement = document.getElementById(activeSection);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className='Body'>
      <div className='A_Z_Box'>
        <button onClick={() => setActiveSection('A')} >A</button>    
        <button onClick={() => setActiveSection('B')}>B</button>
        <button onClick={() => setActiveSection('C')}>C</button>
        <button onClick={() => setActiveSection('D')}>D</button>

        <button>E</button>
        <button>F</button>
        <button>G</button>
        <button>H</button>
        <button>I</button>    
        <button>J</button>
        <button>K</button>
        <button>L</button>
        <button>M</button>
        <button>N</button>
        <button>O</button>
        <button>P</button>
        <button>Q</button>    
        <button>R</button>
        <button>S</button>
        <button>T</button>
        <button>U</button>
        <button>V</button>
        <button>W</button>
        <button>X</button>
        <button>Y</button>
        <button>Z</button>
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