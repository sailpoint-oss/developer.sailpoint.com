# AutoWriteSettingPatch

# AutoWriteSettingPatch

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | The operation to perform. Only \"replace\" is supported. | 
**Path** | **string** | The field to update. Allowed values: /enabled, /includedSourceIds, /excludedSourceIds | 
**Value** | [**AutoWriteSettingPatchValue**](auto-write-setting-patch-value) |  | 

## Methods

### NewAutoWriteSettingPatch

`func NewAutoWriteSettingPatch(op string, path string, value AutoWriteSettingPatchValue, ) *AutoWriteSettingPatch`

NewAutoWriteSettingPatch instantiates a new AutoWriteSettingPatch object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAutoWriteSettingPatchWithDefaults

`func NewAutoWriteSettingPatchWithDefaults() *AutoWriteSettingPatch`

NewAutoWriteSettingPatchWithDefaults instantiates a new AutoWriteSettingPatch object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOp

`func (o *AutoWriteSettingPatch) GetOp() string`

GetOp returns the Op field if non-nil, zero value otherwise.

### GetOpOk

`func (o *AutoWriteSettingPatch) GetOpOk() (*string, bool)`

GetOpOk returns a tuple with the Op field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOp

`func (o *AutoWriteSettingPatch) SetOp(v string)`

SetOp sets Op field to given value.


### GetPath

`func (o *AutoWriteSettingPatch) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *AutoWriteSettingPatch) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *AutoWriteSettingPatch) SetPath(v string)`

SetPath sets Path field to given value.


### GetValue

`func (o *AutoWriteSettingPatch) GetValue() AutoWriteSettingPatchValue`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *AutoWriteSettingPatch) GetValueOk() (*AutoWriteSettingPatchValue, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *AutoWriteSettingPatch) SetValue(v AutoWriteSettingPatchValue)`

SetValue sets Value field to given value.



