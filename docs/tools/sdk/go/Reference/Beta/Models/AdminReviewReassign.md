---
id: beta-admin-review-reassign
title: AdminReviewReassign
pagination_label: AdminReviewReassign
sidebar_label: AdminReviewReassign
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AdminReviewReassign', 'BetaAdminReviewReassign'] 
slug: /tools/sdk/go/beta/models/admin-review-reassign
tags: ['SDK', 'Software Development Kit', 'AdminReviewReassign', 'BetaAdminReviewReassign']
---

# AdminReviewReassign

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CertificationIds** | Pointer to **[]string** | List of certification IDs to reassign | [optional] 
**ReassignTo** | Pointer to [**AdminReviewReassignReassignTo**](admin-review-reassign-reassign-to) |  | [optional] 
**Reason** | Pointer to **string** | Comment to explain why the certification was reassigned | [optional] 

## Methods

### NewAdminReviewReassign

`func NewAdminReviewReassign() *AdminReviewReassign`

NewAdminReviewReassign instantiates a new AdminReviewReassign object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdminReviewReassignWithDefaults

`func NewAdminReviewReassignWithDefaults() *AdminReviewReassign`

NewAdminReviewReassignWithDefaults instantiates a new AdminReviewReassign object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCertificationIds

`func (o *AdminReviewReassign) GetCertificationIds() []string`

GetCertificationIds returns the CertificationIds field if non-nil, zero value otherwise.

### GetCertificationIdsOk

`func (o *AdminReviewReassign) GetCertificationIdsOk() (*[]string, bool)`

GetCertificationIdsOk returns a tuple with the CertificationIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCertificationIds

`func (o *AdminReviewReassign) SetCertificationIds(v []string)`

SetCertificationIds sets CertificationIds field to given value.

### HasCertificationIds

`func (o *AdminReviewReassign) HasCertificationIds() bool`

HasCertificationIds returns a boolean if a field has been set.

### GetReassignTo

`func (o *AdminReviewReassign) GetReassignTo() AdminReviewReassignReassignTo`

GetReassignTo returns the ReassignTo field if non-nil, zero value otherwise.

### GetReassignToOk

`func (o *AdminReviewReassign) GetReassignToOk() (*AdminReviewReassignReassignTo, bool)`

GetReassignToOk returns a tuple with the ReassignTo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignTo

`func (o *AdminReviewReassign) SetReassignTo(v AdminReviewReassignReassignTo)`

SetReassignTo sets ReassignTo field to given value.

### HasReassignTo

`func (o *AdminReviewReassign) HasReassignTo() bool`

HasReassignTo returns a boolean if a field has been set.

### GetReason

`func (o *AdminReviewReassign) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *AdminReviewReassign) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *AdminReviewReassign) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *AdminReviewReassign) HasReason() bool`

HasReason returns a boolean if a field has been set.


