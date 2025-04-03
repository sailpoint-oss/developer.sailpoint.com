---
id: v2025-source-deleted
title: SourceDeleted
pagination_label: SourceDeleted
sidebar_label: SourceDeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceDeleted', 'V2025SourceDeleted'] 
slug: /tools/sdk/go/v2025/models/source-deleted
tags: ['SDK', 'Software Development Kit', 'SourceDeleted', 'V2025SourceDeleted']
---

# SourceDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | Human friendly name of the source. | 
**Type** | **string** | The connection type. | 
**Deleted** | **SailPointTime** | The date and time the source was deleted. | 
**Connector** | **string** | The connector type used to connect to the source. | 
**Actor** | [**SourceDeletedActor**](source-deleted-actor) |  | 

## Methods

### NewSourceDeleted

`func NewSourceDeleted(id string, name string, type_ string, deleted SailPointTime, connector string, actor SourceDeletedActor, ) *SourceDeleted`

NewSourceDeleted instantiates a new SourceDeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceDeletedWithDefaults

`func NewSourceDeletedWithDefaults() *SourceDeleted`

NewSourceDeletedWithDefaults instantiates a new SourceDeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceDeleted) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceDeleted) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceDeleted) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *SourceDeleted) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SourceDeleted) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SourceDeleted) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *SourceDeleted) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SourceDeleted) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SourceDeleted) SetType(v string)`

SetType sets Type field to given value.


### GetDeleted

`func (o *SourceDeleted) GetDeleted() SailPointTime`

GetDeleted returns the Deleted field if non-nil, zero value otherwise.

### GetDeletedOk

`func (o *SourceDeleted) GetDeletedOk() (*SailPointTime, bool)`

GetDeletedOk returns a tuple with the Deleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleted

`func (o *SourceDeleted) SetDeleted(v SailPointTime)`

SetDeleted sets Deleted field to given value.


### GetConnector

`func (o *SourceDeleted) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *SourceDeleted) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *SourceDeleted) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetActor

`func (o *SourceDeleted) GetActor() SourceDeletedActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *SourceDeleted) GetActorOk() (*SourceDeletedActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *SourceDeleted) SetActor(v SourceDeletedActor)`

SetActor sets Actor field to given value.



