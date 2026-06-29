---
id: v1-completedapproval
title: Completedapproval
pagination_label: Completedapproval
sidebar_label: Completedapproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Completedapproval', 'V1Completedapproval'] 
slug: /tools/sdk/go/accessrequestapprovals/models/completedapproval
tags: ['SDK', 'Software Development Kit', 'Completedapproval', 'V1Completedapproval']
---

# Completedapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The approval id. | [optional] 
**Name** | Pointer to **string** | The name of the approval. | [optional] 
**Created** | Pointer to **SailPointTime** | When the approval was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | Pointer to **SailPointTime** | When the access-request was created. | [optional] 
**RequestType** | Pointer to [**NullableAccessrequesttype**](accessrequesttype) |  | [optional] 
**Requester** | Pointer to [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**RequestedFor** | Pointer to [**CompletedapprovalRequestedFor**](completedapproval-requested-for) |  | [optional] 
**ReviewedBy** | Pointer to [**Accessitemreviewedby**](accessitemreviewedby) |  | [optional] 
**Owner** | Pointer to [**Ownerdto**](ownerdto) |  | [optional] 
**RequestedObject** | Pointer to [**Requestableobjectreference**](requestableobjectreference) |  | [optional] 
**RequesterComment** | Pointer to [**CompletedapprovalRequesterComment**](completedapproval-requester-comment) |  | [optional] 
**ReviewerComment** | Pointer to [**CompletedapprovalReviewerComment**](completedapproval-reviewer-comment) |  | [optional] 
**PreviousReviewersComments** | Pointer to [**[]Commentdto**](commentdto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | Pointer to [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | Pointer to **bool** | When true the rejector has to provide comments when rejecting | [optional] [default to false]
**State** | Pointer to [**Completedapprovalstate**](completedapprovalstate) |  | [optional] 
**RemoveDate** | Pointer to **NullableTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | Pointer to **bool** | If true, then the request was to change the remove date or sunset date. | [optional] [default to false]
**CurrentRemoveDate** | Pointer to **NullableTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date the role or access profile or entitlement is/will assigned to the specified identity. | [optional] 
**StartUpdateRequested** | Pointer to **bool** | If true, then the request is to change the start date or sunrise date. | [optional] [default to false]
**CurrentStartDate** | Pointer to **SailPointTime** | The start date or sunrise date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | Pointer to [**NullableSodviolationcontextcheckcompleted**](sodviolationcontextcheckcompleted) |  | [optional] 
**PreApprovalTriggerResult** | Pointer to [**NullableCompletedapprovalPreApprovalTriggerResult**](completedapproval-pre-approval-trigger-result) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs provided during the request. | [optional] 
**RequestedAccounts** | Pointer to [**[]Requestedaccountref**](requestedaccountref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The privilege level of the requested access item, if applicable. | [optional] 
**MaxPermittedAccessDuration** | Pointer to [**NullablePendingapprovalMaxPermittedAccessDuration**](pendingapproval-max-permitted-access-duration) |  | [optional] 

## Methods

### NewCompletedapproval

`func NewCompletedapproval() *Completedapproval`

NewCompletedapproval instantiates a new Completedapproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompletedapprovalWithDefaults

`func NewCompletedapprovalWithDefaults() *Completedapproval`

NewCompletedapprovalWithDefaults instantiates a new Completedapproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Completedapproval) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Completedapproval) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Completedapproval) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Completedapproval) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Completedapproval) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Completedapproval) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Completedapproval) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Completedapproval) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Completedapproval) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Completedapproval) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Completedapproval) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Completedapproval) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Completedapproval) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Completedapproval) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Completedapproval) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Completedapproval) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetRequestCreated

`func (o *Completedapproval) GetRequestCreated() SailPointTime`

GetRequestCreated returns the RequestCreated field if non-nil, zero value otherwise.

### GetRequestCreatedOk

`func (o *Completedapproval) GetRequestCreatedOk() (*SailPointTime, bool)`

GetRequestCreatedOk returns a tuple with the RequestCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCreated

`func (o *Completedapproval) SetRequestCreated(v SailPointTime)`

SetRequestCreated sets RequestCreated field to given value.

### HasRequestCreated

`func (o *Completedapproval) HasRequestCreated() bool`

HasRequestCreated returns a boolean if a field has been set.

### GetRequestType

`func (o *Completedapproval) GetRequestType() Accessrequesttype`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Completedapproval) GetRequestTypeOk() (*Accessrequesttype, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Completedapproval) SetRequestType(v Accessrequesttype)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Completedapproval) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *Completedapproval) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *Completedapproval) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequester

