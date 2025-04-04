---
id: v2025-role-mining-entitlement-ref
title: RoleMiningEntitlementRef
pagination_label: RoleMiningEntitlementRef
sidebar_label: RoleMiningEntitlementRef
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningEntitlementRef', 'V2025RoleMiningEntitlementRef'] 
slug: /tools/sdk/go/v2025/models/role-mining-entitlement-ref
tags: ['SDK', 'Software Development Kit', 'RoleMiningEntitlementRef', 'V2025RoleMiningEntitlementRef']
---

# RoleMiningEntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the entitlement | [optional] 
**Name** | Pointer to **string** | Name of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Description forthe entitlement | [optional] 
**Attribute** | Pointer to **string** | The entitlement attribute | [optional] 

## Methods

### NewRoleMiningEntitlementRef

`func NewRoleMiningEntitlementRef() *RoleMiningEntitlementRef`

NewRoleMiningEntitlementRef instantiates a new RoleMiningEntitlementRef object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningEntitlementRefWithDefaults

`func NewRoleMiningEntitlementRefWithDefaults() *RoleMiningEntitlementRef`

NewRoleMiningEntitlementRefWithDefaults instantiates a new RoleMiningEntitlementRef object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleMiningEntitlementRef) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningEntitlementRef) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningEntitlementRef) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningEntitlementRef) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningEntitlementRef) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningEntitlementRef) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningEntitlementRef) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningEntitlementRef) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *RoleMiningEntitlementRef) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleMiningEntitlementRef) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleMiningEntitlementRef) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleMiningEntitlementRef) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleMiningEntitlementRef) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleMiningEntitlementRef) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttribute

`func (o *RoleMiningEntitlementRef) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleMiningEntitlementRef) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleMiningEntitlementRef) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RoleMiningEntitlementRef) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.


