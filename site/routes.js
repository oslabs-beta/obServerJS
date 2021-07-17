const { route } = require('next/dist/next-server/server/router');

const routes = require('next-routes')();

 //arg 1: pattern we want to look for
  //arg 2 what component do we want to show
  //add on another route mapping BEFORE for other edge cases like campaign/new (overrides)
  
routes.add('/feature', '/home/FeaturePage');
routes.add('/team', '/home/TeamPage');



module.exports = routes;