import { AdatLeiro } from "../Model/adatLeiro";

export default function FoUrlap(props){
    const adat={};
    function adatKuld(event) {
        event.preventDefault();
        console.log(adat)
        props.adatKap(adat)

    }
    function adaValt(event) {
        console.log(event.target.id);
        console.log(event.target.value);
        adat[event.target.id]=event.target.value;


    }
    return(
        <form onSubmit={adatKuld}>
        {Object.keys(AdatLeiro).map((elem,index) => {
          return(<div className="mb-3 mt-3" key={index}>
          <label htmlFor={AdatLeiro[elem].nev}>{AdatLeiro[elem].megjelenes}</label>
          <input type={AdatLeiro[elem].tipus} className="form-control" id={AdatLeiro[elem].nev} placeholder={AdatLeiro[elem].placeholder} value={AdatLeiro[elem].value} name={AdatLeiro[elem].nev} onChange={adaValt}/>
        </div>)
        })}
        <input type="submit" className="btn btn-default"/>
      </form> 
    )
}