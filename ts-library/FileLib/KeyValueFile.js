const fs = require('fs');

class KeyValueFile {
    fileWriteKeyValue = function (filePath, key, value) {
        try {
            let fileContent = fs.readFileSync(filePath);
            let strContent = fileContent.toString();

            if(strContent.length ===0 ){
                let fileContentObj ={};
                fileContentObj[key] = value;
                fs.truncateSync(filePath);
                fs.writeFileSync(filePath, JSON.stringify(fileContentObj));

            }else{
                let  fileContentObj = JSON.parse(strContent);
                fileContentObj[key] = value;
                fs.truncateSync(filePath);
                fs.writeFileSync(filePath, JSON.stringify(fileContentObj));
            }


        }
        catch (e) {
            console.log('fileWriteKeyValue e: ', e);
        }
    };

}

let keyValueFile = new KeyValueFile();

module.exports = keyValueFile;