`func (o *Completedapproval) GetRequester() Accessitemrequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Completedapproval) GetRequesterOk() (*Accessitemrequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Completedapproval) SetRequester(v Accessitemrequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Completedapproval) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *Completedapproval) GetRequestedFor() CompletedapprovalRequestedFor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Completedapproval) GetRequestedForOk() (*CompletedapprovalRequestedFor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Completedapproval) SetRequestedFor(v CompletedapprovalRequestedFor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *Completedapproval) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetReviewedBy

`func (o *Completedapproval) GetReviewedBy() Accessitemreviewedby`

GetReviewedBy returns the ReviewedBy field if non-nil, zero value otherwise.

### GetReviewedByOk

`func (o *Completedapproval) GetReviewedByOk() (*Accessitemreviewedby, bool)`

GetReviewedByOk returns a tuple with the ReviewedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewedBy

`func (o *Completedapproval) SetReviewedBy(v Accessitemreviewedby)`

SetReviewedBy sets ReviewedBy field to given value.

### HasReviewedBy

`func (o *Completedapproval) HasReviewedBy() bool`

HasReviewedBy returns a boolean if a field has been set.

### GetOwner

`func (o *Completedapproval) GetOwner() Ownerdto`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Completedapproval) GetOwnerOk() (*Ownerdto, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Completedapproval) SetOwner(v Ownerdto)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Completedapproval) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRequestedObject

`func (o *Completedapproval) GetRequestedObject() Requestableobjectreference`

GetRequestedObject returns the RequestedObject field if non-nil, zero value otherwise.

### GetRequestedObjectOk

`func (o *Completedapproval) GetRequestedObjectOk() (*Requestableobjectreference, bool)`

GetRequestedObjectOk returns a tuple with the RequestedObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObject

`func (o *Completedapproval) SetRequestedObject(v Requestableobjectreference)`

SetRequestedObject sets RequestedObject field to given value.

### HasRequestedObject

`func (o *Completedapproval) HasRequestedObject() bool`

HasRequestedObject returns a boolean if a field has been set.

### GetRequesterComment

`func (o *Completedapproval) GetRequesterComment() CompletedapprovalRequesterComment`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *Completedapproval) GetRequesterCommentOk() (*CompletedapprovalRequesterComment, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *Completedapproval) SetRequesterComment(v CompletedapprovalRequesterComment)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *Completedapproval) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetReviewerComment

`func (o *Completedapproval) GetReviewerComment() CompletedapprovalReviewerComment`

GetReviewerComment returns the ReviewerComment field if non-nil, zero value otherwise.

### GetReviewerCommentOk

`func (o *Completedapproval) GetReviewerCommentOk() (*CompletedapprovalReviewerComment, bool)`

GetReviewerCommentOk returns a tuple with the ReviewerComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewerComment

`func (o *Completedapproval) SetReviewerComment(v CompletedapprovalReviewerComment)`

SetReviewerComment sets ReviewerComment field to given value.

### HasReviewerComment

`func (o *Completedapproval) HasReviewerComment() bool`

HasReviewerComment returns a boolean if a field has been set.

### GetPreviousReviewersComments

`func (o *Completedapproval) GetPreviousReviewersComments() []Commentdto`

GetPreviousReviewersComments returns the PreviousReviewersComments field if non-nil, zero value otherwise.

### GetPreviousReviewersCommentsOk

`func (o *Completedapproval) GetPreviousReviewersCommentsOk() (*[]Commentdto, bool)`

GetPreviousReviewersCommentsOk returns a tuple with the PreviousReviewersComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousReviewersComments

`func (o *Completedapproval) SetPreviousReviewersComments(v []Commentdto)`

SetPreviousReviewersComments sets PreviousReviewersComments field to given value.

### HasPreviousReviewersComments

`func (o *Completedapproval) HasPreviousReviewersComments() bool`

HasPreviousReviewersComments returns a boolean if a field has been set.

### GetForwardHistory

`func (o *Completedapproval) GetForwardHistory() []Approvalforwardhistory`

GetForwardHistory returns the ForwardHistory field if non-nil, zero value otherwise.

### GetForwardHistoryOk

`func (o *Completedapproval) GetForwardHistoryOk() (*[]Approvalforwardhistory, bool)`

GetForwardHistoryOk returns a tuple with the ForwardHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardHistory

`func (o *Completedapproval) SetForwardHistory(v []Approvalforwardhistory)`

SetForwardHistory sets ForwardHistory field to given value.

### HasForwardHistory

`func (o *Completedapproval) HasForwardHistory() bool`

HasForwardHistory returns a boolean if a field has been set.

### GetCommentRequiredWhenRejected

`func (o *Completedapproval) GetCommentRequiredWhenRejected() bool`

GetCommentRequiredWhenRejected returns the CommentRequiredWhenRejected field if non-nil, zero value otherwise.

### GetCommentRequiredWhenRejectedOk

`func (o *Completedapproval) GetCommentRequiredWhenRejectedOk() (*bool, bool)`

GetCommentRequiredWhenRejectedOk returns a tuple with the CommentRequiredWhenRejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentRequiredWhenRejected

`func (o *Completedapproval) SetCommentRequiredWhenRejected(v bool)`

SetCommentRequiredWhenRejected sets CommentRequiredWhenRejected field to given value.

### HasCommentRequiredWhenRejected

`func (o *Completedapproval) HasCommentRequiredWhenRejected() bool`

HasCommentRequiredWhenRejected returns a boolean if a field has been set.

### GetState

`func (o *Completedapproval) GetState() Completedapprovalstate`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Completedapproval) GetStateOk() (*Completedapprovalstate, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Completedapproval) SetState(v Completedapprovalstate)`

