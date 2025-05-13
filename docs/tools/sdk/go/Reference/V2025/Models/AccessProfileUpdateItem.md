---
id: v2025-access-profile-update-item
title: AccessProfileUpdateItem
pagination_label: AccessProfileUpdateItem
sidebar_label: AccessProfileUpdateItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessProfileUpdateItem', 'V2025AccessProfileUpdateItem'] 
slug: /tools/sdk/go/v2025/models/access-profile-update-item
tags: ['SDK', 'Software Development Kit', 'AccessProfileUpdateItem', 'V2025AccessProfileUpdateItem']
---

# AccessProfileUpdateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Identifier of Access Profile in bulk update request. | 
**Requestable** | **bool** | Access Profile requestable or not. | 
**Status** | **string** |  The HTTP response status code returned for an individual Access Profile that is requested for update during a bulk update operation.  > 201   - Access profile is updated successfully.  > 404   - Access profile not found.  | 
**Description** | Pointer to **string** | Human readable status description and containing additional context information about success or failures etc.  | [optional] 

## Methods

### NewAccessProfileUpdateItem

`func NewAccessProfileUpdateItem(id string, requestable bool, status string, ) *AccessProfileUpdateItem`

NewAccessProfileUpdateItem instantiates a new AccessProfileUpdateItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessProfileUpdateItemWithDefaults

`func NewAccessProfileUpdateItemWithDefaults() *AccessProfileUpdateItem`

NewAccessProfileUpdateItemWithDefaults instantiates a new AccessProfileUpdateItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *AccessProfileUpdateItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessProfileUpdateItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessProfileUpdateItem) SetId(v string)`

SetId sets Id field to given value.


### GetRequestable

`func (o *AccessProfileUpdateItem) GetRequestable() bool`

GetRequestable returns the Requestable field if non-nil, zero value otherwise.

### GetRequestableOk

`func (o *AccessProfileUpdateItem) GetRequestableOk() (*bool, bool)`

GetRequestableOk returns a tuple with the Requestable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestable

`func (o *AccessProfileUpdateItem) SetRequestable(v bool)`

SetRequestable sets Requestable field to given value.


### GetStatus

`func (o *AccessProfileUpdateItem) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AccessProfileUpdateItem) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AccessProfileUpdateItem) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetDescription

`func (o *AccessProfileUpdateItem) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *AccessProfileUpdateItem) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *AccessProfileUpdateItem) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *AccessProfileUpdateItem) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


