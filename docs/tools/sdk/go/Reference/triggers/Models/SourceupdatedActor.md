---
id: v1-sourceupdated-actor
title: SourceupdatedActor
pagination_label: SourceupdatedActor
sidebar_label: SourceupdatedActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceupdatedActor', 'V1SourceupdatedActor'] 
slug: /tools/sdk/go/triggers/models/sourceupdated-actor
tags: ['SDK', 'Software Development Kit', 'SourceupdatedActor', 'V1SourceupdatedActor']
---

# SourceupdatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of identity who updated the source. | 
**Id** | Pointer to **string** | ID of identity who updated the source. | [optional] 
**Name** | **string** | Display name of identity who updated the source. | 

## Methods

### NewSourceupdatedActor

`func NewSourceupdatedActor(type_ string, name string, ) *SourceupdatedActor`

NewSourceupdatedActor instantiates a new SourceupdatedActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceupdatedActorWithDefaults

`func NewSourceupdatedActorWithDefaults() *SourceupdatedActor`

NewSourceupdatedActorWithDefaults instantiates a new SourceupdatedActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceupdatedActor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceupdatedActor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceupdatedActor) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourceupdatedActor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceupdatedActor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceupdatedActor) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SourceupdatedActor) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SourceupdatedActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceupdatedActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceupdatedActor) SetName(v string)`

SetName sets Name field to given value.



