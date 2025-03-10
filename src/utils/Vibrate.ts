const Vibrate = (duration:number) => {
    navigator.vibrate(duration || 300)
}

export default Vibrate
