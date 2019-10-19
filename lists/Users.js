const { Text, Checkbox, Password } = require('@keystone-alpha/fields');

module.exports = {
    fields: {
        firstName: {
            label: 'First Name',
            type: Text,
            isRequired: true,
        },
        lastName: {
            label: 'Last Name',
            type: Text,
            isRequired: true,
        },
        email: {
            label: 'Email',
            type: Text,
            isRequired: true,
            isUnique: true,
            defaultValue: "Email Address"
        },
        password: {
            label: 'Password',
            type: Password,
            isRequired: true,
        },
        isAdmin: {
            label: 'Is Admin',
            type: Checkbox,
        },
        wpId: {
            label: 'WP User ID',
            type: Text,
            isRequired: false,
        },
    },
    labelResolver: item => `${item.firstName} ${item.lastName}`,


        
        
    
}