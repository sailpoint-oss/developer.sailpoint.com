---
id: v1-entitlementv2-privilege-level
title: Entitlementv2PrivilegeLevel
pagination_label: Entitlementv2PrivilegeLevel
sidebar_label: Entitlementv2PrivilegeLevel
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementv2PrivilegeLevel', 'V1Entitlementv2PrivilegeLevel'] 
slug: /tools/sdk/go/entitlements/models/entitlementv2-privilege-level
tags: ['SDK', 'Software Development Kit', 'Entitlementv2PrivilegeLevel', 'V1Entitlementv2PrivilegeLevel']
---

# Entitlementv2PrivilegeLevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Direct** | Pointer to **string** | Direct privilege level assigned to the entitlement | [optional] 
**SetBy** | Pointer to **string** | User or process that set the privilege level | [optional] 
**SetByType** | Pointer to **NullableString** | Method by which the privilege level was set | [optional] 
**Inherited** | Pointer to **NullableString** | Inherited privilege level on the entitlement, if any | [optional] 
**Effective** | Pointer to **string** | Effective privilege level assigned to the entitlement | [optional] 

## Methods

### NewEntitlementv2PrivilegeLevel

`func NewEntitlementv2PrivilegeLevel() *Entitlementv2PrivilegeLevel`

NewEntitlementv2PrivilegeLevel instantiates a new Entitlementv2PrivilegeLevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementv2PrivilegeLevelWithDefaults

`func NewEntitlementv2PrivilegeLevelWithDefaults() *Entitlementv2PrivilegeLevel`

NewEntitlementv2PrivilegeLevelWithDefaults instantiates a new Entitlementv2PrivilegeLevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDirect

`func (o *Entitlementv2PrivilegeLevel) GetDirect() string`

GetDirect returns the Direct field if non-nil, zero value otherwise.

### GetDirectOk

`func (o *Entitlementv2PrivilegeLevel) GetDirectOk() (*string, bool)`

GetDirectOk returns a tuple with the Direct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirect

`func (o *Entitlementv2PrivilegeLevel) SetDirect(v string)`

SetDirect sets Direct field to given value.

### HasDirect

`func (o *Entitlementv2PrivilegeLevel) HasDirect() bool`

HasDirect returns a boolean if a field has been set.

### GetSetBy

`func (o *Entitlementv2PrivilegeLevel) GetSetBy() string`

GetSetBy returns the SetBy field if non-nil, zero value otherwise.

### GetSetByOk

`func (o *Entitlementv2PrivilegeLevel) GetSetByOk() (*string, bool)`

GetSetByOk returns a tuple with the SetBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetBy

`func (o *Entitlementv2PrivilegeLevel) SetSetBy(v string)`

SetSetBy sets SetBy field to given value.

### HasSetBy

`func (o *Entitlementv2PrivilegeLevel) HasSetBy() bool`

HasSetBy returns a boolean if a field has been set.

### GetSetByType

`func (o *Entitlementv2PrivilegeLevel) GetSetByType() string`

GetSetByType returns the SetByType field if non-nil, zero value otherwise.

### GetSetByTypeOk

`func (o *Entitlementv2PrivilegeLevel) GetSetByTypeOk() (*string, bool)`

GetSetByTypeOk returns a tuple with the SetByType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetByType

`func (o *Entitlementv2PrivilegeLevel) SetSetByType(v string)`

SetSetByType sets SetByType field to given value.

### HasSetByType

`func (o *Entitlementv2PrivilegeLevel) HasSetByType() bool`

HasSetByType returns a boolean if a field has been set.

### SetSetByTypeNil

`func (o *Entitlementv2PrivilegeLevel) SetSetByTypeNil(b bool)`

 SetSetByTypeNil sets the value for SetByType to be an explicit nil

### UnsetSetByType
`func (o *Entitlementv2PrivilegeLevel) UnsetSetByType()`

UnsetSetByType ensures that no value is present for SetByType, not even an explicit nil
### GetInherited

`func (o *Entitlementv2PrivilegeLevel) GetInherited() string`

GetInherited returns the Inherited field if non-nil, zero value otherwise.

### GetInheritedOk

`func (o *Entitlementv2PrivilegeLevel) GetInheritedOk() (*string, bool)`

GetInheritedOk returns a tuple with the Inherited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInherited

`func (o *Entitlementv2PrivilegeLevel) SetInherited(v string)`

SetInherited sets Inherited field to given value.

### HasInherited

`func (o *Entitlementv2PrivilegeLevel) HasInherited() bool`

HasInherited returns a boolean if a field has been set.

### SetInheritedNil

`func (o *Entitlementv2PrivilegeLevel) SetInheritedNil(b bool)`

 SetInheritedNil sets the value for Inherited to be an explicit nil

### UnsetInherited
`func (o *Entitlementv2PrivilegeLevel) UnsetInherited()`

UnsetInherited ensures that no value is present for Inherited, not even an explicit nil
### GetEffective

`func (o *Entitlementv2PrivilegeLevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *Entitlementv2PrivilegeLevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *Entitlementv2PrivilegeLevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *Entitlementv2PrivilegeLevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


