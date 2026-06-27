---
id: v1-pendingapproval
title: Pendingapproval
pagination_label: Pendingapproval
sidebar_label: Pendingapproval
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Pendingapproval', 'V1Pendingapproval'] 
slug: /tools/sdk/go/accessrequestapprovals/models/pendingapproval
tags: ['SDK', 'Software Development Kit', 'Pendingapproval', 'V1Pendingapproval']
---

# Pendingapproval

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The approval id. | [optional] 
**AccessRequestId** | Pointer to **string** | This is the access request id. | [optional] 
**Name** | Pointer to **string** | The name of the approval. | [optional] 
**Created** | Pointer to **SailPointTime** | When the approval was created. | [optional] 
**Modified** | Pointer to **SailPointTime** | When the approval was modified last time. | [optional] 
**RequestCreated** | Pointer to **SailPointTime** | When the access-request was created. | [optional] 
**RequestType** | Pointer to [**NullableAccessrequesttype**](accessrequesttype) |  | [optional] 
**Requester** | Pointer to [**Accessitemrequester**](accessitemrequester) |  | [optional] 
**RequestedFor** | Pointer to [**Accessitemrequestedfor**](accessitemrequestedfor) |  | [optional] 
**Owner** | Pointer to [**PendingapprovalOwner**](pendingapproval-owner) |  | [optional] 
**RequestedObject** | Pointer to [**Requestableobjectreference**](requestableobjectreference) |  | [optional] 
**RequesterComment** | Pointer to [**Commentdto**](commentdto) |  | [optional] 
**PreviousReviewersComments** | Pointer to [**[]Commentdto**](commentdto) | The history of the previous reviewers comments. | [optional] 
**ForwardHistory** | Pointer to [**[]Approvalforwardhistory**](approvalforwardhistory) | The history of approval forward action. | [optional] 
**CommentRequiredWhenRejected** | Pointer to **bool** | When true the rejector has to provide comments when rejecting | [optional] [default to false]
**ActionInProcess** | Pointer to [**Pendingapprovalaction**](pendingapprovalaction) |  | [optional] 
**RemoveDate** | Pointer to **SailPointTime** | The date the role or access profile or entitlement is no longer assigned to the specified identity. | [optional] 
**RemoveDateUpdateRequested** | Pointer to **bool** | If true, then the request is to change the remove date or sunset date. | [optional] [default to false]
**CurrentRemoveDate** | Pointer to **SailPointTime** | The remove date or sunset date that was assigned at the time of the request. | [optional] 
**StartDate** | Pointer to **SailPointTime** | The date the role or access profile or entitlement is/will assigned to the specified identity. | [optional] 
**StartUpdateRequested** | Pointer to **bool** | If true, then the request is to change the start date or sunrise date. | [optional] [default to false]
**CurrentStartDate** | Pointer to **SailPointTime** | The start date or sunrise date that was assigned at the time of the request. | [optional] 
**SodViolationContext** | Pointer to [**NullableSodviolationcontextcheckcompleted**](sodviolationcontextcheckcompleted) |  | [optional] 
**ClientMetadata** | Pointer to **map[string]string** | Arbitrary key-value pairs, if any were included in the corresponding access request item | [optional] 
**RequestedAccounts** | Pointer to [**[]Requestedaccountref**](requestedaccountref) | The accounts selected by the user for the access to be provisioned on, in case they have multiple accounts on one or more sources. | [optional] 
**PrivilegeLevel** | Pointer to **NullableString** | The privilege level of the requested access item, if applicable. | [optional] 
**MaxPermittedAccessDuration** | Pointer to [**NullablePendingapprovalMaxPermittedAccessDuration**](pendingapproval-max-permitted-access-duration) |  | [optional] 

## Methods

### NewPendingapproval

`func NewPendingapproval() *Pendingapproval`

NewPendingapproval instantiates a new Pendingapproval object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingapprovalWithDefaults

`func NewPendingapprovalWithDefaults() *Pendingapproval`

