import { styles  } from '../styles'; 
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className={`${styles.paddingX} flex justify-start items-center pt-14`}>
     

            {/* social buttons */}
          <div className='flex gap-5'>
              <a href='https://github.com/julietsawyerr' target="_blank"><FaGithub size={20} className=' text-secondary'/></a>
            <a href='https://www.linkedin.com/in/julietsawyerr/' target='_blank'><FaLinkedinIn size={20} className=' text-secondary'/></a>
            {/* <BsWhatsapp size={20} className=''/> */}

            <div className='relative text-[12px] before:text-secondary before:content-[attr(data-tip)]
            before:absolute before:-top-3 before:px-3 before:py-2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:rounded-md before:opacity-0 before:transition-all
            
            after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all
            
            hover:before:opacity-100 hover:after:opacity-100'

            data-tip='sawyerrjuliet@gmail.com'
            >
            <MdEmail size={20} />
            </div>


            <div className='relative text-[12px] before:text-secondary before:content-[attr(data-tip)]
            before:absolute before:-top-3 before:px-3 before:py-2 before:w-max before:max-w-xs before:-translate-x-1/2 before:-translate-y-full before:bg-tertiary before:rounded-md before:opacity-0 before:transition-all
            
            after:absolute after:left-1/2 after:-top-3 after:h-0 after:w-0 after:-translate-x-1/2 after:border-8 after:border-t-tertiary after:border-l-transparent after:border-b-transparent after:border-r-transparent after:opacity-0 after:transition-all
            
            hover:before:opacity-100 hover:after:opacity-100'
            data-tip='+234 816 479 2801'
            >
            <HiMiniDevicePhoneMobile size={20}/>
            </div>

      </div>
     </div>

  )
}

export default Footer