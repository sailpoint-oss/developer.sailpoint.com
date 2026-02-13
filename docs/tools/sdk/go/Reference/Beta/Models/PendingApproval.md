---
id: beta-pending-approval
title: PendingApproval
pagination_label: PendingApproval
sidebar_label: PendingApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PendingApproval', 'BetaPendingApproval'] 
slug: /tools/sdk/go/beta/models/pending-approval
tags: ['SDK', 'Software Development Kit', 'PendingApproval', 'BetaPendingApproval']
---

# PendingApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The approval id. | [optional] 
**Name** | Pointer to **string** | The name of the approval. | [optional] 
**Created** | Pointer to **SailPointTime** | When the approval was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | Pointer to **SailPointTime** | When the access-request was created. | [optional] 
**RequestType** | Pointer to [**NullableAccessRequestType**](access-request-type) |  | [optional] 
**Requester** | Pointer to [**AccessItemRequesterDto**](access-item-requester-dto) |  | [optional] 
**RequestedFor** | Pointer to [**AccessItemRequestedForDto**](access-item-requested-for-dto) |  | [optional] 
**Owner** | Pointer to [**AccessItemOwnerDto**](access-item-owner-dto) |  | [optional] 
**RequestedObject** | Pointer to [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** | Pointer to [**CommentDto1**](comment-dto1) |  | [optional] 
**PreviousReviewersComments** | Pointer to [**[]CommentDto1**](comment-dto1) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | Pointer to [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | Pointer to **bool** | When true the rejector has to provide comments when rejecting | [optional] [default to false]
**ActionInProcess** | Pointer to [**PendingApprovalAction**](pending-approval-action) |  | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | Pointer to **bool** | If true, then the request is to change the remove date or sunset date. | [optional] [default to false]
**CurrentRemoveDate** | Pointer to **SailPointTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | Pointer to [**NullableSodViolationContextCheckCompleted2**](sod-violation-context-check-completed2) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**RequestedAccounts** | Pointer to [**[]RequestedAccountRef**](requested-account-ref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The privilege level of the requested access item, if applicable. | [optional] 
**MaxPermittedAccessDuration** | Pointer to [**NullablePendingApprovalMaxPermittedAccessDuration**](pending-approval-max-permitted-access-duration) |  | [optional] 

## Methods

### NewPendingApproval

`func NewPendingApproval() *PendingApproval`

NewPendingApproval instantiates a new PendingApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingApprovalWithDefaults

`func NewPendingApprovalWithDefaults() *PendingApproval`

NewPendingApprovalWithDefaults instantiates a new PendingApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *PendingApproval) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *PendingApproval) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *PendingApproval) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *PendingApproval) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *PendingApproval) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *PendingApproval) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *PendingApproval) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *PendingApproval) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *PendingApproval) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *PendingApproval) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *PendingApproval) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *PendingApproval) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *PendingApproval) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *PendingApproval) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *PendingApproval) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *PendingApproval) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetRequestCreated

`func (o *PendingApproval) GetRequestCreated() SailPointTime`

GetRequestCreated returns the RequestCreated field if non-nil, zero value otherwise.

### GetRequestCreatedOk

`func (o *PendingApproval) GetRequestCreatedOk() (*SailPointTime, bool)`

GetRequestCreatedOk returns a tuple with the RequestCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCreated

`func (o *PendingApproval) SetRequestCreated(v SailPointTime)`

SetRequestCreated sets RequestCreated field to given value.

### HasRequestCreated

`func (o *PendingApproval) HasRequestCreated() bool`

HasRequestCreated returns a boolean if a field has been set.

### GetRequestType

`func (o *PendingApproval) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *PendingApproval) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *PendingApproval) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *PendingApproval) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *PendingApproval) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *PendingApproval) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequester

`func (o *PendingApproval) GetRequester() AccessItemRequesterDto`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *PendingApproval) GetRequesterOk() (*AccessItemRequesterDto, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *PendingApproval) SetRequester(v AccessItemRequesterDto)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *PendingApproval) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *PendingApproval) GetRequestedFor() AccessItemRequestedForDto`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *PendingApproval) GetRequestedForOk() (*AccessItemRequestedForDto, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *PendingApproval) SetRequestedFor(v AccessItemRequestedForDto)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *PendingApproval) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetOwner

