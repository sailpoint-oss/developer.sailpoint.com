# MCPConnectedAgentOwners

# MCPConnectedAgentOwners

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PrimaryIdentity** | Pointer to [**NullableBaseReferenceDto**](base-reference-dto) | Primary owner. | [optional] 
**SecondaryIdentities** | Pointer to [**[]BaseReferenceDto**](base-reference-dto) | Secondary owners. | [optional] 

## Methods

### NewMCPConnectedAgentOwners

`func NewMCPConnectedAgentOwners() *MCPConnectedAgentOwners`

NewMCPConnectedAgentOwners instantiates a new MCPConnectedAgentOwners object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMCPConnectedAgentOwnersWithDefaults

`func NewMCPConnectedAgentOwnersWithDefaults() *MCPConnectedAgentOwners`

NewMCPConnectedAgentOwnersWithDefaults instantiates a new MCPConnectedAgentOwners object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPrimaryIdentity

`func (o *MCPConnectedAgentOwners) GetPrimaryIdentity() BaseReferenceDto`

GetPrimaryIdentity returns the PrimaryIdentity field if non-nil, zero value otherwise.

### GetPrimaryIdentityOk

`func (o *MCPConnectedAgentOwners) GetPrimaryIdentityOk() (*BaseReferenceDto, bool)`

GetPrimaryIdentityOk returns a tuple with the PrimaryIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryIdentity

`func (o *MCPConnectedAgentOwners) SetPrimaryIdentity(v BaseReferenceDto)`

SetPrimaryIdentity sets PrimaryIdentity field to given value.

### HasPrimaryIdentity

`func (o *MCPConnectedAgentOwners) HasPrimaryIdentity() bool`

HasPrimaryIdentity returns a boolean if a field has been set.

### SetPrimaryIdentityNil

`func (o *MCPConnectedAgentOwners) SetPrimaryIdentityNil(b bool)`

 SetPrimaryIdentityNil sets the value for PrimaryIdentity to be an explicit nil

### UnsetPrimaryIdentity
`func (o *MCPConnectedAgentOwners) UnsetPrimaryIdentity()`

UnsetPrimaryIdentity ensures that no value is present for PrimaryIdentity, not even an explicit nil
### GetSecondaryIdentities

`func (o *MCPConnectedAgentOwners) GetSecondaryIdentities() []BaseReferenceDto`

GetSecondaryIdentities returns the SecondaryIdentities field if non-nil, zero value otherwise.

### GetSecondaryIdentitiesOk

`func (o *MCPConnectedAgentOwners) GetSecondaryIdentitiesOk() (*[]BaseReferenceDto, bool)`

GetSecondaryIdentitiesOk returns a tuple with the SecondaryIdentities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSecondaryIdentities

`func (o *MCPConnectedAgentOwners) SetSecondaryIdentities(v []BaseReferenceDto)`

SetSecondaryIdentities sets SecondaryIdentities field to given value.

### HasSecondaryIdentities

`func (o *MCPConnectedAgentOwners) HasSecondaryIdentities() bool`

HasSecondaryIdentities returns a boolean if a field has been set.


