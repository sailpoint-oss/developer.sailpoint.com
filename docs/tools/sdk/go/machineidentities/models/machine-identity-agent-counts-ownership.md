# MachineIdentityAgentCountsOwnership

# MachineIdentityAgentCountsOwnership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnedAgents** | Pointer to **int64** | Number of AI agents that have at least one owner. | [optional] 
**OwnedPercent** | Pointer to **int32** | Percentage of AI agents that have at least one owner. | [optional] 

## Methods

### NewMachineIdentityAgentCountsOwnership

`func NewMachineIdentityAgentCountsOwnership() *MachineIdentityAgentCountsOwnership`

NewMachineIdentityAgentCountsOwnership instantiates a new MachineIdentityAgentCountsOwnership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAgentCountsOwnershipWithDefaults

`func NewMachineIdentityAgentCountsOwnershipWithDefaults() *MachineIdentityAgentCountsOwnership`

NewMachineIdentityAgentCountsOwnershipWithDefaults instantiates a new MachineIdentityAgentCountsOwnership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnedAgents

`func (o *MachineIdentityAgentCountsOwnership) GetOwnedAgents() int64`

GetOwnedAgents returns the OwnedAgents field if non-nil, zero value otherwise.

### GetOwnedAgentsOk

`func (o *MachineIdentityAgentCountsOwnership) GetOwnedAgentsOk() (*int64, bool)`

GetOwnedAgentsOk returns a tuple with the OwnedAgents field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnedAgents

`func (o *MachineIdentityAgentCountsOwnership) SetOwnedAgents(v int64)`

SetOwnedAgents sets OwnedAgents field to given value.

### HasOwnedAgents

`func (o *MachineIdentityAgentCountsOwnership) HasOwnedAgents() bool`

HasOwnedAgents returns a boolean if a field has been set.

### GetOwnedPercent

`func (o *MachineIdentityAgentCountsOwnership) GetOwnedPercent() int32`

GetOwnedPercent returns the OwnedPercent field if non-nil, zero value otherwise.

### GetOwnedPercentOk

`func (o *MachineIdentityAgentCountsOwnership) GetOwnedPercentOk() (*int32, bool)`

GetOwnedPercentOk returns a tuple with the OwnedPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnedPercent

`func (o *MachineIdentityAgentCountsOwnership) SetOwnedPercent(v int32)`

SetOwnedPercent sets OwnedPercent field to given value.

### HasOwnedPercent

`func (o *MachineIdentityAgentCountsOwnership) HasOwnedPercent() bool`

HasOwnedPercent returns a boolean if a field has been set.


