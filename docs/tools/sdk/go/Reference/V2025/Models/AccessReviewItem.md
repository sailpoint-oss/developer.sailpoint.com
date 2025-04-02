---
id: access-review-item
title: AccessReviewItem
pagination_label: AccessReviewItem
sidebar_label: AccessReviewItem
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessReviewItem', 'AccessReviewItem'] 
slug: /tools/sdk/go//models/access-review-item
tags: ['SDK', 'Software Development Kit', 'AccessReviewItem', 'AccessReviewItem']
---

# AccessReviewItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessSummary** | Pointer to [**AccessSummary**](access-summary) |  | [optional] 
**IdentitySummary** | Pointer to [**CertificationIdentitySummary**](certification-identity-summary) |  | [optional] 
**Id** | Pointer to **string** | The review item's id | [optional] 
**Completed** | Pointer to **bool** | Whether the review item is complete | [optional] 
**NewAccess** | Pointer to **bool** | Indicates whether the review item is for new access to a source | [optional] 
**Decision** | Pointer to [**CertificationDecision**](certification-decision) |  | [optional] 
**Comments** | Pointer to **NullableString** | Comments for this review item | [optional] 

## Methods

### NewAccessReviewItem

`func NewAccessReviewItem() *AccessReviewItem`

NewAccessReviewItem instantiates a new AccessReviewItem object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessReviewItemWithDefaults

`func NewAccessReviewItemWithDefaults() *AccessReviewItem`

NewAccessReviewItemWithDefaults instantiates a new AccessReviewItem object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessSummary

`func (o *AccessReviewItem) GetAccessSummary() AccessSummary`

GetAccessSummary returns the AccessSummary field if non-nil, zero value otherwise.

### GetAccessSummaryOk

`func (o *AccessReviewItem) GetAccessSummaryOk() (*AccessSummary, bool)`

GetAccessSummaryOk returns a tuple with the AccessSummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessSummary

`func (o *AccessReviewItem) SetAccessSummary(v AccessSummary)`

SetAccessSummary sets AccessSummary field to given value.

### HasAccessSummary

`func (o *AccessReviewItem) HasAccessSummary() bool`

HasAccessSummary returns a boolean if a field has been set.

### GetIdentitySummary

`func (o *AccessReviewItem) GetIdentitySummary() CertificationIdentitySummary`

GetIdentitySummary returns the IdentitySummary field if non-nil, zero value otherwise.

### GetIdentitySummaryOk

`func (o *AccessReviewItem) GetIdentitySummaryOk() (*CertificationIdentitySummary, bool)`

GetIdentitySummaryOk returns a tuple with the IdentitySummary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitySummary

`func (o *AccessReviewItem) SetIdentitySummary(v CertificationIdentitySummary)`

SetIdentitySummary sets IdentitySummary field to given value.

### HasIdentitySummary

`func (o *AccessReviewItem) HasIdentitySummary() bool`

HasIdentitySummary returns a boolean if a field has been set.

### GetId

`func (o *AccessReviewItem) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *AccessReviewItem) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *AccessReviewItem) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *AccessReviewItem) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCompleted

`func (o *AccessReviewItem) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *AccessReviewItem) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *AccessReviewItem) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *AccessReviewItem) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetNewAccess

`func (o *AccessReviewItem) GetNewAccess() bool`

GetNewAccess returns the NewAccess field if non-nil, zero value otherwise.

### GetNewAccessOk

`func (o *AccessReviewItem) GetNewAccessOk() (*bool, bool)`

GetNewAccessOk returns a tuple with the NewAccess field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewAccess

`func (o *AccessReviewItem) SetNewAccess(v bool)`

SetNewAccess sets NewAccess field to given value.

### HasNewAccess

`func (o *AccessReviewItem) HasNewAccess() bool`

HasNewAccess returns a boolean if a field has been set.

### GetDecision

`func (o *AccessReviewItem) GetDecision() CertificationDecision`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *AccessReviewItem) GetDecisionOk() (*CertificationDecision, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *AccessReviewItem) SetDecision(v CertificationDecision)`

SetDecision sets Decision field to given value.

### HasDecision

`func (o *AccessReviewItem) HasDecision() bool`

HasDecision returns a boolean if a field has been set.

### GetComments

`func (o *AccessReviewItem) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *AccessReviewItem) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *AccessReviewItem) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *AccessReviewItem) HasComments() bool`

HasComments returns a boolean if a field has been set.

### SetCommentsNil

`func (o *AccessReviewItem) SetCommentsNil(b bool)`

 SetCommentsNil sets the value for Comments to be an explicit nil

### UnsetComments
`func (o *AccessReviewItem) UnsetComments()`

UnsetComments ensures that no value is present for Comments, not even an explicit nil

