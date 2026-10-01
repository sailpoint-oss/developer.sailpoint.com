# JitAccessOperationRequest

# JitAccessOperationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | Pointer to **string** | Operation type. Defaults to `replace` if omitted. | [optional] [default to "replace"]
**Path** | **string** | Path to replace. Only the following JSON Pointer-style paths are supported.  | 
**Value** | [**NullableJitAccessOperationRequestValue**](jit-access-operation-request-value) |  | 

## Methods

### NewJitAccessOperationRequest

`func NewJitAccessOperationRequest(path string, value NullableJitAccessOperationRequestValue, ) *JitAccessOperationRequest`

NewJitAccessOperationRequest instantiates a new JitAccessOperationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitAccessOperationRequestWithDefaults

`func NewJitAccessOperationRequestWithDefaults() *JitAccessOperationRequest`

NewJitAccessOperationRequestWithDefaults instantiates a new JitAccessOperationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *JitAccessOperationRequest) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *JitAccessOperationRequest) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *JitAccessOperationRequest) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *JitAccessOperationRequest) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetPath

`func (o *JitAccessOperationRequest) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *JitAccessOperationRequest) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *JitAccessOperationRequest) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *JitAccessOperationRequest) GetValue() JitAccessOperationRequestValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *JitAccessOperationRequest) GetValueOk() (*JitAccessOperationRequestValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *JitAccessOperationRequest) SetValue(v JitAccessOperationRequestValue)`

SetValue sets Value field to given value.


### SetValueNil

`func (o *JitAccessOperationRequest) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *JitAccessOperationRequest) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

