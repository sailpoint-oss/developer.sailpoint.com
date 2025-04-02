---
id: workgroup-member-delete-item
title: WorkgroupMemberDeleteItem
pagination_label: WorkgroupMemberDeleteItem
sidebar_label: WorkgroupMemberDeleteItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'WorkgroupMemberDeleteItem', 'WorkgroupMemberDeleteItem'] 
slug: /tools/sdk/go//models/workgroup-member-delete-item
tags: ['SDK', 'Software Development Kit', 'WorkgroupMemberDeleteItem', 'WorkgroupMemberDeleteItem']
---

# WorkgroupMemberDeleteItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identifier of identity in bulk member add /remove request. | 
**Status** | **int32** | The HTTP response status code returned for an individual  member that is requested for deletion during a bulk delete operation.  > 204   - Identity is removed from Governance Group members list.  > 404   - Identity is not member of Governance Group.  | 
**Description** | Pointer to **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Methods

### NewWorkgroupMemberDeleteItem

`func NewWorkgroupMemberDeleteItem(id string, status int32, ) *WorkgroupMemberDeleteItem`

NewWorkgroupMemberDeleteItem instantiates a new WorkgroupMemberDeleteItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewWorkgroupMemberDeleteItemWithDefaults

`func NewWorkgroupMemberDeleteItemWithDefaults() *WorkgroupMemberDeleteItem`

NewWorkgroupMemberDeleteItemWithDefaults instantiates a new WorkgroupMemberDeleteItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *WorkgroupMemberDeleteItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *WorkgroupMemberDeleteItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *WorkgroupMemberDeleteItem) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *WorkgroupMemberDeleteItem) GetStatus() int32`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *WorkgroupMemberDeleteItem) GetStatusOk() (*int32, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *WorkgroupMemberDeleteItem) SetStatus(v int32)`

SetStatus sets Status field to given value.


### GetDescription

`func (o *WorkgroupMemberDeleteItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *WorkgroupMemberDeleteItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *WorkgroupMemberDeleteItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *WorkgroupMemberDeleteItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


