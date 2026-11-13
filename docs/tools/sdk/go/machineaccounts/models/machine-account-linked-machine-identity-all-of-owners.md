# MachineAccountLinkedMachineIdentityAllOfOwners

# MachineAccountLinkedMachineIdentityAllOfOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | Pointer to [**BaseReferenceDto**](base-reference-dto) | The identity selected as the primary owner. | [optional] 
**SecondaryIdentities** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | The identities selected as secondary owners. | [optional] 

## Methods

### NewMachineAccountLinkedMachineIdentityAllOfOwners

`func NewMachineAccountLinkedMachineIdentityAllOfOwners() *MachineAccountLinkedMachineIdentityAllOfOwners`

NewMachineAccountLinkedMachineIdentityAllOfOwners instantiates a new MachineAccountLinkedMachineIdentityAllOfOwners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineAccountLinkedMachineIdentityAllOfOwnersWithDefaults

`func NewMachineAccountLinkedMachineIdentityAllOfOwnersWithDefaults() *MachineAccountLinkedMachineIdentityAllOfOwners`

NewMachineAccountLinkedMachineIdentityAllOfOwnersWithDefaults instantiates a new MachineAccountLinkedMachineIdentityAllOfOwners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryIdentity

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) GetPrimaryIdentity() BaseReferenceDto`

GetPrimaryIdentity returns the PrimaryIdentity field if non-nil, zero value otherwise.

### GetPrimaryIdentityOk

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) GetPrimaryIdentityOk() (*BaseReferenceDto, bool)`

GetPrimaryIdentityOk returns a tuple with the PrimaryIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryIdentity

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) SetPrimaryIdentity(v BaseReferenceDto)`

SetPrimaryIdentity sets PrimaryIdentity field to given value.

### HasPrimaryIdentity

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) HasPrimaryIdentity() bool`

HasPrimaryIdentity returns a boolean if a field has been set.

### GetSecondaryIdentities

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) GetSecondaryIdentities() []BaseReferenceDto`

GetSecondaryIdentities returns the SecondaryIdentities field if non-nil, zero value otherwise.

### GetSecondaryIdentitiesOk

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) GetSecondaryIdentitiesOk() (*[]BaseReferenceDto, bool)`

GetSecondaryIdentitiesOk returns a tuple with the SecondaryIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryIdentities

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) SetSecondaryIdentities(v []BaseReferenceDto)`

SetSecondaryIdentities sets SecondaryIdentities field to given value.

### HasSecondaryIdentities

`func (o *MachineAccountLinkedMachineIdentityAllOfOwners) HasSecondaryIdentities() bool`

HasSecondaryIdentities returns a boolean if a field has been set.


