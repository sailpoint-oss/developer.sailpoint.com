# Updatedatadictionaryfieldrequest

# Updatedatadictionaryfieldrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The field name. | 
**FieldType** | **string** | The field data type. Must match the current value. | 
**DataDictionaryType** | **string** | The data dictionary that owns this field. Must match the current value. | 
**Required** | **bool** | Must match the current value. Custom fields must be false. | 

## Methods

### NewUpdatedatadictionaryfieldrequest

`func NewUpdatedatadictionaryfieldrequest(name string, fieldType string, dataDictionaryType string, required bool, ) *Updatedatadictionaryfieldrequest`

NewUpdatedatadictionaryfieldrequest instantiates a new Updatedatadictionaryfieldrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUpdatedatadictionaryfieldrequestWithDefaults

`func NewUpdatedatadictionaryfieldrequestWithDefaults() *Updatedatadictionaryfieldrequest`

NewUpdatedatadictionaryfieldrequestWithDefaults instantiates a new Updatedatadictionaryfieldrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Updatedatadictionaryfieldrequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Updatedatadictionaryfieldrequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Updatedatadictionaryfieldrequest) SetName(v string)`

SetName sets Name field to given value.


### GetFieldType

`func (o *Updatedatadictionaryfieldrequest) GetFieldType() string`

GetFieldType returns the FieldType field if non-nil, zero value otherwise.

### GetFieldTypeOk

`func (o *Updatedatadictionaryfieldrequest) GetFieldTypeOk() (*string, bool)`

GetFieldTypeOk returns a tuple with the FieldType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFieldType

`func (o *Updatedatadictionaryfieldrequest) SetFieldType(v string)`

SetFieldType sets FieldType field to given value.


### GetDataDictionaryType

`func (o *Updatedatadictionaryfieldrequest) GetDataDictionaryType() string`

GetDataDictionaryType returns the DataDictionaryType field if non-nil, zero value otherwise.

### GetDataDictionaryTypeOk

`func (o *Updatedatadictionaryfieldrequest) GetDataDictionaryTypeOk() (*string, bool)`

GetDataDictionaryTypeOk returns a tuple with the DataDictionaryType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDataDictionaryType

`func (o *Updatedatadictionaryfieldrequest) SetDataDictionaryType(v string)`

SetDataDictionaryType sets DataDictionaryType field to given value.


### GetRequired

`func (o *Updatedatadictionaryfieldrequest) GetRequired() bool`

GetRequired returns the Required field if non-nil, zero value otherwise.

### GetRequiredOk

`func (o *Updatedatadictionaryfieldrequest) GetRequiredOk() (*bool, bool)`

GetRequiredOk returns a tuple with the Required field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequired

`func (o *Updatedatadictionaryfieldrequest) SetRequired(v bool)`

SetRequired sets Required field to given value.



