import './app.css'
function App() {

  return (
    <>
      <header className="h-[150px]  bg-[#2c3e50] flex justify-center items-center">
        <div id="input-container" className="w-[60%] flex justify-between">
            <input type="text" name="" id="" placeholder="Enter Location"
            className="text-white text-lg outline-none py-[1rem] px-[0px] "/> 
            <button id="search">Search</button>
        </div>
    </header>
    <main>
        <div id="weather-container">
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