SetState sets State field to given value.

### HasState

`func (o *Completedapproval) HasState() bool`

HasState returns a boolean if a field has been set.

### GetRemoveDate

`func (o *Completedapproval) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Completedapproval) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Completedapproval) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Completedapproval) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### SetRemoveDateNil

`func (o *Completedapproval) SetRemoveDateNil(b bool)`

 SetRemoveDateNil sets the value for RemoveDate to be an explicit nil

### UnsetRemoveDate
`func (o *Completedapproval) UnsetRemoveDate()`

UnsetRemoveDate ensures that no value is present for RemoveDate, not even an explicit nil
### GetRemoveDateUpdateRequested

`func (o *Completedapproval) GetRemoveDateUpdateRequested() bool`

GetRemoveDateUpdateRequested returns the RemoveDateUpdateRequested field if non-nil, zero value otherwise.

### GetRemoveDateUpdateRequestedOk

`func (o *Completedapproval) GetRemoveDateUpdateRequestedOk() (*bool, bool)`

GetRemoveDateUpdateRequestedOk returns a tuple with the RemoveDateUpdateRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDateUpdateRequested

`func (o *Completedapproval) SetRemoveDateUpdateRequested(v bool)`

SetRemoveDateUpdateRequested sets RemoveDateUpdateRequested field to given value.

### HasRemoveDateUpdateRequested

`func (o *Completedapproval) HasRemoveDateUpdateRequested() bool`

HasRemoveDateUpdateRequested returns a boolean if a field has been set.

### GetCurrentRemoveDate

`func (o *Completedapproval) GetCurrentRemoveDate() SailPointTime`

GetCurrentRemoveDate returns the CurrentRemoveDate field if non-nil, zero value otherwise.

### GetCurrentRemoveDateOk

`func (o *Completedapproval) GetCurrentRemoveDateOk() (*SailPointTime, bool)`

GetCurrentRemoveDateOk returns a tuple with the CurrentRemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentRemoveDate

`func (o *Completedapproval) SetCurrentRemoveDate(v SailPointTime)`

SetCurrentRemoveDate sets CurrentRemoveDate field to given value.

### HasCurrentRemoveDate

`func (o *Completedapproval) HasCurrentRemoveDate() bool`

HasCurrentRemoveDate returns a boolean if a field has been set.

### SetCurrentRemoveDateNil

`func (o *Completedapproval) SetCurrentRemoveDateNil(b bool)`

 SetCurrentRemoveDateNil sets the value for CurrentRemoveDate to be an explicit nil

### UnsetCurrentRemoveDate
`func (o *Completedapproval) UnsetCurrentRemoveDate()`

UnsetCurrentRemoveDate ensures that no value is present for CurrentRemoveDate, not even an explicit nil
### GetStartDate

`func (o *Completedapproval) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Completedapproval) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Completedapproval) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Completedapproval) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetStartUpdateRequested

`func (o *Completedapproval) GetStartUpdateRequested() bool`

GetStartUpdateRequested returns the StartUpdateRequested field if non-nil, zero value otherwise.

### GetStartUpdateRequestedOk

`func (o *Completedapproval) GetStartUpdateRequestedOk() (*bool, bool)`

GetStartUpdateRequestedOk returns a tuple with the StartUpdateRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartUpdateRequested

`func (o *Completedapproval) SetStartUpdateRequested(v bool)`

SetStartUpdateRequested sets StartUpdateRequested field to given value.

### HasStartUpdateRequested

`func (o *Completedapproval) HasStartUpdateRequested() bool`

HasStartUpdateRequested returns a boolean if a field has been set.

### GetCurrentStartDate

`func (o *Completedapproval) GetCurrentStartDate() SailPointTime`

