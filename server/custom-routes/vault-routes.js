let Users = require('../models/user')
let Keeps = require('../models/keep')
let Vaults = require('../models/vault')

export default {
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
                })
        }
    },
    removeKeepFromVault: {
        path: '/vaults/:id/addKeep',
        reqType: 'put',
        method(req, res, next) {
            let action = 'Adds a keep to your vault'
            let keep = req.body
            Vaults.findOneAndUpdate({ _id: req.params.id },
                {
                    $pull: {
                        keeps: req.body
                    }
                }, { new: true })
                .then(vault => {
                    Keeps.findOneAndUpdate({ _id: keep }, {
                        $inc: {
                            timesVaulted: -1
                        }
                    }).then(res => {
                        res.send(handleResponse(action, vault))
                    })
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