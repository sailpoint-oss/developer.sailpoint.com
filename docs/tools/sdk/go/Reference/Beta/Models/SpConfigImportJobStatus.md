---
id: beta-sp-config-import-job-status
title: SpConfigImportJobStatus
pagination_label: SpConfigImportJobStatus
sidebar_label: SpConfigImportJobStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigImportJobStatus', 'BetaSpConfigImportJobStatus'] 
slug: /tools/sdk/go/beta/models/sp-config-import-job-status
tags: ['SDK', 'Software Development Kit', 'SpConfigImportJobStatus', 'BetaSpConfigImportJobStatus']
---

# SpConfigImportJobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | **time.Time** | The time until which the artifacts will be available for download. | 
**Created** | **time.Time** | The time the job was started. | 
**Modified** | **time.Time** | The time of the last update to the job. | 
**Message** | Pointer to **string** | This message contains additional information about the overall status of the job. | [optional] 
**Completed** | Pointer to **time.Time** | The time the job was completed. | [optional] 

## Methods

### NewSpConfigImportJobStatus

`func NewSpConfigImportJobStatus(jobId string, status string, type_ string, expiration time.Time, created time.Time, modified time.Time, ) *SpConfigImportJobStatus`

NewSpConfigImportJobStatus instantiates a new SpConfigImportJobStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigImportJobStatusWithDefaults

`func NewSpConfigImportJobStatusWithDefaults() *SpConfigImportJobStatus`

NewSpConfigImportJobStatusWithDefaults instantiates a new SpConfigImportJobStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *SpConfigImportJobStatus) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *SpConfigImportJobStatus) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *SpConfigImportJobStatus) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *SpConfigImportJobStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SpConfigImportJobStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SpConfigImportJobStatus) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *SpConfigImportJobStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SpConfigImportJobStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SpConfigImportJobStatus) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *SpConfigImportJobStatus) GetExpiration() time.Time`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *SpConfigImportJobStatus) GetExpirationOk() (*time.Time, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *SpConfigImportJobStatus) SetExpiration(v time.Time)`

SetExpiration sets Expiration field to given value.


### GetCreated

`func (o *SpConfigImportJobStatus) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SpConfigImportJobStatus) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SpConfigImportJobStatus) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetModified

`func (o *SpConfigImportJobStatus) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SpConfigImportJobStatus) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SpConfigImportJobStatus) SetModified(v time.Time)`

SetModified sets Modified field to given value.


### GetMessage

`func (o *SpConfigImportJobStatus) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *SpConfigImportJobStatus) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *SpConfigImportJobStatus) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *SpConfigImportJobStatus) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetCompleted

`func (o *SpConfigImportJobStatus) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *SpConfigImportJobStatus) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *SpConfigImportJobStatus) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *SpConfigImportJobStatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


