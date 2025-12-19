import './Result.css'
export default function Result({city, temp, weather, max_temp, min_temp, feels_like}) {
    
    return (
        <>
        <p className='cityName'>{city}</p>
        <p className='tempTitle'>{`${Math.ceil(temp)}°C`}</p>
        <span>{weather}</span>
        <div className="maxmintemp">
            <div>{`Мин.:${Math.ceil(max_temp)}°C `}</div>
            <div>{`Макс.:${Math.ceil(min_temp)}°C`}</div>
        </div>
        <div>{`Ощущается как ${Math.ceil(feels_like)}°C`}</div>
        </>
    )
}