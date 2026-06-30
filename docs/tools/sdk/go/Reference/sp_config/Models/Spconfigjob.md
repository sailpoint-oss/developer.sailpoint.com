---
id: v1-spconfigjob
title: Spconfigjob
pagination_label: Spconfigjob
sidebar_label: Spconfigjob
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigjob', 'V1Spconfigjob'] 
slug: /tools/sdk/go/spconfig/models/spconfigjob
tags: ['SDK', 'Software Development Kit', 'Spconfigjob', 'V1Spconfigjob']
---

# Spconfigjob

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | Pointer to **SailPointTime** | The time until which the artifacts will be available for download. | [optional] 
**Created** | **SailPointTime** | The time the job was started. | 
**Modified** | **SailPointTime** | The time of the last update to the job. | 

## Methods

### NewSpconfigjob

`func NewSpconfigjob(jobId string, status string, type_ string, created SailPointTime, modified SailPointTime, ) *Spconfigjob`

NewSpconfigjob instantiates a new Spconfigjob object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigjobWithDefaults

`func NewSpconfigjobWithDefaults() *Spconfigjob`

NewSpconfigjobWithDefaults instantiates a new Spconfigjob object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *Spconfigjob) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *Spconfigjob) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *Spconfigjob) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *Spconfigjob) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Spconfigjob) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Spconfigjob) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *Spconfigjob) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Spconfigjob) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Spconfigjob) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *Spconfigjob) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Spconfigjob) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Spconfigjob) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Spconfigjob) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetCreated

`func (o *Spconfigjob) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Spconfigjob) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Spconfigjob) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Spconfigjob) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Spconfigjob) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Spconfigjob) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.



