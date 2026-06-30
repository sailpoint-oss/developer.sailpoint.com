---
id: v1-spconfigexportjob
title: Spconfigexportjob
pagination_label: Spconfigexportjob
sidebar_label: Spconfigexportjob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigexportjob', 'V1Spconfigexportjob'] 
slug: /tools/sdk/go/spconfig/models/spconfigexportjob
tags: ['SDK', 'Software Development Kit', 'Spconfigexportjob', 'V1Spconfigexportjob']
---

# Spconfigexportjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | Pointer to **SailPointTime** | The time until which the artifacts will be available for download. | [optional] 
**Created** | **SailPointTime** | The time the job was started. | 
**Modified** | **SailPointTime** | The time of the last update to the job. | 
**Description** | Pointer to **string** | Optional user defined description/name for export job. | [optional] 

## Methods

### NewSpconfigexportjob

`func NewSpconfigexportjob(jobId string, status string, type_ string, created SailPointTime, modified SailPointTime, ) *Spconfigexportjob`

NewSpconfigexportjob instantiates a new Spconfigexportjob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigexportjobWithDefaults

`func NewSpconfigexportjobWithDefaults() *Spconfigexportjob`

NewSpconfigexportjobWithDefaults instantiates a new Spconfigexportjob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *Spconfigexportjob) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *Spconfigexportjob) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *Spconfigexportjob) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *Spconfigexportjob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Spconfigexportjob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Spconfigexportjob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *Spconfigexportjob) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Spconfigexportjob) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Spconfigexportjob) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *Spconfigexportjob) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Spconfigexportjob) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Spconfigexportjob) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Spconfigexportjob) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetCreated

`func (o *Spconfigexportjob) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Spconfigexportjob) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Spconfigexportjob) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Spconfigexportjob) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Spconfigexportjob) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Spconfigexportjob) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetDescription

`func (o *Spconfigexportjob) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Spconfigexportjob) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Spconfigexportjob) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Spconfigexportjob) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


