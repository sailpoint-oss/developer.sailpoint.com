---
id: v1-preapprovaltriggerdetails
title: Preapprovaltriggerdetails
pagination_label: Preapprovaltriggerdetails
sidebar_label: Preapprovaltriggerdetails
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Preapprovaltriggerdetails', 'V1Preapprovaltriggerdetails'] 
slug: /tools/sdk/go/accessrequests/models/preapprovaltriggerdetails
tags: ['SDK', 'Software Development Kit', 'Preapprovaltriggerdetails', 'V1Preapprovaltriggerdetails']
---

# Preapprovaltriggerdetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Comment** | Pointer to **string** | Comment left for the pre-approval decision | [optional] 
**Reviewer** | Pointer to **string** | The reviewer of the pre-approval decision | [optional] 
**Decision** | Pointer to **string** | The decision of the pre-approval trigger | [optional] 

## Methods

### NewPreapprovaltriggerdetails

`func NewPreapprovaltriggerdetails() *Preapprovaltriggerdetails`

NewPreapprovaltriggerdetails instantiates a new Preapprovaltriggerdetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPreapprovaltriggerdetailsWithDefaults

`func NewPreapprovaltriggerdetailsWithDefaults() *Preapprovaltriggerdetails`

NewPreapprovaltriggerdetailsWithDefaults instantiates a new Preapprovaltriggerdetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetComment

`func (o *Preapprovaltriggerdetails) GetComment() string`

GetComment returns the Comment field if non-nil, zero value otherwise.

### GetCommentOk

`func (o *Preapprovaltriggerdetails) GetCommentOk() (*string, bool)`

GetCommentOk returns a tuple with the Comment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComment

`func (o *Preapprovaltriggerdetails) SetComment(v string)`

SetComment sets Comment field to given value.

### HasComment

`func (o *Preapprovaltriggerdetails) HasComment() bool`

HasComment returns a boolean if a field has been set.

### GetReviewer

`func (o *Preapprovaltriggerdetails) GetReviewer() string`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Preapprovaltriggerdetails) GetReviewerOk() (*string, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Preapprovaltriggerdetails) SetReviewer(v string)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *Preapprovaltriggerdetails) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetDecision

`func (o *Preapprovaltriggerdetails) GetDecision() string`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *Preapprovaltriggerdetails) GetDecisionOk() (*string, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *Preapprovaltriggerdetails) SetDecision(v string)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *Preapprovaltriggerdetails) HasDecision() bool`

HasDecision returns a boolean if a field has been set.


