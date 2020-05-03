import Head from 'next/head'
import Layout from '../../components/Layout'
import {API} from '../../config'
import Player from '../../components/Player'
import Search from '../../components/Search'
import {withRouter} from 'next/router'

const SinglePlayer = ({ value}) => (
    
     <Layout>
     <Player  lastName={value.lastName} firstName={value.firstName} checked={value.checked}/>
      </Layout>
)

SinglePlayer.getInitialProps = ({query}) => {

    return({
        value: query
    })
}

export default withRouter(SinglePlayer);