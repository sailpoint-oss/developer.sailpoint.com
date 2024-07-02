---
id: role-membership-identity
title: RoleMembershipIdentity
pagination_label: RoleMembershipIdentity
sidebar_label: RoleMembershipIdentity
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleMembershipIdentity'] 
slug: /tools/sdk/go/beta/models/role-membership-identity
tags: ['SDK', 'Software Development Kit', 'RoleMembershipIdentity']
---

# RoleMembershipIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** |  Pointer to **string** | Identity id | [optional] 
**Name** |  Pointer to **NullableString** | Human-readable display name of the Identity. | [optional] 
**AliasName** |  Pointer to **NullableString** | User name of the Identity | [optional] 

## Methods

### NewRoleMembershipIdentity

`func NewRoleMembershipIdentity() *RoleMembershipIdentity`

NewRoleMembershipIdentity instantiates a new RoleMembershipIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMembershipIdentityWithDefaults

`func NewRoleMembershipIdentityWithDefaults() *RoleMembershipIdentity`

NewRoleMembershipIdentityWithDefaults instantiates a new RoleMembershipIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RoleMembershipIdentity) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleMembershipIdentity) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleMembershipIdentity) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *RoleMembershipIdentity) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RoleMembershipIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleMembershipIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleMembershipIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleMembershipIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleMembershipIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleMembershipIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleMembershipIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleMembershipIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RoleMembershipIdentity) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RoleMembershipIdentity) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetAliasName

`func (o *RoleMembershipIdentity) GetAliasName() string`

GetAliasName returns the AliasName field if non-nil, zero value otherwise.

### GetAliasNameOk

`func (o *RoleMembershipIdentity) GetAliasNameOk() (*string, bool)`

GetAliasNameOk returns a tuple with the AliasName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasName

`func (o *RoleMembershipIdentity) SetAliasName(v string)`

SetAliasName sets AliasName field to given value.

### HasAliasName

`func (o *RoleMembershipIdentity) HasAliasName() bool`

HasAliasName returns a boolean if a field has been set.

### SetAliasNameNil

`func (o *RoleMembershipIdentity) SetAliasNameNil(b bool)`

 SetAliasNameNil sets the value for AliasName to be an explicit nil

### UnsetAliasName
`func (o *RoleMembershipIdentity) UnsetAliasName()`

UnsetAliasName ensures that no value is present for AliasName, not even an explicit nil

[[Back to top]](#) 


