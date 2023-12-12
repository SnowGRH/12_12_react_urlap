import FoUrlap from "../component/FoUrlap";

export default function Urlap(){
    function adatKap(obj) {
        console.log(obj);
    }
    return(
        <div className="App container">
        <FoUrlap adatKap={adatKap}/></div>
    )
    }