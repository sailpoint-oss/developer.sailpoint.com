---
id: v2025-deploy-response
title: DeployResponse
pagination_label: DeployResponse
sidebar_label: DeployResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DeployResponse', 'V2025DeployResponse'] 
slug: /tools/sdk/go/v2025/models/deploy-response
tags: ['SDK', 'Software Development Kit', 'DeployResponse', 'V2025DeployResponse']
---

# DeployResponse

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

### NewDeployResponse

`func NewDeployResponse() *DeployResponse`

NewDeployResponse instantiates a new DeployResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDeployResponseWithDefaults

`func NewDeployResponseWithDefaults() *DeployResponse`

NewDeployResponseWithDefaults instantiates a new DeployResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *DeployResponse) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *DeployResponse) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *DeployResponse) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *DeployResponse) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetStatus

`func (o *DeployResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DeployResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DeployResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DeployResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *DeployResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DeployResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DeployResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DeployResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetMessage

`func (o *DeployResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DeployResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DeployResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *DeployResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetRequesterName

`func (o *DeployResponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *DeployResponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *DeployResponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *DeployResponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetFileExists

`func (o *DeployResponse) GetFileExists() bool`

GetFileExists returns the FileExists field if non-nil, zero value otherwise.

### GetFileExistsOk

`func (o *DeployResponse) GetFileExistsOk() (*bool, bool)`

GetFileExistsOk returns a tuple with the FileExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExists

`func (o *DeployResponse) SetFileExists(v bool)`

SetFileExists sets FileExists field to given value.

### HasFileExists

`func (o *DeployResponse) HasFileExists() bool`

HasFileExists returns a boolean if a field has been set.

### GetCreated

`func (o *DeployResponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *DeployResponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *DeployResponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *DeployResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *DeployResponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *DeployResponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *DeployResponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *DeployResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCompleted

`func (o *DeployResponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *DeployResponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *DeployResponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *DeployResponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetDraftId

`func (o *DeployResponse) GetDraftId() string`

GetDraftId returns the DraftId field if non-nil, zero value otherwise.

### GetDraftIdOk

`func (o *DeployResponse) GetDraftIdOk() (*string, bool)`

GetDraftIdOk returns a tuple with the DraftId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftId

`func (o *DeployResponse) SetDraftId(v string)`

SetDraftId sets DraftId field to given value.

### HasDraftId

`func (o *DeployResponse) HasDraftId() bool`

HasDraftId returns a boolean if a field has been set.

### GetDraftName

`func (o *DeployResponse) GetDraftName() string`

GetDraftName returns the DraftName field if non-nil, zero value otherwise.

### GetDraftNameOk

`func (o *DeployResponse) GetDraftNameOk() (*string, bool)`

GetDraftNameOk returns a tuple with the DraftName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDraftName

`func (o *DeployResponse) SetDraftName(v string)`

SetDraftName sets DraftName field to given value.

### HasDraftName

`func (o *DeployResponse) HasDraftName() bool`

HasDraftName returns a boolean if a field has been set.

### GetCloudStorageStatus

`func (o *DeployResponse) GetCloudStorageStatus() string`

GetCloudStorageStatus returns the CloudStorageStatus field if non-nil, zero value otherwise.

### GetCloudStorageStatusOk

`func (o *DeployResponse) GetCloudStorageStatusOk() (*string, bool)`

GetCloudStorageStatusOk returns a tuple with the CloudStorageStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCloudStorageStatus

`func (o *DeployResponse) SetCloudStorageStatus(v string)`

SetCloudStorageStatus sets CloudStorageStatus field to given value.

### HasCloudStorageStatus

`func (o *DeployResponse) HasCloudStorageStatus() bool`

HasCloudStorageStatus returns a boolean if a field has been set.


