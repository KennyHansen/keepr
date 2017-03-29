import axios from 'axios'
// import {keep} from './keep'
// import {vault} from './vault'

let api = axios.create({
    baseURL: 'http://localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})

// REGISTER ALL DATA HERE
let state = {
    loading: false,
    user: {},
    myVaults: {},
    myKeeps: {},
    //Dummy Data
    keeps: [{
        title: 'Learn to Draw',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
        keepCount: 100,
        shareCount: 300,
        viewCount: 900,
        author: 'JimyJonJones'
    }, {
        title: 'Build Beautiful sites',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
        keepCount: 100,
        shareCount: 300,
        viewCount: 900,
        author: 'JimyJonJones'
    }, {
        title: 'Learn to Draw',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/c7/80/e3/c780e34c14258f4087df410f03d76e83.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatisconsectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
        keepCount: 100,
        shareCount: 300,
        viewCount: 900,
        author: 'JimyJonJones'
    }, {
        title: 'Build Beautiful sites',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
        keepCount: 100,
        shareCount: 300,
        viewCount: 900,
        author: 'JimyJonJones'
    }, {
        title: 'Learn to Draw',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/564x/b0/7f/71/b07f713b8fa296e871dd8c169ff86fd5.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis',
        keepCount: 100,
        shareCount: 300,
        viewCount: 900,
        author: 'JimyJonJones'
    }, {
        title: 'Build Beautiful sites',
        imgUrl: 'https://s-media-cache-ak0.pinimg.com/236x/1b/81/b4/1b81b4d253053096b4097c53929f04c3.jpg',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, officiis asperiores quisquam, temporibus sint veritatis, doloribus eveniet sapiente perferendis nobis aliquid, quasi ipsa a repudiandae quaerat quos ex quod nemo',
        keepCount: 100,
        shareCount: 300,
        viewCount: 900,
        author: 'JimyJonJones'
    }],
    error: {}
}

let handleError = (err) => {
    state.error = err
    state.loading = false
}

export default {
    // ALL DATA LIVES IN THE STATE
    state,
    // ACTIONS ARE RESPONSIBLE FOR MANAGING ALL ASYNC REQUESTS
    actions: {
        login(email, password) {
            state.isLoading = true
            api.post('login', {
                email: email,
                password: password
            }).then(res => {
                state.user = res.data.data
                state.isLoading = false
            }).catch(handleError)
        },
        register(username, email, password) {
            state.isLoading = true
            api.post('register', {
                name: username,
                email: email,
                password: password,
            }).then(res => {
                this.login(email, password)
            }).catch(handleError)
        },
        logout() {
            api.delete('logout').then(res => {
                state.user = {}
            }).catch(handleError)
        },
        authenticate() {
            state.loading = false
            api('authenticate').then(res => {
                if (res.data.data) {
                    state.user = res.data.data
                    state.loading = false
                }
            }).catch(handleError)
        },
        getKeeps() {
            // only returns public keeps
            api('keeps/public').then(res => {
                console.log(res.data)
                state.keeps = res.data.data
            }).catch(handleError)
        },
        getMyKeeps() {
            // only returns your keeps
            api('users/' + userId + '/keeps').then(res => {
                console.log(res.data)
                state.myKeeps = res.data.data
            }).catch(handleError)
        },
        getVaults(userId) {
            // only returns user's vaults
            api('users/' + userId + '/vaults').then(res => {
                console.log(res.data)
                state.myVaults = res.data.data
            }).catch(handleError)
        },
        createKeep(title, author, imageUrl, articleLink, public, tags) {
            console.log("alrighty then")
            let keep = {
                title, 
                author, 
                imageUrl,
                articleLink, 
                public, 
                tags
            }
            api.post('/keeps', keep).then(res => {
                console.log(res.data)
            }).catch(handleError)
        },
        createVault(name, description, imageUrl) {
            let vault = {
                name,
                description,
                imageUrl
            }
            api.post('/vaults', vault).then(res => {
                console.log(res.data)
            }).catch(handleError)
        },
        addKeepToVault(keep, vault) {
            api.put('/vaults/' + vault._id + '/keeps', keep._id).then(res => {
                console.log(res.data)
            })
        },
    }

}

