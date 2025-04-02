---
id: role-assignment-dto-assigner
title: RoleAssignmentDtoAssigner
pagination_label: RoleAssignmentDtoAssigner
sidebar_label: RoleAssignmentDtoAssigner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleAssignmentDtoAssigner', 'RoleAssignmentDtoAssigner'] 
slug: /tools/sdk/go//models/role-assignment-dto-assigner
tags: ['SDK', 'Software Development Kit', 'RoleAssignmentDtoAssigner', 'RoleAssignmentDtoAssigner']
---

# RoleAssignmentDtoAssigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Object type | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewRoleAssignmentDtoAssigner

`func NewRoleAssignmentDtoAssigner() *RoleAssignmentDtoAssigner`

NewRoleAssignmentDtoAssigner instantiates a new RoleAssignmentDtoAssigner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleAssignmentDtoAssignerWithDefaults

`func NewRoleAssignmentDtoAssignerWithDefaults() *RoleAssignmentDtoAssigner`

NewRoleAssignmentDtoAssignerWithDefaults instantiates a new RoleAssignmentDtoAssigner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RoleAssignmentDtoAssigner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleAssignmentDtoAssigner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleAssignmentDtoAssigner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoleAssignmentDtoAssigner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RoleAssignmentDtoAssigner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleAssignmentDtoAssigner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleAssignmentDtoAssigner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleAssignmentDtoAssigner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleAssignmentDtoAssigner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleAssignmentDtoAssigner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleAssignmentDtoAssigner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleAssignmentDtoAssigner) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RoleAssignmentDtoAssigner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RoleAssignmentDtoAssigner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

