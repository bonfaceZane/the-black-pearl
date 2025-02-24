import axios from 'axios'

const appUrl =
    process.env.APP_URL === 'development'
        ? 'http://localhost:3000'
        : process.env.APP_URL

export const client = axios.create({
    baseURL: appUrl,
})
