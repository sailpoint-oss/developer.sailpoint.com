# MachineIdentityAgentCounts

# MachineIdentityAgentCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentCount** | Pointer to **int64** | Total number of AI agents. | [optional] 
**UnsanctionedAgentCount** | Pointer to **int64** | Number of AI agents that are not sanctioned. | [optional] 
**Discovered** | Pointer to [**MachineIdentityDiscoveredCounts**](machine-identity-discovered-counts) |  | [optional] 
**RiskSeverity** | Pointer to [**NullableMachineIdentityRiskSeverityCounts**](machine-identity-risk-severity-counts) |  | [optional] 
**Ownership** | Pointer to [**MachineIdentityAgentCountsOwnership**](machine-identity-agent-counts-ownership) |  | [optional] 

## Methods

### NewMachineIdentityAgentCounts

`func NewMachineIdentityAgentCounts() *MachineIdentityAgentCounts`

NewMachineIdentityAgentCounts instantiates a new MachineIdentityAgentCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityAgentCountsWithDefaults

`func NewMachineIdentityAgentCountsWithDefaults() *MachineIdentityAgentCounts`

NewMachineIdentityAgentCountsWithDefaults instantiates a new MachineIdentityAgentCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentCount

`func (o *MachineIdentityAgentCounts) GetAgentCount() int64`

GetAgentCount returns the AgentCount field if non-nil, zero value otherwise.

### GetAgentCountOk

`func (o *MachineIdentityAgentCounts) GetAgentCountOk() (*int64, bool)`

GetAgentCountOk returns a tuple with the AgentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentCount

`func (o *MachineIdentityAgentCounts) SetAgentCount(v int64)`

SetAgentCount sets AgentCount field to given value.

### HasAgentCount

`func (o *MachineIdentityAgentCounts) HasAgentCount() bool`

HasAgentCount returns a boolean if a field has been set.

### GetUnsanctionedAgentCount

`func (o *MachineIdentityAgentCounts) GetUnsanctionedAgentCount() int64`

GetUnsanctionedAgentCount returns the UnsanctionedAgentCount field if non-nil, zero value otherwise.

### GetUnsanctionedAgentCountOk

`func (o *MachineIdentityAgentCounts) GetUnsanctionedAgentCountOk() (*int64, bool)`

GetUnsanctionedAgentCountOk returns a tuple with the UnsanctionedAgentCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnsanctionedAgentCount

`func (o *MachineIdentityAgentCounts) SetUnsanctionedAgentCount(v int64)`

SetUnsanctionedAgentCount sets UnsanctionedAgentCount field to given value.

### HasUnsanctionedAgentCount

`func (o *MachineIdentityAgentCounts) HasUnsanctionedAgentCount() bool`

HasUnsanctionedAgentCount returns a boolean if a field has been set.

### GetDiscovered

`func (o *MachineIdentityAgentCounts) GetDiscovered() MachineIdentityDiscoveredCounts`

GetDiscovered returns the Discovered field if non-nil, zero value otherwise.

### GetDiscoveredOk

`func (o *MachineIdentityAgentCounts) GetDiscoveredOk() (*MachineIdentityDiscoveredCounts, bool)`

GetDiscoveredOk returns a tuple with the Discovered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscovered

`func (o *MachineIdentityAgentCounts) SetDiscovered(v MachineIdentityDiscoveredCounts)`

SetDiscovered sets Discovered field to given value.

### HasDiscovered

`func (o *MachineIdentityAgentCounts) HasDiscovered() bool`

HasDiscovered returns a boolean if a field has been set.

### GetRiskSeverity

`func (o *MachineIdentityAgentCounts) GetRiskSeverity() MachineIdentityRiskSeverityCounts`

GetRiskSeverity returns the RiskSeverity field if non-nil, zero value otherwise.

### GetRiskSeverityOk

`func (o *MachineIdentityAgentCounts) GetRiskSeverityOk() (*MachineIdentityRiskSeverityCounts, bool)`

GetRiskSeverityOk returns a tuple with the RiskSeverity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskSeverity

`func (o *MachineIdentityAgentCounts) SetRiskSeverity(v MachineIdentityRiskSeverityCounts)`

SetRiskSeverity sets RiskSeverity field to given value.

### HasRiskSeverity

`func (o *MachineIdentityAgentCounts) HasRiskSeverity() bool`

HasRiskSeverity returns a boolean if a field has been set.

### SetRiskSeverityNil

`func (o *MachineIdentityAgentCounts) SetRiskSeverityNil(b bool)`

 SetRiskSeverityNil sets the value for RiskSeverity to be an explicit nil

### UnsetRiskSeverity
`func (o *MachineIdentityAgentCounts) UnsetRiskSeverity()`

UnsetRiskSeverity ensures that no value is present for RiskSeverity, not even an explicit nil
### GetOwnership

`func (o *MachineIdentityAgentCounts) GetOwnership() MachineIdentityAgentCountsOwnership`

GetOwnership returns the Ownership field if non-nil, zero value otherwise.

### GetOwnershipOk

`func (o *MachineIdentityAgentCounts) GetOwnershipOk() (*MachineIdentityAgentCountsOwnership, bool)`

GetOwnershipOk returns a tuple with the Ownership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnership

`func (o *MachineIdentityAgentCounts) SetOwnership(v MachineIdentityAgentCountsOwnership)`

SetOwnership sets Ownership field to given value.

### HasOwnership

`func (o *MachineIdentityAgentCounts) HasOwnership() bool`

HasOwnership returns a boolean if a field has been set.


