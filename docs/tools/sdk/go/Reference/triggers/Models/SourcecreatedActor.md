---
id: v1-sourcecreated-actor
title: SourcecreatedActor
pagination_label: SourcecreatedActor
sidebar_label: SourcecreatedActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourcecreatedActor', 'V1SourcecreatedActor'] 
slug: /tools/sdk/go/triggers/models/sourcecreated-actor
tags: ['SDK', 'Software Development Kit', 'SourcecreatedActor', 'V1SourcecreatedActor']
---

# SourcecreatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of identity who created the source. | 
**Id** | **string** | ID of identity who created the source. | 
**Name** | **string** | Display name of identity who created the source. | 

## Methods

### NewSourcecreatedActor

`func NewSourcecreatedActor(type_ string, id string, name string, ) *SourcecreatedActor`

NewSourcecreatedActor instantiates a new SourcecreatedActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcecreatedActorWithDefaults

`func NewSourcecreatedActorWithDefaults() *SourcecreatedActor`

NewSourcecreatedActorWithDefaults instantiates a new SourcecreatedActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourcecreatedActor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourcecreatedActor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourcecreatedActor) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourcecreatedActor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourcecreatedActor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourcecreatedActor) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourcecreatedActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourcecreatedActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourcecreatedActor) SetName(v string)`

SetName sets Name field to given value.



