---
id: v1-sourceappcreatedto-account-source
title: SourceappcreatedtoAccountSource
pagination_label: SourceappcreatedtoAccountSource
sidebar_label: SourceappcreatedtoAccountSource
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceappcreatedtoAccountSource', 'V1SourceappcreatedtoAccountSource'] 
slug: /tools/sdk/go/apps/models/sourceappcreatedto-account-source
tags: ['SDK', 'Software Development Kit', 'SourceappcreatedtoAccountSource', 'V1SourceappcreatedtoAccountSource']
---

# SourceappcreatedtoAccountSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The source ID | 
**Type** | Pointer to **string** | The source type, will always be \"SOURCE\" | [optional] 
**Name** | Pointer to **string** | The source name | [optional] 

## Methods

### NewSourceappcreatedtoAccountSource

`func NewSourceappcreatedtoAccountSource(id string, ) *SourceappcreatedtoAccountSource`

NewSourceappcreatedtoAccountSource instantiates a new SourceappcreatedtoAccountSource object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceappcreatedtoAccountSourceWithDefaults

`func NewSourceappcreatedtoAccountSourceWithDefaults() *SourceappcreatedtoAccountSource`

NewSourceappcreatedtoAccountSourceWithDefaults instantiates a new SourceappcreatedtoAccountSource object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceappcreatedtoAccountSource) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceappcreatedtoAccountSource) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceappcreatedtoAccountSource) SetId(v string)`

SetId sets Id field to given value.


### GetType

`func (o *SourceappcreatedtoAccountSource) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceappcreatedtoAccountSource) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceappcreatedtoAccountSource) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SourceappcreatedtoAccountSource) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *SourceappcreatedtoAccountSource) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceappcreatedtoAccountSource) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceappcreatedtoAccountSource) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SourceappcreatedtoAccountSource) HasName() bool`

HasName returns a boolean if a field has been set.


