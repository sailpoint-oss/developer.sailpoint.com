# MachineAccountsSummary

# MachineAccountsSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Human** | Pointer to [**[]MachineAccountClassificationCount**](machine-account-classification-count) | Counts of candidates that are correlated to a human identity, with one entry each for the `CRITERIA`, `SOURCE` and `DISCOVERY` classification methods. | [optional] 
**Uncorrelated** | Pointer to [**[]MachineAccountClassificationCount**](machine-account-classification-count) | Counts of candidates that are not correlated to any identity. This list has one entry, for the `DISCOVERY` classification method. | [optional] 

## Methods

### NewMachineAccountsSummary

`func NewMachineAccountsSummary() *MachineAccountsSummary`

NewMachineAccountsSummary instantiates a new MachineAccountsSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountsSummaryWithDefaults

`func NewMachineAccountsSummaryWithDefaults() *MachineAccountsSummary`

NewMachineAccountsSummaryWithDefaults instantiates a new MachineAccountsSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHuman

`func (o *MachineAccountsSummary) GetHuman() []MachineAccountClassificationCount`

GetHuman returns the Human field if non-nil, zero value otherwise.

### GetHumanOk

`func (o *MachineAccountsSummary) GetHumanOk() (*[]MachineAccountClassificationCount, bool)`

GetHumanOk returns a tuple with the Human field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHuman

`func (o *MachineAccountsSummary) SetHuman(v []MachineAccountClassificationCount)`

SetHuman sets Human field to given value.

### HasHuman

`func (o *MachineAccountsSummary) HasHuman() bool`

HasHuman returns a boolean if a field has been set.

### GetUncorrelated

`func (o *MachineAccountsSummary) GetUncorrelated() []MachineAccountClassificationCount`

GetUncorrelated returns the Uncorrelated field if non-nil, zero value otherwise.

### GetUncorrelatedOk

`func (o *MachineAccountsSummary) GetUncorrelatedOk() (*[]MachineAccountClassificationCount, bool)`

GetUncorrelatedOk returns a tuple with the Uncorrelated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUncorrelated

`func (o *MachineAccountsSummary) SetUncorrelated(v []MachineAccountClassificationCount)`

SetUncorrelated sets Uncorrelated field to given value.

### HasUncorrelated

`func (o *MachineAccountsSummary) HasUncorrelated() bool`

HasUncorrelated returns a boolean if a field has been set.


