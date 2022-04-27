import Weather from "../components/Weather";

const WeatherPage = () => {
    return (
        <>
            <Weather cityName={"seville"} />
            <Weather cityName={"huelva"} />
            <Weather cityName={"madrid"} />
            <Weather cityName={"barcelona"} />

        </>
    )
}

export default WeatherPage