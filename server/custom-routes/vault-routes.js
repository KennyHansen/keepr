let Users = require('../models/user')
let Keeps = require('../models/keep')
let Vaults = require('../models/vault')

export default {
    getKeepsInVault: {
        path: '/vaults/:id/keeps',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get keeps in vault'
            let keep = req.body
            Vaults.findById(req.params.id)
                .populate('keeps')
                .then(vault => {
                    res.send(handleResponse(action, vault.keeps))
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    addKeepToVault: {
        path: '/vaults/:id/addKeep',
        reqType: 'put',
        method(req, res, next) {
            let action = 'Adds a keep to your vault'
            let keep = req.body
            Vaults.findOneAndUpdate({ _id: req.params.id },
                {
                    $addToSet: {
                        keeps: req.body
                    }
                }, { new: true })
                .then(vault => {
                    Keeps.findOneAndUpdate({ _id: keep }, {
                        $inc: {
                            timesVaulted: 1
                        }
                    }).then(data => {
                        res.send(handleResponse(action, vault))
                    })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    },
    removeKeepFromVault: {
        path: '/vaults/:id/removeKeep',
        reqType: 'put',
        method(req, res, next) {
            let action = 'Removes a keep from your vault'
            let keep = req.body
            Vaults.findOneAndUpdate({ _id: req.params.id },
                {
                    $pull: {
                        keeps: req.body
                    }
                }, { new: true })
                .then(vault => {
                    // Keeps.findOneAndUpdate({ _id: keep }, {
                    //     $inc: {
                    //         timesVaulted: -1
                    //     }
                    // }).then(res => {
                        res.send(handleResponse(action, vault))
                    // })
                }).catch(error => {
                    return next(handleResponse(action, null, error))
                })
        }
    }
}



function handleResponse(action, data, error) {
    var response = {
        action: action,
        data: data
    }
    if (error) {
        response.error = error
    }
    return response
}