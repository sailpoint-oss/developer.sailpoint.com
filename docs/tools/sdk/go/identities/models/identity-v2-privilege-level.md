# IdentityV2PrivilegeLevel

# IdentityV2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** | Pointer to **NullableString** | The effective privilege level of the identity. Returned values are uppercase. Filter and sort comparisons are case-insensitive. An identity with no privilege level is NONE. | [optional] 

## Methods

### NewIdentityV2PrivilegeLevel

`func NewIdentityV2PrivilegeLevel() *IdentityV2PrivilegeLevel`

NewIdentityV2PrivilegeLevel instantiates a new IdentityV2PrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityV2PrivilegeLevelWithDefaults

`func NewIdentityV2PrivilegeLevelWithDefaults() *IdentityV2PrivilegeLevel`

NewIdentityV2PrivilegeLevelWithDefaults instantiates a new IdentityV2PrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffective

`func (o *IdentityV2PrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *IdentityV2PrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *IdentityV2PrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *IdentityV2PrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.

### SetEffectiveNil

`func (o *IdentityV2PrivilegeLevel) SetEffectiveNil(b bool)`

 SetEffectiveNil sets the value for Effective to be an explicit nil

### UnsetEffective
`func (o *IdentityV2PrivilegeLevel) UnsetEffective()`

UnsetEffective ensures that no value is present for Effective, not even an explicit nil

