var core = require('./coreModel');

var mssql = require('mssql');

var dbConfig = {
    user: 'sa',
    password: 'user.200',
    server:'ASR-L0091\\SQLEXPRESS2014',    
    database:'ERPDB'
};

var validate = function validate(userID, password){
    // core.executeQueryWithParameter()
    // return TRUE;
    console.log('user validate');
    console.log(userID);
    console.log(password);

    mssql.connect(dbConfig, function(err){
        if(err){
            console.log(err);
        } else {

            /*
            var request = new mssql.Request();

            request.query('SELECT TOP 10  FROM SL_T_SalesOrderHeader', function(err, recordset){
                if(err) console.log(err)

                res.send(recordset);
            });
            */
            
            // ===================================================================

            var request = new mssql.Request();
            request.input('UserID', userID);
            request.input('UserPassword', password);
            request.execute('USP_SM_CheckLoginValidation', function(err, recordsets, returnValue, affected) {
                if(err) console.log(err);

                console.log('recordsets');
                console.log(recordsets);

                console.log('JSON recordsets');
                console.log(JSON.stringify(recordsets));

                console.log('recordsets 0');
                console.log(recordsets.recordsets[0]); 
                //console.log(recordsets.recordsets[1]); 
                //console.log(recordsets.recordsets[2]);    

                //res.end(JSON.stringify(recordsets)); // Result in JSON format
                mssql.close();
            });
        }
    });

    return 'FALSE';
};



module.exports.validate = validate;