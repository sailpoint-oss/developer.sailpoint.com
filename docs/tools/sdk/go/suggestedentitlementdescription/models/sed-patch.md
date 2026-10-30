# SedPatch

# SedPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | Pointer to **string** | desired operation | [optional] 
**Path** | Pointer to **string** | field to be patched | [optional] 
**Value** | Pointer to **interface\{\}** | value to replace with | [optional] 

## Methods

### NewSedPatch

`func NewSedPatch() *SedPatch`

NewSedPatch instantiates a new SedPatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSedPatchWithDefaults

`func NewSedPatchWithDefaults() *SedPatch`

NewSedPatchWithDefaults instantiates a new SedPatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *SedPatch) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *SedPatch) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *SedPatch) SetOp(v string)`

SetOp sets Op field to given value.

### HasOp

`func (o *SedPatch) HasOp() bool`

HasOp returns a boolean if a field has been set.

### GetPath

`func (o *SedPatch) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *SedPatch) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *SedPatch) SetPath(v string)`

SetPath sets Path field to given value.

### HasPath

`func (o *SedPatch) HasPath() bool`

HasPath returns a boolean if a field has been set.

### GetValue

`func (o *SedPatch) GetValue() interface{}`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *SedPatch) GetValueOk() (*interface{}, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *SedPatch) SetValue(v interface{})`

SetValue sets Value field to given value.

### HasValue

`func (o *SedPatch) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *SedPatch) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *SedPatch) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil

