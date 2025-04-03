---
id: v2025-identity-sync-job
title: IdentitySyncJob
pagination_label: IdentitySyncJob
sidebar_label: IdentitySyncJob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentitySyncJob', 'V2025IdentitySyncJob'] 
slug: /tools/sdk/go/v2025/models/identity-sync-job
tags: ['SDK', 'Software Development Kit', 'IdentitySyncJob', 'V2025IdentitySyncJob']
---

# IdentitySyncJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Job ID. | 
**Status** | **string** | The job status. | 
**Payload** | [**IdentitySyncPayload**](identity-sync-payload) |  | 

## Methods

### NewIdentitySyncJob

`func NewIdentitySyncJob(id string, status string, payload IdentitySyncPayload, ) *IdentitySyncJob`

NewIdentitySyncJob instantiates a new IdentitySyncJob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitySyncJobWithDefaults

`func NewIdentitySyncJobWithDefaults() *IdentitySyncJob`

NewIdentitySyncJobWithDefaults instantiates a new IdentitySyncJob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentitySyncJob) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentitySyncJob) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentitySyncJob) SetId(v string)`

SetId sets Id field to given value.


### GetStatus

`func (o *IdentitySyncJob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *IdentitySyncJob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *IdentitySyncJob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetPayload

`func (o *IdentitySyncJob) GetPayload() IdentitySyncPayload`

GetPayload returns the Payload field if non-nil, zero value otherwise.

### GetPayloadOk

`func (o *IdentitySyncJob) GetPayloadOk() (*IdentitySyncPayload, bool)`

GetPayloadOk returns a tuple with the Payload field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPayload

`func (o *IdentitySyncJob) SetPayload(v IdentitySyncPayload)`

SetPayload sets Payload field to given value.



