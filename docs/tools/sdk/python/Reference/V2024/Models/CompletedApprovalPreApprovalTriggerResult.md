---
id: v2024-completed-approval-pre-approval-trigger-result
title: CompletedApprovalPreApprovalTriggerResult
pagination_label: CompletedApprovalPreApprovalTriggerResult
sidebar_label: CompletedApprovalPreApprovalTriggerResult
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CompletedApprovalPreApprovalTriggerResult', 'V2024CompletedApprovalPreApprovalTriggerResult'] 
slug: /tools/sdk/go/v2024/models/completed-approval-pre-approval-trigger-result
tags: ['SDK', 'Software Development Kit', 'CompletedApprovalPreApprovalTriggerResult', 'V2024CompletedApprovalPreApprovalTriggerResult']
---

# CompletedApprovalPreApprovalTriggerResult

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | The comment from the trigger | [optional] 
**Decision** | Pointer to [**CompletedApprovalState**](completed-approval-state) |  | [optional] 
**Reviewer** | Pointer to **string** | The name of the approver | [optional] 
**Date** | Pointer to **SailPointTime** | The date and time the trigger decided on the request | [optional] 

## Methods

### NewCompletedApprovalPreApprovalTriggerResult

`func NewCompletedApprovalPreApprovalTriggerResult() *CompletedApprovalPreApprovalTriggerResult`

NewCompletedApprovalPreApprovalTriggerResult instantiates a new CompletedApprovalPreApprovalTriggerResult object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCompletedApprovalPreApprovalTriggerResultWithDefaults

`func NewCompletedApprovalPreApprovalTriggerResultWithDefaults() *CompletedApprovalPreApprovalTriggerResult`

NewCompletedApprovalPreApprovalTriggerResultWithDefaults instantiates a new CompletedApprovalPreApprovalTriggerResult object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *CompletedApprovalPreApprovalTriggerResult) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *CompletedApprovalPreApprovalTriggerResult) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *CompletedApprovalPreApprovalTriggerResult) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *CompletedApprovalPreApprovalTriggerResult) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetDecision

`func (o *CompletedApprovalPreApprovalTriggerResult) GetDecision() CompletedApprovalState`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *CompletedApprovalPreApprovalTriggerResult) GetDecisionOk() (*CompletedApprovalState, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *CompletedApprovalPreApprovalTriggerResult) SetDecision(v CompletedApprovalState)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *CompletedApprovalPreApprovalTriggerResult) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetReviewer

`func (o *CompletedApprovalPreApprovalTriggerResult) GetReviewer() string`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CompletedApprovalPreApprovalTriggerResult) GetReviewerOk() (*string, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CompletedApprovalPreApprovalTriggerResult) SetReviewer(v string)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *CompletedApprovalPreApprovalTriggerResult) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetDate

`func (o *CompletedApprovalPreApprovalTriggerResult) GetDate() SailPointTime`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *CompletedApprovalPreApprovalTriggerResult) GetDateOk() (*SailPointTime, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *CompletedApprovalPreApprovalTriggerResult) SetDate(v SailPointTime)`

SetDate sets Date field to given value.

### HasDate

`func (o *CompletedApprovalPreApprovalTriggerResult) HasDate() bool`

HasDate returns a boolean if a field has been set.


