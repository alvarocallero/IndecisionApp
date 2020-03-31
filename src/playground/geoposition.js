class GeoPosition extends React.Component{
    render (){
        return(
            <div>
                {
                window.navigator.geolocation.getCurrentPosition(
                    console.log(position))
                }
            </div>
        )
    }
}
ReactDOM.render(<GeoPosition />,document.getElementById("app"));