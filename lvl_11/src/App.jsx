import { motion, scale } from 'framer-motion'

function App() {
  return (
    <>
    <motion.div
    transition={{duration:0.3, ease: 'easeInOut'}}
    whileHover={{scale: 1.2,boxShadow: "0 0 5px rgba(0,0,0,0.3)",}}
    className='bg-[#f5f8f8] w-[400px] h-[300px] m-auto p-2 mt-20 rounded-[33px]'>
      <div className='bg-gradient-to-r from-[#3b4d68] to-[#6c7d95] w-[380] h-[160px] rounded-[33px] flex items-center justify-center text-[#9ea1a3] font-bold text-[20px]'>
        first time using <br /> framer motion
      </div>
      <div className='p-6 text-[#9ea1a3]'>
        <h1 className='text-[#3f4d58]'>card 1</h1>
        <h2>first card made <span className='text-[#3f4d58]'>with</span></h2>
        <h2>framer-motion</h2>
      </div>
    </motion.div>
    </>
  );
}

export default App;
