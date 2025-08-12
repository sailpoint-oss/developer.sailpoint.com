---
id: beta-access-request-post-approval-requested-items-status-inner-approval-info-inner
title: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/go/beta/models/access-request-post-approval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner', 'BetaAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner']
---

# AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalComment** | Pointer to **NullableString** | Approver's comment. | [optional] 
**ApprovalDecision** | **map[string]interface{}** | Approver's final decision. | 
**ApproverName** | **string** | Approver's name. | 
**Approver** | [**AccessItemApproverDto**](access-item-approver-dto) | Approver's identity. | 

## Methods

### NewAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner

`func NewAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner(approvalDecision map[string]interface{}, approverName string, approver AccessItemApproverDto, ) *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner`

NewAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner instantiates a new AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerWithDefaults

`func NewAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerWithDefaults() *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner`

NewAccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInnerWithDefaults instantiates a new AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalComment

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalComment() string`

GetApprovalComment returns the ApprovalComment field if non-nil, zero value otherwise.

### GetApprovalCommentOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalCommentOk() (*string, bool)`

GetApprovalCommentOk returns a tuple with the ApprovalComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalComment

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprovalComment(v string)`

SetApprovalComment sets ApprovalComment field to given value.

### HasApprovalComment

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) HasApprovalComment() bool`

HasApprovalComment returns a boolean if a field has been set.

### SetApprovalCommentNil

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprovalCommentNil(b bool)`

 SetApprovalCommentNil sets the value for ApprovalComment to be an explicit nil

### UnsetApprovalComment
`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) UnsetApprovalComment()`

UnsetApprovalComment ensures that no value is present for ApprovalComment, not even an explicit nil
### GetApprovalDecision

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalDecision() map[string]interface{}`

GetApprovalDecision returns the ApprovalDecision field if non-nil, zero value otherwise.

### GetApprovalDecisionOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalDecisionOk() (*map[string]interface{}, bool)`

GetApprovalDecisionOk returns a tuple with the ApprovalDecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDecision

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprovalDecision(v map[string]interface{})`

SetApprovalDecision sets ApprovalDecision field to given value.


### GetApproverName

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApproverName() string`

GetApproverName returns the ApproverName field if non-nil, zero value otherwise.

### GetApproverNameOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApproverNameOk() (*string, bool)`

GetApproverNameOk returns a tuple with the ApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverName

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) SetApproverName(v string)`

SetApproverName sets ApproverName field to given value.


### GetApprover

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprover() AccessItemApproverDto`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) GetApproverOk() (*AccessItemApproverDto, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *AccessRequestPostApprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprover(v AccessItemApproverDto)`

SetApprover sets Approver field to given value.