GetCurrentStartDate returns the CurrentStartDate field if non-nil, zero value otherwise.

### GetCurrentStartDateOk

`func (o *Completedapproval) GetCurrentStartDateOk() (*SailPointTime, bool)`

GetCurrentStartDateOk returns a tuple with the CurrentStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStartDate

`func (o *Completedapproval) SetCurrentStartDate(v SailPointTime)`

SetCurrentStartDate sets CurrentStartDate field to given value.

### HasCurrentStartDate

`func (o *Completedapproval) HasCurrentStartDate() bool`

HasCurrentStartDate returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *Completedapproval) GetSodViolationContext() Sodviolationcontextcheckcompleted`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *Completedapproval) GetSodViolationContextOk() (*Sodviolationcontextcheckcompleted, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *Completedapproval) SetSodViolationContext(v Sodviolationcontextcheckcompleted)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *Completedapproval) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### SetSodViolationContextNil

`func (o *Completedapproval) SetSodViolationContextNil(b bool)`

 SetSodViolationContextNil sets the value for SodViolationContext to be an explicit nil

### UnsetSodViolationContext
`func (o *Completedapproval) UnsetSodViolationContext()`

UnsetSodViolationContext ensures that no value is present for SodViolationContext, not even an explicit nil
### GetPreApprovalTriggerResult

`func (o *Completedapproval) GetPreApprovalTriggerResult() CompletedapprovalPreApprovalTriggerResult`

GetPreApprovalTriggerResult returns the PreApprovalTriggerResult field if non-nil, zero value otherwise.

### GetPreApprovalTriggerResultOk

`func (o *Completedapproval) GetPreApprovalTriggerResultOk() (*CompletedapprovalPreApprovalTriggerResult, bool)`

GetPreApprovalTriggerResultOk returns a tuple with the PreApprovalTriggerResult field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreApprovalTriggerResult

`func (o *Completedapproval) SetPreApprovalTriggerResult(v CompletedapprovalPreApprovalTriggerResult)`

SetPreApprovalTriggerResult sets PreApprovalTriggerResult field to given value.

### HasPreApprovalTriggerResult

`func (o *Completedapproval) HasPreApprovalTriggerResult() bool`

HasPreApprovalTriggerResult returns a boolean if a field has been set.

### SetPreApprovalTriggerResultNil

`func (o *Completedapproval) SetPreApprovalTriggerResultNil(b bool)`

 SetPreApprovalTriggerResultNil sets the value for PreApprovalTriggerResult to be an explicit nil

### UnsetPreApprovalTriggerResult
`func (o *Completedapproval) UnsetPreApprovalTriggerResult()`

UnsetPreApprovalTriggerResult ensures that no value is present for PreApprovalTriggerResult, not even an explicit nil
### GetClientMetadata

`func (o *Completedapproval) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Completedapproval) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Completedapproval) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Completedapproval) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### GetRequestedAccounts

`func (o *Completedapproval) GetRequestedAccounts() []Requestedaccountref`

GetRequestedAccounts returns the RequestedAccounts field if non-nil, zero value otherwise.

### GetRequestedAccountsOk

`func (o *Completedapproval) GetRequestedAccountsOk() (*[]Requestedaccountref, bool)`

GetRequestedAccountsOk returns a tuple with the RequestedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAccounts

`func (o *Completedapproval) SetRequestedAccounts(v []Requestedaccountref)`

SetRequestedAccounts sets RequestedAccounts field to given value.

### HasRequestedAccounts

`func (o *Completedapproval) HasRequestedAccounts() bool`

HasRequestedAccounts returns a boolean if a field has been set.

### SetRequestedAccountsNil

`func (o *Completedapproval) SetRequestedAccountsNil(b bool)`

 SetRequestedAccountsNil sets the value for RequestedAccounts to be an explicit nil

### UnsetRequestedAccounts
`func (o *Completedapproval) UnsetRequestedAccounts()`

UnsetRequestedAccounts ensures that no value is present for RequestedAccounts, not even an explicit nil
### GetPrivilegeLevel

`func (o *Completedapproval) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Completedapproval) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Completedapproval) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Completedapproval) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *Completedapproval) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *Completedapproval) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil
### GetMaxPermittedAccessDuration

`func (o *Completedapproval) GetMaxPermittedAccessDuration() PendingapprovalMaxPermittedAccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *Completedapproval) GetMaxPermittedAccessDurationOk() (*PendingapprovalMaxPermittedAccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *Completedapproval) SetMaxPermittedAccessDuration(v PendingapprovalMaxPermittedAccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *Completedapproval) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *Completedapproval) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *Completedapproval) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil

