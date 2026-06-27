---
id: v1-roleassignmentdto-assigner
title: RoleassignmentdtoAssigner
pagination_label: RoleassignmentdtoAssigner
sidebar_label: RoleassignmentdtoAssigner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleassignmentdtoAssigner', 'V1RoleassignmentdtoAssigner'] 
slug: /tools/sdk/go/identities/models/roleassignmentdto-assigner
tags: ['SDK', 'Software Development Kit', 'RoleassignmentdtoAssigner', 'V1RoleassignmentdtoAssigner']
---

# RoleassignmentdtoAssigner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Object type | [optional] 
**Id** | Pointer to **string** | ID of the object to which this reference applies | [optional] 
**Name** | Pointer to **NullableString** | Human-readable display name of the object to which this reference applies | [optional] 

## Methods

### NewRoleassignmentdtoAssigner

`func NewRoleassignmentdtoAssigner() *RoleassignmentdtoAssigner`

NewRoleassignmentdtoAssigner instantiates a new RoleassignmentdtoAssigner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleassignmentdtoAssignerWithDefaults

`func NewRoleassignmentdtoAssignerWithDefaults() *RoleassignmentdtoAssigner`

NewRoleassignmentdtoAssignerWithDefaults instantiates a new RoleassignmentdtoAssigner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RoleassignmentdtoAssigner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RoleassignmentdtoAssigner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RoleassignmentdtoAssigner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RoleassignmentdtoAssigner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RoleassignmentdtoAssigner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleassignmentdtoAssigner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleassignmentdtoAssigner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleassignmentdtoAssigner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RoleassignmentdtoAssigner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleassignmentdtoAssigner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleassignmentdtoAssigner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleassignmentdtoAssigner) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *RoleassignmentdtoAssigner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *RoleassignmentdtoAssigner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

