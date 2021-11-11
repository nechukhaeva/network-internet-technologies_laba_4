'use strict'

const Store = require('./store')
const store = new Store()
const fs = require('fs')
var FormData = require('form-data')

class Client {
     getFiles() {
        return new Promise(function (resolve, reject) {
            store.getFiles().then(res => {
                if (res.data.success) {
                    if (res.data.files) {
                        resolve(res.data.files)
                    } else throw new Error('Файлов не найдено!')
                } else {throw new Error('Файлов не найдено!')}
            }).catch(e => {
                console.log(e)
            })
        })
    }

    postFiles(file) {
        var data = new FormData()
        data.append(file.name, fs.createReadStream(__dirname + file))
        store.postFiles(data).then(res =>{
            if (res.data.success){
                return res.data.files
            } else throw new Error('Файлы не добавлены!')
        }).catch(e => {
            console.log(e)
        })
    }

    getFile(name) {
        store.getFile(name).then(res => {
            fs.writeFileSync(name, res.data)
        }).catch(e => {
            console.log(e)
        })
    }
 
    deleteFile(name) {
        store.deleteFile(name).then(res => {
            if (res.data.success) return res.data.file
            else throw new Error('Файл не удален!')
        }).catch(e => {
            console.log(e)
        })
    }
}

module.exports = Client