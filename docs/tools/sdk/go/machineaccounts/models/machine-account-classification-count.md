# MachineAccountClassificationCount

# MachineAccountClassificationCount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClassificationMethod** | Pointer to **string** | The classification method that found the candidates. | [optional] 
**Count** | Pointer to **int32** | The number of candidates found by this classification method. | [optional] 

## Methods

### NewMachineAccountClassificationCount

`func NewMachineAccountClassificationCount() *MachineAccountClassificationCount`

NewMachineAccountClassificationCount instantiates a new MachineAccountClassificationCount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountClassificationCountWithDefaults

`func NewMachineAccountClassificationCountWithDefaults() *MachineAccountClassificationCount`

NewMachineAccountClassificationCountWithDefaults instantiates a new MachineAccountClassificationCount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClassificationMethod

`func (o *MachineAccountClassificationCount) GetClassificationMethod() string`

GetClassificationMethod returns the ClassificationMethod field if non-nil, zero value otherwise.

### GetClassificationMethodOk

`func (o *MachineAccountClassificationCount) GetClassificationMethodOk() (*string, bool)`

GetClassificationMethodOk returns a tuple with the ClassificationMethod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClassificationMethod

`func (o *MachineAccountClassificationCount) SetClassificationMethod(v string)`

SetClassificationMethod sets ClassificationMethod field to given value.

### HasClassificationMethod

`func (o *MachineAccountClassificationCount) HasClassificationMethod() bool`

HasClassificationMethod returns a boolean if a field has been set.

### GetCount

`func (o *MachineAccountClassificationCount) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *MachineAccountClassificationCount) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *MachineAccountClassificationCount) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *MachineAccountClassificationCount) HasCount() bool`

HasCount returns a boolean if a field has been set.


