const { Keystone } = require('@keystonejs/keystone');
const { PasswordAuthStrategy } = require('@keystonejs/auth-password');
const { Text, Checkbox, Password } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { MongooseAdapter } = require('@keystonejs/adapter-mongoose');

const PROJECT_NAME = "MakeID";


const UsersSchema = require('./lists/Users.js')
const CertsSchema = require('./lists/Certs.js')
const AreasSchema = require('./lists/Areas.js')
const ToolsSchema = require('./lists/Tools.js')

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new MongooseAdapter({

    
  }),
});

// Access control functions
const userIsAdmin = ({ authentication: { item: user } }) => Boolean(user && user.isAdmin);
const userOwnsItem = ({ authentication: { item: user } }) => {
  if (!user) {
    return false;
  }
  return { id: user.id };
};
const userIsAdminOrOwner = auth => {
  const isAdmin = access.userIsAdmin(auth);
  const isOwner = access.userOwnsItem(auth);
  return isAdmin ? isAdmin : isOwner;
};
const access = { userIsAdmin, userOwnsItem, userIsAdminOrOwner };

keystone.createList('Cert', CertsSchema);
keystone.createList('Tool', ToolsSchema);
keystone.createList('Area', AreasSchema);
keystone.createList('User', UsersSchema);




const authStrategy = keystone.createAuthStrategy({
  type: PasswordAuthStrategy,
  list: 'User',
  config: {
    identityField: 'email', // default: 'email'
    secretField: 'password',   // default: 'password'
    


  }
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    // To create an initial user you can temporarily remove the authStrategy below
    //new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
    new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
