const request = require('request');

exports.handler = (event, context, callback) => {

    const request_url = `https://api.apixu.com/v1/forecast.json?key=${
    process.env.REACT_APP_API_KEY
    }&q=Las+Perdices&days=6`
    
    if (event.httpMethod === 'GET') {
        request.get(request_url, function(error, res, body) {
            if (error) {
                callback(null, {
                    statusCode: 500,
                    body: error
                });
            } else {
                callback(null, {
                    statusCode: 200,
                    body: body
                });
            }
        })

    }
}