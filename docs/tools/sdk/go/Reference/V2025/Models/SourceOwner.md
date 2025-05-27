---
id: v2025-source-owner
title: SourceOwner
pagination_label: SourceOwner
sidebar_label: SourceOwner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceOwner', 'V2025SourceOwner'] 
slug: /tools/sdk/go/v2025/models/source-owner
tags: ['SDK', 'Software Development Kit', 'SourceOwner', 'V2025SourceOwner']
---

# SourceOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Type of object being referenced. | [optional] 
**Id** | Pointer to **string** | Owner identity's ID. | [optional] 
**Name** | Pointer to **string** | Owner identity's human-readable display name. | [optional] 

## Methods

### NewSourceOwner

`func NewSourceOwner() *SourceOwner`

NewSourceOwner instantiates a new SourceOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceOwnerWithDefaults

`func NewSourceOwnerWithDefaults() *SourceOwner`

NewSourceOwnerWithDefaults instantiates a new SourceOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceOwner) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceOwner) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceOwner) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceOwner) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *SourceOwner) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceOwner) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceOwner) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceOwner) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceOwner) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceOwner) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceOwner) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceOwner) HasName() bool`

HasName returns a boolean if a field has been set.


