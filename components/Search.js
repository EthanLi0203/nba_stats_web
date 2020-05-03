import Link from 'next/link';
import renderHTML from 'react-render-html';
import { useState, useEffect } from 'react';
import {getStatic} from '../actions/getStatic'
import {API} from '../config'
import ImageLoader from 'react-load-image';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Router  from 'next/router';
import PlayerName from '../pages/players/[PlayerName]';
const CSVToJSON =  require('csvtojson');



const Search = () => {
    const [values, setValues] = useState({
        search: undefined,
        results: [],
        searched: false,
        message: '',
        lastName: '',
        firstName: '',
        stats:{},
        url: '',
        years: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017],
        checked: []
    });
    const totalStats = {}



    // const [checked, setChecked] = useState([]); // categories


    const { search, results, searched, message, lastName, firstName, stats , url, years, checked} = values;
    const whiteSpace = ' ';
    const searchSubmit = e => {

        e.preventDefault();
        getStatic(lastName, firstName).then(data => {
            if(!data){
                console.log('Cannot get stats of this player')
            }
            setValues({ ...values, results: data, searched: true})
            
        })
        
    
    };

    const handleYearsToggle = y => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedYear = checked.indexOf(y);
        const all = [...checked];
 
        if (clickedYear === -1) {
            all.push(y);
        } else {
            all.splice(clickedYear, 1);
        }
        console.log(all);
        setValues({...values, checked: all});
    };



    const handleChange = e => {
        // console.log(e.target.value);
        setValues({ ...values, search: e.target.value, firstName: e.target.value.split(' ')[0], lastName:e.target.value.split(' ')[1] , searched: false, results: []});
        
    };

    const searchedPlayer = (results = []) => {
        return (
            <div className="jumbotron bg-white">
            <div className="row">
                <div className="col-md-5">
                    {searched && <img src={`${API}/players/${lastName}/${firstName}`} className="img img-fluid featured-image"></img>}
                </div>
                <div className="col-md-7">
                    <ul className="list-group">
                        <li className="list-group-item list-group-item-secondary">{results.name}</li>
                        <li className="list-group-item">{results.team_name}</li>
                        <li className="list-group-item list-group-item-secondary">{'2017 Season Game Played: '+results.games_played}</li>
                    </ul>
                </div>
                <hr/>
            
              </div>  
            </div>
        );
    };

    const searchForm = () => (
        <form onSubmit={searchSubmit}>
            <div className="row">
                <div className="col-md-4 pt-5">
                    <input type="search" className="form-control" placeholder="Search Player" onChange={handleChange} />
                </div>

                <div className="col-md-3 pt-5 mr-2">
                    <button className="btn btn-block btn-primary" type="submit">
                        Search
                    </button>
                </div>
                <div className="col-md-4 pl-3">
                        <h5>Years</h5>
                        <hr />
                        <ul style={{ maxHeight: '70px', overflowY: 'scroll' }}>{showYears()}</ul>
                </div>
            </div>
        </form>
    );

    // const SelectYear = () => {
    //     <form onSubmit={searchSubmit}>
    //         <div className="row">
    //             <div className="col-md-8">
    //                 <input type="search" className="form-control" placeholder="Search Player" onChange={handleChange} />
    //             </div>

    //             <div className="col-md-2">
    //                 <button className="btn btn-block btn-outline-primary" type="submit">
    //                     Search
    //                 </button>
    //             </div>
    //         </div>
    //     </form>
    // }

    const showYears = () => {
        return (
            years &&
            years.map((y, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleYearsToggle(y)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{y}</label>
                </li>
            ))
        );
    };
    const toPlayer = e => {
        Router.push({
            pathname: `/players/${firstName}&&${lastName}`,
            query: {...values}
        })
    }

    return (
        <div className="container-fluid">
            <div className="pt-3 pb-4">{searchForm()}</div>


            { searched &&  <div style={{ marginTop: '-20px', marginBottom: '-80px' }}>{searchedPlayer(results)}</div>}
            <br/>
            {searched && <div className="col-md-3 pt-5 mr-2">
                <button onClick={toPlayer} className="btn btn-block btn-outline-primary" type="submit">
                    Go To Chart
                </button>
            </div>}

            </div>
    );
};

export default Search;
