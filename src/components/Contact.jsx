import   { useState, useRef } from 'react'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'
import Spinner from './spin'
import { IoMdAlert } from "react-icons/io";
import { IoCheckmarkCircle } from "react-icons/io5";
import emailjs from '@emailjs/browser';
import Footer from './Footer'


const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false)
  const [errorMsg, setErrorMsg] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({...form, [name]:value})
  }
    
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID, 
        {
          from_name: form.name,
          to_name: "Juliet",  
          from_email: form.email,
          to_email: 'sawyerrjuliet@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setSuccessMsg(true)

          setForm({
            name: "",
            email: "",
            message: "",
          });

          
          setTimeout(() => {
            setSuccessMsg(false)
          }, 3000);
      
        },
        (error) => {
          setLoading(false);
          console.error(error);
          setErrorMsg(true)


          setTimeout(() => {
            setErrorMsg(false)
          }, 3000);

        }
      );
  };

  return (
    <div>
      
      <div className={`${styles.padding} bg-black-100 rounded-[20px] min-h-[300]`}>

      <motion.div variants={textVariant()}
      initial="hidden"
      whileInView="show" >
        <p className={styles.sectionSubText}>
          Get in touch
        </p>
        <h2 className={styles.sectionHeadText}>Contact.</h2>
      </motion.div>

      <form 
        ref={formRef}
        onSubmit={handleSubmit}
        className='mt-12 flex flex-col gap-8'
      >
        <div className="flex flex-col  md:flex-row gap-6">
        <input 
          type="text"
          name='name'
          value={form.name}
          onChange={handleChange} 
          placeholder='Name'
          required
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium md:w-1/2'
        />

        <input 
          type="email"
          name='email'
          value={form.email}
          onChange={handleChange} 
          placeholder='Email'
          required
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium md:w-1/2'
        />
        </div>

        <textarea 
          rows='4'
          name='message'
          value={form.message}
          onChange={handleChange} 
          placeholder='Message me...'
          required
          className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
        />

      <button
        type='submit'
        className='outline-none w-fit text-white font-bold shadow-md shadow-primary'
      >
        {!errorMsg ? 
          (loading ? 
            <span className='py-3 px-8 rounded-xl bg-tertiary' disabled>
              <Spinner />
              Sending ...
            </span> 
          : !successMsg ? 
            <span className='py-3 px-8 rounded-xl bg-tertiary'>
              Send Message
              </span> 
          : <span className='flex gap-2 justify-center items-center py-3 px-8  bg-green-700 rounded-xl'>
              <IoCheckmarkCircle size={25} className='hidden md:block'/>
              Success! Your message has been sent successfully.
            </span>
          ) 
          : <span className='flex gap-2 justify-center items-center w-fit py-3 px-8  bg-red-500 rounded-xl'>
              <IoMdAlert size={25} className='hidden md:block'/>
              Oops! something went wrong.
            </span>
        }
      </button>

      </form>
      </div>

      <Footer />
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')