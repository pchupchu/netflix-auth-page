// import { Link } from "react-router-dom";
import hero from '../images/hero.jpg'
import logo from '../images/logo.png'


function Auth() {
  return (
    <div className='relative w-full h-full bg-no-repeat bg-center bg-fixed bg-cover' 
    style={{backgroundImage: `url(${hero})`}}
    >
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src={logo} alt='' />
          <h2 className="text-red-900">Hello</h2>
          <h2 className="text-red-900">Hello</h2>
          <h2 className="text-red-900">Hello</h2>
        </nav>
        
      </div>
    </div>
  );
}

export default Auth;