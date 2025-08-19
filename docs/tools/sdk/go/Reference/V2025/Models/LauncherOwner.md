---
id: v2025-launcher-owner
title: LauncherOwner
pagination_label: LauncherOwner
sidebar_label: LauncherOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LauncherOwner', 'V2025LauncherOwner'] 
slug: /tools/sdk/go/v2025/models/launcher-owner
tags: ['SDK', 'Software Development Kit', 'LauncherOwner', 'V2025LauncherOwner']
---

# LauncherOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | Owner type | 
**Id** | **string** | Owner ID | 

## Methods

### NewLauncherOwner

`func NewLauncherOwner(type_ string, id string, ) *LauncherOwner`

NewLauncherOwner instantiates a new LauncherOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLauncherOwnerWithDefaults

`func NewLauncherOwnerWithDefaults() *LauncherOwner`

NewLauncherOwnerWithDefaults instantiates a new LauncherOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *LauncherOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *LauncherOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *LauncherOwner) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *LauncherOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LauncherOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LauncherOwner) SetId(v string)`

SetId sets Id field to given value.



