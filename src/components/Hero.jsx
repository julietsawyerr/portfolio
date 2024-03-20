import { motion  } from "framer-motion";
import { styles }  from '../styles';
import { fadeIn, textVariant } from '../utils/motion'

const Hero = () => {

  return (
    <section id='home' className="relative w-full h-screen mx-auto">
    
      <div 
      className={`${styles.paddingX} absolute inset-0 top-[135px] max-w-7xl mx-auto flex flex-row items-start gap-6  sm:gap-6 xs:gap-4`}
      >
          <div className="mt-5">
          <motion.div variants={textVariant()}
          initial="hidden"
          whileInView="show">
          <p className={styles.sectionSubText}>Welcome</p>      
          <h1 className={`${styles.heroHeadText} text-white`}>I&#39;m <span className="animate-text bg-gradient-to-l from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent">Juliet. </span></h1>
          </motion.div>
         
          <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          initial="hidden"
          whileInView="show" 
          className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] md:text-[18px]'>
          A Front-end Developer with a passion for creating visually appealing and intuitive user interfaces. With years of experience in the field, I have honed my expertise in HTML, CSS, and JavaScript, making me proficient in turning design concepts into responsive and dynamic web applications.
          </motion.p>
        </div>
        </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[32px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
            animate={{
              y:[0, 20, 0]
            }}
            transition={{
              duration:1.5,
              repeat:Infinity,
              repeatType:'loop'
            }}
             className="w-2 h-2 rounded-full bg-secondary mb-1"
             >

            </motion.div>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero