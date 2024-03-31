import { Link, useNavigate } from 'react-router-dom';
import classes from '../../App.module.css'
import Button from '../Button/Button';


const Footer = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  return (
    <footer className={`bg-wood pt-10 pb-10  text-black`}>
      <div className=' mx-auto w-[80%]'>
        <div className=' flex flex-col sm:flex-row mb-4 justify-between'>
          <div className=' sm:ml-0'>
            <img src="../../logo.webp" alt="logo" height={80} width={80} className='rounded-full'/>
          </div>
          <div className='flex flex-col mx-3 my-2'>
            <div className=''>
              <h5 className=' uppercase font-bold text-lg'>Услуги</h5>
            </div>
            <ul className=' text-base'>
              <li>Терапевтичен масаж</li>
              <li>Акупунктура</li>
              <li>Индивидуална рехабилитационна програма</li>
              {!user ? <Link to={'login'}>
                <li>Админ</li>
              </Link> : 
              <div className='mt-4' onClick={() => 
                {localStorage.removeItem('user')
                navigate('/')
                }}><Button bg={'btn-secondary'}>Излез</Button></div>
              }
            </ul>
          </div>
          <div className='flex flex-col mx-3 my-2'>
            <div className=''>
              <h5 className=' uppercase font-bold text-lg '>Контакти</h5>
            </div>
            <p>
              <span className='font-bold text-base flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                 Пловдив
              </span>
              <span className='text-base ml-5'>кв. Мараша ул. “8-ми март 1” офис Юмейхо </span>
            </p>
            <p>
              <span className=' flex flex-col'>
                <a href='tel:+359893711399' className='text-base mt-2 flex flex-row transition ease-in-out hover:-translate-y-1 hover:scale-125'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
    <             path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg><span>+359893711399</span></a>

              </span>
            </p>
            <p className='flex flex-row mt-2 '>
               <a href="https://www.facebook.com/MTZlatomirTrifonov" target="_blank"
               className='transition ease-in-out hover:-translate-y-1 hover:scale-125' rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px"  className="w-6 h-6 mr-2 fill-[#0069FF]" viewBox="0 0 50 50">
                <path  d="M 25 3 C 12.861562 3 3 12.861562 3 25 C 3 36.019135 11.127533 45.138355 21.712891 46.728516 L 22.861328 46.902344 L 22.861328 29.566406 L 17.664062 29.566406 L 17.664062 26.046875 L 22.861328 26.046875 L 22.861328 21.373047 C 22.861328 18.494965 23.551973 16.599417 24.695312 15.410156 C 25.838652 14.220896 27.528004 13.621094 29.878906 13.621094 C 31.758714 13.621094 32.490022 13.734993 33.185547 13.820312 L 33.185547 16.701172 L 30.738281 16.701172 C 29.349697 16.701172 28.210449 17.475903 27.619141 18.507812 C 27.027832 19.539724 26.84375 20.771816 26.84375 22.027344 L 26.84375 26.044922 L 32.966797 26.044922 L 32.421875 29.564453 L 26.84375 29.564453 L 26.84375 46.929688 L 27.978516 46.775391 C 38.71434 45.319366 47 36.126845 47 25 C 47 12.861562 37.138438 3 25 3 z M 25 5 C 36.057562 5 45 13.942438 45 25 C 45 34.729791 38.035799 42.731796 28.84375 44.533203 L 28.84375 31.564453 L 34.136719 31.564453 L 35.298828 24.044922 L 28.84375 24.044922 L 28.84375 22.027344 C 28.84375 20.989871 29.033574 20.060293 29.353516 19.501953 C 29.673457 18.943614 29.981865 18.701172 30.738281 18.701172 L 35.185547 18.701172 L 35.185547 12.009766 L 34.318359 11.892578 C 33.718567 11.811418 32.349197 11.621094 29.878906 11.621094 C 27.175808 11.621094 24.855567 12.357448 23.253906 14.023438 C 21.652246 15.689426 20.861328 18.170128 20.861328 21.373047 L 20.861328 24.046875 L 15.664062 24.046875 L 15.664062 31.566406 L 20.861328 31.566406 L 20.861328 44.470703 C 11.816995 42.554813 5 34.624447 5 25 C 5 13.942438 13.942438 5 25 5 z"></path>
                </svg>
               </a>
               <a href="https://www.instagram.com/z.trifonov_massage.therapist" target="_blank"
               className='transition ease-in-out hover:-translate-y-1 hover:scale-125' rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-6 h-6 mx-2 fill-[#C13A89]"viewBox="0 0 50 50">
                  <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
                </svg>
               </a>
            </p>
          </div>
          <div className='flex flex-col mx-3 my-2'>
          <div className=''>
              <h5 className=' uppercase font-bold text-lg'>Работно време</h5>
            </div>
            <p>
              <span className='flex flex-row'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
                <span className='text-base ml-3'>Пон-Сб: 09:00-19:00</span>
              </span>
            </p>

          </div>
        </div>
       <div className='mx-auto mt-12 text-sm text-center' >
         <a href="https://github.com/BateDowen" target="_blank"
         className=' hover:text-hoverBlue' rel="noopener noreferrer">Copiright © 2024 Мирослав Димитров Github</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;

