const { Text, Checkbox, Password, Relationship } = require('@keystonejs/fields');

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
        certsComplete: {
            label: 'Completed Certifications',
            type: Relationship,
            ref: 'Cert',
            many: true,

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
        info: {
            label: 'Additional Info',
            type: Text,
        },
    },
    labelResolver: item => `${item.firstName} ${item.lastName}`,


        
        
    
}