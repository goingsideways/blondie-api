/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    view: 'homepage'
  },


  /**
  *
  * @description: AUTH ROUTES
  *
  **/
  'POST /api/auth': 'AuthController.login',


  /**
  *
  * @description: TICKETS
  *
  **/
  'GET  /api/properties':             'TicketsController.properties',

  'POST /api/tickets':                'TicketsController.create',
  'GET  /api/tickets':                'TicketsController.all',
  'GET  /api/tickets/:id':            'TicketsController.get',
  'PUT  /api/tickets/:id':            'TicketsController.update',
  'DELETE  /api/tickets/:id':         'TicketsController.destroy',

  /**
  *
  * @description: DASHBOARD
  *
  **/
  'GET /api/dashboard/open':             'TicketsController.open',
  'GET /api/dashboard/closed':           'TicketsController.closed',
  'GET /api/dashboard/statistics/:item': 'StatisticsController.properties',

  /**
  *
  * @description: USER ROUTES
  *
  **/
  'POST /api/users':                'UsersController.create',
  'GET  /api/users':                'UsersController.all',
  'GET  /api/users/:id':            'UsersController.get',
  'DELETE /api/users/:id':          'UsersController.destroy',
  'PUT /api/users/:id':             'UsersController.update',
  // Administrator Change Password
  'PUT /api/changepassword/:id':    'UsersController.changePassword',
  // User Change Password
  'PUT /api/me/changepassword':        'UsersController.meChangePassword',
  'GET /api/me' :                   'UsersController.me',


  /**
  *
  * @description: AUTH ROUTES
  *
  **/
  'POST /api/sources':                'SourcesController.create',
  'GET  /api/sources':                'SourcesController.all',
  'GET  /api/sources/:id':            'SourcesController.get',
  'DELETE /api/sources/:id':          'SourcesController.destroy',
  'PUT /api/sources/:id':             'SourcesController.update',

  /**
  *
  * @description: STATUS ROUTES
  *
  **/
  'POST /api/statuses':                'StatusesController.create',
  'GET  /api/statuses':                'StatusesController.all',
  'GET  /api/statuses/:id':            'StatusesController.get',
  'DELETE /api/statuses/:id':          'StatusesController.destroy',
  'PUT /api/statuses/:id':             'StatusesController.update',

  /**
  *
  * @description: TYPE ROUTES
  *
  **/
  'POST /api/types':                'TypesController.create',
  'GET  /api/types':                'TypesController.all',
  'GET  /api/types/:id':            'TypesController.get',
  'DELETE /api/types/:id':          'TypesController.destroy',
  'PUT  /api/types/:id':            'TypesController.update',

  /**
  *
  * @description: CATEGORY ROUTES
  *
  **/
  'POST /api/categories':                'CategoriesController.create',
  'GET  /api/categories':                'CategoriesController.all',
  'PUT  /api/categories/activate/:id':   'CategoriesController.activate',
  'GET  /api/categories/:id':            'CategoriesController.get',
  'DELETE /api/categories/:id':          'CategoriesController.destroy',
  'PUT  /api/categories/:id':            'CategoriesController.update',


  /**
  *
  * @description: SUBCATEGORY ROUTES
  *
  **/
  'POST /api/subcategories':                'SubCategoriesController.create',
  'GET  /api/subcategories/:catid':         'SubCategoriesController.all',
  'PUT  /api/subcategory/activate/:id':   'SubCategoriesController.activate',
  'GET  /api/subcategory/:id':              'SubCategoriesController.get',
  'DELETE /api/subcategory/:id':            'SubCategoriesController.destroy',
  'PUT  /api/subcategory/:id':              'SubCategoriesController.update',


  /**
  *
  * @description: LOST AND FOUND
  *
  **/


  'GET /api/lostandfound/locations':        'LostandFoundLocationsController.get',
  'GET /api/lostandfound/locations/:id':    'LostandFoundLocationsController.geById',
  'POST /api/lostandfound/locations':       'LostandFoundLocationsController.create',
  'PUT /api/lostandfound/locations/:id':    'LostandFoundLocationsController.update',
  'DELETE /api/lostandfound/locations/:id': 'LostandFoundLocationsController.delete',

  'GET /api/lostandfound/statuses':           'LostandFoundStatusesController.get',
  'GET /api/lostandfound/statuses/:id':       'LostandFoundStatusesController.geById',
  'POST /api/lostandfound/statuses':          'LostandFoundStatusesController.create',
  'PUT /api/lostandfound/statuses/:id':       'LostandFoundStatusesController.update',
  'DELETE /api/lostandfound/statuses/:id':    'LostandFoundStatusesController.delete',

  'GET /api/lostandfound/categories/:id/subcategories': 'LostandFoundSubcategoriesController.get',
  'GET /api/lostandfound/subcategories/:id':       'LostandFoundSubcategoriesController.geById',
  'POST /api/lostandfound/subcategories':          'LostandFoundSubcategoriesController.create',
  'PUT /api/lostandfound/subcategories/:id':       'LostandFoundSubcategoriesController.update',
  'DELETE /api/lostandfound/subcategories/:id':    'LostandFoundSubcategoriesController.delete',

  'GET /api/lostandfound/categories':           'LostandFoundCategoriesController.get',
  'GET /api/lostandfound/categories/:id':       'LostandFoundCategoriesController.geById',
  'POST /api/lostandfound/categories':          'LostandFoundCategoriesController.create',
  'PUT /api/lostandfound/categories/:id':       'LostandFoundCategoriesController.update',
  'DELETE /api/lostandfound/categories/:id':    'LostandFoundCategoriesController.delete',

  'GET /api/lostandfound/properties':       'LostandFoundController.properties',
  'GET /api/lostandfound':                  'LostandFoundController.get',
  'GET /api/lostandfound/:id':              'LostandFoundController.geById',
  'POST /api/lostandfound':                 'LostandFoundController.create',
  'PUT /api/lostandfound/:id':              'LostandFoundController.update',
  'DELETE /api/lostandfound/:id':           'LostandFoundController.delete',
  
};
