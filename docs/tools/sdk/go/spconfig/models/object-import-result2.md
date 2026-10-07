# ObjectImportResult2

# ObjectImportResult2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Infos** | [**[]SpConfigMessage2**](sp-config-message2) | Informational messages returned from the target service on import. | 
**Warnings** | [**[]SpConfigMessage2**](sp-config-message2) | Warning messages returned from the target service on import. | 
**Errors** | [**[]SpConfigMessage2**](sp-config-message2) | Error messages returned from the target service on import. | 
**ImportedObjects** | [**[]ImportObject**](import-object) | References to objects that were created or updated by the import. | 

## Methods

### NewObjectImportResult2

`func NewObjectImportResult2(infos []SpConfigMessage2, warnings []SpConfigMessage2, errors []SpConfigMessage2, importedObjects []ImportObject, ) *ObjectImportResult2`

NewObjectImportResult2 instantiates a new ObjectImportResult2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewObjectImportResult2WithDefaults

`func NewObjectImportResult2WithDefaults() *ObjectImportResult2`

NewObjectImportResult2WithDefaults instantiates a new ObjectImportResult2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInfos

`func (o *ObjectImportResult2) GetInfos() []SpConfigMessage2`

GetInfos returns the Infos field if non-nil, zero value otherwise.

### GetInfosOk

`func (o *ObjectImportResult2) GetInfosOk() (*[]SpConfigMessage2, bool)`

GetInfosOk returns a tuple with the Infos field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInfos

`func (o *ObjectImportResult2) SetInfos(v []SpConfigMessage2)`

SetInfos sets Infos field to given value.


### GetWarnings

`func (o *ObjectImportResult2) GetWarnings() []SpConfigMessage2`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ObjectImportResult2) GetWarningsOk() (*[]SpConfigMessage2, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ObjectImportResult2) SetWarnings(v []SpConfigMessage2)`

SetWarnings sets Warnings field to given value.


### GetErrors

`func (o *ObjectImportResult2) GetErrors() []SpConfigMessage2`

GetErrors returns the Errors field if non-nil, zero value otherwise.

### GetErrorsOk

`func (o *ObjectImportResult2) GetErrorsOk() (*[]SpConfigMessage2, bool)`

GetErrorsOk returns a tuple with the Errors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrors

`func (o *ObjectImportResult2) SetErrors(v []SpConfigMessage2)`

SetErrors sets Errors field to given value.


### GetImportedObjects

`func (o *ObjectImportResult2) GetImportedObjects() []ImportObject`

GetImportedObjects returns the ImportedObjects field if non-nil, zero value otherwise.

### GetImportedObjectsOk

`func (o *ObjectImportResult2) GetImportedObjectsOk() (*[]ImportObject, bool)`

GetImportedObjectsOk returns a tuple with the ImportedObjects field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetImportedObjects

`func (o *ObjectImportResult2) SetImportedObjects(v []ImportObject)`

SetImportedObjects sets ImportedObjects field to given value.



