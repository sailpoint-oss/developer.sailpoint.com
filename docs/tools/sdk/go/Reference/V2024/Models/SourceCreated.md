---
id: v2024-source-created
title: SourceCreated
pagination_label: SourceCreated
sidebar_label: SourceCreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceCreated', 'V2024SourceCreated'] 
slug: /tools/sdk/go/v2024/models/source-created
tags: ['SDK', 'Software Development Kit', 'SourceCreated', 'V2024SourceCreated']
---

# SourceCreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | Human friendly name of the source. | 
**Type** | **string** | The connection type. | 
**Created** | **time.Time** | The date and time the source was created. | 
**Connector** | **string** | The connector type used to connect to the source. | 
**Actor** | [**SourceCreatedActor**](source-created-actor) |  | 

## Methods

### NewSourceCreated

`func NewSourceCreated(id string, name string, type_ string, created time.Time, connector string, actor SourceCreatedActor, ) *SourceCreated`

NewSourceCreated instantiates a new SourceCreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceCreatedWithDefaults

`func NewSourceCreatedWithDefaults() *SourceCreated`

NewSourceCreatedWithDefaults instantiates a new SourceCreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceCreated) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceCreated) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceCreated) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourceCreated) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceCreated) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceCreated) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SourceCreated) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceCreated) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceCreated) SetType(v string)`

SetType sets Type field to given value.


### GetCreated

`func (o *SourceCreated) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SourceCreated) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SourceCreated) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetConnector

`func (o *SourceCreated) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *SourceCreated) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *SourceCreated) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetActor

`func (o *SourceCreated) GetActor() SourceCreatedActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *SourceCreated) GetActorOk() (*SourceCreatedActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *SourceCreated) SetActor(v SourceCreatedActor)`

SetActor sets Actor field to given value.



