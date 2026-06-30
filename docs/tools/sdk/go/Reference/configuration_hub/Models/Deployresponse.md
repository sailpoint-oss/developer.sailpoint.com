---
id: v1-deployresponse
title: Deployresponse
pagination_label: Deployresponse
sidebar_label: Deployresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Deployresponse', 'V1Deployresponse'] 
slug: /tools/sdk/go/configurationhub/models/deployresponse
tags: ['SDK', 'Software Development Kit', 'Deployresponse', 'V1Deployresponse']
---

# Deployresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | Pointer to **string** | Unique id assigned to this job. | [optional] 
**Status** | Pointer to **string** | Status of the job. | [optional] 
**Type** | Pointer to **string** | Type of the job, will always be CONFIG_DEPLOY_DRAFT for this type of job. | [optional] 
**Message** | Pointer to **string** | Message providing information about the outcome of the deploy process. | [optional] 
**RequesterName** | Pointer to **string** | The name of the user that initiated the deploy process. | [optional] 
**FileExists** | Pointer to **bool** | Whether or not a results file was created and stored for this deploy. | [optional] [default to true]
**Created** | Pointer to **SailPointTime** | The time the job was started. | [optional] 
**Modified** | Pointer to **SailPointTime** | The time of the last update to the job. | [optional] 
**Completed** | Pointer to **SailPointTime** | The time the job was completed. | [optional] 
**DraftId** | Pointer to **string** | The id of the draft that was used for this deploy. | [optional] 
**DraftName** | Pointer to **string** | The name of the draft that was used for this deploy. | [optional] 
**CloudStorageStatus** | Pointer to **string** | Whether this deploy results file has been transferred to a customer storage location. | [optional] 

## Methods

### NewDeployresponse

`func NewDeployresponse() *Deployresponse`

NewDeployresponse instantiates a new Deployresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeployresponseWithDefaults

`func NewDeployresponseWithDefaults() *Deployresponse`

NewDeployresponseWithDefaults instantiates a new Deployresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *Deployresponse) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *Deployresponse) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *Deployresponse) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *Deployresponse) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetStatus

`func (o *Deployresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Deployresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Deployresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Deployresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *Deployresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Deployresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Deployresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Deployresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetMessage

`func (o *Deployresponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Deployresponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Deployresponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Deployresponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetRequesterName

`func (o *Deployresponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *Deployresponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *Deployresponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *Deployresponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetFileExists

`func (o *Deployresponse) GetFileExists() bool`

GetFileExists returns the FileExists field if non-nil, zero value otherwise.

### GetFileExistsOk

`func (o *Deployresponse) GetFileExistsOk() (*bool, bool)`

GetFileExistsOk returns a tuple with the FileExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExists

`func (o *Deployresponse) SetFileExists(v bool)`

SetFileExists sets FileExists field to given value.

### HasFileExists

`func (o *Deployresponse) HasFileExists() bool`

HasFileExists returns a boolean if a field has been set.

### GetCreated

`func (o *Deployresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Deployresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Deployresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Deployresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Deployresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Deployresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Deployresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Deployresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCompleted

`func (o *Deployresponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Deployresponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Deployresponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Deployresponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetDraftId

`func (o *Deployresponse) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *Deployresponse) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *Deployresponse) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.

### HasDraftId

`func (o *Deployresponse) HasDraftId() bool`

HasDraftId returns a boolean if a field has been set.

### GetDraftName

`func (o *Deployresponse) GetDraftName() string`

GetDraftName returns the DraftName field if non-nil, zero value otherwise.

### GetDraftNameOk

`func (o *Deployresponse) GetDraftNameOk() (*string, bool)`

GetDraftNameOk returns a tuple with the DraftName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftName

`func (o *Deployresponse) SetDraftName(v string)`

SetDraftName sets DraftName field to given value.

### HasDraftName

`func (o *Deployresponse) HasDraftName() bool`

HasDraftName returns a boolean if a field has been set.

### GetCloudStorageStatus

`func (o *Deployresponse) GetCloudStorageStatus() string`

GetCloudStorageStatus returns the CloudStorageStatus field if non-nil, zero value otherwise.

### GetCloudStorageStatusOk

`func (o *Deployresponse) GetCloudStorageStatusOk() (*string, bool)`

GetCloudStorageStatusOk returns a tuple with the CloudStorageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudStorageStatus

`func (o *Deployresponse) SetCloudStorageStatus(v string)`

SetCloudStorageStatus sets CloudStorageStatus field to given value.

### HasCloudStorageStatus

`func (o *Deployresponse) HasCloudStorageStatus() bool`

HasCloudStorageStatus returns a boolean if a field has been set.


