# MachineAccountV2AllOfOwners

# MachineAccountV2AllOfOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | Pointer to [**BaseReferenceDto**](base-reference-dto) | The identity selected as the primary owner. | [optional] 
**Secondary** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | The secondary owners. Entries are either up to ten identities (type `IDENTITY`) or one governance group (type `GOVERNANCE_GROUP`), not both. | [optional] 

## Methods

### NewMachineAccountV2AllOfOwners

`func NewMachineAccountV2AllOfOwners() *MachineAccountV2AllOfOwners`

NewMachineAccountV2AllOfOwners instantiates a new MachineAccountV2AllOfOwners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountV2AllOfOwnersWithDefaults

`func NewMachineAccountV2AllOfOwnersWithDefaults() *MachineAccountV2AllOfOwners`

NewMachineAccountV2AllOfOwnersWithDefaults instantiates a new MachineAccountV2AllOfOwners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimary

`func (o *MachineAccountV2AllOfOwners) GetPrimary() BaseReferenceDto`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *MachineAccountV2AllOfOwners) GetPrimaryOk() (*BaseReferenceDto, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *MachineAccountV2AllOfOwners) SetPrimary(v BaseReferenceDto)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *MachineAccountV2AllOfOwners) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetSecondary

`func (o *MachineAccountV2AllOfOwners) GetSecondary() []BaseReferenceDto`

GetSecondary returns the Secondary field if non-nil, zero value otherwise.

### GetSecondaryOk

`func (o *MachineAccountV2AllOfOwners) GetSecondaryOk() (*[]BaseReferenceDto, bool)`

GetSecondaryOk returns a tuple with the Secondary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondary

`func (o *MachineAccountV2AllOfOwners) SetSecondary(v []BaseReferenceDto)`

SetSecondary sets Secondary field to given value.

### HasSecondary

`func (o *MachineAccountV2AllOfOwners) HasSecondary() bool`

HasSecondary returns a boolean if a field has been set.


