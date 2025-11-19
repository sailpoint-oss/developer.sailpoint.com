---
id: v2024-source-updated-actor
title: SourceUpdatedActor
pagination_label: SourceUpdatedActor
sidebar_label: SourceUpdatedActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceUpdatedActor', 'V2024SourceUpdatedActor'] 
slug: /tools/sdk/go/v2024/models/source-updated-actor
tags: ['SDK', 'Software Development Kit', 'SourceUpdatedActor', 'V2024SourceUpdatedActor']
---

# SourceUpdatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of identity who updated the source. | 
**Id** | Pointer to **string** | ID of identity who updated the source. | [optional] 
**Name** | **string** | Display name of identity who updated the source. | 

## Methods

### NewSourceUpdatedActor

`func NewSourceUpdatedActor(type_ string, name string, ) *SourceUpdatedActor`

NewSourceUpdatedActor instantiates a new SourceUpdatedActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceUpdatedActorWithDefaults

`func NewSourceUpdatedActorWithDefaults() *SourceUpdatedActor`

NewSourceUpdatedActorWithDefaults instantiates a new SourceUpdatedActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceUpdatedActor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceUpdatedActor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceUpdatedActor) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourceUpdatedActor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceUpdatedActor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceUpdatedActor) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceUpdatedActor) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceUpdatedActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceUpdatedActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceUpdatedActor) SetName(v string)`

SetName sets Name field to given value.



