---
id: v2025-role-propagation-status-response-terminated-by
title: RolePropagationStatusResponseTerminatedBy
pagination_label: RolePropagationStatusResponseTerminatedBy
sidebar_label: RolePropagationStatusResponseTerminatedBy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RolePropagationStatusResponseTerminatedBy', 'V2025RolePropagationStatusResponseTerminatedBy'] 
slug: /tools/sdk/go/v2025/models/role-propagation-status-response-terminated-by
tags: ['SDK', 'Software Development Kit', 'RolePropagationStatusResponseTerminatedBy', 'V2025RolePropagationStatusResponseTerminatedBy']
---

# RolePropagationStatusResponseTerminatedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of the Identity who terminated the Role Propagation process. | [optional] 
**Id** | Pointer to **string** | ID of the Identity who terminated the Role Propagation process. | [optional] 
**Name** | Pointer to **string** | Name of the Identity who terminated the Role Propagation process. | [optional] 

## Methods

### NewRolePropagationStatusResponseTerminatedBy

`func NewRolePropagationStatusResponseTerminatedBy() *RolePropagationStatusResponseTerminatedBy`

NewRolePropagationStatusResponseTerminatedBy instantiates a new RolePropagationStatusResponseTerminatedBy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRolePropagationStatusResponseTerminatedByWithDefaults

`func NewRolePropagationStatusResponseTerminatedByWithDefaults() *RolePropagationStatusResponseTerminatedBy`

NewRolePropagationStatusResponseTerminatedByWithDefaults instantiates a new RolePropagationStatusResponseTerminatedBy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *RolePropagationStatusResponseTerminatedBy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *RolePropagationStatusResponseTerminatedBy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *RolePropagationStatusResponseTerminatedBy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *RolePropagationStatusResponseTerminatedBy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *RolePropagationStatusResponseTerminatedBy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RolePropagationStatusResponseTerminatedBy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RolePropagationStatusResponseTerminatedBy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RolePropagationStatusResponseTerminatedBy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *RolePropagationStatusResponseTerminatedBy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RolePropagationStatusResponseTerminatedBy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RolePropagationStatusResponseTerminatedBy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RolePropagationStatusResponseTerminatedBy) HasName() bool`

HasName returns a boolean if a field has been set.