NewPendingapprovalWithDefaults instantiates a new Pendingapproval object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Pendingapproval) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Pendingapproval) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Pendingapproval) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Pendingapproval) HasId() bool`

HasId returns a boolean if a field has been set.

### GetAccessRequestId

`func (o *Pendingapproval) GetAccessRequestId() string`

GetAccessRequestId returns the AccessRequestId field if non-nil, zero value otherwise.

### GetAccessRequestIdOk

`func (o *Pendingapproval) GetAccessRequestIdOk() (*string, bool)`

GetAccessRequestIdOk returns a tuple with the AccessRequestId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestId

`func (o *Pendingapproval) SetAccessRequestId(v string)`

SetAccessRequestId sets AccessRequestId field to given value.

### HasAccessRequestId

`func (o *Pendingapproval) HasAccessRequestId() bool`

HasAccessRequestId returns a boolean if a field has been set.

### GetName

`func (o *Pendingapproval) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Pendingapproval) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Pendingapproval) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Pendingapproval) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Pendingapproval) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Pendingapproval) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Pendingapproval) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Pendingapproval) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Pendingapproval) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Pendingapproval) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Pendingapproval) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Pendingapproval) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetRequestCreated

`func (o *Pendingapproval) GetRequestCreated() SailPointTime`

GetRequestCreated returns the RequestCreated field if non-nil, zero value otherwise.

### GetRequestCreatedOk

`func (o *Pendingapproval) GetRequestCreatedOk() (*SailPointTime, bool)`

GetRequestCreatedOk returns a tuple with the RequestCreated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCreated

`func (o *Pendingapproval) SetRequestCreated(v SailPointTime)`

SetRequestCreated sets RequestCreated field to given value.

### HasRequestCreated

`func (o *Pendingapproval) HasRequestCreated() bool`

HasRequestCreated returns a boolean if a field has been set.

### GetRequestType

`func (o *Pendingapproval) GetRequestType() Accessrequesttype`

GetRequestType returns the RequestType field if non-nil, zero value otherwise.

### GetRequestTypeOk

`func (o *Pendingapproval) GetRequestTypeOk() (*Accessrequesttype, bool)`

GetRequestTypeOk returns a tuple with the RequestType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestType

`func (o *Pendingapproval) SetRequestType(v Accessrequesttype)`

SetRequestType sets RequestType field to given value.

### HasRequestType

`func (o *Pendingapproval) HasRequestType() bool`

HasRequestType returns a boolean if a field has been set.

### SetRequestTypeNil

`func (o *Pendingapproval) SetRequestTypeNil(b bool)`

 SetRequestTypeNil sets the value for RequestType to be an explicit nil

### UnsetRequestType
`func (o *Pendingapproval) UnsetRequestType()`

UnsetRequestType ensures that no value is present for RequestType, not even an explicit nil
### GetRequester

`func (o *Pendingapproval) GetRequester() Accessitemrequester`

GetRequester returns the Requester field if non-nil, zero value otherwise.

### GetRequesterOk

`func (o *Pendingapproval) GetRequesterOk() (*Accessitemrequester, bool)`

GetRequesterOk returns a tuple with the Requester field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequester

`func (o *Pendingapproval) SetRequester(v Accessitemrequester)`

SetRequester sets Requester field to given value.

### HasRequester

`func (o *Pendingapproval) HasRequester() bool`

HasRequester returns a boolean if a field has been set.

### GetRequestedFor

`func (o *Pendingapproval) GetRequestedFor() Accessitemrequestedfor`

GetRequestedFor returns the RequestedFor field if non-nil, zero value otherwise.

### GetRequestedForOk

`func (o *Pendingapproval) GetRequestedForOk() (*Accessitemrequestedfor, bool)`

GetRequestedForOk returns a tuple with the RequestedFor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedFor

`func (o *Pendingapproval) SetRequestedFor(v Accessitemrequestedfor)`

SetRequestedFor sets RequestedFor field to given value.

### HasRequestedFor

`func (o *Pendingapproval) HasRequestedFor() bool`

HasRequestedFor returns a boolean if a field has been set.

### GetOwner