`func (o *PendingApproval) GetOwner() AccessItemOwnerDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *PendingApproval) GetOwnerOk() (*AccessItemOwnerDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *PendingApproval) SetOwner(v AccessItemOwnerDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *PendingApproval) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRequestedObject

`func (o *PendingApproval) GetRequestedObject() RequestableObjectReference`

GetRequestedObject returns the RequestedObject field if non-nil, zero value otherwise.

### GetRequestedObjectOk

`func (o *PendingApproval) GetRequestedObjectOk() (*RequestableObjectReference, bool)`

GetRequestedObjectOk returns a tuple with the RequestedObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObject

`func (o *PendingApproval) SetRequestedObject(v RequestableObjectReference)`

SetRequestedObject sets RequestedObject field to given value.

### HasRequestedObject

`func (o *PendingApproval) HasRequestedObject() bool`

HasRequestedObject returns a boolean if a field has been set.

### GetRequesterComment

`func (o *PendingApproval) GetRequesterComment() CommentDto1`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *PendingApproval) GetRequesterCommentOk() (*CommentDto1, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *PendingApproval) SetRequesterComment(v CommentDto1)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *PendingApproval) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetPreviousReviewersComments

`func (o *PendingApproval) GetPreviousReviewersComments() []CommentDto1`

GetPreviousReviewersComments returns the PreviousReviewersComments field if non-nil, zero value otherwise.

### GetPreviousReviewersCommentsOk

`func (o *PendingApproval) GetPreviousReviewersCommentsOk() (*[]CommentDto1, bool)`

GetPreviousReviewersCommentsOk returns a tuple with the PreviousReviewersComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousReviewersComments

`func (o *PendingApproval) SetPreviousReviewersComments(v []CommentDto1)`

SetPreviousReviewersComments sets PreviousReviewersComments field to given value.

### HasPreviousReviewersComments

`func (o *PendingApproval) HasPreviousReviewersComments() bool`

HasPreviousReviewersComments returns a boolean if a field has been set.

### GetForwardHistory

`func (o *PendingApproval) GetForwardHistory() []ApprovalForwardHistory`

GetForwardHistory returns the ForwardHistory field if non-nil, zero value otherwise.

### GetForwardHistoryOk

`func (o *PendingApproval) GetForwardHistoryOk() (*[]ApprovalForwardHistory, bool)`

GetForwardHistoryOk returns a tuple with the ForwardHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardHistory

`func (o *PendingApproval) SetForwardHistory(v []ApprovalForwardHistory)`

SetForwardHistory sets ForwardHistory field to given value.

### HasForwardHistory

`func (o *PendingApproval) HasForwardHistory() bool`

HasForwardHistory returns a boolean if a field has been set.

### GetCommentRequiredWhenRejected

`func (o *PendingApproval) GetCommentRequiredWhenRejected() bool`

GetCommentRequiredWhenRejected returns the CommentRequiredWhenRejected field if non-nil, zero value otherwise.

### GetCommentRequiredWhenRejectedOk

`func (o *PendingApproval) GetCommentRequiredWhenRejectedOk() (*bool, bool)`

GetCommentRequiredWhenRejectedOk returns a tuple with the CommentRequiredWhenRejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentRequiredWhenRejected

`func (o *PendingApproval) SetCommentRequiredWhenRejected(v bool)`

SetCommentRequiredWhenRejected sets CommentRequiredWhenRejected field to given value.

### HasCommentRequiredWhenRejected

`func (o *PendingApproval) HasCommentRequiredWhenRejected() bool`

HasCommentRequiredWhenRejected returns a boolean if a field has been set.

### GetActionInProcess

`func (o *PendingApproval) GetActionInProcess() PendingApprovalAction`

GetActionInProcess returns the ActionInProcess field if non-nil, zero value otherwise.

### GetActionInProcessOk

`func (o *PendingApproval) GetActionInProcessOk() (*PendingApprovalAction, bool)`

GetActionInProcessOk returns a tuple with the ActionInProcess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionInProcess

`func (o *PendingApproval) SetActionInProcess(v PendingApprovalAction)`

SetActionInProcess sets ActionInProcess field to given value.

### HasActionInProcess

`func (o *PendingApproval) HasActionInProcess() bool`

HasActionInProcess returns a boolean if a field has been set.

### GetRemoveDate

`func (o *PendingApproval) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *PendingApproval) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *PendingApproval) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *PendingApproval) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetRemoveDateUpdateRequested

