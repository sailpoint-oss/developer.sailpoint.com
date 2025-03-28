---
id: v2024-attr-sync-source
title: AttrSyncSource
pagination_label: AttrSyncSource
sidebar_label: AttrSyncSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttrSyncSource', 'V2024AttrSyncSource'] 
slug: /tools/sdk/go/v2024/models/attr-sync-source
tags: ['SDK', 'Software Development Kit', 'AttrSyncSource', 'V2024AttrSyncSource']
---

# AttrSyncSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | DTO type of target source for attribute synchronization. | [optional] 
**Id** | Pointer to **string** | ID of target source for attribute synchronization. | [optional] 
**Name** | Pointer to **NullableString** | Human-readable name of target source for attribute synchronization. | [optional] 

## Methods

### NewAttrSyncSource

`func NewAttrSyncSource() *AttrSyncSource`

NewAttrSyncSource instantiates a new AttrSyncSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttrSyncSourceWithDefaults

`func NewAttrSyncSourceWithDefaults() *AttrSyncSource`

NewAttrSyncSourceWithDefaults instantiates a new AttrSyncSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *AttrSyncSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *AttrSyncSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *AttrSyncSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *AttrSyncSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *AttrSyncSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AttrSyncSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AttrSyncSource) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AttrSyncSource) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *AttrSyncSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttrSyncSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttrSyncSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *AttrSyncSource) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AttrSyncSource) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AttrSyncSource) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil

