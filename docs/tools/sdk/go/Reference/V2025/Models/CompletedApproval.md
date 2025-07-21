---
id: v2025-completed-approval
title: CompletedApproval
pagination_label: CompletedApproval
sidebar_label: CompletedApproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CompletedApproval', 'V2025CompletedApproval'] 
slug: /tools/sdk/go/v2025/models/completed-approval
tags: ['SDK', 'Software Development Kit', 'CompletedApproval', 'V2025CompletedApproval']
---

# CompletedApproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The approval id. | [optional] 
**Name** | Pointer to **string** | The name of the approval. | [optional] 
**Created** | Pointer to **SailPointTime** | When the approval was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | Pointer to **SailPointTime** | When the access-request was created. | [optional] 
**RequestType** | Pointer to [**NullableAccessRequestType**](access-request-type) |  | [optional] 
**Requester** | Pointer to [**AccessItemRequester**](access-item-requester) |  | [optional] 
**RequestedFor** | Pointer to [**RequestedItemStatusRequestedFor**](requested-item-status-requested-for) |  | [optional] 
**ReviewedBy** | Pointer to [**AccessItemReviewedBy**](access-item-reviewed-by) |  | [optional] 
**Owner** | Pointer to [**OwnerDto**](owner-dto) |  | [optional] 
**RequestedObject** | Pointer to [**RequestableObjectReference**](requestable-object-reference) |  | [optional] 
**RequesterComment** | Pointer to [**CompletedApprovalRequesterComment**](completed-approval-requester-comment) |  | [optional] 
**ReviewerComment** | Pointer to [**CompletedApprovalReviewerComment**](completed-approval-reviewer-comment) |  | [optional] 
**PreviousReviewersComments** | Pointer to [**[]CommentDto**](comment-dto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | Pointer to [**[]ApprovalForwardHistory**](approval-forward-history) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | Pointer to **bool** | When true the rejector has to provide comments when rejecting | [optional] [default to false]
**State** | Pointer to [**CompletedApprovalState**](completed-approval-state) |  | [optional] 
**RemoveDate** | Pointer to **NullableTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | Pointer to **bool** | If true, then the request was to change the remove date or sunset date. | [optional] [default to false]
**CurrentRemoveDate** | Pointer to **NullableTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | Pointer to [**NullableSodViolationContextCheckCompleted**](sod-violation-context-check-completed) |  | [optional] 
**PreApprovalTriggerResult** | Pointer to [**NullableCompletedApprovalPreApprovalTriggerResult**](completed-approval-pre-approval-trigger-result) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs provided during the request. | [optional] 
**RequestedAccounts** | Pointer to [**[]RequestedAccountRef**](requested-account-ref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 

## Methods

### NewCompletedApproval

`func NewCompletedApproval() *CompletedApproval`

NewCompletedApproval instantiates a new CompletedApproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompletedApprovalWithDefaults

`func NewCompletedApprovalWithDefaults() *CompletedApproval`

NewCompletedApprovalWithDefaults instantiates a new CompletedApproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CompletedApproval) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CompletedApproval) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CompletedApproval) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CompletedApproval) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *CompletedApproval) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CompletedApproval) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CompletedApproval) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CompletedApproval) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *CompletedApproval) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CompletedApproval) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CompletedApproval) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *CompletedApproval) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *CompletedApproval) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CompletedApproval) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CompletedApproval) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CompletedApproval) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetRequestCreated

`func (o *CompletedApproval) GetRequestCreated() SailPointTime`

GetRequestCreated returns the RequestCreated field if non-nil, zero value otherwise.

### GetRequestCreatedOk

`func (o *CompletedApproval) GetRequestCreatedOk() (*SailPointTime, bool)`

GetRequestCreatedOk returns a tuple with the RequestCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCreated

`func (o *CompletedApproval) SetRequestCreated(v SailPointTime)`

SetRequestCreated sets RequestCreated field to given value.

### HasRequestCreated

`func (o *CompletedApproval) HasRequestCreated() bool`

HasRequestCreated returns a boolean if a field has been set.

