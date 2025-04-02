---
id: source-deleted-actor
title: SourceDeletedActor
pagination_label: SourceDeletedActor
sidebar_label: SourceDeletedActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceDeletedActor', 'SourceDeletedActor'] 
slug: /tools/sdk/go//models/source-deleted-actor
tags: ['SDK', 'Software Development Kit', 'SourceDeletedActor', 'SourceDeletedActor']
---

# SourceDeletedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of identity who deleted the source. | 
**Id** | **string** | ID of identity who deleted the source. | 
**Name** | **string** | Display name of identity who deleted the source. | 

## Methods

### NewSourceDeletedActor

`func NewSourceDeletedActor(type_ string, id string, name string, ) *SourceDeletedActor`

NewSourceDeletedActor instantiates a new SourceDeletedActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceDeletedActorWithDefaults

`func NewSourceDeletedActorWithDefaults() *SourceDeletedActor`

NewSourceDeletedActorWithDefaults instantiates a new SourceDeletedActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceDeletedActor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceDeletedActor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceDeletedActor) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourceDeletedActor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceDeletedActor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceDeletedActor) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourceDeletedActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceDeletedActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceDeletedActor) SetName(v string)`

SetName sets Name field to given value.



