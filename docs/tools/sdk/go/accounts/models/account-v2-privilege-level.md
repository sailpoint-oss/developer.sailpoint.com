# AccountV2PrivilegeLevel

# AccountV2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** | Pointer to **NullableString** | The effective privilege level of the account. | [optional] 

## Methods

### NewAccountV2PrivilegeLevel

`func NewAccountV2PrivilegeLevel() *AccountV2PrivilegeLevel`

NewAccountV2PrivilegeLevel instantiates a new AccountV2PrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccountV2PrivilegeLevelWithDefaults

`func NewAccountV2PrivilegeLevelWithDefaults() *AccountV2PrivilegeLevel`

NewAccountV2PrivilegeLevelWithDefaults instantiates a new AccountV2PrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffective

`func (o *AccountV2PrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *AccountV2PrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *AccountV2PrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *AccountV2PrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.

### SetEffectiveNil

`func (o *AccountV2PrivilegeLevel) SetEffectiveNil(b bool)`

 SetEffectiveNil sets the value for Effective to be an explicit nil

### UnsetEffective
`func (o *AccountV2PrivilegeLevel) UnsetEffective()`

UnsetEffective ensures that no value is present for Effective, not even an explicit nil