### GetRequestType

`func (o *CompletedApproval) GetRequestType() AccessRequestType`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *CompletedApproval) GetRequestTypeOk() (*AccessRequestType, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *CompletedApproval) SetRequestType(v AccessRequestType)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *CompletedApproval) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *CompletedApproval) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *CompletedApproval) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequester

`func (o *CompletedApproval) GetRequester() AccessItemRequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *CompletedApproval) GetRequesterOk() (*AccessItemRequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *CompletedApproval) SetRequester(v AccessItemRequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *CompletedApproval) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *CompletedApproval) GetRequestedFor() RequestedItemStatusRequestedFor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *CompletedApproval) GetRequestedForOk() (*RequestedItemStatusRequestedFor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *CompletedApproval) SetRequestedFor(v RequestedItemStatusRequestedFor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *CompletedApproval) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetReviewedBy

`func (o *CompletedApproval) GetReviewedBy() AccessItemReviewedBy`

GetReviewedBy returns the ReviewedBy field if non-nil, zero value otherwise.

### GetReviewedByOk

`func (o *CompletedApproval) GetReviewedByOk() (*AccessItemReviewedBy, bool)`

GetReviewedByOk returns a tuple with the ReviewedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewedBy

`func (o *CompletedApproval) SetReviewedBy(v AccessItemReviewedBy)`

SetReviewedBy sets ReviewedBy field to given value.

### HasReviewedBy

`func (o *CompletedApproval) HasReviewedBy() bool`

HasReviewedBy returns a boolean if a field has been set.

### GetOwner

`func (o *CompletedApproval) GetOwner() OwnerDto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *CompletedApproval) GetOwnerOk() (*OwnerDto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *CompletedApproval) SetOwner(v OwnerDto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *CompletedApproval) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRequestedObject

`func (o *CompletedApproval) GetRequestedObject() RequestableObjectReference`

GetRequestedObject returns the RequestedObject field if non-nil, zero value otherwise.

### GetRequestedObjectOk

`func (o *CompletedApproval) GetRequestedObjectOk() (*RequestableObjectReference, bool)`

GetRequestedObjectOk returns a tuple with the RequestedObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObject

`func (o *CompletedApproval) SetRequestedObject(v RequestableObjectReference)`

SetRequestedObject sets RequestedObject field to given value.

### HasRequestedObject

`func (o *CompletedApproval) HasRequestedObject() bool`

HasRequestedObject returns a boolean if a field has been set.

### GetRequesterComment

