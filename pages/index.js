import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Season from '../components/Player'
import {API} from '../config'
import Player from '../components/Player'
import Search from '../components/Search'
import Teams from '../components/Teams'

const Home = () => (
    
     <Layout>
        <Search/>
        <Teams/>
      </Layout>
)

export default Home
