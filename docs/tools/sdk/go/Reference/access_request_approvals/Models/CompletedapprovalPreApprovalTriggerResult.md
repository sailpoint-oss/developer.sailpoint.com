---
id: v1-completedapproval-pre-approval-trigger-result
title: CompletedapprovalPreApprovalTriggerResult
pagination_label: CompletedapprovalPreApprovalTriggerResult
sidebar_label: CompletedapprovalPreApprovalTriggerResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CompletedapprovalPreApprovalTriggerResult', 'V1CompletedapprovalPreApprovalTriggerResult'] 
slug: /tools/sdk/go/accessrequestapprovals/models/completedapproval-pre-approval-trigger-result
tags: ['SDK', 'Software Development Kit', 'CompletedapprovalPreApprovalTriggerResult', 'V1CompletedapprovalPreApprovalTriggerResult']
---

# CompletedapprovalPreApprovalTriggerResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | The comment from the trigger | [optional] 
**Decision** | Pointer to [**Completedapprovalstate**](completedapprovalstate) |  | [optional] 
**Reviewer** | Pointer to **string** | The name of the approver | [optional] 
**Date** | Pointer to **SailPointTime** | The date and time the trigger decided on the request | [optional] 

## Methods

### NewCompletedapprovalPreApprovalTriggerResult

`func NewCompletedapprovalPreApprovalTriggerResult() *CompletedapprovalPreApprovalTriggerResult`

NewCompletedapprovalPreApprovalTriggerResult instantiates a new CompletedapprovalPreApprovalTriggerResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompletedapprovalPreApprovalTriggerResultWithDefaults

`func NewCompletedapprovalPreApprovalTriggerResultWithDefaults() *CompletedapprovalPreApprovalTriggerResult`

NewCompletedapprovalPreApprovalTriggerResultWithDefaults instantiates a new CompletedapprovalPreApprovalTriggerResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CompletedapprovalPreApprovalTriggerResult) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CompletedapprovalPreApprovalTriggerResult) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CompletedapprovalPreApprovalTriggerResult) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CompletedapprovalPreApprovalTriggerResult) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetDecision

`func (o *CompletedapprovalPreApprovalTriggerResult) GetDecision() Completedapprovalstate`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *CompletedapprovalPreApprovalTriggerResult) GetDecisionOk() (*Completedapprovalstate, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *CompletedapprovalPreApprovalTriggerResult) SetDecision(v Completedapprovalstate)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *CompletedapprovalPreApprovalTriggerResult) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetReviewer

`func (o *CompletedapprovalPreApprovalTriggerResult) GetReviewer() string`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CompletedapprovalPreApprovalTriggerResult) GetReviewerOk() (*string, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CompletedapprovalPreApprovalTriggerResult) SetReviewer(v string)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CompletedapprovalPreApprovalTriggerResult) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetDate

`func (o *CompletedapprovalPreApprovalTriggerResult) GetDate() SailPointTime`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *CompletedapprovalPreApprovalTriggerResult) GetDateOk() (*SailPointTime, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *CompletedapprovalPreApprovalTriggerResult) SetDate(v SailPointTime)`

SetDate sets Date field to given value.

### HasDate

`func (o *CompletedapprovalPreApprovalTriggerResult) HasDate() bool`

HasDate returns a boolean if a field has been set.


