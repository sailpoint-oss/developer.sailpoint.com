# MachineIdentityApplicationCounts

# MachineIdentityApplicationCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApplicationCount** | Pointer to **int64** | Total number of applications. | [optional] 
**UnsanctionedApplicationCount** | Pointer to **int64** | Number of applications that are not sanctioned. | [optional] 
**Discovered** | Pointer to [**MachineIdentityDiscoveredCounts**](machine-identity-discovered-counts) |  | [optional] 
**RiskSeverity** | Pointer to [**NullableMachineIdentityRiskSeverityCounts**](machine-identity-risk-severity-counts) |  | [optional] 
**Ownership** | Pointer to [**MachineIdentityApplicationCountsOwnership**](machine-identity-application-counts-ownership) |  | [optional] 

## Methods

### NewMachineIdentityApplicationCounts

`func NewMachineIdentityApplicationCounts() *MachineIdentityApplicationCounts`

NewMachineIdentityApplicationCounts instantiates a new MachineIdentityApplicationCounts object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityApplicationCountsWithDefaults

`func NewMachineIdentityApplicationCountsWithDefaults() *MachineIdentityApplicationCounts`

NewMachineIdentityApplicationCountsWithDefaults instantiates a new MachineIdentityApplicationCounts object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApplicationCount

`func (o *MachineIdentityApplicationCounts) GetApplicationCount() int64`

GetApplicationCount returns the ApplicationCount field if non-nil, zero value otherwise.

### GetApplicationCountOk

`func (o *MachineIdentityApplicationCounts) GetApplicationCountOk() (*int64, bool)`

GetApplicationCountOk returns a tuple with the ApplicationCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplicationCount

`func (o *MachineIdentityApplicationCounts) SetApplicationCount(v int64)`

SetApplicationCount sets ApplicationCount field to given value.

### HasApplicationCount

`func (o *MachineIdentityApplicationCounts) HasApplicationCount() bool`

HasApplicationCount returns a boolean if a field has been set.

### GetUnsanctionedApplicationCount

`func (o *MachineIdentityApplicationCounts) GetUnsanctionedApplicationCount() int64`

GetUnsanctionedApplicationCount returns the UnsanctionedApplicationCount field if non-nil, zero value otherwise.

### GetUnsanctionedApplicationCountOk

`func (o *MachineIdentityApplicationCounts) GetUnsanctionedApplicationCountOk() (*int64, bool)`

GetUnsanctionedApplicationCountOk returns a tuple with the UnsanctionedApplicationCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUnsanctionedApplicationCount

`func (o *MachineIdentityApplicationCounts) SetUnsanctionedApplicationCount(v int64)`

SetUnsanctionedApplicationCount sets UnsanctionedApplicationCount field to given value.

### HasUnsanctionedApplicationCount

`func (o *MachineIdentityApplicationCounts) HasUnsanctionedApplicationCount() bool`

HasUnsanctionedApplicationCount returns a boolean if a field has been set.

### GetDiscovered

`func (o *MachineIdentityApplicationCounts) GetDiscovered() MachineIdentityDiscoveredCounts`

GetDiscovered returns the Discovered field if non-nil, zero value otherwise.

### GetDiscoveredOk

`func (o *MachineIdentityApplicationCounts) GetDiscoveredOk() (*MachineIdentityDiscoveredCounts, bool)`

GetDiscoveredOk returns a tuple with the Discovered field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDiscovered

`func (o *MachineIdentityApplicationCounts) SetDiscovered(v MachineIdentityDiscoveredCounts)`

SetDiscovered sets Discovered field to given value.

### HasDiscovered

`func (o *MachineIdentityApplicationCounts) HasDiscovered() bool`

HasDiscovered returns a boolean if a field has been set.

### GetRiskSeverity

`func (o *MachineIdentityApplicationCounts) GetRiskSeverity() MachineIdentityRiskSeverityCounts`

GetRiskSeverity returns the RiskSeverity field if non-nil, zero value otherwise.

### GetRiskSeverityOk

`func (o *MachineIdentityApplicationCounts) GetRiskSeverityOk() (*MachineIdentityRiskSeverityCounts, bool)`

GetRiskSeverityOk returns a tuple with the RiskSeverity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRiskSeverity

`func (o *MachineIdentityApplicationCounts) SetRiskSeverity(v MachineIdentityRiskSeverityCounts)`

SetRiskSeverity sets RiskSeverity field to given value.

### HasRiskSeverity

`func (o *MachineIdentityApplicationCounts) HasRiskSeverity() bool`

HasRiskSeverity returns a boolean if a field has been set.

### SetRiskSeverityNil

`func (o *MachineIdentityApplicationCounts) SetRiskSeverityNil(b bool)`

 SetRiskSeverityNil sets the value for RiskSeverity to be an explicit nil

### UnsetRiskSeverity
`func (o *MachineIdentityApplicationCounts) UnsetRiskSeverity()`

UnsetRiskSeverity ensures that no value is present for RiskSeverity, not even an explicit nil
### GetOwnership

`func (o *MachineIdentityApplicationCounts) GetOwnership() MachineIdentityApplicationCountsOwnership`

GetOwnership returns the Ownership field if non-nil, zero value otherwise.

### GetOwnershipOk

`func (o *MachineIdentityApplicationCounts) GetOwnershipOk() (*MachineIdentityApplicationCountsOwnership, bool)`

GetOwnershipOk returns a tuple with the Ownership field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnership

`func (o *MachineIdentityApplicationCounts) SetOwnership(v MachineIdentityApplicationCountsOwnership)`

SetOwnership sets Ownership field to given value.

### HasOwnership

`func (o *MachineIdentityApplicationCounts) HasOwnership() bool`

HasOwnership returns a boolean if a field has been set.


