import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const APP_NAME = publicRuntimeConfig.APP_NAME;

export const DOMAIN = publicRuntimeConfig.PRODUCTION ?
    publicRuntimeConfig.DOMAIN_PRODUCTION 
    :   publicRuntimeConfig.DOMAIN_DEVELOPMENT;

export const API = 'https://nba-players.herokuapp.com'

export const rapidAPI = 'https://api-nba-v1.p.rapidapi.com'