# Identitycollectorfieldmapping

# Identitycollectorfieldmapping

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FieldDictionaryName** | **string** | The name of the data dictionary field to map to. Dictionary fields of type Users apply to the users collection; dictionary fields of type Roles apply to the groups collection. | 
**SourceAttributeName** | **string** | The source attribute name to read at runtime. This may be a built-in attribute for the identity collector type or a custom attribute listed in `properties` for the same collection. Built-in attributes can be discovered using the identity collector properties metadata endpoint. | 

## Methods

### NewIdentitycollectorfieldmapping

`func NewIdentitycollectorfieldmapping(fieldDictionaryName string, sourceAttributeName string, ) *Identitycollectorfieldmapping`

NewIdentitycollectorfieldmapping instantiates a new Identitycollectorfieldmapping object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycollectorfieldmappingWithDefaults

`func NewIdentitycollectorfieldmappingWithDefaults() *Identitycollectorfieldmapping`

NewIdentitycollectorfieldmappingWithDefaults instantiates a new Identitycollectorfieldmapping object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetFieldDictionaryName

`func (o *Identitycollectorfieldmapping) GetFieldDictionaryName() string`

GetFieldDictionaryName returns the FieldDictionaryName field if non-nil, zero value otherwise.

### GetFieldDictionaryNameOk

`func (o *Identitycollectorfieldmapping) GetFieldDictionaryNameOk() (*string, bool)`

GetFieldDictionaryNameOk returns a tuple with the FieldDictionaryName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldDictionaryName

`func (o *Identitycollectorfieldmapping) SetFieldDictionaryName(v string)`

SetFieldDictionaryName sets FieldDictionaryName field to given value.


### GetSourceAttributeName

`func (o *Identitycollectorfieldmapping) GetSourceAttributeName() string`

GetSourceAttributeName returns the SourceAttributeName field if non-nil, zero value otherwise.

### GetSourceAttributeNameOk

`func (o *Identitycollectorfieldmapping) GetSourceAttributeNameOk() (*string, bool)`

GetSourceAttributeNameOk returns a tuple with the SourceAttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAttributeName

`func (o *Identitycollectorfieldmapping) SetSourceAttributeName(v string)`

SetSourceAttributeName sets SourceAttributeName field to given value.



