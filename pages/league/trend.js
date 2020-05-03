import Head from 'next/head'
import Layout from '../../components/Layout'
import {API} from '../../config'
import {withRouter} from 'next/router'
import Trend from '../../components/Trend'

const trend = () => {
    return (
        <Layout>
            <Trend/>
        </Layout>
    )
}

export default trend;