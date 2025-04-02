---
id: source-sync-job
title: SourceSyncJob
pagination_label: SourceSyncJob
sidebar_label: SourceSyncJob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SourceSyncJob', 'SourceSyncJob'] 
slug: /tools/sdk/go//models/source-sync-job
tags: ['SDK', 'Software Development Kit', 'SourceSyncJob', 'SourceSyncJob']
---

# SourceSyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Job ID. | 
**Status** | **string** | The job status. | 
**Payload** | [**SourceSyncPayload**](source-sync-payload) |  | 

## Methods

### NewSourceSyncJob

`func NewSourceSyncJob(id string, status string, payload SourceSyncPayload, ) *SourceSyncJob`

NewSourceSyncJob instantiates a new SourceSyncJob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceSyncJobWithDefaults

`func NewSourceSyncJobWithDefaults() *SourceSyncJob`

NewSourceSyncJobWithDefaults instantiates a new SourceSyncJob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SourceSyncJob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SourceSyncJob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SourceSyncJob) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *SourceSyncJob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SourceSyncJob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SourceSyncJob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPayload

`func (o *SourceSyncJob) GetPayload() SourceSyncPayload`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *SourceSyncJob) GetPayloadOk() (*SourceSyncPayload, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *SourceSyncJob) SetPayload(v SourceSyncPayload)`

SetPayload sets Payload field to given value.



