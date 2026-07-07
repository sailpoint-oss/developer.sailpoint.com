---
id: v1-entitlementprivilegelevel
title: Entitlementprivilegelevel
pagination_label: Entitlementprivilegelevel
sidebar_label: Entitlementprivilegelevel
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementprivilegelevel', 'V1Entitlementprivilegelevel'] 
slug: /tools/sdk/go/entitlements/models/entitlementprivilegelevel
tags: ['SDK', 'Software Development Kit', 'Entitlementprivilegelevel', 'V1Entitlementprivilegelevel']
---

# Entitlementprivilegelevel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Direct** | Pointer to **string** | Direct privilege level assigned to the entitlement | [optional] 
**SetBy** | Pointer to **string** | User or process that set the privilege level | [optional] 
**SetByType** | Pointer to **NullableString** | Method by which the privilege level was set | [optional] 
**Inherited** | Pointer to **NullableString** | Inherited privilege level on the entitlement, if any | [optional] 
**Effective** | Pointer to **string** | Effective privilege level assigned to the entitlement | [optional] 

## Methods

### NewEntitlementprivilegelevel

`func NewEntitlementprivilegelevel() *Entitlementprivilegelevel`

NewEntitlementprivilegelevel instantiates a new Entitlementprivilegelevel object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementprivilegelevelWithDefaults

`func NewEntitlementprivilegelevelWithDefaults() *Entitlementprivilegelevel`

NewEntitlementprivilegelevelWithDefaults instantiates a new Entitlementprivilegelevel object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDirect

`func (o *Entitlementprivilegelevel) GetDirect() string`

GetDirect returns the Direct field if non-nil, zero value otherwise.

### GetDirectOk

`func (o *Entitlementprivilegelevel) GetDirectOk() (*string, bool)`

GetDirectOk returns a tuple with the Direct field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDirect

`func (o *Entitlementprivilegelevel) SetDirect(v string)`

SetDirect sets Direct field to given value.

### HasDirect

`func (o *Entitlementprivilegelevel) HasDirect() bool`

HasDirect returns a boolean if a field has been set.

### GetSetBy

`func (o *Entitlementprivilegelevel) GetSetBy() string`

GetSetBy returns the SetBy field if non-nil, zero value otherwise.

### GetSetByOk

`func (o *Entitlementprivilegelevel) GetSetByOk() (*string, bool)`

GetSetByOk returns a tuple with the SetBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetBy

`func (o *Entitlementprivilegelevel) SetSetBy(v string)`

SetSetBy sets SetBy field to given value.

### HasSetBy

`func (o *Entitlementprivilegelevel) HasSetBy() bool`

HasSetBy returns a boolean if a field has been set.

### GetSetByType

`func (o *Entitlementprivilegelevel) GetSetByType() string`

GetSetByType returns the SetByType field if non-nil, zero value otherwise.

### GetSetByTypeOk

`func (o *Entitlementprivilegelevel) GetSetByTypeOk() (*string, bool)`

GetSetByTypeOk returns a tuple with the SetByType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSetByType

`func (o *Entitlementprivilegelevel) SetSetByType(v string)`

SetSetByType sets SetByType field to given value.

### HasSetByType

`func (o *Entitlementprivilegelevel) HasSetByType() bool`

HasSetByType returns a boolean if a field has been set.

### SetSetByTypeNil

`func (o *Entitlementprivilegelevel) SetSetByTypeNil(b bool)`

 SetSetByTypeNil sets the value for SetByType to be an explicit nil

### UnsetSetByType
`func (o *Entitlementprivilegelevel) UnsetSetByType()`

UnsetSetByType ensures that no value is present for SetByType, not even an explicit nil
### GetInherited

`func (o *Entitlementprivilegelevel) GetInherited() string`

GetInherited returns the Inherited field if non-nil, zero value otherwise.

### GetInheritedOk

`func (o *Entitlementprivilegelevel) GetInheritedOk() (*string, bool)`

GetInheritedOk returns a tuple with the Inherited field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInherited

`func (o *Entitlementprivilegelevel) SetInherited(v string)`

SetInherited sets Inherited field to given value.

### HasInherited

`func (o *Entitlementprivilegelevel) HasInherited() bool`

HasInherited returns a boolean if a field has been set.

### SetInheritedNil

`func (o *Entitlementprivilegelevel) SetInheritedNil(b bool)`

 SetInheritedNil sets the value for Inherited to be an explicit nil

### UnsetInherited
`func (o *Entitlementprivilegelevel) UnsetInherited()`

UnsetInherited ensures that no value is present for Inherited, not even an explicit nil
### GetEffective

`func (o *Entitlementprivilegelevel) GetEffective() string`

GetEffective returns the Effective field if non-nil, zero value otherwise.

### GetEffectiveOk

`func (o *Entitlementprivilegelevel) GetEffectiveOk() (*string, bool)`

GetEffectiveOk returns a tuple with the Effective field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEffective

`func (o *Entitlementprivilegelevel) SetEffective(v string)`

SetEffective sets Effective field to given value.

### HasEffective

`func (o *Entitlementprivilegelevel) HasEffective() bool`

HasEffective returns a boolean if a field has been set.


