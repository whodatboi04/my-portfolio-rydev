import { MdOutlineMail } from "react-icons/md";
import { MdDownload } from "react-icons/md";
import porfilePicture from '../../Image/1-profile-img.png'

export default function home() {

    const contact = () => {
        window.open('https://www.linkedin.com/in/rynmrkdlsrys/', '_blank');
    };

  return (
        <section className='flex flex-col-reverse items-center justify-center p-5 lg:mt-20 lg:flex-row  lg:justify-between lg:w-3/4 lg:h-full mt-10' id='Home'>
            <div>
                <h3 className='text-xs md:text-sm font-bold text-mainColor text-center lg:text-left mt-8 dark:text-lightGreen'>
                    SOFTWARE DEVELOPER
                </h3>
                <h1 className='text-4xl md:text-5xl lg:text-7xl font-bold text-center lg:text-left dark:text-white'>
                    Hello, my name <br/> is <span className='text-mainColor dark:text-lightGreen'>Ryan Mark</span>
                </h1>
                <p className='text-sm md:text-lg text-center lg:text-left text-lightColor mt-2 dark:text-white'>
                    an aspiring developer with passion for <br/> design, innovation, technologies
                </p>
                <div className='flex flex-col lg:flex-row gap-4 mt-6  items-center'>
                    <button onClick={contact} className='bg-mainColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>
                        Contact me <MdOutlineMail color='#fff' size={20}/>
                    </button>
                    <button className='bg-lightColor w-52 p-2 rounded-full flex justify-center items-center gap-3 text-tWhite'>
                        Download CV <MdDownload color='#fff' size={20}/>
                    </button>
                </div>
            </div>
            <div className='m-auto lg:m-0'>
                <div className='bg-gradient-to-b from-mainColor to-lightGreen rounded-full w-72 md:w-96'>
                    <img 
                        src={porfilePicture}
                        className='w-72  md:ml-6 md:mb-6 md:w-96'
                        alt='Animated Profile'
                    />
                </div>
            </div>
        </section>
  )
}
