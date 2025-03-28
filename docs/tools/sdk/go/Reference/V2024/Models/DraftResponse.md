---
id: v2024-draft-response
title: DraftResponse
pagination_label: DraftResponse
sidebar_label: DraftResponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DraftResponse', 'V2024DraftResponse'] 
slug: /tools/sdk/go/v2024/models/draft-response
tags: ['SDK', 'Software Development Kit', 'DraftResponse', 'V2024DraftResponse']
---

# DraftResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**JobId** | Pointer to **string** | Unique id assigned to this job. | [optional] 
**Status** | Pointer to **string** | Status of the job. | [optional] 
**Type** | Pointer to **string** | Type of the job, will always be CREATE_DRAFT for this type of job. | [optional] 
**Message** | Pointer to **string** | Message providing information about the outcome of the draft process. | [optional] 
**RequesterName** | Pointer to **string** | The name of user that that initiated the draft process. | [optional] 
**FileExists** | Pointer to **bool** | Whether or not a file was generated for this draft. | [optional] [default to true]
**Created** | Pointer to **time.Time** | The time the job was started. | [optional] 
**Modified** | Pointer to **time.Time** | The time of the last update to the job. | [optional] 
**Completed** | Pointer to **time.Time** | The time the job was completed. | [optional] 
**Name** | Pointer to **string** | Name of the draft. | [optional] 
**SourceTenant** | Pointer to **string** | Tenant owner of the backup from which the draft was generated. | [optional] 
**SourceBackupId** | Pointer to **string** | Id of the backup from which the draft was generated. | [optional] 
**SourceBackupName** | Pointer to **string** | Name of the backup from which the draft was generated. | [optional] 
**Mode** | Pointer to **string** | Denotes the origin of the source backup from which the draft was generated. - RESTORE - Same tenant. - PROMOTE - Different tenant. - UPLOAD - Uploaded configuration. | [optional] 
**ApprovalStatus** | Pointer to **string** | Approval status of the draft used to determine whether or not the draft can be deployed. | [optional] 
**ApprovalComment** | Pointer to [**[]ApprovalComment**](approval-comment) | List of comments that have been exchanged between an approval requester and an approver. | [optional] 

## Methods

### NewDraftResponse

`func NewDraftResponse() *DraftResponse`

NewDraftResponse instantiates a new DraftResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDraftResponseWithDefaults

`func NewDraftResponseWithDefaults() *DraftResponse`

NewDraftResponseWithDefaults instantiates a new DraftResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetJobId

`func (o *DraftResponse) GetJobId() string`

GetJobId returns the JobId field if non-nil, zero value otherwise.

### GetJobIdOk

`func (o *DraftResponse) GetJobIdOk() (*string, bool)`

GetJobIdOk returns a tuple with the JobId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetJobId

`func (o *DraftResponse) SetJobId(v string)`

SetJobId sets JobId field to given value.

### HasJobId

`func (o *DraftResponse) HasJobId() bool`

HasJobId returns a boolean if a field has been set.

### GetStatus

`func (o *DraftResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *DraftResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *DraftResponse) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *DraftResponse) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetType

`func (o *DraftResponse) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *DraftResponse) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *DraftResponse) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *DraftResponse) HasType() bool`

HasType returns a boolean if a field has been set.

### GetMessage

`func (o *DraftResponse) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *DraftResponse) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *DraftResponse) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *DraftResponse) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetRequesterName

`func (o *DraftResponse) GetRequesterName() string`

GetRequesterName returns the RequesterName field if non-nil, zero value otherwise.

### GetRequesterNameOk

`func (o *DraftResponse) GetRequesterNameOk() (*string, bool)`

GetRequesterNameOk returns a tuple with the RequesterName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterName

`func (o *DraftResponse) SetRequesterName(v string)`

SetRequesterName sets RequesterName field to given value.

### HasRequesterName

`func (o *DraftResponse) HasRequesterName() bool`

HasRequesterName returns a boolean if a field has been set.

### GetFileExists

`func (o *DraftResponse) GetFileExists() bool`

GetFileExists returns the FileExists field if non-nil, zero value otherwise.

### GetFileExistsOk

`func (o *DraftResponse) GetFileExistsOk() (*bool, bool)`

GetFileExistsOk returns a tuple with the FileExists field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFileExists

`func (o *DraftResponse) SetFileExists(v bool)`

SetFileExists sets FileExists field to given value.

### HasFileExists

