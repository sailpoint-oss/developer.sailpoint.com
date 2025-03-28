---
id: v2024-sp-config-export-job
title: SpConfigExportJob
pagination_label: SpConfigExportJob
sidebar_label: SpConfigExportJob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SpConfigExportJob', 'V2024SpConfigExportJob'] 
slug: /tools/sdk/go/v2024/models/sp-config-export-job
tags: ['SDK', 'Software Development Kit', 'SpConfigExportJob', 'V2024SpConfigExportJob']
---

# SpConfigExportJob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | **time.Time** | The time until which the artifacts will be available for download. | 
**Created** | **time.Time** | The time the job was started. | 
**Modified** | **time.Time** | The time of the last update to the job. | 
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 

## Methods

### NewSpConfigExportJob

`func NewSpConfigExportJob(jobId string, status string, type_ string, expiration time.Time, created time.Time, modified time.Time, ) *SpConfigExportJob`

NewSpConfigExportJob instantiates a new SpConfigExportJob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpConfigExportJobWithDefaults

`func NewSpConfigExportJobWithDefaults() *SpConfigExportJob`

NewSpConfigExportJobWithDefaults instantiates a new SpConfigExportJob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *SpConfigExportJob) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *SpConfigExportJob) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *SpConfigExportJob) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *SpConfigExportJob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *SpConfigExportJob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *SpConfigExportJob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *SpConfigExportJob) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SpConfigExportJob) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SpConfigExportJob) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *SpConfigExportJob) GetExpiration() time.Time`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *SpConfigExportJob) GetExpirationOk() (*time.Time, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *SpConfigExportJob) SetExpiration(v time.Time)`

SetExpiration sets Expiration field to given value.


### GetCreated

`func (o *SpConfigExportJob) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SpConfigExportJob) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SpConfigExportJob) SetCreated(v time.Time)`

SetCreated sets Created field to given value.


### GetModified

`func (o *SpConfigExportJob) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SpConfigExportJob) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SpConfigExportJob) SetModified(v time.Time)`

SetModified sets Modified field to given value.


### GetDescription

`func (o *SpConfigExportJob) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SpConfigExportJob) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SpConfigExportJob) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SpConfigExportJob) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


