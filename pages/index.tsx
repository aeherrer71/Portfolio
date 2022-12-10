import Head from 'next/head'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiOutlineGithub, AiFillLinkedin, AiOutlineMail} from "react-icons/ai";
import { DiMongodb, DiPython, DiDjango,DiPostgresql } from "react-icons/di";
import { FaReact, FaHtml5, FaJsSquare, FaCss3Alt } from "react-icons/fa"
import { BsWhatsapp } from "react-icons/bs"
import Image from "next/image";
import Me from '../public/IMG_0068.jpg'
import Airbnb from '../public/Airbnb.jpg'
import Benefi from '../public/benefi.png'
import Card_game from '../public/Card_game.png'
import Smack from '../public/Smack.png'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Alexis Herrera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10 mx-auto'>
        <section className='min-h-screen'>
          <nav className='pt-10 flex justify-between text-xs md:text-2xl md:mx-16 md:mb-10'>
            <a  href='#contact'>Contact Me</a>
            <a  href='#about'>About Me</a>
            <a  href='#projects'>Projects</a>
            <a  href='#skills'>Skillset</a>
            
            <ul className='flex items-center text-sm md:text-2xl'>
              {/* <li>
                <BsFillMoonStarsFill className='cursor-pointer' />
              </li> */}
              <li><a className='bg-cyan-500 text-white px-1 py-1 rounded ml-8' href="Resume.pdf" download="Resume.pdf">Resume</a></li>
            </ul>
          </nav>
          <div className='relative w-80 h-80 mx-auto '>
            <Image src={Me} alt='black developer' layout='fill' objectFit='cover' className='rounded-full' />

          </div>
          <div className='text-center p-10' id='about'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium ' >Alexis Herrera</h2>
            <h3 className=' md:text-2xl py-2'>Father | Veteran | Developer</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Highly adaptable and detail-oriented security professional turned software engineer well-versed in analyzing user needs and developing software to meet diverse needs. Innovative and technically-astute facilitator of solutions accustomed to working with global teams. Enthusiastic and self motivated learner that is committed to personal development and keeping up with industry trends.</p>
          </div>
         
        </section>
        <section>
          <h1 className='text-5xl font-medium text-center' id="skills">Skills</h1>
          <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaReact className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>React</h3>
              <p className='text-gray-800 py-1'>React is a free and open-source front-end JavaScript library for building user interfaces or UI components. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaJsSquare className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>JavaScript</h3>
              <p className='text-gray-800 py-1'>JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaHtml5 className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>HTML</h3>
              <p className='text-gray-800 py-1'>The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <FaCss3Alt className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>CSS</h3>
              <p className='text-gray-800 py-1'>Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. </p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiMongodb className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>MongoDB</h3>
              <p className='text-gray-800 py-1'>Cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiPython className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>Python</h3>
              <p className='text-gray-800 py-1'>Cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiDjango className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>Django</h3>
              <p className='text-gray-800 py-1'>Django is a free and open-source, Python-based web framework that follows the model–template–views architectural pattern.</p>
            </div>
            <div className='text-center shadow-2xl p-10 rounded-xl my-10 '>
              <DiPostgresql className='text-5xl mx-auto' />
              <h3 className='py-1 text-lg font-medium '>PostgreSQL</h3>
              <p className='text-gray-800 py-1'> Open source relational database that supports both SQL (relational) and JSON (non-relational) querying. It is a highly stable database management system</p>
            </div>
          </div>
        </section>
          <h1 className='text-5xl font-medium text-center pb-10' id="projects">Projects</h1>
        <section>
          <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid md:grid-cols-2">
            <div >
              <a href='https://genuine-marshmallow-56fd7d.netlify.app/home' >
              <Image
                className="w-full pt-10 my-6 rounded hover:shadow-2xl flex-1"
                src={Smack}
                alt="project"
              /></a>
            </div>
            <div>
              <Image className="w-full rounded hover:shadow-2xl" src={Airbnb} alt="project"/>
            </div>
            <div>
            <a href='https://splendorous-cucurucho-94443d.netlify.app/' >
              <Image className="w-full rounded hover:shadow-2xl" src={Benefi} alt="project"/></a>
            </div>
            <div>
            <a href='https://prismatic-tapioca-fa0a95.netlify.app/' >
              <Image
                className="w-full rounded hover:shadow-2xl"
                alt="project"
                src={Card_game}
              /></a>
            </div>
            
          </div>
        </section>
        <footer className='py-14 '>
          <h1 className='text-5xl font-medium text-center' id="contact">Contact Me</h1>
          <div className='text-5xl justify-center gap-16'>
            <ul className='flex justify-center gap-5'>
            <li><a href='https://www.linkedin.com/in/alexis-herrera003/'><AiFillLinkedin /> </a></li>
            <li><a href='https://github.com/aeherrer71'><AiOutlineGithub /> </a></li>
            <li><a href='mailto:aeherrer71@gmail.com'><AiOutlineMail /></a></li>
            <li><a href='https://wa.me/14694509276' ><BsWhatsapp/></a></li>
            </ul>
          </div>
        </footer>
      </main>


    </div>
  )
}