`func (o *Pendingapproval) GetOwner() PendingapprovalOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *Pendingapproval) GetOwnerOk() (*PendingapprovalOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *Pendingapproval) SetOwner(v PendingapprovalOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *Pendingapproval) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### GetRequestedObject

`func (o *Pendingapproval) GetRequestedObject() Requestableobjectreference`

GetRequestedObject returns the RequestedObject field if non-nil, zero value otherwise.

### GetRequestedObjectOk

`func (o *Pendingapproval) GetRequestedObjectOk() (*Requestableobjectreference, bool)`

GetRequestedObjectOk returns a tuple with the RequestedObject field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedObject

`func (o *Pendingapproval) SetRequestedObject(v Requestableobjectreference)`

SetRequestedObject sets RequestedObject field to given value.

### HasRequestedObject

`func (o *Pendingapproval) HasRequestedObject() bool`

HasRequestedObject returns a boolean if a field has been set.

### GetRequesterComment

`func (o *Pendingapproval) GetRequesterComment() Commentdto`

GetRequesterComment returns the RequesterComment field if non-nil, zero value otherwise.

### GetRequesterCommentOk

`func (o *Pendingapproval) GetRequesterCommentOk() (*Commentdto, bool)`

GetRequesterCommentOk returns a tuple with the RequesterComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequesterComment

`func (o *Pendingapproval) SetRequesterComment(v Commentdto)`

SetRequesterComment sets RequesterComment field to given value.

### HasRequesterComment

`func (o *Pendingapproval) HasRequesterComment() bool`

HasRequesterComment returns a boolean if a field has been set.

### GetPreviousReviewersComments

`func (o *Pendingapproval) GetPreviousReviewersComments() []Commentdto`

GetPreviousReviewersComments returns the PreviousReviewersComments field if non-nil, zero value otherwise.

### GetPreviousReviewersCommentsOk

`func (o *Pendingapproval) GetPreviousReviewersCommentsOk() (*[]Commentdto, bool)`

GetPreviousReviewersCommentsOk returns a tuple with the PreviousReviewersComments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPreviousReviewersComments

`func (o *Pendingapproval) SetPreviousReviewersComments(v []Commentdto)`

SetPreviousReviewersComments sets PreviousReviewersComments field to given value.

### HasPreviousReviewersComments

`func (o *Pendingapproval) HasPreviousReviewersComments() bool`

HasPreviousReviewersComments returns a boolean if a field has been set.

### GetForwardHistory

`func (o *Pendingapproval) GetForwardHistory() []Approvalforwardhistory`

GetForwardHistory returns the ForwardHistory field if non-nil, zero value otherwise.

### GetForwardHistoryOk

`func (o *Pendingapproval) GetForwardHistoryOk() (*[]Approvalforwardhistory, bool)`

GetForwardHistoryOk returns a tuple with the ForwardHistory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetForwardHistory

`func (o *Pendingapproval) SetForwardHistory(v []Approvalforwardhistory)`

SetForwardHistory sets ForwardHistory field to given value.

### HasForwardHistory

`func (o *Pendingapproval) HasForwardHistory() bool`

HasForwardHistory returns a boolean if a field has been set.

### GetCommentRequiredWhenRejected

`func (o *Pendingapproval) GetCommentRequiredWhenRejected() bool`

GetCommentRequiredWhenRejected returns the CommentRequiredWhenRejected field if non-nil, zero value otherwise.

### GetCommentRequiredWhenRejectedOk

`func (o *Pendingapproval) GetCommentRequiredWhenRejectedOk() (*bool, bool)`

GetCommentRequiredWhenRejectedOk returns a tuple with the CommentRequiredWhenRejected field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCommentRequiredWhenRejected

`func (o *Pendingapproval) SetCommentRequiredWhenRejected(v bool)`

SetCommentRequiredWhenRejected sets CommentRequiredWhenRejected field to given value.

### HasCommentRequiredWhenRejected

`func (o *Pendingapproval) HasCommentRequiredWhenRejected() bool`

HasCommentRequiredWhenRejected returns a boolean if a field has been set.

### GetActionInProcess

`func (o *Pendingapproval) GetActionInProcess() Pendingapprovalaction`

GetActionInProcess returns the ActionInProcess field if non-nil, zero value otherwise.

### GetActionInProcessOk

`func (o *Pendingapproval) GetActionInProcessOk() (*Pendingapprovalaction, bool)`

GetActionInProcessOk returns a tuple with the ActionInProcess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActionInProcess

`func (o *Pendingapproval) SetActionInProcess(v Pendingapprovalaction)`

SetActionInProcess sets ActionInProcess field to given value.

### HasActionInProcess

`func (o *Pendingapproval) HasActionInProcess() bool`

HasActionInProcess returns a boolean if a field has been set.

### GetRemoveDate

`func (o *Pendingapproval) GetRemoveDate() SailPointTime`

GetRemoveDate returns the RemoveDate field if non-nil, zero value otherwise.

### GetRemoveDateOk

`func (o *Pendingapproval) GetRemoveDateOk() (*SailPointTime, bool)`

GetRemoveDateOk returns a tuple with the RemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDate

`func (o *Pendingapproval) SetRemoveDate(v SailPointTime)`

SetRemoveDate sets RemoveDate field to given value.

### HasRemoveDate

`func (o *Pendingapproval) HasRemoveDate() bool`

HasRemoveDate returns a boolean if a field has been set.

### GetRemoveDateUpdateRequested

`func (o *Pendingapproval) GetRemoveDateUpdateRequested() bool`

GetRemoveDateUpdateRequested returns the RemoveDateUpdateRequested field if non-nil, zero value otherwise.

### GetRemoveDateUpdateRequestedOk

`func (o *Pendingapproval) GetRemoveDateUpdateRequestedOk() (*bool, bool)`

GetRemoveDateUpdateRequestedOk returns a tuple with the RemoveDateUpdateRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveDateUpdateRequested

`func (o *Pendingapproval) SetRemoveDateUpdateRequested(v bool)`

SetRemoveDateUpdateRequested sets RemoveDateUpdateRequested field to given value.

### HasRemoveDateUpdateRequested

`func (o *Pendingapproval) HasRemoveDateUpdateRequested() bool`

HasRemoveDateUpdateRequested returns a boolean if a field has been set.

### GetCurrentRemoveDate

`func (o *Pendingapproval) GetCurrentRemoveDate() SailPointTime`

GetCurrentRemoveDate returns the CurrentRemoveDate field if non-nil, zero value otherwise.

### GetCurrentRemoveDateOk

`func (o *Pendingapproval) GetCurrentRemoveDateOk() (*SailPointTime, bool)`

GetCurrentRemoveDateOk returns a tuple with the CurrentRemoveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentRemoveDate

`func (o *Pendingapproval) SetCurrentRemoveDate(v SailPointTime)`

SetCurrentRemoveDate sets CurrentRemoveDate field to given value.

### HasCurrentRemoveDate

`func (o *Pendingapproval) HasCurrentRemoveDate() bool`

HasCurrentRemoveDate returns a boolean if a field has been set.

### GetStartDate

`func (o *Pendingapproval) GetStartDate() SailPointTime`

GetStartDate returns the StartDate field if non-nil, zero value otherwise.

### GetStartDateOk

`func (o *Pendingapproval) GetStartDateOk() (*SailPointTime, bool)`

GetStartDateOk returns a tuple with the StartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartDate

`func (o *Pendingapproval) SetStartDate(v SailPointTime)`

SetStartDate sets StartDate field to given value.

### HasStartDate

`func (o *Pendingapproval) HasStartDate() bool`

HasStartDate returns a boolean if a field has been set.

### GetStartUpdateRequested

`func (o *Pendingapproval) GetStartUpdateRequested() bool`

GetStartUpdateRequested returns the StartUpdateRequested field if non-nil, zero value otherwise.

### GetStartUpdateRequestedOk

`func (o *Pendingapproval) GetStartUpdateRequestedOk() (*bool, bool)`

GetStartUpdateRequestedOk returns a tuple with the StartUpdateRequested field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStartUpdateRequested

`func (o *Pendingapproval) SetStartUpdateRequested(v bool)`

SetStartUpdateRequested sets StartUpdateRequested field to given value.

### HasStartUpdateRequested

`func (o *Pendingapproval) HasStartUpdateRequested() bool`

HasStartUpdateRequested returns a boolean if a field has been set.

### GetCurrentStartDate

`func (o *Pendingapproval) GetCurrentStartDate() SailPointTime`

GetCurrentStartDate returns the CurrentStartDate field if non-nil, zero value otherwise.

### GetCurrentStartDateOk

`func (o *Pendingapproval) GetCurrentStartDateOk() (*SailPointTime, bool)`

GetCurrentStartDateOk returns a tuple with the CurrentStartDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCurrentStartDate

`func (o *Pendingapproval) SetCurrentStartDate(v SailPointTime)`

SetCurrentStartDate sets CurrentStartDate field to given value.

### HasCurrentStartDate

`func (o *Pendingapproval) HasCurrentStartDate() bool`

HasCurrentStartDate returns a boolean if a field has been set.

### GetSodViolationContext

`func (o *Pendingapproval) GetSodViolationContext() Sodviolationcontextcheckcompleted`

GetSodViolationContext returns the SodViolationContext field if non-nil, zero value otherwise.

### GetSodViolationContextOk

`func (o *Pendingapproval) GetSodViolationContextOk() (*Sodviolationcontextcheckcompleted, bool)`

GetSodViolationContextOk returns a tuple with the SodViolationContext field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSodViolationContext

`func (o *Pendingapproval) SetSodViolationContext(v Sodviolationcontextcheckcompleted)`

SetSodViolationContext sets SodViolationContext field to given value.

### HasSodViolationContext

`func (o *Pendingapproval) HasSodViolationContext() bool`

HasSodViolationContext returns a boolean if a field has been set.

### SetSodViolationContextNil

`func (o *Pendingapproval) SetSodViolationContextNil(b bool)`

 SetSodViolationContextNil sets the value for SodViolationContext to be an explicit nil

### UnsetSodViolationContext
`func (o *Pendingapproval) UnsetSodViolationContext()`

UnsetSodViolationContext ensures that no value is present for SodViolationContext, not even an explicit nil
### GetClientMetadata

`func (o *Pendingapproval) GetClientMetadata() map[string]string`

GetClientMetadata returns the ClientMetadata field if non-nil, zero value otherwise.

### GetClientMetadataOk

`func (o *Pendingapproval) GetClientMetadataOk() (*map[string]string, bool)`

GetClientMetadataOk returns a tuple with the ClientMetadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientMetadata

`func (o *Pendingapproval) SetClientMetadata(v map[string]string)`

SetClientMetadata sets ClientMetadata field to given value.

### HasClientMetadata

`func (o *Pendingapproval) HasClientMetadata() bool`

HasClientMetadata returns a boolean if a field has been set.

### SetClientMetadataNil

`func (o *Pendingapproval) SetClientMetadataNil(b bool)`

 SetClientMetadataNil sets the value for ClientMetadata to be an explicit nil

### UnsetClientMetadata
`func (o *Pendingapproval) UnsetClientMetadata()`

UnsetClientMetadata ensures that no value is present for ClientMetadata, not even an explicit nil
### GetRequestedAccounts

`func (o *Pendingapproval) GetRequestedAccounts() []Requestedaccountref`

GetRequestedAccounts returns the RequestedAccounts field if non-nil, zero value otherwise.

### GetRequestedAccountsOk

`func (o *Pendingapproval) GetRequestedAccountsOk() (*[]Requestedaccountref, bool)`

GetRequestedAccountsOk returns a tuple with the RequestedAccounts field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestedAccounts

`func (o *Pendingapproval) SetRequestedAccounts(v []Requestedaccountref)`

SetRequestedAccounts sets RequestedAccounts field to given value.

### HasRequestedAccounts

`func (o *Pendingapproval) HasRequestedAccounts() bool`

HasRequestedAccounts returns a boolean if a field has been set.

### SetRequestedAccountsNil

`func (o *Pendingapproval) SetRequestedAccountsNil(b bool)`

 SetRequestedAccountsNil sets the value for RequestedAccounts to be an explicit nil

### UnsetRequestedAccounts
`func (o *Pendingapproval) UnsetRequestedAccounts()`

UnsetRequestedAccounts ensures that no value is present for RequestedAccounts, not even an explicit nil
### GetPrivilegeLevel

`func (o *Pendingapproval) GetPrivilegeLevel() string`

GetPrivilegeLevel returns the PrivilegeLevel field if non-nil, zero value otherwise.

### GetPrivilegeLevelOk

`func (o *Pendingapproval) GetPrivilegeLevelOk() (*string, bool)`

GetPrivilegeLevelOk returns a tuple with the PrivilegeLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrivilegeLevel

`func (o *Pendingapproval) SetPrivilegeLevel(v string)`

SetPrivilegeLevel sets PrivilegeLevel field to given value.

### HasPrivilegeLevel

`func (o *Pendingapproval) HasPrivilegeLevel() bool`

HasPrivilegeLevel returns a boolean if a field has been set.

### SetPrivilegeLevelNil

`func (o *Pendingapproval) SetPrivilegeLevelNil(b bool)`

 SetPrivilegeLevelNil sets the value for PrivilegeLevel to be an explicit nil

### UnsetPrivilegeLevel
`func (o *Pendingapproval) UnsetPrivilegeLevel()`

UnsetPrivilegeLevel ensures that no value is present for PrivilegeLevel, not even an explicit nil
### GetMaxPermittedAccessDuration

`func (o *Pendingapproval) GetMaxPermittedAccessDuration() PendingapprovalMaxPermittedAccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *Pendingapproval) GetMaxPermittedAccessDurationOk() (*PendingapprovalMaxPermittedAccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *Pendingapproval) SetMaxPermittedAccessDuration(v PendingapprovalMaxPermittedAccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *Pendingapproval) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *Pendingapproval) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *Pendingapproval) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil

