---
id: v2025-requested-item-status-pre-approval-trigger-details
title: RequestedItemStatusPreApprovalTriggerDetails
pagination_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_label: RequestedItemStatusPreApprovalTriggerDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2025RequestedItemStatusPreApprovalTriggerDetails'] 
slug: /tools/sdk/go/v2025/models/requested-item-status-pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'RequestedItemStatusPreApprovalTriggerDetails', 'V2025RequestedItemStatusPreApprovalTriggerDetails']
---

# RequestedItemStatusPreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | Pointer to **string** | The reviewer of the pre-approval decision | [optional] 
**Decision** | Pointer to **string** | The decision of the pre-approval trigger | [optional] 

## Methods

### NewRequestedItemStatusPreApprovalTriggerDetails

`func NewRequestedItemStatusPreApprovalTriggerDetails() *RequestedItemStatusPreApprovalTriggerDetails`

NewRequestedItemStatusPreApprovalTriggerDetails instantiates a new RequestedItemStatusPreApprovalTriggerDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRequestedItemStatusPreApprovalTriggerDetailsWithDefaults

`func NewRequestedItemStatusPreApprovalTriggerDetailsWithDefaults() *RequestedItemStatusPreApprovalTriggerDetails`

NewRequestedItemStatusPreApprovalTriggerDetailsWithDefaults instantiates a new RequestedItemStatusPreApprovalTriggerDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *RequestedItemStatusPreApprovalTriggerDetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *RequestedItemStatusPreApprovalTriggerDetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *RequestedItemStatusPreApprovalTriggerDetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *RequestedItemStatusPreApprovalTriggerDetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReviewer

`func (o *RequestedItemStatusPreApprovalTriggerDetails) GetReviewer() string`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *RequestedItemStatusPreApprovalTriggerDetails) GetReviewerOk() (*string, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *RequestedItemStatusPreApprovalTriggerDetails) SetReviewer(v string)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *RequestedItemStatusPreApprovalTriggerDetails) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetDecision

`func (o *RequestedItemStatusPreApprovalTriggerDetails) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *RequestedItemStatusPreApprovalTriggerDetails) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *RequestedItemStatusPreApprovalTriggerDetails) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *RequestedItemStatusPreApprovalTriggerDetails) HasDecision() bool`

HasDecision returns a boolean if a field has been set.


