import setupBrowserPolicy from './config/security.js';
import loadFixtures from './loaders/fixtures.js';
import loadUsers from './loaders/users.js';

// AUTOIMPORTS
// ^^^^^^^^^^^ DO NOT REMOVE!!!

setupBrowserPolicy(BrowserPolicy);

Meteor.startup(() => {
    loadUsers();
    //loadFixtures([{ foo: 'bar' }], myCollection);
});
