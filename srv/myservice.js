const { employees } = cds.entities("anubhav.db.master");
module.exports = function(srv) {
    
    //implementation
    srv.on('helloCap',function(req){
        return "Hello my cap developer " + req.data.name;
    });

    srv.on('READ', 'ReadEmployeeSrv', async function(req){
        var results = [];
        var whereCondition = req.data;
        console.log(whereCondition);
        if(whereCondition.hasOwnProperty("ID")){
            results = await cds.tx(req).run(SELECT.from(employees).where(whereCondition));
        }else{
            results = await cds.tx(req).run(SELECT.from(employees).limit(1));
        }

        return results;
        // return {
        //     "ID": "RANDOM",
        //     "nameFirst": "Leone",
        //     "nameLast": "Messy",
        //     "sex": "M",
        //     "language": "E",
        // };
    });

}