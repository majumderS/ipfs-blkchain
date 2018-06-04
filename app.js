var url = require('url');
var fs = require('fs');
var appModule = require('./appModule');

function renderHTML(path,response){
    fs.readFile(path,null,function(error,data){
        if(error){
            response.writeHead(404);
            response.write("File Not Found");
        }
        else{
            response.write(data);
        }
        response.end();
    });
}


module.exports = {
    handleRequest: function(request,response){
        response.writeHead(200,{'Content-Type':'text/html'});
        var path = url.parse(request.url).pathname;
        switch(path){

            case '/':
                renderHTML('./index.html',response);
                break;
            case '/uploadImage':
                // renderHTML('./uploadImage.html',response);
                appModule.uploadImage("xcvsfdgdk");
                response.write(appModule.certificate);
                response.end();
                break;
            case '/fetchCertificate':
                appModule.fetchCopywrite("QmanzKAzBYcCYrJEwvctaDhQfFaYrwpti28zFivo3ZxSy7");
                response.write(data);
                response.end();
                break;
            default:
                response.writeHead(404);
                response.write("File not found");
                response.end();
        }

    }
}