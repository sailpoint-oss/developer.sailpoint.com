# Updateidentitycollectorrequest

# Updateidentitycollectorrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | The display name of the identity collector. Must be unique within the tenant. | [default to undefined]
**sourceId** | `string` | The identifier of the associated source, represented as a UUID. Both hyphenated and non-hyphenated formats are accepted. This value cannot be modified for an existing identity collector and must match the current value. | [default to undefined]
**type** | `string` | The identity collector type. This value cannot be modified for an existing identity collector and must match the current value. | [default to undefined]
**users** | `Identitycollectorcollectionsettings` |  | [default to undefined]
**groups** | `Identitycollectorcollectionsettings` |  | [default to undefined]

