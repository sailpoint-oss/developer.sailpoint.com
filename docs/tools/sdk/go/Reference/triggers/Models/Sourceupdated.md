---
id: v1-sourceupdated
title: Sourceupdated
pagination_label: Sourceupdated
sidebar_label: Sourceupdated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceupdated', 'V1Sourceupdated'] 
slug: /tools/sdk/go/triggers/models/sourceupdated
tags: ['SDK', 'Software Development Kit', 'Sourceupdated', 'V1Sourceupdated']
---

# Sourceupdated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | The user friendly name of the source. | 
**Type** | **string** | The connection type of the source. | 
**Modified** | **SailPointTime** | The date and time the source was modified. | 
**Connector** | **string** | The connector type used to connect to the source. | 
**Actor** | [**SourceupdatedActor**](sourceupdated-actor) |  | 

## Methods

### NewSourceupdated

`func NewSourceupdated(id string, name string, type_ string, modified SailPointTime, connector string, actor SourceupdatedActor, ) *Sourceupdated`

NewSourceupdated instantiates a new Sourceupdated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceupdatedWithDefaults

`func NewSourceupdatedWithDefaults() *Sourceupdated`

NewSourceupdatedWithDefaults instantiates a new Sourceupdated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourceupdated) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourceupdated) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourceupdated) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Sourceupdated) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourceupdated) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourceupdated) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Sourceupdated) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourceupdated) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourceupdated) SetType(v string)`

SetType sets Type field to given value.


### GetModified

`func (o *Sourceupdated) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sourceupdated) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sourceupdated) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetConnector

`func (o *Sourceupdated) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *Sourceupdated) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *Sourceupdated) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetActor

`func (o *Sourceupdated) GetActor() SourceupdatedActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *Sourceupdated) GetActorOk() (*SourceupdatedActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *Sourceupdated) SetActor(v SourceupdatedActor)`

SetActor sets Actor field to given value.



