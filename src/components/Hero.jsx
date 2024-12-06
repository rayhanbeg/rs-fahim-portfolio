import HeroImage from '../assets/hero-image.jpg'
import pdf from '../assets/Rs_Fahim.pdf'

const Hero = () => {
  return (
    <div className='text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Md Fahim</span>
            , Student
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I'm a student at Alhaz Mockbul Hossain College, eager to learn and grow.
        </p>
        <div className='mt-8 space-x-4'>
            <a href='#contact'
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</a>
            <a
              href={pdf} 
              download="Fahim_Resume.pdf"
              className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Resume
            </a>
        </div>
    </div>
  )
}

export default Hero
