import Head from 'next/head';
import Link from 'next/link';
import Layout from './Layout';
import { useState , useEffect} from 'react';
import { getStatic } from '../actions/getStatic';
import {API} from '../config'
import Header from '../components/Header'
import {withRouter} from 'next/router'


const Teams = ( ) => {
    
    const [values, setValues] = useState({
        teams:['76ers', 'blazers','bucks', 'bulls','cavaliers','celtics','charlotte', 'clippers', 'grizzlies', 'hawks', 'heat'
        ,'jazz', 'kings', 'knicks', 'lakers','magic','mavericks','nets','nuggets','pacers',
        'pelicans','pistons','raptors','rockets','spurs','suns','thunder','timberwolves','warriors','wizard'
        ],
        showEvo: [],
        error:''
    })

    const {teams, showEvo, error} = values;

    const handleEvo = (t) => {
        // setValues({...values, showEvo:[], error:''});
        const all = [...showEvo];
        const clickedTeam = showEvo.indexOf(t);
        if(clickedTeam !== -1){
            all.splice(clickedTeam, 1);
        }else{
            all.push(t);
        }
        setValues({...values, showEvo:all});
    }
    
    const showTeams = () => {
        return(
            <div className="container">
            
                {teams.map((t, i) => {
                    return (                      
                        <img src={`/teams/${t}.png`} alt={i} key={i} className="img-fluid img-thumbnail" style={{height: '100px', margin:"10px"}} onClick={() => handleEvo(t)} />
                    
                )})}
            </div>
        )
    }

    useEffect(() => {
        showEvolutions()
    },[showEvo])

    const showEvolutions = () => {
        console.log(showEvo)
        return <div className="container-fluid">
        {showEvo.map((t, i) => (
            (<div key={i} className="text-center">
                <h3 className="badge-secondary  ">{t}</h3>
                <img src={`team_shot/${t}_evolution_3pt.gif`} align="middle" key={i} alt={i} className="img-fluid" style={{height: '700px', display:'table-cell', textAlign:'center',marginLeft:'auto', marginRight:'auto'}}/>
            </div>)
        ))}
        </div>
        
    }

    return (
        <div className="container-fluid">
        {showEvo}

            {showTeams()}
            <br/>
            {showEvolutions()}
        </div>
    );
}      

export default Teams;