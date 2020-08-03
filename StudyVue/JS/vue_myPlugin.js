// the vue plugin
/*
----- template from vue website -----
MyPlugin.install = function (Vue, options) {
  // 1. add global method or property
  Vue.myGlobalMethod = function () {
    // some logic ...
  }

  // 2. add a global asset
  Vue.directive('my-directive', {
    bind (el, binding, vnode, oldVnode) {
      // some logic ...
    }
    ...
  })

  // 3. inject some component options
  Vue.mixin({
    created: function () {
      // some logic ...
    }
    ...
  })

  // 4. add an instance method
  Vue.prototype.$myMethod = function (methodOptions) {
    // some logic ...
  }
}
 */
(function () {
    // declare the variable of this plugin
    const MyPlugin = {};

    // the plugin must has a install function
    MyPlugin.install = function (Vue, options) {
        // 1. add global method or property
        Vue.myGlobalMethod = function () {
            // some logic ...
            console.log('create a vue method which is named myGlobalMethod')
        }

        // 2. add a global asset
        Vue.directive('my-directive', {
            bind (el, binding, vnode, oldVnode) {
                el.textContent = binding.value.toUpperCase()
            }
        })

        // 3. inject some component options
        Vue.mixin({
            created: function () {
                // some logic ...
            }
        })

        // 4. add an instance method
        Vue.prototype.$myMethod = function (methodOptions) {
            // some logic ...
            console.log('the method of vue instance')
        }
    }

    // show the plugin in the global
    window.MyPlugin = MyPlugin;
})()