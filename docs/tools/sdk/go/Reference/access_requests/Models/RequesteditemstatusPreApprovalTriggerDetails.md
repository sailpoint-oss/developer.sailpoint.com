---
id: v1-requesteditemstatus-pre-approval-trigger-details
title: RequesteditemstatusPreApprovalTriggerDetails
pagination_label: RequesteditemstatusPreApprovalTriggerDetails
sidebar_label: RequesteditemstatusPreApprovalTriggerDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequesteditemstatusPreApprovalTriggerDetails', 'V1RequesteditemstatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/go/accessrequests/models/requesteditemstatus-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequesteditemstatusPreApprovalTriggerDetails', 'V1RequesteditemstatusPreApprovalTriggerDetails']
---

# RequesteditemstatusPreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | Pointer to **string** | The reviewer of the pre-approval decision | [optional] 
**Decision** | Pointer to **string** | The decision of the pre-approval trigger | [optional] 

## Methods

### NewRequesteditemstatusPreApprovalTriggerDetails

`func NewRequesteditemstatusPreApprovalTriggerDetails() *RequesteditemstatusPreApprovalTriggerDetails`

NewRequesteditemstatusPreApprovalTriggerDetails instantiates a new RequesteditemstatusPreApprovalTriggerDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequesteditemstatusPreApprovalTriggerDetailsWithDefaults

`func NewRequesteditemstatusPreApprovalTriggerDetailsWithDefaults() *RequesteditemstatusPreApprovalTriggerDetails`

NewRequesteditemstatusPreApprovalTriggerDetailsWithDefaults instantiates a new RequesteditemstatusPreApprovalTriggerDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *RequesteditemstatusPreApprovalTriggerDetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequesteditemstatusPreApprovalTriggerDetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequesteditemstatusPreApprovalTriggerDetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequesteditemstatusPreApprovalTriggerDetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReviewer

`func (o *RequesteditemstatusPreApprovalTriggerDetails) GetReviewer() string`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *RequesteditemstatusPreApprovalTriggerDetails) GetReviewerOk() (*string, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *RequesteditemstatusPreApprovalTriggerDetails) SetReviewer(v string)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *RequesteditemstatusPreApprovalTriggerDetails) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetDecision

`func (o *RequesteditemstatusPreApprovalTriggerDetails) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *RequesteditemstatusPreApprovalTriggerDetails) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *RequesteditemstatusPreApprovalTriggerDetails) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *RequesteditemstatusPreApprovalTriggerDetails) HasDecision() bool`

HasDecision returns a boolean if a field has been set.


