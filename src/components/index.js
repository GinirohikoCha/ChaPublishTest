import HelloWorld from './HelloWorld/index'

const components = [
  HelloWorld
]

const install = (app) => {
  if (install.installed) {
    return
  }
  install.installed = true
  components.map(component => {
    app.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  HelloWorld
}