`func (o *DraftResponse) HasFileExists() bool`

HasFileExists returns a boolean if a field has been set.

### GetCreated

`func (o *DraftResponse) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *DraftResponse) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *DraftResponse) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *DraftResponse) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *DraftResponse) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *DraftResponse) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *DraftResponse) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *DraftResponse) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetCompleted

`func (o *DraftResponse) GetCompleted() time.Time`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *DraftResponse) GetCompletedOk() (*time.Time, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *DraftResponse) SetCompleted(v time.Time)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *DraftResponse) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetName

`func (o *DraftResponse) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *DraftResponse) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *DraftResponse) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *DraftResponse) HasName() bool`

HasName returns a boolean if a field has been set.

### GetSourceTenant

`func (o *DraftResponse) GetSourceTenant() string`

GetSourceTenant returns the SourceTenant field if non-nil, zero value otherwise.

### GetSourceTenantOk

`func (o *DraftResponse) GetSourceTenantOk() (*string, bool)`

GetSourceTenantOk returns a tuple with the SourceTenant field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceTenant

`func (o *DraftResponse) SetSourceTenant(v string)`

SetSourceTenant sets SourceTenant field to given value.

### HasSourceTenant

`func (o *DraftResponse) HasSourceTenant() bool`

HasSourceTenant returns a boolean if a field has been set.

### GetSourceBackupId

`func (o *DraftResponse) GetSourceBackupId() string`

GetSourceBackupId returns the SourceBackupId field if non-nil, zero value otherwise.

### GetSourceBackupIdOk

`func (o *DraftResponse) GetSourceBackupIdOk() (*string, bool)`

GetSourceBackupIdOk returns a tuple with the SourceBackupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupId

`func (o *DraftResponse) SetSourceBackupId(v string)`

SetSourceBackupId sets SourceBackupId field to given value.

### HasSourceBackupId

`func (o *DraftResponse) HasSourceBackupId() bool`

HasSourceBackupId returns a boolean if a field has been set.

### GetSourceBackupName

`func (o *DraftResponse) GetSourceBackupName() string`

GetSourceBackupName returns the SourceBackupName field if non-nil, zero value otherwise.

### GetSourceBackupNameOk

`func (o *DraftResponse) GetSourceBackupNameOk() (*string, bool)`

GetSourceBackupNameOk returns a tuple with the SourceBackupName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceBackupName

`func (o *DraftResponse) SetSourceBackupName(v string)`

SetSourceBackupName sets SourceBackupName field to given value.

### HasSourceBackupName

`func (o *DraftResponse) HasSourceBackupName() bool`

HasSourceBackupName returns a boolean if a field has been set.

### GetMode

`func (o *DraftResponse) GetMode() string`

GetMode returns the Mode field if non-nil, zero value otherwise.

### GetModeOk

`func (o *DraftResponse) GetModeOk() (*string, bool)`

GetModeOk returns a tuple with the Mode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMode

`func (o *DraftResponse) SetMode(v string)`

SetMode sets Mode field to given value.

### HasMode

`func (o *DraftResponse) HasMode() bool`

HasMode returns a boolean if a field has been set.

### GetApprovalStatus

`func (o *DraftResponse) GetApprovalStatus() string`

GetApprovalStatus returns the ApprovalStatus field if non-nil, zero value otherwise.

### GetApprovalStatusOk

`func (o *DraftResponse) GetApprovalStatusOk() (*string, bool)`

GetApprovalStatusOk returns a tuple with the ApprovalStatus field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalStatus

`func (o *DraftResponse) SetApprovalStatus(v string)`

SetApprovalStatus sets ApprovalStatus field to given value.

### HasApprovalStatus

`func (o *DraftResponse) HasApprovalStatus() bool`

HasApprovalStatus returns a boolean if a field has been set.

### GetApprovalComment

`func (o *DraftResponse) GetApprovalComment() []ApprovalComment`

GetApprovalComment returns the ApprovalComment field if non-nil, zero value otherwise.

### GetApprovalCommentOk

`func (o *DraftResponse) GetApprovalCommentOk() (*[]ApprovalComment, bool)`

GetApprovalCommentOk returns a tuple with the ApprovalComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalComment

`func (o *DraftResponse) SetApprovalComment(v []ApprovalComment)`

SetApprovalComment sets ApprovalComment field to given value.

### HasApprovalComment

`func (o *DraftResponse) HasApprovalComment() bool`

HasApprovalComment returns a boolean if a field has been set.


