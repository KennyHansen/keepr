let Users = require('../models/user')
let Keeps = require('../models/keep')
let Vaults = require('../models/vault')
export default {
    dashboard: {
        path: '/dashboard',
        reqType: 'get',
        method(req, res, next) {
            let action = 'Get a user\'s vaults and keeps'
            Vaults.find({ creatorId: req.session.uid }).then(vaults => {
                Keeps.find({ creatorId: req.session.uid }).then(keeps => {
                    res.send(handleResponse(action, { keeps, vaults }))
                })
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