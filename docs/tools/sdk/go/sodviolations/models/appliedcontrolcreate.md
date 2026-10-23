# Appliedcontrolcreate

# Appliedcontrolcreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Control** | **string** | The unique identifier of the compensating control to apply. | 
**Comments** | Pointer to **string** | Optional comments to capture when applying the control. | [optional] 

## Methods

### NewAppliedcontrolcreate

`func NewAppliedcontrolcreate(control string, ) *Appliedcontrolcreate`

NewAppliedcontrolcreate instantiates a new Appliedcontrolcreate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAppliedcontrolcreateWithDefaults

`func NewAppliedcontrolcreateWithDefaults() *Appliedcontrolcreate`

NewAppliedcontrolcreateWithDefaults instantiates a new Appliedcontrolcreate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetControl

`func (o *Appliedcontrolcreate) GetControl() string`

GetControl returns the Control field if non-nil, zero value otherwise.

### GetControlOk

`func (o *Appliedcontrolcreate) GetControlOk() (*string, bool)`

GetControlOk returns a tuple with the Control field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetControl

`func (o *Appliedcontrolcreate) SetControl(v string)`

SetControl sets Control field to given value.


### GetComments

`func (o *Appliedcontrolcreate) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Appliedcontrolcreate) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Appliedcontrolcreate) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Appliedcontrolcreate) HasComments() bool`

HasComments returns a boolean if a field has been set.


