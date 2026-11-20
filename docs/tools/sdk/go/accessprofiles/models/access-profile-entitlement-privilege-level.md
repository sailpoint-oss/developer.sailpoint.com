# AccessProfileEntitlementPrivilegeLevel

# AccessProfileEntitlementPrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Direct** | Pointer to **string** | Direct privilege level assigned to the entitlement | [optional] 
**SetBy** | Pointer to **string** | User or process that set the privilege level | [optional] 
**SetByType** | Pointer to **NullableString** | Method by which the privilege level was set | [optional] 
**Inherited** | Pointer to **NullableString** | Inherited privilege level on the entitlement, if any | [optional] 
**Effective** | Pointer to **string** | Effective privilege level assigned to the entitlement | [optional] 

## Methods

### NewAccessProfileEntitlementPrivilegeLevel

`func NewAccessProfileEntitlementPrivilegeLevel() *AccessProfileEntitlementPrivilegeLevel`

NewAccessProfileEntitlementPrivilegeLevel instantiates a new AccessProfileEntitlementPrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileEntitlementPrivilegeLevelWithDefaults

`func NewAccessProfileEntitlementPrivilegeLevelWithDefaults() *AccessProfileEntitlementPrivilegeLevel`

NewAccessProfileEntitlementPrivilegeLevelWithDefaults instantiates a new AccessProfileEntitlementPrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDirect

`func (o *AccessProfileEntitlementPrivilegeLevel) GetDirect() string`

GetDirect returns the Direct field if non-nil, zero value otherwise.

### GetDirectOk

`func (o *AccessProfileEntitlementPrivilegeLevel) GetDirectOk() (*string, bool)`

GetDirectOk returns a tuple with the Direct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirect

`func (o *AccessProfileEntitlementPrivilegeLevel) SetDirect(v string)`

SetDirect sets Direct field to given value.

### HasDirect

`func (o *AccessProfileEntitlementPrivilegeLevel) HasDirect() bool`

HasDirect returns a boolean if a field has been set.

### GetSetBy

`func (o *AccessProfileEntitlementPrivilegeLevel) GetSetBy() string`

GetSetBy returns the SetBy field if non-nil, zero value otherwise.

### GetSetByOk

`func (o *AccessProfileEntitlementPrivilegeLevel) GetSetByOk() (*string, bool)`

GetSetByOk returns a tuple with the SetBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetBy

`func (o *AccessProfileEntitlementPrivilegeLevel) SetSetBy(v string)`

SetSetBy sets SetBy field to given value.

### HasSetBy

`func (o *AccessProfileEntitlementPrivilegeLevel) HasSetBy() bool`

HasSetBy returns a boolean if a field has been set.

### GetSetByType

`func (o *AccessProfileEntitlementPrivilegeLevel) GetSetByType() string`

GetSetByType returns the SetByType field if non-nil, zero value otherwise.

### GetSetByTypeOk

`func (o *AccessProfileEntitlementPrivilegeLevel) GetSetByTypeOk() (*string, bool)`

GetSetByTypeOk returns a tuple with the SetByType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetByType

`func (o *AccessProfileEntitlementPrivilegeLevel) SetSetByType(v string)`

SetSetByType sets SetByType field to given value.

### HasSetByType

`func (o *AccessProfileEntitlementPrivilegeLevel) HasSetByType() bool`

HasSetByType returns a boolean if a field has been set.

### SetSetByTypeNil

`func (o *AccessProfileEntitlementPrivilegeLevel) SetSetByTypeNil(b bool)`

 SetSetByTypeNil sets the value for SetByType to be an explicit nil

### UnsetSetByType
`func (o *AccessProfileEntitlementPrivilegeLevel) UnsetSetByType()`

UnsetSetByType ensures that no value is present for SetByType, not even an explicit nil
### GetInherited

`func (o *AccessProfileEntitlementPrivilegeLevel) GetInherited() string`

GetInherited returns the Inherited field if non-nil, zero value otherwise.

### GetInheritedOk

`func (o *AccessProfileEntitlementPrivilegeLevel) GetInheritedOk() (*string, bool)`

GetInheritedOk returns a tuple with the Inherited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInherited

`func (o *AccessProfileEntitlementPrivilegeLevel) SetInherited(v string)`

SetInherited sets Inherited field to given value.

### HasInherited

`func (o *AccessProfileEntitlementPrivilegeLevel) HasInherited() bool`

HasInherited returns a boolean if a field has been set.

### SetInheritedNil

`func (o *AccessProfileEntitlementPrivilegeLevel) SetInheritedNil(b bool)`

 SetInheritedNil sets the value for Inherited to be an explicit nil

### UnsetInherited
`func (o *AccessProfileEntitlementPrivilegeLevel) UnsetInherited()`

UnsetInherited ensures that no value is present for Inherited, not even an explicit nil
### GetEffective

`func (o *AccessProfileEntitlementPrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *AccessProfileEntitlementPrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *AccessProfileEntitlementPrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *AccessProfileEntitlementPrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


