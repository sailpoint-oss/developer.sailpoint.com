# Identitycollectorcollectionsettings

# Identitycollectorcollectionsettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Properties** | **[]string** | Source attribute names to register as datasource columns for this collection. These names must match the attributes sent by Identity Security Cloud. Use an empty array when no custom attributes are required. | 
**FieldMappings** | [**[]Identitycollectorfieldmapping**](identitycollectorfieldmapping) | Maps source attributes to data dictionary fields and DAS custom field slots. Each `sourceAttributeName` must be either a built-in attribute for the identity collector type or listed in `properties`. Use an empty array when no dynamic field mappings are configured. | 

## Methods

### NewIdentitycollectorcollectionsettings

`func NewIdentitycollectorcollectionsettings(properties []string, fieldMappings []Identitycollectorfieldmapping, ) *Identitycollectorcollectionsettings`

NewIdentitycollectorcollectionsettings instantiates a new Identitycollectorcollectionsettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectorcollectionsettingsWithDefaults

`func NewIdentitycollectorcollectionsettingsWithDefaults() *Identitycollectorcollectionsettings`

NewIdentitycollectorcollectionsettingsWithDefaults instantiates a new Identitycollectorcollectionsettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProperties

`func (o *Identitycollectorcollectionsettings) GetProperties() []string`

GetProperties returns the Properties field if non-nil, zero value otherwise.

### GetPropertiesOk

`func (o *Identitycollectorcollectionsettings) GetPropertiesOk() (*[]string, bool)`

GetPropertiesOk returns a tuple with the Properties field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProperties

`func (o *Identitycollectorcollectionsettings) SetProperties(v []string)`

SetProperties sets Properties field to given value.


### GetFieldMappings

`func (o *Identitycollectorcollectionsettings) GetFieldMappings() []Identitycollectorfieldmapping`

GetFieldMappings returns the FieldMappings field if non-nil, zero value otherwise.

### GetFieldMappingsOk

`func (o *Identitycollectorcollectionsettings) GetFieldMappingsOk() (*[]Identitycollectorfieldmapping, bool)`

GetFieldMappingsOk returns a tuple with the FieldMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldMappings

`func (o *Identitycollectorcollectionsettings) SetFieldMappings(v []Identitycollectorfieldmapping)`

SetFieldMappings sets FieldMappings field to given value.



