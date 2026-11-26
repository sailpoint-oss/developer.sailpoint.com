# Datadictionaryfieldlistitem

# Datadictionaryfieldlistitem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The unique field name. | 
**FieldType** | **string** | The field data type. Custom fields are always String. | 
**DataDictionaryType** | **string** | The data dictionary that owns this field. | 
**Required** | **bool** | Whether the field is required. Custom fields returned by list are always false. | 

## Methods

### NewDatadictionaryfieldlistitem

`func NewDatadictionaryfieldlistitem(name string, fieldType string, dataDictionaryType string, required bool, ) *Datadictionaryfieldlistitem`

NewDatadictionaryfieldlistitem instantiates a new Datadictionaryfieldlistitem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDatadictionaryfieldlistitemWithDefaults

`func NewDatadictionaryfieldlistitemWithDefaults() *Datadictionaryfieldlistitem`

NewDatadictionaryfieldlistitemWithDefaults instantiates a new Datadictionaryfieldlistitem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Datadictionaryfieldlistitem) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Datadictionaryfieldlistitem) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Datadictionaryfieldlistitem) SetName(v string)`

SetName sets Name field to given value.


### GetFieldType

`func (o *Datadictionaryfieldlistitem) GetFieldType() string`

GetFieldType returns the FieldType field if non-nil, zero value otherwise.

### GetFieldTypeOk

`func (o *Datadictionaryfieldlistitem) GetFieldTypeOk() (*string, bool)`

GetFieldTypeOk returns a tuple with the FieldType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldType

`func (o *Datadictionaryfieldlistitem) SetFieldType(v string)`

SetFieldType sets FieldType field to given value.


### GetDataDictionaryType

`func (o *Datadictionaryfieldlistitem) GetDataDictionaryType() string`

GetDataDictionaryType returns the DataDictionaryType field if non-nil, zero value otherwise.

### GetDataDictionaryTypeOk

`func (o *Datadictionaryfieldlistitem) GetDataDictionaryTypeOk() (*string, bool)`

GetDataDictionaryTypeOk returns a tuple with the DataDictionaryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataDictionaryType

`func (o *Datadictionaryfieldlistitem) SetDataDictionaryType(v string)`

SetDataDictionaryType sets DataDictionaryType field to given value.


### GetRequired

`func (o *Datadictionaryfieldlistitem) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Datadictionaryfieldlistitem) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Datadictionaryfieldlistitem) SetRequired(v bool)`

SetRequired sets Required field to given value.



