import Head from 'next/head';
import Link from 'next/link';
import { useState , useEffect} from 'react';
import {withRouter} from 'next/router'


const Trend = () => {
    const years = [2010,2011,2012, 2013, 2014, 2015, 2016, 2017];
    
    const [values, setValues] = useState({
        show: false,
        each: false,
    })
    const {show, each} =values;

    return (
        <React.Fragment>

            <div className="row">
                <div className="col-md-4">
                    <div class="btn-group-vertical  ml-4" role="group" aria-label="Basic example">
                        <button className="btn  btn-lg btn-info" onClick={() => {setValues({show: !show})}}>Overall evolution</button>
                        <button className="btn  btn-lg btn-info" onClick={() => {setValues({each: !each})}}>Evolution by each year</button>
                    </div>
                 </div>
                 <h2 className="text-center rounded bg-secondary text-light font-italic mb-5">3 point shot evolution of whole league</h2>
            </div>
            
            <br></br>
            {show && <img src={`/league/evolution_3pt.gif`} alt="league trend year" className="img-fluid" display={{margin: 'auto', height:'150px'}}/>}

            {each && <ul className="container-fluid">
                {years.map((y, i) => {
                    return (
                    <div className="card" style={{width:'38rem'}}>
                        <h4 className="w-25 card-title rounded font-weight-bold text-center text-light bg-success ">{y}</h4>
                        <img src={`/league/3pts_trend_${y}.png`} alt="league trend year" className="card-img-bottom" display={{margin: 'auto', textAlign:'center',height:'150px'}}/>
                        <br></br>
                    </div>
                )})}
            </ul>}
            
        </React.Fragment>
    )
}

export default Trend;