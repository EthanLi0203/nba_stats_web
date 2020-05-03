import Head from 'next/head';
import Link from 'next/link';
import Layout from './Layout';
import { useState , useEffect} from 'react';
import { getStatic } from '../actions/getStatic';
import {API} from '../config'
import Header from '../components/Header'
import {withRouter} from 'next/router'


const Player = ( { lastName, firstName, checked}) => {

    const showDefault = () => {
        return (
            <div>
             <h2 className="text-warning">Please select year, now default with 2017</h2>
             (<img src={`/${2017}/${firstName} ${lastName}_${2017}_shotchart.png`} alt="shot chart" className="img-responsive w-50"/>

            </div>
        )
    }
  
    const searchedPlayer =  () => {
        return (
            <div className="jumbotron bg-white">
            <div className="row">
                <div className="col-md-5">
                    {<img src={`${API}/players/${lastName}/${firstName}`} className="rounded mx-auto d-block"></img>}
                </div>
                <div className="col-md-5">
                    <h2 className="text-primary">{`${firstName} ${lastName}`}</h2>
                    <br/>
                    <ul className="list-group list-group-horizontal">
                    {checked && checked.map((y, i) => {
                        return <small className="list-group-item list-group-item-secondary">
                            <h5>{`Season:${y}`}</h5>
                            <br/>
                        </small>
                    })}
                    </ul>
                   
                </div>
                </div>  

                <hr/>
                {!checked && showDefault()}
                {checked && checked.map((c, i) => {
                    return (
                        <img key={i} src={`/${c}/${firstName} ${lastName}_${c}_shotchart.png`} alt="shot chart" className="img-responsive w-50"/>
                    );
                }
                )}

            </div>
        );
    };
    return (
        <div className="container-fluid">
            {searchedPlayer()}
        </div>
    );
}      

export default Player;