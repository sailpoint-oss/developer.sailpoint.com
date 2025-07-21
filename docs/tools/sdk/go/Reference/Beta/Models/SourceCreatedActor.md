---
id: beta-source-created-actor
title: SourceCreatedActor
pagination_label: SourceCreatedActor
sidebar_label: SourceCreatedActor
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceCreatedActor', 'BetaSourceCreatedActor'] 
slug: /tools/sdk/go/beta/models/source-created-actor
tags: ['SDK', 'Software Development Kit', 'SourceCreatedActor', 'BetaSourceCreatedActor']
---

# SourceCreatedActor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | DTO type of the identity who created the source. | 
**Id** | **string** | ID of the identity who created the source. | 
**Name** | **string** | Name of the identity who created the source. | 

## Methods

### NewSourceCreatedActor

`func NewSourceCreatedActor(type_ string, id string, name string, ) *SourceCreatedActor`

NewSourceCreatedActor instantiates a new SourceCreatedActor object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceCreatedActorWithDefaults

`func NewSourceCreatedActorWithDefaults() *SourceCreatedActor`

NewSourceCreatedActorWithDefaults instantiates a new SourceCreatedActor object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *SourceCreatedActor) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceCreatedActor) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceCreatedActor) SetType(v string)`

SetType sets Type field to given value.


### GetId

`func (o *SourceCreatedActor) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceCreatedActor) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceCreatedActor) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourceCreatedActor) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceCreatedActor) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceCreatedActor) SetName(v string)`

SetName sets Name field to given value.



