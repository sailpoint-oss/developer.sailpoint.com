---
id: v1-sourcedeleted
title: Sourcedeleted
pagination_label: Sourcedeleted
sidebar_label: Sourcedeleted
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcedeleted', 'V1Sourcedeleted'] 
slug: /tools/sdk/go/triggers/models/sourcedeleted
tags: ['SDK', 'Software Development Kit', 'Sourcedeleted', 'V1Sourcedeleted']
---

# Sourcedeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | Human friendly name of the source. | 
**Type** | **string** | The connection type. | 
**Deleted** | **SailPointTime** | The date and time the source was deleted. | 
**Connector** | **string** | The connector type used to connect to the source. | 
**Actor** | [**SourcedeletedActor**](sourcedeleted-actor) |  | 

## Methods

### NewSourcedeleted

`func NewSourcedeleted(id string, name string, type_ string, deleted SailPointTime, connector string, actor SourcedeletedActor, ) *Sourcedeleted`

NewSourcedeleted instantiates a new Sourcedeleted object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcedeletedWithDefaults

`func NewSourcedeletedWithDefaults() *Sourcedeleted`

NewSourcedeletedWithDefaults instantiates a new Sourcedeleted object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourcedeleted) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourcedeleted) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourcedeleted) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Sourcedeleted) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourcedeleted) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourcedeleted) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Sourcedeleted) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourcedeleted) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourcedeleted) SetType(v string)`

SetType sets Type field to given value.


### GetDeleted

`func (o *Sourcedeleted) GetDeleted() SailPointTime`

GetDeleted returns the Deleted field if non-nil, zero value otherwise.

### GetDeletedOk

`func (o *Sourcedeleted) GetDeletedOk() (*SailPointTime, bool)`

GetDeletedOk returns a tuple with the Deleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDeleted

`func (o *Sourcedeleted) SetDeleted(v SailPointTime)`

SetDeleted sets Deleted field to given value.


### GetConnector

`func (o *Sourcedeleted) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *Sourcedeleted) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *Sourcedeleted) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetActor

`func (o *Sourcedeleted) GetActor() SourcedeletedActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *Sourcedeleted) GetActorOk() (*SourcedeletedActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *Sourcedeleted) SetActor(v SourcedeletedActor)`

SetActor sets Actor field to given value.



