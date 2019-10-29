const { Text, Checkbox, Relationship } = require('@keystonejs/fields');

module.exports = {
    fields: {
        name: {
            label: 'Cert Name',
            type: Text,
            isRequired: true,
            isUnique: true,
        },
        info: {
            label: 'Additional Info',
            type: Text,
        },
      
    },
        
    
}