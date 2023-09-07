import { useFormAndValidation } from "../hooks/useFormValidation";

function Input({label, type, id, value}) {
  const { handleChange } = useFormAndValidation();

  return (
    <div className="relative">
      <input 
      id={id}
      type={type}
      value={value}
      onChange={handleChange}
      className="block rounded-md px-6 pt-6 pb-1 w-full text-md text-white bg-neutral-700 appearance-none focus:outline-none focus:ring-0 peer" placeholder=" "
      required />
      <label htmlFor="email" className="absolute text-md text-zinc-400 duration-150 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-6 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">{label}</label>
    </div>
  );
}

export default Input;