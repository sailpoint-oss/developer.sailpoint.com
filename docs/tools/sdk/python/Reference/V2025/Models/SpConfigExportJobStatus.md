---
id: v2025-sp-config-export-job-status
title: SpConfigExportJobStatus
pagination_label: SpConfigExportJobStatus
sidebar_label: SpConfigExportJobStatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigExportJobStatus', 'V2025SpConfigExportJobStatus'] 
slug: /tools/sdk/go/v2025/models/sp-config-export-job-status
tags: ['SDK', 'Software Development Kit', 'SpConfigExportJobStatus', 'V2025SpConfigExportJobStatus']
---

# SpConfigExportJobStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | **SailPointTime** | The time until which the artifacts will be available for download. | 
**Created** | **SailPointTime** | The time the job was started. | 
**Modified** | **SailPointTime** | The time of the last update to the job. | 
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 
**Completed** | Pointer to **SailPointTime** | The time the job was completed. | [optional] 

## Methods

### NewSpConfigExportJobStatus

`func NewSpConfigExportJobStatus(jobId string, status string, type_ string, expiration SailPointTime, created SailPointTime, modified SailPointTime, ) *SpConfigExportJobStatus`

NewSpConfigExportJobStatus instantiates a new SpConfigExportJobStatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigExportJobStatusWithDefaults

`func NewSpConfigExportJobStatusWithDefaults() *SpConfigExportJobStatus`

NewSpConfigExportJobStatusWithDefaults instantiates a new SpConfigExportJobStatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *SpConfigExportJobStatus) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *SpConfigExportJobStatus) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *SpConfigExportJobStatus) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *SpConfigExportJobStatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SpConfigExportJobStatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SpConfigExportJobStatus) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *SpConfigExportJobStatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SpConfigExportJobStatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SpConfigExportJobStatus) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *SpConfigExportJobStatus) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *SpConfigExportJobStatus) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *SpConfigExportJobStatus) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.


### GetCreated

`func (o *SpConfigExportJobStatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SpConfigExportJobStatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SpConfigExportJobStatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *SpConfigExportJobStatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SpConfigExportJobStatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SpConfigExportJobStatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetDescription

`func (o *SpConfigExportJobStatus) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SpConfigExportJobStatus) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SpConfigExportJobStatus) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SpConfigExportJobStatus) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetCompleted

`func (o *SpConfigExportJobStatus) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *SpConfigExportJobStatus) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *SpConfigExportJobStatus) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *SpConfigExportJobStatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


