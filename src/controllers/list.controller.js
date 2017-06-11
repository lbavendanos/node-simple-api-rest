'use strict';

class List {

    constructor(){}

    index(req, res){
        res.status(200)
            .json({
                message: 'method index run!'
            });
    }

    create(req, res){
        let params = req.body;
        res.status(200)
            .json({
                message: 'method create run!',
                params: params
            });
    }

    show(req, res){
        let params = req.params;
        res.status(200)
            .json({
                message: 'method show run!',
                params: params
            });
    }

    update(req, res){
        let params = req.body;
        res.status(200)
            .json({
                message: 'method update run!',
                params: params
            });
    }

    destroy(req, res){
        let params = req.body;
        res.status(200)
            .json({
                message: 'method destroy run!',
                params: params
            });
    }
}

module.exports = List;