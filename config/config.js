// --------------------------------------------------------- DEFINE CONNECTION STRING -------------------------------------------------------- //

// set up production connection
var configProduction = { user: 'sa', password: '5!Mon231', server: "10.10.0.150", database: 'CoreDB' };

// set up development connection
var configDevelopment = { user: 'sa', password: '5!Mon231', server: "10.1.0.67\\SQLEXPRESS", database: 'CoreDB' };

// set up localhost connection
var configLocalhost = { user: 'sa', password: 'user.200', server: "ASR-L0091\\SQLEXPRESS2014", database: 'ERPDB' };


// ---------------------------------------------------------- EXPORT FUNCTIONS --------------------------------------------------------------- //


module.exports = {
    setup: function(){
        if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'production') { return configProduction; } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'development') { return configDevelopment; } 
        else if (typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.toLowerCase() === 'localhost')  { return configLocalhost; }
    }
}

//exports.configbrowser = configBrowser;
//exports.configmobile = configMobile;