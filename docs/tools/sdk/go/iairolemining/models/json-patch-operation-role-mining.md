# JsonPatchOperationRoleMining

# JsonPatchOperationRoleMining

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to be performed | 
**Path** | **string** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** | Pointer to [**JsonPatchOperationRoleMiningValue**](json-patch-operation-role-mining-value) |  | [optional] 

## Methods

### NewJsonPatchOperationRoleMining

`func NewJsonPatchOperationRoleMining(op string, path string, ) *JsonPatchOperationRoleMining`

NewJsonPatchOperationRoleMining instantiates a new JsonPatchOperationRoleMining object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJsonPatchOperationRoleMiningWithDefaults

`func NewJsonPatchOperationRoleMiningWithDefaults() *JsonPatchOperationRoleMining`

NewJsonPatchOperationRoleMiningWithDefaults instantiates a new JsonPatchOperationRoleMining object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *JsonPatchOperationRoleMining) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *JsonPatchOperationRoleMining) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *JsonPatchOperationRoleMining) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *JsonPatchOperationRoleMining) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *JsonPatchOperationRoleMining) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *JsonPatchOperationRoleMining) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *JsonPatchOperationRoleMining) GetValue() JsonPatchOperationRoleMiningValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *JsonPatchOperationRoleMining) GetValueOk() (*JsonPatchOperationRoleMiningValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *JsonPatchOperationRoleMining) SetValue(v JsonPatchOperationRoleMiningValue)`

SetValue sets Value field to given value.

### HasValue

`func (o *JsonPatchOperationRoleMining) HasValue() bool`

HasValue returns a boolean if a field has been set.


