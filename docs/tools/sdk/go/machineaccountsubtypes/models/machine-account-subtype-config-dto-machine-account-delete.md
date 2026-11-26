# MachineAccountSubtypeConfigDtoMachineAccountDelete

# MachineAccountSubtypeConfigDtoMachineAccountDelete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalRequired** | Pointer to **bool** | Indicates whether approval is required for an account deletion request. | [optional] [default to false]
**ApprovalConfig** | Pointer to [**MachineSubtypeApprovalConfig**](machine-subtype-approval-config) |  | [optional] 

## Methods

### NewMachineAccountSubtypeConfigDtoMachineAccountDelete

`func NewMachineAccountSubtypeConfigDtoMachineAccountDelete() *MachineAccountSubtypeConfigDtoMachineAccountDelete`

NewMachineAccountSubtypeConfigDtoMachineAccountDelete instantiates a new MachineAccountSubtypeConfigDtoMachineAccountDelete object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountSubtypeConfigDtoMachineAccountDeleteWithDefaults

`func NewMachineAccountSubtypeConfigDtoMachineAccountDeleteWithDefaults() *MachineAccountSubtypeConfigDtoMachineAccountDelete`

NewMachineAccountSubtypeConfigDtoMachineAccountDeleteWithDefaults instantiates a new MachineAccountSubtypeConfigDtoMachineAccountDelete object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalRequired

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) GetApprovalRequired() bool`

GetApprovalRequired returns the ApprovalRequired field if non-nil, zero value otherwise.

### GetApprovalRequiredOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) GetApprovalRequiredOk() (*bool, bool)`

GetApprovalRequiredOk returns a tuple with the ApprovalRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalRequired

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) SetApprovalRequired(v bool)`

SetApprovalRequired sets ApprovalRequired field to given value.

### HasApprovalRequired

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) HasApprovalRequired() bool`

HasApprovalRequired returns a boolean if a field has been set.

### GetApprovalConfig

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) GetApprovalConfig() MachineSubtypeApprovalConfig`

GetApprovalConfig returns the ApprovalConfig field if non-nil, zero value otherwise.

### GetApprovalConfigOk

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) GetApprovalConfigOk() (*MachineSubtypeApprovalConfig, bool)`

GetApprovalConfigOk returns a tuple with the ApprovalConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalConfig

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) SetApprovalConfig(v MachineSubtypeApprovalConfig)`

SetApprovalConfig sets ApprovalConfig field to given value.

### HasApprovalConfig

`func (o *MachineAccountSubtypeConfigDtoMachineAccountDelete) HasApprovalConfig() bool`

HasApprovalConfig returns a boolean if a field has been set.


