---
id: v2025-role-mining-identity
title: RoleMiningIdentity
pagination_label: RoleMiningIdentity
sidebar_label: RoleMiningIdentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningIdentity', 'V2025RoleMiningIdentity'] 
slug: /tools/sdk/go/v2025/models/role-mining-identity
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentity', 'V2025RoleMiningIdentity']
---

# RoleMiningIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Id of the identity | [optional] 
**Name** | Pointer to **string** | Name of the identity | [optional] 
**Attributes** | Pointer to **map[string]string** |  | [optional] 

## Methods

### NewRoleMiningIdentity

`func NewRoleMiningIdentity() *RoleMiningIdentity`

NewRoleMiningIdentity instantiates a new RoleMiningIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningIdentityWithDefaults

`func NewRoleMiningIdentityWithDefaults() *RoleMiningIdentity`

NewRoleMiningIdentityWithDefaults instantiates a new RoleMiningIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleMiningIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMiningIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMiningIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMiningIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleMiningIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMiningIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMiningIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMiningIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetAttributes

`func (o *RoleMiningIdentity) GetAttributes() map[string]string`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *RoleMiningIdentity) GetAttributesOk() (*map[string]string, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *RoleMiningIdentity) SetAttributes(v map[string]string)`

SetAttributes sets Attributes field to given value.

### HasAttributes

`func (o *RoleMiningIdentity) HasAttributes() bool`

HasAttributes returns a boolean if a field has been set.


