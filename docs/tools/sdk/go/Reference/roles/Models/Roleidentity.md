---
id: v1-roleidentity
title: Roleidentity
pagination_label: Roleidentity
sidebar_label: Roleidentity
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleidentity', 'V1Roleidentity'] 
slug: /tools/sdk/go/roles/models/roleidentity
tags: ['SDK', 'Software Development Kit', 'Roleidentity', 'V1Roleidentity']
---

# Roleidentity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of the Identity | [optional] 
**AliasName** | Pointer to **string** | The alias / username of the Identity | [optional] 
**Name** | Pointer to **string** | The human-readable display name of the Identity | [optional] 
**Email** | Pointer to **string** | Email address of the Identity | [optional] 
**RoleAssignmentSource** | Pointer to [**Roleassignmentsourcetype**](roleassignmentsourcetype) |  | [optional] 

## Methods

### NewRoleidentity

`func NewRoleidentity() *Roleidentity`

NewRoleidentity instantiates a new Roleidentity object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleidentityWithDefaults

`func NewRoleidentityWithDefaults() *Roleidentity`

NewRoleidentityWithDefaults instantiates a new Roleidentity object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Roleidentity) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleidentity) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleidentity) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleidentity) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAliasName

`func (o *Roleidentity) GetAliasName() string`

GetAliasName returns the AliasName field if non-nil, zero value otherwise.

### GetAliasNameOk

`func (o *Roleidentity) GetAliasNameOk() (*string, bool)`

GetAliasNameOk returns a tuple with the AliasName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAliasName

`func (o *Roleidentity) SetAliasName(v string)`

SetAliasName sets AliasName field to given value.

### HasAliasName

`func (o *Roleidentity) HasAliasName() bool`

HasAliasName returns a boolean if a field has been set.

### GetName

`func (o *Roleidentity) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleidentity) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleidentity) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleidentity) HasName() bool`

HasName returns a boolean if a field has been set.

### GetEmail

`func (o *Roleidentity) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *Roleidentity) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *Roleidentity) SetEmail(v string)`

SetEmail sets Email field to given value.

### HasEmail

`func (o *Roleidentity) HasEmail() bool`

HasEmail returns a boolean if a field has been set.

### GetRoleAssignmentSource

`func (o *Roleidentity) GetRoleAssignmentSource() Roleassignmentsourcetype`

GetRoleAssignmentSource returns the RoleAssignmentSource field if non-nil, zero value otherwise.

### GetRoleAssignmentSourceOk

`func (o *Roleidentity) GetRoleAssignmentSourceOk() (*Roleassignmentsourcetype, bool)`

GetRoleAssignmentSourceOk returns a tuple with the RoleAssignmentSource field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoleAssignmentSource

`func (o *Roleidentity) SetRoleAssignmentSource(v Roleassignmentsourcetype)`

SetRoleAssignmentSource sets RoleAssignmentSource field to given value.

### HasRoleAssignmentSource

`func (o *Roleidentity) HasRoleAssignmentSource() bool`

HasRoleAssignmentSource returns a boolean if a field has been set.


