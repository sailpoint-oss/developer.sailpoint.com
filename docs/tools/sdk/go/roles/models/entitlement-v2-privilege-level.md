# EntitlementV2PrivilegeLevel

# EntitlementV2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Direct** | Pointer to **string** | Direct privilege level assigned to the entitlement | [optional] 
**SetBy** | Pointer to **string** | User or process that set the privilege level | [optional] 
**SetByType** | Pointer to **NullableString** | Method by which the privilege level was set | [optional] 
**Inherited** | Pointer to **NullableString** | Inherited privilege level on the entitlement, if any | [optional] 
**Effective** | Pointer to **string** | Effective privilege level assigned to the entitlement | [optional] 

## Methods

### NewEntitlementV2PrivilegeLevel

`func NewEntitlementV2PrivilegeLevel() *EntitlementV2PrivilegeLevel`

NewEntitlementV2PrivilegeLevel instantiates a new EntitlementV2PrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementV2PrivilegeLevelWithDefaults

`func NewEntitlementV2PrivilegeLevelWithDefaults() *EntitlementV2PrivilegeLevel`

NewEntitlementV2PrivilegeLevelWithDefaults instantiates a new EntitlementV2PrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDirect

`func (o *EntitlementV2PrivilegeLevel) GetDirect() string`

GetDirect returns the Direct field if non-nil, zero value otherwise.

### GetDirectOk

`func (o *EntitlementV2PrivilegeLevel) GetDirectOk() (*string, bool)`

GetDirectOk returns a tuple with the Direct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirect

`func (o *EntitlementV2PrivilegeLevel) SetDirect(v string)`

SetDirect sets Direct field to given value.

### HasDirect

`func (o *EntitlementV2PrivilegeLevel) HasDirect() bool`

HasDirect returns a boolean if a field has been set.

### GetSetBy

`func (o *EntitlementV2PrivilegeLevel) GetSetBy() string`

GetSetBy returns the SetBy field if non-nil, zero value otherwise.

### GetSetByOk

`func (o *EntitlementV2PrivilegeLevel) GetSetByOk() (*string, bool)`

GetSetByOk returns a tuple with the SetBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetBy

`func (o *EntitlementV2PrivilegeLevel) SetSetBy(v string)`

SetSetBy sets SetBy field to given value.

### HasSetBy

`func (o *EntitlementV2PrivilegeLevel) HasSetBy() bool`

HasSetBy returns a boolean if a field has been set.

### GetSetByType

`func (o *EntitlementV2PrivilegeLevel) GetSetByType() string`

GetSetByType returns the SetByType field if non-nil, zero value otherwise.

### GetSetByTypeOk

`func (o *EntitlementV2PrivilegeLevel) GetSetByTypeOk() (*string, bool)`

GetSetByTypeOk returns a tuple with the SetByType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetByType

`func (o *EntitlementV2PrivilegeLevel) SetSetByType(v string)`

SetSetByType sets SetByType field to given value.

### HasSetByType

`func (o *EntitlementV2PrivilegeLevel) HasSetByType() bool`

HasSetByType returns a boolean if a field has been set.

### SetSetByTypeNil

`func (o *EntitlementV2PrivilegeLevel) SetSetByTypeNil(b bool)`

 SetSetByTypeNil sets the value for SetByType to be an explicit nil

### UnsetSetByType
`func (o *EntitlementV2PrivilegeLevel) UnsetSetByType()`

UnsetSetByType ensures that no value is present for SetByType, not even an explicit nil
### GetInherited

`func (o *EntitlementV2PrivilegeLevel) GetInherited() string`

GetInherited returns the Inherited field if non-nil, zero value otherwise.

### GetInheritedOk

`func (o *EntitlementV2PrivilegeLevel) GetInheritedOk() (*string, bool)`

GetInheritedOk returns a tuple with the Inherited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInherited

`func (o *EntitlementV2PrivilegeLevel) SetInherited(v string)`

SetInherited sets Inherited field to given value.

### HasInherited

`func (o *EntitlementV2PrivilegeLevel) HasInherited() bool`

HasInherited returns a boolean if a field has been set.

### SetInheritedNil

`func (o *EntitlementV2PrivilegeLevel) SetInheritedNil(b bool)`

 SetInheritedNil sets the value for Inherited to be an explicit nil

### UnsetInherited
`func (o *EntitlementV2PrivilegeLevel) UnsetInherited()`

UnsetInherited ensures that no value is present for Inherited, not even an explicit nil
### GetEffective

`func (o *EntitlementV2PrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *EntitlementV2PrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *EntitlementV2PrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *EntitlementV2PrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


