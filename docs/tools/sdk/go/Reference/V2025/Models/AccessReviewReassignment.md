---
id: v2025-access-review-reassignment
title: AccessReviewReassignment
pagination_label: AccessReviewReassignment
sidebar_label: AccessReviewReassignment
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessReviewReassignment', 'V2025AccessReviewReassignment'] 
slug: /tools/sdk/go/v2025/models/access-review-reassignment
tags: ['SDK', 'Software Development Kit', 'AccessReviewReassignment', 'V2025AccessReviewReassignment']
---

# AccessReviewReassignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** | [**[]ReassignReference**](reassign-reference) |  | 
**ReassignTo** | **string** | The ID of the identity to which the certification is reassigned | 
**Reason** | **string** | The reason comment for why the reassign was made | 

## Methods

### NewAccessReviewReassignment

`func NewAccessReviewReassignment(reassign []ReassignReference, reassignTo string, reason string, ) *AccessReviewReassignment`

NewAccessReviewReassignment instantiates a new AccessReviewReassignment object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessReviewReassignmentWithDefaults

`func NewAccessReviewReassignmentWithDefaults() *AccessReviewReassignment`

NewAccessReviewReassignmentWithDefaults instantiates a new AccessReviewReassignment object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassign

`func (o *AccessReviewReassignment) GetReassign() []ReassignReference`

GetReassign returns the Reassign field if non-nil, zero value otherwise.

### GetReassignOk

`func (o *AccessReviewReassignment) GetReassignOk() (*[]ReassignReference, bool)`

GetReassignOk returns a tuple with the Reassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassign

`func (o *AccessReviewReassignment) SetReassign(v []ReassignReference)`

SetReassign sets Reassign field to given value.


### GetReassignTo

`func (o *AccessReviewReassignment) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *AccessReviewReassignment) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *AccessReviewReassignment) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.


### GetReason

`func (o *AccessReviewReassignment) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *AccessReviewReassignment) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *AccessReviewReassignment) SetReason(v string)`

SetReason sets Reason field to given value.



