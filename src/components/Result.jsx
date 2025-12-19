import './Result.css'
export default function Result({city, temp, weather, max_temp, min_temp, feels_like}) {
    
    return (
        <>
        <h1>{city}</h1>
        <h1>{`${temp}°C`}</h1>
        <div>{weather}</div>
        <div className="maxmintemp">
            <div>{`${max_temp}°C `}</div>
            <div>{`${min_temp}°C`}</div>
        </div>
        <div>{`Ощущается как ${feels_like}°C`}</div>
        </>
    )
}