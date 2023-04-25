let baseurl;
if (process.env.NODE_ENV == 'production') {
    baseurl = 'http://localhost:5600/';
} else {
    baseurl = 'http://localhost:5600/';
}

export { baseurl }