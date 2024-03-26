---
id: role-identity
title: RoleIdentity
pagination_label: RoleIdentity
sidebar_label: RoleIdentity
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleIdentity'] 
slug: /tools/sdk/go/v3/models/role-identity
tags: ['SDK', 'Software Development Kit', 'RoleIdentity']
---

# RoleIdentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **string** | The ID of the Identity | [optional] 
**AliasName** |  Pointer to **string** | The alias / username of the Identity | [optional] 
**Name** |  Pointer to **string** | The human-readable display name of the Identity | [optional] 
**Email** |  Pointer to **string** | Email address of the Identity | [optional] 
**RoleAssignmentSource** |  Pointer to [**RoleAssignmentSourceType**](role-assignment-source-type) |  | [optional] 

## Methods

### NewRoleIdentity

`func NewRoleIdentity() *RoleIdentity`

NewRoleIdentity instantiates a new RoleIdentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleIdentityWithDefaults

`func NewRoleIdentityWithDefaults() *RoleIdentity`

NewRoleIdentityWithDefaults instantiates a new RoleIdentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *RoleIdentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleIdentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleIdentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleIdentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAliasName

`func (o *RoleIdentity) GetAliasName() string`

GetAliasName returns the AliasName field if non-nil, zero value otherwise.

### GetAliasNameOk

`func (o *RoleIdentity) GetAliasNameOk() (*string, bool)`

GetAliasNameOk returns a tuple with the AliasName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasName

`func (o *RoleIdentity) SetAliasName(v string)`

SetAliasName sets AliasName field to given value.

### HasAliasName

`func (o *RoleIdentity) HasAliasName() bool`

HasAliasName returns a boolean if a field has been set.

### GetName

`func (o *RoleIdentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleIdentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleIdentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleIdentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *RoleIdentity) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *RoleIdentity) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *RoleIdentity) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *RoleIdentity) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetRoleAssignmentSource

`func (o *RoleIdentity) GetRoleAssignmentSource() RoleAssignmentSourceType`

GetRoleAssignmentSource returns the RoleAssignmentSource field if non-nil, zero value otherwise.

### GetRoleAssignmentSourceOk

`func (o *RoleIdentity) GetRoleAssignmentSourceOk() (*RoleAssignmentSourceType, bool)`

GetRoleAssignmentSourceOk returns a tuple with the RoleAssignmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleAssignmentSource

`func (o *RoleIdentity) SetRoleAssignmentSource(v RoleAssignmentSourceType)`

SetRoleAssignmentSource sets RoleAssignmentSource field to given value.

### HasRoleAssignmentSource

`func (o *RoleIdentity) HasRoleAssignmentSource() bool`

HasRoleAssignmentSource returns a boolean if a field has been set.


[[Back to top]](#) 


