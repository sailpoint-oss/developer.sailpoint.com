# AccessProfilePrivilegeLevel

# AccessProfilePrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** | Pointer to **string** | Effective privilege level of the access profile, derived from the highest privilege level of the entitlements it contains. `UNDETERMINED` indicates the level could not be calculated. | [optional] 

## Methods

### NewAccessProfilePrivilegeLevel

`func NewAccessProfilePrivilegeLevel() *AccessProfilePrivilegeLevel`

NewAccessProfilePrivilegeLevel instantiates a new AccessProfilePrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfilePrivilegeLevelWithDefaults

`func NewAccessProfilePrivilegeLevelWithDefaults() *AccessProfilePrivilegeLevel`

NewAccessProfilePrivilegeLevelWithDefaults instantiates a new AccessProfilePrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffective

`func (o *AccessProfilePrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *AccessProfilePrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *AccessProfilePrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *AccessProfilePrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


