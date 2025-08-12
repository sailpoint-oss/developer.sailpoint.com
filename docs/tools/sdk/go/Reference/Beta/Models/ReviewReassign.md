---
id: beta-review-reassign
title: ReviewReassign
pagination_label: ReviewReassign
sidebar_label: ReviewReassign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewReassign', 'BetaReviewReassign'] 
slug: /tools/sdk/go/beta/models/review-reassign
tags: ['SDK', 'Software Development Kit', 'ReviewReassign', 'BetaReviewReassign']
---

# ReviewReassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** | [**[]ReassignReference**](reassign-reference) |  | 
**ReassignTo** | **string** | The ID of the identity to which the certification is reassigned | 
**Reason** | **string** | The reason comment for why the reassign was made | 

## Methods

### NewReviewReassign

`func NewReviewReassign(reassign []ReassignReference, reassignTo string, reason string, ) *ReviewReassign`

NewReviewReassign instantiates a new ReviewReassign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewReassignWithDefaults

`func NewReviewReassignWithDefaults() *ReviewReassign`

NewReviewReassignWithDefaults instantiates a new ReviewReassign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassign

`func (o *ReviewReassign) GetReassign() []ReassignReference`

GetReassign returns the Reassign field if non-nil, zero value otherwise.

### GetReassignOk

`func (o *ReviewReassign) GetReassignOk() (*[]ReassignReference, bool)`

GetReassignOk returns a tuple with the Reassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassign

`func (o *ReviewReassign) SetReassign(v []ReassignReference)`

SetReassign sets Reassign field to given value.


### GetReassignTo

`func (o *ReviewReassign) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *ReviewReassign) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *ReviewReassign) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.


### GetReason

`func (o *ReviewReassign) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ReviewReassign) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ReviewReassign) SetReason(v string)`

SetReason sets Reason field to given value.



