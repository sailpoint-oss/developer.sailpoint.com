# Identitycollectorfieldmapping

# Identitycollectorfieldmapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fieldDictionaryName** | `string` | The name of the data dictionary field to map to. Dictionary fields of type Users apply to the users collection; dictionary fields of type Roles apply to the groups collection. | [default to undefined]
**sourceAttributeName** | `string` | The source attribute name to read at runtime. This may be a built-in attribute for the identity collector type or a custom attribute listed in `properties` for the same collection. Built-in attributes can be discovered using the identity collector properties metadata endpoint. | [default to undefined]

