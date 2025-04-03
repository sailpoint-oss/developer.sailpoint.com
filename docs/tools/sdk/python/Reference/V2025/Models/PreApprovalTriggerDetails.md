---
id: v2025-pre-approval-trigger-details
title: PreApprovalTriggerDetails
pagination_label: PreApprovalTriggerDetails
sidebar_label: PreApprovalTriggerDetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PreApprovalTriggerDetails', 'V2025PreApprovalTriggerDetails'] 
slug: /tools/sdk/go/v2025/models/pre-approval-trigger-details
tags: ['SDK', 'Software Development Kit', 'PreApprovalTriggerDetails', 'V2025PreApprovalTriggerDetails']
---

# PreApprovalTriggerDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | Pointer to **string** | The reviewer of the pre-approval decision | [optional] 
**Decision** | Pointer to **string** | The decision of the pre-approval trigger | [optional] 

## Methods

### NewPreApprovalTriggerDetails

`func NewPreApprovalTriggerDetails() *PreApprovalTriggerDetails`

NewPreApprovalTriggerDetails instantiates a new PreApprovalTriggerDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreApprovalTriggerDetailsWithDefaults

`func NewPreApprovalTriggerDetailsWithDefaults() *PreApprovalTriggerDetails`

NewPreApprovalTriggerDetailsWithDefaults instantiates a new PreApprovalTriggerDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *PreApprovalTriggerDetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *PreApprovalTriggerDetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *PreApprovalTriggerDetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *PreApprovalTriggerDetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReviewer

`func (o *PreApprovalTriggerDetails) GetReviewer() string`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *PreApprovalTriggerDetails) GetReviewerOk() (*string, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *PreApprovalTriggerDetails) SetReviewer(v string)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *PreApprovalTriggerDetails) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetDecision

`func (o *PreApprovalTriggerDetails) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *PreApprovalTriggerDetails) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *PreApprovalTriggerDetails) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *PreApprovalTriggerDetails) HasDecision() bool`

HasDecision returns a boolean if a field has been set.


