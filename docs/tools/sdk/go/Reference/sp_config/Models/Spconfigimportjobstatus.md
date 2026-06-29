---
id: v1-spconfigimportjobstatus
title: Spconfigimportjobstatus
pagination_label: Spconfigimportjobstatus
sidebar_label: Spconfigimportjobstatus
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Spconfigimportjobstatus', 'V1Spconfigimportjobstatus'] 
slug: /tools/sdk/go/spconfig/models/spconfigimportjobstatus
tags: ['SDK', 'Software Development Kit', 'Spconfigimportjobstatus', 'V1Spconfigimportjobstatus']
---

# Spconfigimportjobstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | **string** | Unique id assigned to this job. | 
**Status** | **string** | Status of the job. | 
**Type** | **string** | Type of the job, either export or import. | 
**Expiration** | Pointer to **SailPointTime** | The time until which the artifacts will be available for download. | [optional] 
**Created** | **SailPointTime** | The time the job was started. | 
**Modified** | **SailPointTime** | The time of the last update to the job. | 
**Message** | Pointer to **string** | This message contains additional information about the overall status of the job. | [optional] 
**Completed** | Pointer to **SailPointTime** | The time the job was completed. | [optional] 

## Methods

### NewSpconfigimportjobstatus

`func NewSpconfigimportjobstatus(jobId string, status string, type_ string, created SailPointTime, modified SailPointTime, ) *Spconfigimportjobstatus`

NewSpconfigimportjobstatus instantiates a new Spconfigimportjobstatus object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSpconfigimportjobstatusWithDefaults

`func NewSpconfigimportjobstatusWithDefaults() *Spconfigimportjobstatus`

NewSpconfigimportjobstatusWithDefaults instantiates a new Spconfigimportjobstatus object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *Spconfigimportjobstatus) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *Spconfigimportjobstatus) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *Spconfigimportjobstatus) SetJobId(v string)`

SetJobId sets JobId field to given value.


### GetStatus

`func (o *Spconfigimportjobstatus) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Spconfigimportjobstatus) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Spconfigimportjobstatus) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetType

`func (o *Spconfigimportjobstatus) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Spconfigimportjobstatus) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Spconfigimportjobstatus) SetType(v string)`

SetType sets Type field to given value.


### GetExpiration

`func (o *Spconfigimportjobstatus) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Spconfigimportjobstatus) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Spconfigimportjobstatus) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Spconfigimportjobstatus) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetCreated

`func (o *Spconfigimportjobstatus) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Spconfigimportjobstatus) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Spconfigimportjobstatus) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *Spconfigimportjobstatus) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Spconfigimportjobstatus) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Spconfigimportjobstatus) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.


### GetMessage

`func (o *Spconfigimportjobstatus) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Spconfigimportjobstatus) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Spconfigimportjobstatus) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Spconfigimportjobstatus) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetCompleted

`func (o *Spconfigimportjobstatus) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Spconfigimportjobstatus) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Spconfigimportjobstatus) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Spconfigimportjobstatus) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.