`func (o *CompletedApproval) GetRequesterComment() CompletedApprovalRequesterComment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *CompletedApproval) GetRequesterCommentOk() (*CompletedApprovalRequesterComment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *CompletedApproval) SetRequesterComment(v CompletedApprovalRequesterComment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *CompletedApproval) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetReviewerComment

`func (o *CompletedApproval) GetReviewerComment() CompletedApprovalReviewerComment`

GetReviewerComment returns the ReviewerComment field if non-nil, zero value otherwise.

### GetReviewerCommentOk

`func (o *CompletedApproval) GetReviewerCommentOk() (*CompletedApprovalReviewerComment, bool)`

GetReviewerCommentOk returns a tuple with the ReviewerComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerComment

`func (o *CompletedApproval) SetReviewerComment(v CompletedApprovalReviewerComment)`

SetReviewerComment sets ReviewerComment field to given value.

### HasReviewerComment

`func (o *CompletedApproval) HasReviewerComment() bool`

HasReviewerComment returns a boolean if a field has been set.

### GetPreviousReviewersComments

`func (o *CompletedApproval) GetPreviousReviewersComments() []CommentDto`

GetPreviousReviewersComments returns the PreviousReviewersComments field if non-nil, zero value otherwise.

### GetPreviousReviewersCommentsOk

`func (o *CompletedApproval) GetPreviousReviewersCommentsOk() (*[]CommentDto, bool)`

GetPreviousReviewersCommentsOk returns a tuple with the PreviousReviewersComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousReviewersComments

`func (o *CompletedApproval) SetPreviousReviewersComments(v []CommentDto)`

SetPreviousReviewersComments sets PreviousReviewersComments field to given value.

### HasPreviousReviewersComments

`func (o *CompletedApproval) HasPreviousReviewersComments() bool`

HasPreviousReviewersComments returns a boolean if a field has been set.

### GetForwardHistory

`func (o *CompletedApproval) GetForwardHistory() []ApprovalForwardHistory`

GetForwardHistory returns the ForwardHistory field if non-nil, zero value otherwise.

### GetForwardHistoryOk

`func (o *CompletedApproval) GetForwardHistoryOk() (*[]ApprovalForwardHistory, bool)`

GetForwardHistoryOk returns a tuple with the ForwardHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardHistory

`func (o *CompletedApproval) SetForwardHistory(v []ApprovalForwardHistory)`

SetForwardHistory sets ForwardHistory field to given value.

### HasForwardHistory

`func (o *CompletedApproval) HasForwardHistory() bool`

HasForwardHistory returns a boolean if a field has been set.

### GetCommentRequiredWhenRejected

`func (o *CompletedApproval) GetCommentRequiredWhenRejected() bool`

GetCommentRequiredWhenRejected returns the CommentRequiredWhenRejected field if non-nil, zero value otherwise.

### GetCommentRequiredWhenRejectedOk

`func (o *CompletedApproval) GetCommentRequiredWhenRejectedOk() (*bool, bool)`

GetCommentRequiredWhenRejectedOk returns a tuple with the CommentRequiredWhenRejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentRequiredWhenRejected

`func (o *CompletedApproval) SetCommentRequiredWhenRejected(v bool)`

SetCommentRequiredWhenRejected sets CommentRequiredWhenRejected field to given value.

### HasCommentRequiredWhenRejected

`func (o *CompletedApproval) HasCommentRequiredWhenRejected() bool`

HasCommentRequiredWhenRejected returns a boolean if a field has been set.

### GetState

`func (o *CompletedApproval) GetState() CompletedApprovalState`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *CompletedApproval) GetStateOk() (*CompletedApprovalState, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *CompletedApproval) SetState(v CompletedApprovalState)`

SetState sets State field to given value.

### HasState

`func (o *CompletedApproval) HasState() bool`

HasState returns a boolean if a field has been set.

### GetRemoveDate

