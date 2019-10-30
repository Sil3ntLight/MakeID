const { Text, Checkbox, Relationship } = require('@keystonejs/fields');


module.exports = {
    fields: {
        name: {
            label: 'Tool Name',
            type: Text,
            isRequired: true,
            isUnique: true,
        },
        info: {
            label: 'Additional Info',
            type: Text,
        },
        locked: {
            label: 'Has Lockout?',
            type: Checkbox,
        },
        area: {
            label: 'Area Tool is in',
            type: Relationship,
            ref: 'Area',
        },
        additionalCert: {
            label: 'Additional Certification',
            type: Relationship,
            ref: 'Cert',
        },
    },
        
    
}