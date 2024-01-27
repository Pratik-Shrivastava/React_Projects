

import Card from './components/Card'


function App() {


  return (
   
    <div className='flex flex-col items-center bg-slate-900 h-screen w-screen m-0'>

      <h2 className='text-4xl text-white my-5 text-center'>This is your GitCard.</h2>
      <Card username='Mohit'/>
      <Card username='Pratik'/>
    </div>
   
  )
}

export default App
