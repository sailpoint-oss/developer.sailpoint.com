---
id: v1-sourcedeleted-actor
title: SourcedeletedActor
pagination_label: SourcedeletedActor
sidebar_label: SourcedeletedActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourcedeletedActor', 'V1SourcedeletedActor'] 
slug: /tools/sdk/go/triggers/models/sourcedeleted-actor
tags: ['SDK', 'Software Development Kit', 'SourcedeletedActor', 'V1SourcedeletedActor']
---

# SourcedeletedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of identity who deleted the source. | 
**Id** | **string** | ID of identity who deleted the source. | 
**Name** | **string** | Display name of identity who deleted the source. | 

## Methods

### NewSourcedeletedActor

`func NewSourcedeletedActor(type_ string, id string, name string, ) *SourcedeletedActor`

NewSourcedeletedActor instantiates a new SourcedeletedActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcedeletedActorWithDefaults

`func NewSourcedeletedActorWithDefaults() *SourcedeletedActor`

NewSourcedeletedActorWithDefaults instantiates a new SourcedeletedActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourcedeletedActor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourcedeletedActor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourcedeletedActor) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourcedeletedActor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourcedeletedActor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourcedeletedActor) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourcedeletedActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourcedeletedActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourcedeletedActor) SetName(v string)`

SetName sets Name field to given value.



