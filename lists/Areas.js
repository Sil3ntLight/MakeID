const { Text, Checkbox, Relationship } = require('@keystonejs/fields');


module.exports = {
    fields: {
        name: {
            label: 'Area Name',
            type: Text,
            isRequired: true,
            isUnique: true,
        },
        info: {
            label: 'Additional Info',
            type: Text,
        },
     
        locked: {
            label: 'Has Door Lock?',
            type: Checkbox,
        },
        certRequired: {
            label: 'Requires Certification?',
            type: Relationship,
            ref: 'Cert'
        },
        tools: {
            label: 'Tools in Area',
            type: Relationship,
            ref: 'Tool.area',
            many: true,
        }
    },
        
    
}