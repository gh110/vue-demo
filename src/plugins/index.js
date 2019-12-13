export default {
    install (Vue) {
      // eslint-disable-next-line handle-callback-err
      Vue.config.errorHandler = function (err) {
        Vue.nextTick(() => {
          console.log('1')
            console.log(err)
          })
      }
    }
  }