`func (o *CompletedApproval) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *CompletedApproval) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *CompletedApproval) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *CompletedApproval) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *CompletedApproval) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *CompletedApproval) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetRemoveDateUpdateRequested

`func (o *CompletedApproval) GetRemoveDateUpdateRequested() bool`

GetRemoveDateUpdateRequested returns the RemoveDateUpdateRequested field if non-nil, zero value otherwise.

### GetRemoveDateUpdateRequestedOk

`func (o *CompletedApproval) GetRemoveDateUpdateRequestedOk() (*bool, bool)`

GetRemoveDateUpdateRequestedOk returns a tuple with the RemoveDateUpdateRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDateUpdateRequested

`func (o *CompletedApproval) SetRemoveDateUpdateRequested(v bool)`

SetRemoveDateUpdateRequested sets RemoveDateUpdateRequested field to given value.

### HasRemoveDateUpdateRequested

`func (o *CompletedApproval) HasRemoveDateUpdateRequested() bool`

HasRemoveDateUpdateRequested returns a boolean if a field has been set.

### GetCurrentRemoveDate

`func (o *CompletedApproval) GetCurrentRemoveDate() SailPointTime`

GetCurrentRemoveDate returns the CurrentRemoveDate field if non-nil, zero value otherwise.

### GetCurrentRemoveDateOk

`func (o *CompletedApproval) GetCurrentRemoveDateOk() (*SailPointTime, bool)`

GetCurrentRemoveDateOk returns a tuple with the CurrentRemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentRemoveDate

`func (o *CompletedApproval) SetCurrentRemoveDate(v SailPointTime)`

SetCurrentRemoveDate sets CurrentRemoveDate field to given value.

### HasCurrentRemoveDate

`func (o *CompletedApproval) HasCurrentRemoveDate() bool`

HasCurrentRemoveDate returns a boolean if a field has been set.

### SetCurrentRemoveDateNil

`func (o *CompletedApproval) SetCurrentRemoveDateNil(b bool)`

 SetCurrentRemoveDateNil sets the value for CurrentRemoveDate to be an explicit nil

### UnsetCurrentRemoveDate
`func (o *CompletedApproval) UnsetCurrentRemoveDate()`

UnsetCurrentRemoveDate ensures that no value is present for CurrentRemoveDate, not even an explicit nil
### GetSodViolationContext

`func (o *CompletedApproval) GetSodViolationContext() SodViolationContextCheckCompleted`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *CompletedApproval) GetSodViolationContextOk() (*SodViolationContextCheckCompleted, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *CompletedApproval) SetSodViolationContext(v SodViolationContextCheckCompleted)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *CompletedApproval) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### SetSodViolationContextNil

`func (o *CompletedApproval) SetSodViolationContextNil(b bool)`

 SetSodViolationContextNil sets the value for SodViolationContext to be an explicit nil

### UnsetSodViolationContext
`func (o *CompletedApproval) UnsetSodViolationContext()`

UnsetSodViolationContext ensures that no value is present for SodViolationContext, not even an explicit nil
### GetPreApprovalTriggerResult

`func (o *CompletedApproval) GetPreApprovalTriggerResult() CompletedApprovalPreApprovalTriggerResult`

GetPreApprovalTriggerResult returns the PreApprovalTriggerResult field if non-nil, zero value otherwise.

### GetPreApprovalTriggerResultOk

`func (o *CompletedApproval) GetPreApprovalTriggerResultOk() (*CompletedApprovalPreApprovalTriggerResult, bool)`

GetPreApprovalTriggerResultOk returns a tuple with the PreApprovalTriggerResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreApprovalTriggerResult

`func (o *CompletedApproval) SetPreApprovalTriggerResult(v CompletedApprovalPreApprovalTriggerResult)`

SetPreApprovalTriggerResult sets PreApprovalTriggerResult field to given value.

### HasPreApprovalTriggerResult

`func (o *CompletedApproval) HasPreApprovalTriggerResult() bool`

HasPreApprovalTriggerResult returns a boolean if a field has been set.

### SetPreApprovalTriggerResultNil

`func (o *CompletedApproval) SetPreApprovalTriggerResultNil(b bool)`

 SetPreApprovalTriggerResultNil sets the value for PreApprovalTriggerResult to be an explicit nil

### UnsetPreApprovalTriggerResult
`func (o *CompletedApproval) UnsetPreApprovalTriggerResult()`

UnsetPreApprovalTriggerResult ensures that no value is present for PreApprovalTriggerResult, not even an explicit nil
### GetClientMetadata

`func (o *CompletedApproval) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *CompletedApproval) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *CompletedApproval) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *CompletedApproval) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRequestedAccounts

`func (o *CompletedApproval) GetRequestedAccounts() []RequestedAccountRef`

GetRequestedAccounts returns the RequestedAccounts field if non-nil, zero value otherwise.

### GetRequestedAccountsOk

`func (o *CompletedApproval) GetRequestedAccountsOk() (*[]RequestedAccountRef, bool)`

GetRequestedAccountsOk returns a tuple with the RequestedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAccounts

`func (o *CompletedApproval) SetRequestedAccounts(v []RequestedAccountRef)`

SetRequestedAccounts sets RequestedAccounts field to given value.

### HasRequestedAccounts

`func (o *CompletedApproval) HasRequestedAccounts() bool`

HasRequestedAccounts returns a boolean if a field has been set.

### SetRequestedAccountsNil

`func (o *CompletedApproval) SetRequestedAccountsNil(b bool)`

 SetRequestedAccountsNil sets the value for RequestedAccounts to be an explicit nil

### UnsetRequestedAccounts
`func (o *CompletedApproval) UnsetRequestedAccounts()`

UnsetRequestedAccounts ensures that no value is present for RequestedAccounts, not even an explicit nil

