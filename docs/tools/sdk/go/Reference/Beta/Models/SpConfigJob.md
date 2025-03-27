---
id: beta-sp-config-job
title: SpConfigJob
pagination_label: SpConfigJob
sidebar_label: SpConfigJob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigJob', 'BetaSpConfigJob'] 
slug: /tools/sdk/go/beta/models/sp-config-job
tags: ['SDK', 'Software Development Kit', 'SpConfigJob', 'BetaSpConfigJob']
---

# SpConfigJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | **time.Time** | The time until which the artifacts will be available for download. | 
**Created** | **time.Time** | The time the job was started. | 
**Modified** | **time.Time** | The time of the last update to the job. | 

## Methods

### NewSpConfigJob

`func NewSpConfigJob(jobId string, status string, type_ string, expiration time.Time, created time.Time, modified time.Time, ) *SpConfigJob`

NewSpConfigJob instantiates a new SpConfigJob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigJobWithDefaults

`func NewSpConfigJobWithDefaults() *SpConfigJob`

NewSpConfigJobWithDefaults instantiates a new SpConfigJob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *SpConfigJob) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *SpConfigJob) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *SpConfigJob) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *SpConfigJob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SpConfigJob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SpConfigJob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *SpConfigJob) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SpConfigJob) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SpConfigJob) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *SpConfigJob) GetExpiration() time.Time`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *SpConfigJob) GetExpirationOk() (*time.Time, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *SpConfigJob) SetExpiration(v time.Time)`

SetExpiration sets Expiration field to given value.


### GetCreated

`func (o *SpConfigJob) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SpConfigJob) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SpConfigJob) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetModified

`func (o *SpConfigJob) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SpConfigJob) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SpConfigJob) SetModified(v time.Time)`

SetModified sets Modified field to given value.



