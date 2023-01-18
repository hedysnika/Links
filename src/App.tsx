import { Icon } from '@iconify/react';

function App() {

  return (
    <div className='h-auto min-h-screen'>
      <div className='flex items-center justify-center h-screen text-center'>
     <pre><div className='text-3xl font-semibold'>τὰ φίλτατα Nike</div> <br />
      <div className='flex justify-center'>Github <Icon icon="mdi:github" color="black" width="24" height="24" /></div>
      <div className='flex justify-center'>Linkedin<Icon icon="mdi:linkedin" color="black" width="24" height="24" /></div>
      <div className='flex justify-center'>twitter<Icon icon="ph:twitter-logo" color="black" width="24" height="24" /></div>
      <div className='flex justify-center'>Portfolio Website</div>
      </pre> 
      </div>
    </div>
  )
}

export default App
