import { motion } from "framer-motion";
import { styles } from '../styles';
import { technologies } from "../constants";
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from "../hoc";
import ServiceCard from './ServiceCard'


const About = () => {
  return (
    <>
    {/* Heading */}
    <motion.div variants={textVariant()}
    initial="hidden"
    whileInView="show">
        <p className={styles.sectionSubText}>
        Learn More
        </p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

    
    {/* About details */}
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show" 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] md:text-[18px]'
      >
       I am a collaborative team player who values effective communication and teamwork. I thrive in an agile development environment, where I can contribute my creativity and problem-solving skills to deliver high-quality web applications. With the knowledge of modern front-end frameworks and libraries, such as React and Next.js, it allows me to build robust and scalable applications that deliver a seamless user experience. </motion.p>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        initial="hidden"
        whileInView="show" 
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] md:text-[18px]'
      >
      Beyond technical skills, I am also familiar with UI/UX principles, enabling me to<br className="md:block xs:hidden" /> collaborate effectively with designers to bring their visions to life.
      </motion.p>

      {/* skill section */}
      <h3 className="mt-8 text-white font-black md:text-[30px] sm:text-[20px] xs:text-[18px] text-[30px]">Skills</h3>

      <div className="mt-8 flex flex-wrap  gap-10  ">
        {technologies.map((tech, index) => (
          <ServiceCard key={tech.name} index={index} {...tech} />
        ))}
      </div>
        </>
  )
}

export default SectionWrapper(About, 'about');