'use strict'

const Client = require("./Client")
const fs = require('fs')

main()

function main(){
    var fileClient = new Client()
    //fileClient.postFiles('/text.txt') 

    fileClient.getFiles().then((files)=>{printFiles(files)})
    

    //fileClient.getFile('1.jpg')

    //fileClient.deleteFile('1.jpg')
}

function printFiles(files){
    if (files){
        console.log('Файлы:')
        for (let file of files){
            console.log('-----------------------')
            console.log("Название: " + file.name + '\n' + "размер: " + file.size)
            console.log('-----------------------')
        } 
    }
}