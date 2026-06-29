---
id: v1-sourcecreated
title: Sourcecreated
pagination_label: Sourcecreated
sidebar_label: Sourcecreated
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcecreated', 'V1Sourcecreated'] 
slug: /tools/sdk/go/triggers/models/sourcecreated
tags: ['SDK', 'Software Development Kit', 'Sourcecreated', 'V1Sourcecreated']
---

# Sourcecreated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The unique ID of the source. | 
**Name** | **string** | Human friendly name of the source. | 
**Type** | **string** | The connection type. | 
**Created** | **SailPointTime** | The date and time the source was created. | 
**Connector** | **string** | The connector type used to connect to the source. | 
**Actor** | [**SourcecreatedActor**](sourcecreated-actor) |  | 

## Methods

### NewSourcecreated

`func NewSourcecreated(id string, name string, type_ string, created SailPointTime, connector string, actor SourcecreatedActor, ) *Sourcecreated`

NewSourcecreated instantiates a new Sourcecreated object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcecreatedWithDefaults

`func NewSourcecreatedWithDefaults() *Sourcecreated`

NewSourcecreatedWithDefaults instantiates a new Sourcecreated object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourcecreated) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourcecreated) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourcecreated) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *Sourcecreated) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sourcecreated) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sourcecreated) SetName(v string)`

SetName sets Name field to given value.


### GetType

`func (o *Sourcecreated) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sourcecreated) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sourcecreated) SetType(v string)`

SetType sets Type field to given value.


### GetCreated

`func (o *Sourcecreated) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sourcecreated) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sourcecreated) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetConnector

`func (o *Sourcecreated) GetConnector() string`

GetConnector returns the Connector field if non-nil, zero value otherwise.

### GetConnectorOk

`func (o *Sourcecreated) GetConnectorOk() (*string, bool)`

GetConnectorOk returns a tuple with the Connector field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConnector

`func (o *Sourcecreated) SetConnector(v string)`

SetConnector sets Connector field to given value.


### GetActor

`func (o *Sourcecreated) GetActor() SourcecreatedActor`

GetActor returns the Actor field if non-nil, zero value otherwise.

### GetActorOk

`func (o *Sourcecreated) GetActorOk() (*SourcecreatedActor, bool)`

GetActorOk returns a tuple with the Actor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActor

`func (o *Sourcecreated) SetActor(v SourcecreatedActor)`

SetActor sets Actor field to given value.



