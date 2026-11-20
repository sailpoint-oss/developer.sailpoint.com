# MachineIdentityAllCounts

# MachineIdentityAllCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationIdentityCount** | Pointer to **int64** | Number of application machine identities where the identity is a primary or secondary owner. | [optional] 
**AiAgentCount** | Pointer to **int64** | Number of AI agent machine identities where the identity is a primary or secondary owner. | [optional] 
**MachineAccountsCount** | Pointer to **int64** | Number of machine accounts owned by the identity. | [optional] 
**TotalCount** | Pointer to **int64** | Sum of the application, AI agent, and machine account counts. | [optional] 

## Methods

### NewMachineIdentityAllCounts

`func NewMachineIdentityAllCounts() *MachineIdentityAllCounts`

NewMachineIdentityAllCounts instantiates a new MachineIdentityAllCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAllCountsWithDefaults

`func NewMachineIdentityAllCountsWithDefaults() *MachineIdentityAllCounts`

NewMachineIdentityAllCountsWithDefaults instantiates a new MachineIdentityAllCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationIdentityCount

`func (o *MachineIdentityAllCounts) GetApplicationIdentityCount() int64`

GetApplicationIdentityCount returns the ApplicationIdentityCount field if non-nil, zero value otherwise.

### GetApplicationIdentityCountOk

`func (o *MachineIdentityAllCounts) GetApplicationIdentityCountOk() (*int64, bool)`

GetApplicationIdentityCountOk returns a tuple with the ApplicationIdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationIdentityCount

`func (o *MachineIdentityAllCounts) SetApplicationIdentityCount(v int64)`

SetApplicationIdentityCount sets ApplicationIdentityCount field to given value.

### HasApplicationIdentityCount

`func (o *MachineIdentityAllCounts) HasApplicationIdentityCount() bool`

HasApplicationIdentityCount returns a boolean if a field has been set.

### GetAiAgentCount

`func (o *MachineIdentityAllCounts) GetAiAgentCount() int64`

GetAiAgentCount returns the AiAgentCount field if non-nil, zero value otherwise.

### GetAiAgentCountOk

`func (o *MachineIdentityAllCounts) GetAiAgentCountOk() (*int64, bool)`

GetAiAgentCountOk returns a tuple with the AiAgentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAiAgentCount

`func (o *MachineIdentityAllCounts) SetAiAgentCount(v int64)`

SetAiAgentCount sets AiAgentCount field to given value.

### HasAiAgentCount

`func (o *MachineIdentityAllCounts) HasAiAgentCount() bool`

HasAiAgentCount returns a boolean if a field has been set.

### GetMachineAccountsCount

`func (o *MachineIdentityAllCounts) GetMachineAccountsCount() int64`

GetMachineAccountsCount returns the MachineAccountsCount field if non-nil, zero value otherwise.

### GetMachineAccountsCountOk

`func (o *MachineIdentityAllCounts) GetMachineAccountsCountOk() (*int64, bool)`

GetMachineAccountsCountOk returns a tuple with the MachineAccountsCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMachineAccountsCount

`func (o *MachineIdentityAllCounts) SetMachineAccountsCount(v int64)`

SetMachineAccountsCount sets MachineAccountsCount field to given value.

### HasMachineAccountsCount

`func (o *MachineIdentityAllCounts) HasMachineAccountsCount() bool`

HasMachineAccountsCount returns a boolean if a field has been set.

### GetTotalCount

`func (o *MachineIdentityAllCounts) GetTotalCount() int64`

GetTotalCount returns the TotalCount field if non-nil, zero value otherwise.

### GetTotalCountOk

`func (o *MachineIdentityAllCounts) GetTotalCountOk() (*int64, bool)`

GetTotalCountOk returns a tuple with the TotalCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTotalCount

`func (o *MachineIdentityAllCounts) SetTotalCount(v int64)`

SetTotalCount sets TotalCount field to given value.

### HasTotalCount

`func (o *MachineIdentityAllCounts) HasTotalCount() bool`

HasTotalCount returns a boolean if a field has been set.


