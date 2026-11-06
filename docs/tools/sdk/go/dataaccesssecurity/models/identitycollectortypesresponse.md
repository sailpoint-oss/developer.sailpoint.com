# Identitycollectortypesresponse

# Identitycollectortypesresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Types** | [**[]Identitycollectortype**](identitycollectortype) | Enabled public identity collector types. Flagged types (Snowflake, Databricks, Atlassian Suite) are omitted when their feature flags are disabled. | 

## Methods

### NewIdentitycollectortypesresponse

`func NewIdentitycollectortypesresponse(types []Identitycollectortype, ) *Identitycollectortypesresponse`

NewIdentitycollectortypesresponse instantiates a new Identitycollectortypesresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectortypesresponseWithDefaults

`func NewIdentitycollectortypesresponseWithDefaults() *Identitycollectortypesresponse`

NewIdentitycollectortypesresponseWithDefaults instantiates a new Identitycollectortypesresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTypes

`func (o *Identitycollectortypesresponse) GetTypes() []Identitycollectortype`

GetTypes returns the Types field if non-nil, zero value otherwise.

### GetTypesOk

`func (o *Identitycollectortypesresponse) GetTypesOk() (*[]Identitycollectortype, bool)`

GetTypesOk returns a tuple with the Types field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypes

`func (o *Identitycollectortypesresponse) SetTypes(v []Identitycollectortype)`

SetTypes sets Types field to given value.



