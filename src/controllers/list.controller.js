'use strict';

const List = require('./../models/list');

class ListController {

    constructor(){}

    // obtener todos los documentos
    index(req, res){

        List.find((err, lists) => {
            // captura error
            if(err){
                return res.status(500)
                            .json({ error: `Error al obtener datos: ${err}` });
            }

            res.status(200)
                .json({ message: 'Datos recuperado', lists });
        });
    }

    // crea documento
    create(req, res){

        let params = req.body;

        let list = new List(params);

        list.save((err, listStore) => {
            // captura error
            if(err){
                return res.status(500)
                            .json({ error: `Error al guardar dato: ${err}` });
            }

            res.status(200)
                .json({ message: 'Dato guardado', listStore });
        });

    }

    // muestra un documento
    show(req, res){
        let params = req.params;

        List.findById(params.id, (err, list) => {
            // captura error
            if(err) return res.status(500).json({ error: `Error al obtener dato: ${err}` });
            if(!list) return res.status(404).json({ error: 'El dato no existe' });

            res.status(200)
                .json({ message: 'Dato recuperado', list });
        });
    }

    // acrtuliza documento
    update(req, res){
        let id = req.params.id;
        let params = req.body;

        // configura opcion new: true
        // esto permitirá obtener el documento con los valores actualizado
        List.findByIdAndUpdate(id, params, { new: true }, (err, list) => {
            // captura error
            if(err){
                return res.status(500)
                            .json({ error: `Error al actulizar dato: ${err}` });
            }

            res.status(200)
                .json({ message: 'Dato actualizado', list });
        });
    }

    // elimina documento
    destroy(req, res){
        let id = req.params.id;

        List.findByIdAndRemove(id, (err) => {
            // captura error
            if(err){
                return res.status(500)
                            .json({ error: `Error al eliminar dato: ${err}` });
            }

            res.status(200)
                .json({ message: 'Dato eliminado' });
        });
    }
}

module.exports = ListController;