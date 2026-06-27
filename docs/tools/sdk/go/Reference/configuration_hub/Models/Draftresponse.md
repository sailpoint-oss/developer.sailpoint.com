---
id: v1-draftresponse
title: Draftresponse
pagination_label: Draftresponse
sidebar_label: Draftresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Draftresponse', 'V1Draftresponse'] 
slug: /tools/sdk/go/configurationhub/models/draftresponse
tags: ['SDK', 'Software Development Kit', 'Draftresponse', 'V1Draftresponse']
---

# Draftresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | Pointer to **string** | Unique id assigned to this job. | [optional] 
**Status** | Pointer to **string** | Status of the job. | [optional] 
**Type** | Pointer to **string** | Type of the job, will always be CREATE_DRAFT for this type of job. | [optional] 
**Message** | Pointer to **string** | Message providing information about the outcome of the draft process. | [optional] 
**RequesterName** | Pointer to **string** | The name of user that that initiated the draft process. | [optional] 
**FileExists** | Pointer to **bool** | Whether or not a file was generated for this draft. | [optional] [default to true]
**Created** | Pointer to **SailPointTime** | The time the job was started. | [optional] 
**Modified** | Pointer to **SailPointTime** | The time of the last update to the job. | [optional] 
**Completed** | Pointer to **SailPointTime** | The time the job was completed. | [optional] 
**Name** | Pointer to **string** | Name of the draft. | [optional] 
**SourceTenant** | Pointer to **string** | Tenant owner of the backup from which the draft was generated. | [optional] 
**SourceBackupId** | Pointer to **string** | Id of the backup from which the draft was generated. | [optional] 
**SourceBackupName** | Pointer to **string** | Name of the backup from which the draft was generated. | [optional] 
**Mode** | Pointer to **string** | Denotes the origin of the source backup from which the draft was generated. - RESTORE - Same tenant. - PROMOTE - Different tenant. - UPLOAD - Uploaded configuration. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the draft used to determine whether or not the draft can be deployed. | [optional] 
**ApprovalComment** | Pointer to [**[]Approvalcomment**](approvalcomment) | List of comments that have been exchanged between an approval requester and an approver. | [optional] 

## Methods

### NewDraftresponse

`func NewDraftresponse() *Draftresponse`

NewDraftresponse instantiates a new Draftresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDraftresponseWithDefaults

`func NewDraftresponseWithDefaults() *Draftresponse`

NewDraftresponseWithDefaults instantiates a new Draftresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *Draftresponse) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *Draftresponse) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *Draftresponse) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *Draftresponse) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetStatus

`func (o *Draftresponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Draftresponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Draftresponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Draftresponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *Draftresponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Draftresponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Draftresponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Draftresponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetMessage

`func (o *Draftresponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *Draftresponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *Draftresponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *Draftresponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetRequesterName

`func (o *Draftresponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *Draftresponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *Draftresponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *Draftresponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetFileExists

`func (o *Draftresponse) GetFileExists() bool`

GetFileExists returns the FileExists field if non-nil, zero value otherwise.

### GetFileExistsOk

`func (o *Draftresponse) GetFileExistsOk() (*bool, bool)`

GetFileExistsOk returns a tuple with the FileExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExists

`func (o *Draftresponse) SetFileExists(v bool)`

SetFileExists sets FileExists field to given value.

### HasFileExists

`func (o *Draftresponse) HasFileExists() bool`

HasFileExists returns a boolean if a field has been set.

### GetCreated

`func (o *Draftresponse) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Draftresponse) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Draftresponse) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Draftresponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Draftresponse) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Draftresponse) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Draftresponse) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Draftresponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCompleted

`func (o *Draftresponse) GetCompleted() SailPointTime`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Draftresponse) GetCompletedOk() (*SailPointTime, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Draftresponse) SetCompleted(v SailPointTime)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Draftresponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetName

`func (o *Draftresponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Draftresponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Draftresponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Draftresponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSourceTenant

`func (o *Draftresponse) GetSourceTenant() string`

GetSourceTenant returns the SourceTenant field if non-nil, zero value otherwise.

### GetSourceTenantOk

`func (o *Draftresponse) GetSourceTenantOk() (*string, bool)`

GetSourceTenantOk returns a tuple with the SourceTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTenant

`func (o *Draftresponse) SetSourceTenant(v string)`

SetSourceTenant sets SourceTenant field to given value.

### HasSourceTenant

`func (o *Draftresponse) HasSourceTenant() bool`

HasSourceTenant returns a boolean if a field has been set.

### GetSourceBackupId

`func (o *Draftresponse) GetSourceBackupId() string`

GetSourceBackupId returns the SourceBackupId field if non-nil, zero value otherwise.

### GetSourceBackupIdOk

`func (o *Draftresponse) GetSourceBackupIdOk() (*string, bool)`

GetSourceBackupIdOk returns a tuple with the SourceBackupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupId

`func (o *Draftresponse) SetSourceBackupId(v string)`

SetSourceBackupId sets SourceBackupId field to given value.

### HasSourceBackupId

`func (o *Draftresponse) HasSourceBackupId() bool`

HasSourceBackupId returns a boolean if a field has been set.

### GetSourceBackupName

`func (o *Draftresponse) GetSourceBackupName() string`

GetSourceBackupName returns the SourceBackupName field if non-nil, zero value otherwise.

### GetSourceBackupNameOk

`func (o *Draftresponse) GetSourceBackupNameOk() (*string, bool)`

GetSourceBackupNameOk returns a tuple with the SourceBackupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupName

`func (o *Draftresponse) SetSourceBackupName(v string)`

SetSourceBackupName sets SourceBackupName field to given value.

### HasSourceBackupName

`func (o *Draftresponse) HasSourceBackupName() bool`

HasSourceBackupName returns a boolean if a field has been set.

### GetMode

`func (o *Draftresponse) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *Draftresponse) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *Draftresponse) SetMode(v string)`

SetMode sets Mode field to given value.

### HasMode

`func (o *Draftresponse) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *Draftresponse) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *Draftresponse) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *Draftresponse) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *Draftresponse) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalComment

`func (o *Draftresponse) GetApprovalComment() []Approvalcomment`

GetApprovalComment returns the ApprovalComment field if non-nil, zero value otherwise.

### GetApprovalCommentOk

`func (o *Draftresponse) GetApprovalCommentOk() (*[]Approvalcomment, bool)`

GetApprovalCommentOk returns a tuple with the ApprovalComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalComment

`func (o *Draftresponse) SetApprovalComment(v []Approvalcomment)`

SetApprovalComment sets ApprovalComment field to given value.

### HasApprovalComment

`func (o *Draftresponse) HasApprovalComment() bool`

HasApprovalComment returns a boolean if a field has been set.


