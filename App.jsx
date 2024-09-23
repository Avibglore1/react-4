import './app.css'
function App() {

  return (
    <>
      <header className="h-[150px]  bg-[#2c3e50] flex justify-center items-center">
        <div id="input-container" className="w-[60%] flex justify-between">
            <input type="text" name="" id="" placeholder="Enter Location"
            className="text-white text-lg outline-none py-[1rem] px-[0px] 
            border-none border-b-2 border-white w-[84%]" /> 
            <button id="search" className='bg-[#44ad96] text-lg text-white border-none
            cursor-pointer py-[1rem] px-[2rem]'>Search</button>
        </div>
    </header>
    <main className='h-[calc(100vh-150px)] flex items-center justify-center text-white bg-[#01161E]'> 
        <div id="weather-container" className='flex items-center gap-[1rem] h-[5rem]'>
            <div id="temprature">21.2°C</div>
            <div id="location-date">
                <div id="location">Delhi</div>
                <span id="time">12:43</span>
                <span id="Date">2024-07-15</span>
            </div>
            <div id="weather-state">
                <img src="//cdn.weatherapi.com/weather/64x64/day/113.png" id="emoji" alt=""/>
                <div id="condition">Sunny</div>
            </div>
        </div>    
    </main> 
    
    </>
  )
}

export default App
