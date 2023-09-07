// import { Link } from "react-router-dom";
import hero from '../images/hero.jpg'
import logo from '../images/logo.png'
import Input from '../components/input'
import { useFormAndValidation } from "../hooks/useFormValidation";


function Auth() {
  const { values } = useFormAndValidation();

  return (
    <div className='relative w-full h-full bg-no-repeat bg-center bg-fixed bg-cover' 
    style={{backgroundImage: `url(${hero})`}}
    >
      <div className='bg-black w-full h-full lg:bg-opacity-50'>
        <nav className='px-12 py-5'>
          <img src={logo} alt='logo' className='h-12'/>
        </nav>
        <div className='flex justify-center'>
          <form className='bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full'>
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign in</h2>
            <div className='flex flex-col gap-4'>
              <Input label="Username" type="text" id="name" value={values.name}/>
              <Input label="Email" type="email" id="email" value={values.email}/>
              <Input label="Password" type="password" id="password" value={values.password}/>
            </div>
            <button className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition cursor-pointer'>Login</button>
            <p className='text-neutral-500 mt-12'>First time using Netflix?
              <span className='text-white ml-1 hover:underline cursor-pointer'> Create an account</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Auth;