import HelloWorld from './HelloWorld'

HelloWorld.install = (app) => {
  app.component(HelloWorld.name, HelloWorld)
}

export default HelloWorld
