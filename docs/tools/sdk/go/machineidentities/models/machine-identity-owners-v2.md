# MachineIdentityOwnersV2

# MachineIdentityOwnersV2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Primary** | Pointer to [**MachineIdentityOwnersV2Primary**](machine-identity-owners-v2-primary) |  | [optional] 
**Secondary** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | Additional owners. Entries are either up to ten human (IDENTITY) references or exactly one GOVERNANCE_GROUP reference - not both. Governance-group owners appear here with type GOVERNANCE_GROUP. | [optional] 

## Methods

### NewMachineIdentityOwnersV2

`func NewMachineIdentityOwnersV2() *MachineIdentityOwnersV2`

NewMachineIdentityOwnersV2 instantiates a new MachineIdentityOwnersV2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMachineIdentityOwnersV2WithDefaults

`func NewMachineIdentityOwnersV2WithDefaults() *MachineIdentityOwnersV2`

NewMachineIdentityOwnersV2WithDefaults instantiates a new MachineIdentityOwnersV2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimary

`func (o *MachineIdentityOwnersV2) GetPrimary() MachineIdentityOwnersV2Primary`

GetPrimary returns the Primary field if non-nil, zero value otherwise.

### GetPrimaryOk

`func (o *MachineIdentityOwnersV2) GetPrimaryOk() (*MachineIdentityOwnersV2Primary, bool)`

GetPrimaryOk returns a tuple with the Primary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimary

`func (o *MachineIdentityOwnersV2) SetPrimary(v MachineIdentityOwnersV2Primary)`

SetPrimary sets Primary field to given value.

### HasPrimary

`func (o *MachineIdentityOwnersV2) HasPrimary() bool`

HasPrimary returns a boolean if a field has been set.

### GetSecondary

`func (o *MachineIdentityOwnersV2) GetSecondary() []BaseReferenceDto`

GetSecondary returns the Secondary field if non-nil, zero value otherwise.

### GetSecondaryOk

`func (o *MachineIdentityOwnersV2) GetSecondaryOk() (*[]BaseReferenceDto, bool)`

GetSecondaryOk returns a tuple with the Secondary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondary

`func (o *MachineIdentityOwnersV2) SetSecondary(v []BaseReferenceDto)`

SetSecondary sets Secondary field to given value.

### HasSecondary

`func (o *MachineIdentityOwnersV2) HasSecondary() bool`

HasSecondary returns a boolean if a field has been set.


