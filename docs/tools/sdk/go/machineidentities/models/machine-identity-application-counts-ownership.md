# MachineIdentityApplicationCountsOwnership

# MachineIdentityApplicationCountsOwnership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnedApplications** | Pointer to **int64** | Number of applications that have at least one owner. | [optional] 
**OwnedPercent** | Pointer to **int32** | Percentage of applications that have at least one owner. | [optional] 

## Methods

### NewMachineIdentityApplicationCountsOwnership

`func NewMachineIdentityApplicationCountsOwnership() *MachineIdentityApplicationCountsOwnership`

NewMachineIdentityApplicationCountsOwnership instantiates a new MachineIdentityApplicationCountsOwnership object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityApplicationCountsOwnershipWithDefaults

`func NewMachineIdentityApplicationCountsOwnershipWithDefaults() *MachineIdentityApplicationCountsOwnership`

NewMachineIdentityApplicationCountsOwnershipWithDefaults instantiates a new MachineIdentityApplicationCountsOwnership object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOwnedApplications

`func (o *MachineIdentityApplicationCountsOwnership) GetOwnedApplications() int64`

GetOwnedApplications returns the OwnedApplications field if non-nil, zero value otherwise.

### GetOwnedApplicationsOk

`func (o *MachineIdentityApplicationCountsOwnership) GetOwnedApplicationsOk() (*int64, bool)`

GetOwnedApplicationsOk returns a tuple with the OwnedApplications field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnedApplications

`func (o *MachineIdentityApplicationCountsOwnership) SetOwnedApplications(v int64)`

SetOwnedApplications sets OwnedApplications field to given value.

### HasOwnedApplications

`func (o *MachineIdentityApplicationCountsOwnership) HasOwnedApplications() bool`

HasOwnedApplications returns a boolean if a field has been set.

### GetOwnedPercent

`func (o *MachineIdentityApplicationCountsOwnership) GetOwnedPercent() int32`

GetOwnedPercent returns the OwnedPercent field if non-nil, zero value otherwise.

### GetOwnedPercentOk

`func (o *MachineIdentityApplicationCountsOwnership) GetOwnedPercentOk() (*int32, bool)`

GetOwnedPercentOk returns a tuple with the OwnedPercent field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnedPercent

`func (o *MachineIdentityApplicationCountsOwnership) SetOwnedPercent(v int32)`

SetOwnedPercent sets OwnedPercent field to given value.

### HasOwnedPercent

`func (o *MachineIdentityApplicationCountsOwnership) HasOwnedPercent() bool`

HasOwnedPercent returns a boolean if a field has been set.


