---
id: source-app-create-dto-account-source
title: SourceAppCreateDtoAccountSource
pagination_label: SourceAppCreateDtoAccountSource
sidebar_label: SourceAppCreateDtoAccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceAppCreateDtoAccountSource', 'SourceAppCreateDtoAccountSource'] 
slug: /tools/sdk/go//models/source-app-create-dto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceAppCreateDtoAccountSource', 'SourceAppCreateDtoAccountSource']
---

# SourceAppCreateDtoAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The source ID | 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 

## Methods

### NewSourceAppCreateDtoAccountSource

`func NewSourceAppCreateDtoAccountSource(id string, ) *SourceAppCreateDtoAccountSource`

NewSourceAppCreateDtoAccountSource instantiates a new SourceAppCreateDtoAccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceAppCreateDtoAccountSourceWithDefaults

`func NewSourceAppCreateDtoAccountSourceWithDefaults() *SourceAppCreateDtoAccountSource`

NewSourceAppCreateDtoAccountSourceWithDefaults instantiates a new SourceAppCreateDtoAccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceAppCreateDtoAccountSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceAppCreateDtoAccountSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceAppCreateDtoAccountSource) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *SourceAppCreateDtoAccountSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceAppCreateDtoAccountSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceAppCreateDtoAccountSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceAppCreateDtoAccountSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *SourceAppCreateDtoAccountSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceAppCreateDtoAccountSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceAppCreateDtoAccountSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceAppCreateDtoAccountSource) HasName() bool`

HasName returns a boolean if a field has been set.


