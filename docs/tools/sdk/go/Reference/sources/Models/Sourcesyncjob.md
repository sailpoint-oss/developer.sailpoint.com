---
id: v1-sourcesyncjob
title: Sourcesyncjob
pagination_label: Sourcesyncjob
sidebar_label: Sourcesyncjob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourcesyncjob', 'V1Sourcesyncjob'] 
slug: /tools/sdk/go/sources/models/sourcesyncjob
tags: ['SDK', 'Software Development Kit', 'Sourcesyncjob', 'V1Sourcesyncjob']
---

# Sourcesyncjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Job ID. | 
**Status** | **string** | The job status. | 
**Payload** | [**Sourcesyncpayload**](sourcesyncpayload) |  | 

## Methods

### NewSourcesyncjob

`func NewSourcesyncjob(id string, status string, payload Sourcesyncpayload, ) *Sourcesyncjob`

NewSourcesyncjob instantiates a new Sourcesyncjob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourcesyncjobWithDefaults

`func NewSourcesyncjobWithDefaults() *Sourcesyncjob`

NewSourcesyncjobWithDefaults instantiates a new Sourcesyncjob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sourcesyncjob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sourcesyncjob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sourcesyncjob) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *Sourcesyncjob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Sourcesyncjob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Sourcesyncjob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPayload

`func (o *Sourcesyncjob) GetPayload() Sourcesyncpayload`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *Sourcesyncjob) GetPayloadOk() (*Sourcesyncpayload, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *Sourcesyncjob) SetPayload(v Sourcesyncpayload)`

SetPayload sets Payload field to given value.



