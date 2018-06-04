const IPFS = require('ipfs-mini');
const ipfs = new IPFS({host: 'ipfs.infura.io', port: 5001, protocol: 'https'});
global.certificate = 'hey';
function uploadImage(text){
    const randomData = text; // random bytes for testing
    ipfs.add(randomData, (err, hash) => {
     if (err) {
       return console.log(err);
     }
     certificate = hash;
     console.log("HASH:", hash);
     console.log("CC:", certificate);
    });
}

function fetchCopywrite(hash){
  ipfs.cat(hash, (err, data) => {
   if (err) {
     return console.log(err);
   }
   console.log("DATA:", data);   
  });
}

module.exports.uploadImage = uploadImage;
module.exports.fetchCopywrite = fetchCopywrite;
module.exports.certificate = certificate;
