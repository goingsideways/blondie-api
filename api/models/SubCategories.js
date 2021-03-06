/**
* SubCategories.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  schema: true,
  connection: 'blondie',

  attributes: {
    statusCode: {
      type: 'integer'
    },
    name: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true
    },
    category: {
      model: 'Categories'
    }
  }
};
