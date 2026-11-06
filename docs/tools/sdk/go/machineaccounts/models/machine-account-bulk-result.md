# MachineAccountBulkResult

# MachineAccountBulkResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | ID of the machine account this result applies to. | [optional] 
**Status** | Pointer to **int32** | HTTP-style status code for this machine account. `200` means the operation succeeded or was queued. Other values, such as `400`, `404` or `500`, describe why it failed. | [optional] 
**Message** | Pointer to **string** | A message that describes the outcome for this machine account. | [optional] 

## Methods

### NewMachineAccountBulkResult

`func NewMachineAccountBulkResult() *MachineAccountBulkResult`

NewMachineAccountBulkResult instantiates a new MachineAccountBulkResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountBulkResultWithDefaults

`func NewMachineAccountBulkResultWithDefaults() *MachineAccountBulkResult`

NewMachineAccountBulkResultWithDefaults instantiates a new MachineAccountBulkResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountBulkResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountBulkResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountBulkResult) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineAccountBulkResult) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *MachineAccountBulkResult) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MachineAccountBulkResult) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MachineAccountBulkResult) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *MachineAccountBulkResult) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMessage

`func (o *MachineAccountBulkResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *MachineAccountBulkResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *MachineAccountBulkResult) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *MachineAccountBulkResult) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


