import './App.css'
import image from './assets/Kalvium-Logo-SVG.svg'
function App() {
  return (
    <>
      <div className='bg-[#f43f5e] text-white flex justify-between'>
        <div className='flex justify-evenly'>
          <h1 className=' m-6 font-bold text-lg'>Kalvium</h1>
          <p className=' m-6'>Contacts</p>
          <p className=' m-6'>Courses</p>
          <p className=' m-6'>About us</p>
        </div>
        <button className=' m-6 border border-white text-white rounded px-2'> Login</button>
      </div>

    <button className=' border bg-[#1d4ed8] text-white border-Blue py-1 px-2 rounded my-5 mx-20'>Button One </button>
    
    <div className=' border p-5 bg-[#fecdd3] border-[#f43f5e] mx-20 text-[#be123c]'>
      <span className=' font-bold'> Alert! </span><span> This is awesome! </span>
    </div>

      <div className=' flex mx-auto my-10 max-w-max border p-10 shadow-lg '>
      <img src={image} alt='Kalvium'  className='w-20 mx-5'/>
        <div>
          <h1 >Kalvium store</h1>
          <h1 >You have a new course!</h1>
        </div>
      </div>

      <div className='border border-[#94a3b8] bg-[#cbd5e1] text-center py-3'>
        <span>@ 2021 Copyright: </span><span className='font-bold'>Kalvium</span>
      </div>
    </>
  )
}
export default App