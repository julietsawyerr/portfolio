import {useState, useEffect} from 'react'

function useScrollPosition() {
    const [isAtTop, setIsAtTop] = useState(true);


  useEffect(() => {
    
    const handleScroll = () => {
         // Check if the page is at the top
      const atTop = window.scrollY === 0;

      if(atTop){
        setIsAtTop(true);
      }else{
        setIsAtTop(false)
      }
      
    };

    // Add event listener for scroll events
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { isAtTop }
}

export default useScrollPosition