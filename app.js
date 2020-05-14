var http = require("http");
var emp = require("./controllers/employee");
var settings = require("./settings");
var httpMsg = require("./core/httpMessages");


http.createServer(function(req,resp){
    switch(req.method){
        case "GET":
            if(req.url == "/"){
                httpMsg.show405(req,resp);
            }
            else if (req.url == "/employees"){
                emp.getList(req,resp);
            }
            else if (req.url == "/reservations"){
                emp.getResList(req,resp);
            }
            else if (req.url == "/clients"){
                emp.getClientList(req,resp);
            }
            else if (req.url == "/materials"){
                emp.getMaterials(req,resp);
            }
            else if (req.url == "/typeofmaterial"){
                emp.getMaterialTypes(req,resp);
            }
            else if (req.url == "/materialtable"){
                emp.getMaterialsTable(req,resp);
            }
            else if (req.url == "/brands"){
                emp.getBrands(req,resp);
            }
            else if (req.url == "/concreteproc"){
                emp.getConcProcList(req,resp);
            }
            else{
                var empnoPatt = "[0-9]+";
                var patt = new RegExp("/employees/" + empnoPatt);
                if(patt.test(req.url)){
                    patt = new RegExp(empnoPatt);
                    var empno = patt.exec(req.url);
                    emp.get(req, resp, empno);
                }
                else{
                    httpMsg.show404(req,resp);
                }
            }
            break;
        case "POST":
            if(req.url == "/employees"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.add(req,resp,reqBody);
                });
            }
            else if(req.url == "/clients"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.addClient(req,resp,reqBody);
                });
            }
            else if(req.url == "/materials"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.addMaterials(req,resp,reqBody);
                });
            }
            else if(req.url == "/typeofmaterial"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.addTypeMaterials(req,resp,reqBody);
                });
            }
            else if(req.url == "/brands"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.addBrands(req,resp,reqBody);
                });
            }
            else if(req.url == "/reservations"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.addReservation(req,resp,reqBody);
                });
            }
            else if(req.url == "/procs"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.addProcs(req,resp,reqBody);
                });
            }
            else{
                httpMsg.show404(req,resp);
            }
            break;
        case "PUT":
            if(req.url == "/employees"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.update(req,resp,reqBody);
                });
            }
            else if(req.url == "/clients"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.updateClients(req,resp,reqBody);
                });
            }
            else if(req.url == "/procs"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.updateProcs(req,resp,reqBody);
                });
            }
            else if(req.url == "/reservations"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.updateReservations(req,resp,reqBody);
                });
            }
            else{
                httpMsg.show404(req,resp);
            }
            break;
        case "DELETE":
            if(req.url == "/employees"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.delete(req,resp,reqBody);
                });
            }
            else if(req.url == "/clients"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.deleteClients(req,resp,reqBody);
                });
            }
            else if(req.url == "/materials"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.deleteMaterials(req,resp,reqBody);
                });
            }
            else if(req.url == "/procs"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.deleteProcs(req,resp,reqBody);
                });
            }
            else if(req.url == "/reservations"){
                var reqBody = '';
                req.on("data", function(data){
                    reqBody += data;
                    console.log(reqBody);
                    if(reqBody.length > 1e7){
                        httpMsg.show413(req, resp);
                    }
                });
                req.on("end", function(){
                    emp.deleteReservations(req,resp,reqBody);
                });
            }
            else{
                httpMsg.show404(req,resp);
            }
            break;
        default:
            httpMsg.show404(req,resp);
            break;
    }
}).listen(settings.webPort, function(){
    console.log("Started listening at:" + settings.webPort);
    
})