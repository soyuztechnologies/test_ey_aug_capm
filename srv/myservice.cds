using { anubhav.db.master } from '../db/datamodel';

//service defintion - skeleton of our service end point
service MyService @(path: 'MyService') {

    function helloCap(name: String(20)) returns String(100);
    @readonly
    entity ReadEmployeeSrv as projection on master.employees;

}