import { useCallback, useEffect, useRef, useState } from 'react'


function App() {

  const [length, setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("Pratik");

  const generatePassword = useCallback(()=>{

    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str += "0123456789";
    if(charAllowed) str += "~`!@#$%^&*()_+=}[{],./?;:"

    for(let i=0; i < length; i++)
    {
        const char = Math.floor(Math.random() * str.length);
        pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed, setPassword]);

  useEffect(()=>{
    generatePassword()
  }, [length, numAllowed, charAllowed, generatePassword])

  let passwordRef = useRef(null);

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

  },[password])


  

  


  return (

    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-2xl text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value= {password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type="range"
            min={6}
            max={100}
            value={length}    //here
            className='cursor-pointer'
            onChange={(e)=>(setLength(e.target.value))}            
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numAllowed}
            id="numberInput"
            onClick={()=>{
              setNumAllowed((prev)=>!prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onClick={()=>{
              setCharAllowed((prev)=>!prev)
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>

  )
}

export default App
