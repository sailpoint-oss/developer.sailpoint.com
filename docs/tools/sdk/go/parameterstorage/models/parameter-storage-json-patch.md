# ParameterStorageJsonPatch

# ParameterStorageJsonPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to perform (add, remove, replace, move, copy, test) | 
**Path** | **string** | A JSON-Pointer describing the target location | 
**Value** | Pointer to **interface\{\}** | The value to be used within the operations. Required for add/replace/test. | [optional] 
**From** | Pointer to **string** | A JSON-Pointer describing the source location for move/copy. | [optional] 

## Methods

### NewParameterStorageJsonPatch

`func NewParameterStorageJsonPatch(op string, path string, ) *ParameterStorageJsonPatch`

NewParameterStorageJsonPatch instantiates a new ParameterStorageJsonPatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewParameterStorageJsonPatchWithDefaults

`func NewParameterStorageJsonPatchWithDefaults() *ParameterStorageJsonPatch`

NewParameterStorageJsonPatchWithDefaults instantiates a new ParameterStorageJsonPatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *ParameterStorageJsonPatch) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *ParameterStorageJsonPatch) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *ParameterStorageJsonPatch) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *ParameterStorageJsonPatch) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *ParameterStorageJsonPatch) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *ParameterStorageJsonPatch) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *ParameterStorageJsonPatch) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ParameterStorageJsonPatch) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ParameterStorageJsonPatch) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *ParameterStorageJsonPatch) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *ParameterStorageJsonPatch) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *ParameterStorageJsonPatch) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetFrom

`func (o *ParameterStorageJsonPatch) GetFrom() string`

GetFrom returns the From field if non-nil, zero value otherwise.

### GetFromOk

`func (o *ParameterStorageJsonPatch) GetFromOk() (*string, bool)`

GetFromOk returns a tuple with the From field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFrom

`func (o *ParameterStorageJsonPatch) SetFrom(v string)`

SetFrom sets From field to given value.

### HasFrom

`func (o *ParameterStorageJsonPatch) HasFrom() bool`

HasFrom returns a boolean if a field has been set.


