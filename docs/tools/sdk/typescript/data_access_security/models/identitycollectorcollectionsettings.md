# Identitycollectorcollectionsettings

# Identitycollectorcollectionsettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | `Array<string>` | Source attribute names to register as datasource columns for this collection. These names must match the attributes sent by Identity Security Cloud. Use an empty array when no custom attributes are required. | [default to undefined]
**fieldMappings** | `Array<Identitycollectorfieldmapping>` | Maps source attributes to data dictionary fields and DAS custom field slots. Each `sourceAttributeName` must be either a built-in attribute for the identity collector type or listed in `properties`. Use an empty array when no dynamic field mappings are configured. | [default to undefined]

