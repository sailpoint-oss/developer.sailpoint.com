# MachineAccountDiscoveryReason

# MachineAccountDiscoveryReason

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Reason ID. | [optional] 
**Message** | Pointer to **string** | Readable message for the reason, in the requested language. | [optional] 

## Methods

### NewMachineAccountDiscoveryReason

`func NewMachineAccountDiscoveryReason() *MachineAccountDiscoveryReason`

NewMachineAccountDiscoveryReason instantiates a new MachineAccountDiscoveryReason object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountDiscoveryReasonWithDefaults

`func NewMachineAccountDiscoveryReasonWithDefaults() *MachineAccountDiscoveryReason`

NewMachineAccountDiscoveryReasonWithDefaults instantiates a new MachineAccountDiscoveryReason object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *MachineAccountDiscoveryReason) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *MachineAccountDiscoveryReason) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *MachineAccountDiscoveryReason) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *MachineAccountDiscoveryReason) HasId() bool`

HasId returns a boolean if a field has been set.

### GetMessage

`func (o *MachineAccountDiscoveryReason) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *MachineAccountDiscoveryReason) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *MachineAccountDiscoveryReason) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *MachineAccountDiscoveryReason) HasMessage() bool`

HasMessage returns a boolean if a field has been set.


