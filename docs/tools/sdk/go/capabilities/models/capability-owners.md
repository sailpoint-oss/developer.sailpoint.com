# CapabilityOwners

# CapabilityOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | Pointer to [**CapabilityOwnersPrimary**](capability-owners-primary) |  | [optional] 
**Secondary** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [optional] 

## Methods

### NewCapabilityOwners

`func NewCapabilityOwners() *CapabilityOwners`

NewCapabilityOwners instantiates a new CapabilityOwners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCapabilityOwnersWithDefaults

`func NewCapabilityOwnersWithDefaults() *CapabilityOwners`

NewCapabilityOwnersWithDefaults instantiates a new CapabilityOwners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimary

`func (o *CapabilityOwners) GetPrimary() CapabilityOwnersPrimary`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *CapabilityOwners) GetPrimaryOk() (*CapabilityOwnersPrimary, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *CapabilityOwners) SetPrimary(v CapabilityOwnersPrimary)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *CapabilityOwners) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetSecondary

`func (o *CapabilityOwners) GetSecondary() []BaseReferenceDto`

GetSecondary returns the Secondary field if non-nil, zero value otherwise.

### GetSecondaryOk

`func (o *CapabilityOwners) GetSecondaryOk() (*[]BaseReferenceDto, bool)`

GetSecondaryOk returns a tuple with the Secondary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondary

`func (o *CapabilityOwners) SetSecondary(v []BaseReferenceDto)`

SetSecondary sets Secondary field to given value.

### HasSecondary

`func (o *CapabilityOwners) HasSecondary() bool`

HasSecondary returns a boolean if a field has been set.


