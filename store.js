'use strict'

const http = require("./config")

class store {
    getFiles () {
        return http.get("/files")
    }

    getFile(name) {
        let params = {name: name}
        return http.get('/file', {params})
    }

    postFiles(data) {
        return http.post('/files', data)
    }

    deleteFile(name) {
        let params = {name: name}
        return http.delete('/file', {params})
    }
}

module.exports = store