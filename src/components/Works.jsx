import { motion } from 'framer-motion'
 import { styles } from '../styles'
 import { SectionWrapper } from '../hoc'
 import { projects } from '../constants'
 import { fadeIn, textVariant } from '../utils/motion'
 import ProjectCard from './ProjectCard'

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}
      initial="hidden"
      whileInView="show" 
      >
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          initial="hidden"
          whileInView="show" 
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] md:text-[18px]'
          >
            Here you can explore some of my personal and client projects that I have developed. Each project is described briefly and includes links to code repository and live demo in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively..
          </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`project-${index}`}
            index={index}
            {...project}
          />
        ))}
      </div>
    </>
    
  )
}

export default SectionWrapper(Works, 'projects')