import { useEffect } from 'react'
import './AboutUs.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../layout/Navbar'


function AboutUs() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white dark:bg-black">

    </div>
  );
}

export default AboutUs;
