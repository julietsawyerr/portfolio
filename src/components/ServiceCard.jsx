import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from '../utils/motion'

const ServiceCard  = ({ index, name, icon}) => {
    return(
          <Tilt className='xs:w-[150px] w-full'>
           <motion.div
            variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
            className=" green-pink-gradient p-[1px] rounded-[20px] shadow-card"
           >
              <div
                  options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                  }}
                  className='bg-tertiary rounded-[20px] py-1 px-1 min-h-[100px] flex justify-evenly items-center flex-col'
                >
                  <img
                  src={icon}
                  alt={name}
                  className='w-8 h-8 object-contain'
                  />
  
          <h3 className='text-white text-[16px] font-bold text-center'>
            {name}
          </h3>
  
              </div>
  
           </motion.div>        
           </Tilt> 
    )
  }

  export default ServiceCard;