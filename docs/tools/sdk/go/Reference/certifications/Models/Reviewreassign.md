---
id: v1-reviewreassign
title: Reviewreassign
pagination_label: Reviewreassign
sidebar_label: Reviewreassign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewreassign', 'V1Reviewreassign'] 
slug: /tools/sdk/go/certifications/models/reviewreassign
tags: ['SDK', 'Software Development Kit', 'Reviewreassign', 'V1Reviewreassign']
---

# Reviewreassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reassign** | [**[]Reassignreference**](reassignreference) |  | 
**ReassignTo** | **string** | The ID of the identity to which the certification is reassigned | 
**Reason** | **string** | The reason comment for why the reassign was made | 

## Methods

### NewReviewreassign

`func NewReviewreassign(reassign []Reassignreference, reassignTo string, reason string, ) *Reviewreassign`

NewReviewreassign instantiates a new Reviewreassign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewreassignWithDefaults

`func NewReviewreassignWithDefaults() *Reviewreassign`

NewReviewreassignWithDefaults instantiates a new Reviewreassign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetReassign

`func (o *Reviewreassign) GetReassign() []Reassignreference`

GetReassign returns the Reassign field if non-nil, zero value otherwise.

### GetReassignOk

`func (o *Reviewreassign) GetReassignOk() (*[]Reassignreference, bool)`

GetReassignOk returns a tuple with the Reassign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassign

`func (o *Reviewreassign) SetReassign(v []Reassignreference)`

SetReassign sets Reassign field to given value.


### GetReassignTo

`func (o *Reviewreassign) GetReassignTo() string`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *Reviewreassign) GetReassignToOk() (*string, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *Reviewreassign) SetReassignTo(v string)`

SetReassignTo sets ReassignTo field to given value.


### GetReason

`func (o *Reviewreassign) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *Reviewreassign) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *Reviewreassign) SetReason(v string)`

SetReason sets Reason field to given value.



