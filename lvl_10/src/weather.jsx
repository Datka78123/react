import { useState } from "react";

function Weather() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        setError("");
        setWeather(null);

        try {
            const response = await fetch(
                `https://api.weatherapi.com/v1/current.json?key=dbd551f2ec944e00b9144141251808&q=${city}`
            );
            const data = await response.json();

            if (data.error) {
                throw new Error(data.error.message);
            }

            setWeather(data);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="h-[500px] w-[350px] m-auto mt-40 bg-[url('assets/wolf-zimmermann-6sf5rf8QYFE-unsplash.jpg')]  bg-cover bg-center flex flex-col items-center rounded-[40px]  shadow-[0_0_16px_rgba(0,0,0,0.8)] text-[#fff]">
            <h1 className="font-bold text-[20px]">Weather</h1>
            <input
                className="backdrop-blur m-3 p-2 rounded-[40px] shadow-[0_0_8px_rgba(0,0,0,0.4)] focus:outline-none"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
            />

            <div className="h-[270px] w-[300px]">
                {error && <p style={{ color: "red" }}>{error}</p>}
                {weather && (
                    <div className="text-center font-bold rounded-[40px]">
                        <h2>{weather.location.name}</h2>
                        <p>{weather.current.temp_c}°C</p>
                        <p>{weather.current.condition.text}</p>
                    </div>
                )}
            </div>
            <div className="">
                <button
                    className="relative top-17 w-[330px] h-[55px] bg-[#fbfbfb] text-[#252d3e] font-bold rounded-[40px] z-50 duration-300 transition-all ease-in-out hover:scale-105 hover:shadow-[0_0_8px_rgba(0,0,0,0.4)] cursor-pointer"
                    onClick={fetchWeather}
                >
                    Get Weather
                </button>
            </div>
        </div>
    );
}

export default Weather;
