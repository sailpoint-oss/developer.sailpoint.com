# RolePrivilegeLevel

# RolePrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Effective** | Pointer to **string** | Effective privilege level of the role. **UNDETERMINED** means the privilege level could not be calculated for the role's entitlements. | [optional] 

## Methods

### NewRolePrivilegeLevel

`func NewRolePrivilegeLevel() *RolePrivilegeLevel`

NewRolePrivilegeLevel instantiates a new RolePrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolePrivilegeLevelWithDefaults

`func NewRolePrivilegeLevelWithDefaults() *RolePrivilegeLevel`

NewRolePrivilegeLevelWithDefaults instantiates a new RolePrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEffective

`func (o *RolePrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *RolePrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *RolePrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *RolePrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


