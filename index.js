const { Keystone } = require('@keystone-alpha/keystone');
const { PasswordAuthStrategy } = require('@keystone-alpha/auth-password');
const { Text, Checkbox, Password } = require('@keystone-alpha/fields');
const { GraphQLApp } = require('@keystone-alpha/app-graphql');
const { AdminUIApp } = require('@keystone-alpha/app-admin-ui');
const { KnexAdapter: Adapter } = require('@keystone-alpha/adapter-knex');

const PROJECT_NAME = "MakeID";


const UsersSchema = require('./lists/Users.js')

const keystone = new Keystone({
  name: PROJECT_NAME,
  adapter: new Adapter(),
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
    new AdminUIApp({ enableDefaultRoute: true, authStrategy }),
    //new AdminUIApp({ enableDefaultRoute: true }),
  ],
};
