/*
  Our observer object that will contain the tree, stackLayers, and other express server information
  that we will add to the response object to be consumed by our application.
*/
var observer = {};

observer.stackLayers = [];

function DispatchNode(layer) {
  this.name = layer.name
  this.type = 'dispatch function'
  this.fn = layer.handle.toString()
}

function FunctionNode(layer) {
  this.name = layer.name
  this.type = 'function'
  this.fn = layer.handle.toString()
}

function RouteNode(layer) {
  this.path = layer?.route?.path || layer.path
  this.type = 'route'
  this.children = []
  this.stackLength = layer?.route?.stack?.length || layer.handle.stack.length
}

/*
  Method that will be invoked right before we send the response, after the app stack is complete. 
*/
observer.createTree = (app) => {
  const tree = {
    name: 'App',
    children: []
  }
  traverseStack(tree, app._router.stack)

  return tree;
}

/* 
  Iterate through all layers of the stack 
  If the layer is a route, check for middleware function and recurse through the tree
  If the layer is a function, push it to the application stack
  If layer is a router, continue recursing through the tree
*/
const traverseStack = (tree, stack) => {
  for (const layer of stack) {
    if (layer.name == 'bound dispatch') {
      // Create a new route node 
      const newDispatch = new DispatchNode(layer)
      tree.children.push(newDispatch)
      if (layer.handle?.route?.stack) {
        for (const stack of layer.handle.route.stack) {
          traverseStack(newDispatch, stack.route.stack)
        }
      }
    } else if (layer.route) {
      const newRoute = new RouteNode(layer)
      tree.children.push(newRoute)
      // Traverse through stack 
      traverseStack(newRoute, layer.route.stack)
    } else if (layer.name === 'router') {
      // Parse the regex expression to create the path name 
      // Attach the path name to the layer
      const regexString = layer.regexp.toString()
      const path = '/' + regexString.slice(4, -13)
      layer.path = path
      // console.log(layer)
      // Create a new route node 
      const newRoute = new RouteNode(layer)
      for (const stack of layer.handle.stack) {
        traverseStack(newRoute, stack.route.stack)
      } //add if else statement for name == 'bound dispatch';
    } else {
      const newFunction = new FunctionNode(layer)
      tree.children.push(newFunction)
    }
  }
}

module.exports = observer;