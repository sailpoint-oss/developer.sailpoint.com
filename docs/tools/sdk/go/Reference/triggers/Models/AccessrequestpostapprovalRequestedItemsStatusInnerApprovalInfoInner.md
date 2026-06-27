---
id: v1-accessrequestpostapproval-requested-items-status-inner-approval-info-inner
title: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
pagination_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_label: AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner', 'V1AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner'] 
slug: /tools/sdk/go/triggers/models/accessrequestpostapproval-requested-items-status-inner-approval-info-inner
tags: ['SDK', 'Software Development Kit', 'AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner', 'V1AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner']
---

# AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalComment** | Pointer to **NullableString** | A comment left by the approver. | [optional] 
**ApprovalDecision** | **string** | The final decision of the approver. | 
**ApproverName** | **string** | The name of the approver | 
**Approver** | [**AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover**](accessrequestpostapproval-requested-items-status-inner-approval-info-inner-approver) |  | 

## Methods

### NewAccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner

`func NewAccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner(approvalDecision string, approverName string, approver AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover, ) *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner`

NewAccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner instantiates a new AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerWithDefaults

`func NewAccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerWithDefaults() *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner`

NewAccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerWithDefaults instantiates a new AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalComment

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalComment() string`

GetApprovalComment returns the ApprovalComment field if non-nil, zero value otherwise.

### GetApprovalCommentOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalCommentOk() (*string, bool)`

GetApprovalCommentOk returns a tuple with the ApprovalComment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalComment

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprovalComment(v string)`

SetApprovalComment sets ApprovalComment field to given value.

### HasApprovalComment

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) HasApprovalComment() bool`

HasApprovalComment returns a boolean if a field has been set.

### SetApprovalCommentNil

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprovalCommentNil(b bool)`

 SetApprovalCommentNil sets the value for ApprovalComment to be an explicit nil

### UnsetApprovalComment
`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) UnsetApprovalComment()`

UnsetApprovalComment ensures that no value is present for ApprovalComment, not even an explicit nil
### GetApprovalDecision

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalDecision() string`

GetApprovalDecision returns the ApprovalDecision field if non-nil, zero value otherwise.

### GetApprovalDecisionOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprovalDecisionOk() (*string, bool)`

GetApprovalDecisionOk returns a tuple with the ApprovalDecision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalDecision

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprovalDecision(v string)`

SetApprovalDecision sets ApprovalDecision field to given value.


### GetApproverName

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApproverName() string`

GetApproverName returns the ApproverName field if non-nil, zero value otherwise.

### GetApproverNameOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApproverNameOk() (*string, bool)`

GetApproverNameOk returns a tuple with the ApproverName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApproverName

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) SetApproverName(v string)`

SetApproverName sets ApproverName field to given value.


### GetApprover

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApprover() AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover`

GetApprover returns the Approver field if non-nil, zero value otherwise.

### GetApproverOk

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) GetApproverOk() (*AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover, bool)`

GetApproverOk returns a tuple with the Approver field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprover

`func (o *AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInner) SetApprover(v AccessrequestpostapprovalRequestedItemsStatusInnerApprovalInfoInnerApprover)`

SetApprover sets Approver field to given value.



