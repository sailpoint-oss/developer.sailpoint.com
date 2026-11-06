# MachineIdentityBulkResult

# MachineIdentityBulkResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The requested machine identity ID. | [optional] 
**Status** | Pointer to **int32** | HTTP status code for this ID. `200` means the operation succeeded. Other values explain why it did not, for example `400` when the ID is missing or not valid, `404` when the machine identity is not found or the caller does not own it, and `409` when the ID appears more than once in the request. | [optional] 
**Message** | Pointer to **string** | Message describing the outcome for this ID. | [optional] 

## Methods

### NewMachineIdentityBulkResult

`func NewMachineIdentityBulkResult() *MachineIdentityBulkResult`

NewMachineIdentityBulkResult instantiates a new MachineIdentityBulkResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityBulkResultWithDefaults

`func NewMachineIdentityBulkResultWithDefaults() *MachineIdentityBulkResult`

NewMachineIdentityBulkResultWithDefaults instantiates a new MachineIdentityBulkResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineIdentityBulkResult) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineIdentityBulkResult) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineIdentityBulkResult) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineIdentityBulkResult) HasId() bool`

HasId returns a boolean if a field has been set.

### GetStatus

`func (o *MachineIdentityBulkResult) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *MachineIdentityBulkResult) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *MachineIdentityBulkResult) SetStatus(v int32)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *MachineIdentityBulkResult) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetMessage

`func (o *MachineIdentityBulkResult) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *MachineIdentityBulkResult) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *MachineIdentityBulkResult) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *MachineIdentityBulkResult) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


