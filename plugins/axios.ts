import https from 'https';

export default function ({ $axios }: any) {
    $axios.setBaseURL('https://www.fmnplc.com/boot');
    $axios.defaults.httpsAgent = new https.Agent({ rejectUnauthorized: false });
}
