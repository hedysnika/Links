import { Icon } from '@iconify/react';

function App() {

  return (
    <div className='h-auto min-h-screen'>
      <div className='flex items-center justify-center h-screen text-center'>
     <pre><div className='text-3xl font-semibold'>τὰ φίλτατα Nike</div> <br />
      <div className='flex justify-center mt-4 mb-3'>Github <Icon icon="mdi:github" color="black" width="24" height="24" /></div>
      <div className='flex justify-center my-3'>Linkedin<Icon icon="mdi:linkedin" color="black" width="24" height="24" /></div>
      <div className='flex justify-center my-3'>twitter<Icon icon="ph:twitter-logo" color="black" width="24" height="24" /></div>
      <div className='flex justify-center my-3'>Portfolio Website</div>
      </pre> 
      </div>
    </div>
  )
}

export default App
