import Vuex from 'vuex'

const cookieparser = process.server ? require('cookieparser') : undefined

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      auth: null,
      userId:"",
      message:"",
      userInfo:""
    }),
    mutations: {
      setAuth(state, auth) {
     console.log(auth)
        state.auth = auth
        state.userId=auth.result.userId;
        state.userInfo=auth.result;

        // state.userInfo=data;
      },
      setMessage(state, message) {
        state.message = message
      }
    },
    actions: {
      // nuxtServerInit({ commit }, { req }) {
      //   let auth = null
      //   if (req.headers.cookie) {
      //     const parsed = cookieparser.parse(req.headers.cookie)
      //     try {
      //       auth = JSON.parse(parsed.auth)
      //     } catch (err) {
      //       // No valid cookie found
      //     }
      //   }
      //   commit('setAuth', auth)
      // }
    }
  })
}

export default createStore