`func (o *PendingApproval) GetRemoveDateUpdateRequested() bool`

GetRemoveDateUpdateRequested returns the RemoveDateUpdateRequested field if non-nil, zero value otherwise.

### GetRemoveDateUpdateRequestedOk

`func (o *PendingApproval) GetRemoveDateUpdateRequestedOk() (*bool, bool)`

GetRemoveDateUpdateRequestedOk returns a tuple with the RemoveDateUpdateRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDateUpdateRequested

`func (o *PendingApproval) SetRemoveDateUpdateRequested(v bool)`

SetRemoveDateUpdateRequested sets RemoveDateUpdateRequested field to given value.

### HasRemoveDateUpdateRequested

`func (o *PendingApproval) HasRemoveDateUpdateRequested() bool`

HasRemoveDateUpdateRequested returns a boolean if a field has been set.

### GetCurrentRemoveDate

`func (o *PendingApproval) GetCurrentRemoveDate() SailPointTime`

GetCurrentRemoveDate returns the CurrentRemoveDate field if non-nil, zero value otherwise.

### GetCurrentRemoveDateOk

`func (o *PendingApproval) GetCurrentRemoveDateOk() (*SailPointTime, bool)`

GetCurrentRemoveDateOk returns a tuple with the CurrentRemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentRemoveDate

`func (o *PendingApproval) SetCurrentRemoveDate(v SailPointTime)`

SetCurrentRemoveDate sets CurrentRemoveDate field to given value.

### HasCurrentRemoveDate

`func (o *PendingApproval) HasCurrentRemoveDate() bool`

HasCurrentRemoveDate returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *PendingApproval) GetSodViolationContext() SodViolationContextCheckCompleted2`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *PendingApproval) GetSodViolationContextOk() (*SodViolationContextCheckCompleted2, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *PendingApproval) SetSodViolationContext(v SodViolationContextCheckCompleted2)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *PendingApproval) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### SetSodViolationContextNil

`func (o *PendingApproval) SetSodViolationContextNil(b bool)`

 SetSodViolationContextNil sets the value for SodViolationContext to be an explicit nil

### UnsetSodViolationContext
`func (o *PendingApproval) UnsetSodViolationContext()`

UnsetSodViolationContext ensures that no value is present for SodViolationContext, not even an explicit nil
### GetClientMetadata

`func (o *PendingApproval) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *PendingApproval) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *PendingApproval) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *PendingApproval) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *PendingApproval) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *PendingApproval) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetRequestedAccounts

`func (o *PendingApproval) GetRequestedAccounts() []RequestedAccountRef`

GetRequestedAccounts returns the RequestedAccounts field if non-nil, zero value otherwise.

### GetRequestedAccountsOk

`func (o *PendingApproval) GetRequestedAccountsOk() (*[]RequestedAccountRef, bool)`

GetRequestedAccountsOk returns a tuple with the RequestedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAccounts

`func (o *PendingApproval) SetRequestedAccounts(v []RequestedAccountRef)`

SetRequestedAccounts sets RequestedAccounts field to given value.

### HasRequestedAccounts

`func (o *PendingApproval) HasRequestedAccounts() bool`

HasRequestedAccounts returns a boolean if a field has been set.

### SetRequestedAccountsNil

`func (o *PendingApproval) SetRequestedAccountsNil(b bool)`

 SetRequestedAccountsNil sets the value for RequestedAccounts to be an explicit nil

### UnsetRequestedAccounts
`func (o *PendingApproval) UnsetRequestedAccounts()`

UnsetRequestedAccounts ensures that no value is present for RequestedAccounts, not even an explicit nil
### GetPrivilegeLevel

`func (o *PendingApproval) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *PendingApproval) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *PendingApproval) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *PendingApproval) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *PendingApproval) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *PendingApproval) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil
### GetMaxPermittedAccessDuration

`func (o *PendingApproval) GetMaxPermittedAccessDuration() PendingApprovalMaxPermittedAccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *PendingApproval) GetMaxPermittedAccessDurationOk() (*PendingApprovalMaxPermittedAccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *PendingApproval) SetMaxPermittedAccessDuration(v PendingApprovalMaxPermittedAccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *PendingApproval) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *PendingApproval) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *PendingApproval) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil

