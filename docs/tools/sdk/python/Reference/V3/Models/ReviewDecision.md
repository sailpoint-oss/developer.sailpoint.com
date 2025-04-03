---
id: review-decision
title: ReviewDecision
pagination_label: ReviewDecision
sidebar_label: ReviewDecision
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewDecision', 'ReviewDecision'] 
slug: /tools/sdk/go/v3/models/review-decision
tags: ['SDK', 'Software Development Kit', 'ReviewDecision', 'ReviewDecision']
---

# ReviewDecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The id of the review decision | 
**Decision** | [**CertificationDecision**](certification-decision) |  | 
**ProposedEndDate** | Pointer to **SailPointTime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**Bulk** | **bool** | Indicates whether decision should be marked as part of a larger bulk decision | 
**Recommendation** | Pointer to [**ReviewRecommendation**](review-recommendation) |  | [optional] 
**Comments** | Pointer to **string** | Comments recorded when the decision was made | [optional] 

## Methods

### NewReviewDecision

`func NewReviewDecision(id string, decision CertificationDecision, bulk bool, ) *ReviewDecision`

NewReviewDecision instantiates a new ReviewDecision object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewDecisionWithDefaults

`func NewReviewDecisionWithDefaults() *ReviewDecision`

NewReviewDecisionWithDefaults instantiates a new ReviewDecision object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ReviewDecision) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewDecision) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewDecision) SetId(v string)`

SetId sets Id field to given value.


### GetDecision

`func (o *ReviewDecision) GetDecision() CertificationDecision`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *ReviewDecision) GetDecisionOk() (*CertificationDecision, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *ReviewDecision) SetDecision(v CertificationDecision)`

SetDecision sets Decision field to given value.


### GetProposedEndDate

`func (o *ReviewDecision) GetProposedEndDate() SailPointTime`

GetProposedEndDate returns the ProposedEndDate field if non-nil, zero value otherwise.

### GetProposedEndDateOk

`func (o *ReviewDecision) GetProposedEndDateOk() (*SailPointTime, bool)`

GetProposedEndDateOk returns a tuple with the ProposedEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProposedEndDate

`func (o *ReviewDecision) SetProposedEndDate(v SailPointTime)`

SetProposedEndDate sets ProposedEndDate field to given value.

### HasProposedEndDate

`func (o *ReviewDecision) HasProposedEndDate() bool`

HasProposedEndDate returns a boolean if a field has been set.

### GetBulk

`func (o *ReviewDecision) GetBulk() bool`

GetBulk returns the Bulk field if non-nil, zero value otherwise.

### GetBulkOk

`func (o *ReviewDecision) GetBulkOk() (*bool, bool)`

GetBulkOk returns a tuple with the Bulk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulk

`func (o *ReviewDecision) SetBulk(v bool)`

SetBulk sets Bulk field to given value.


### GetRecommendation

`func (o *ReviewDecision) GetRecommendation() ReviewRecommendation`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *ReviewDecision) GetRecommendationOk() (*ReviewRecommendation, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *ReviewDecision) SetRecommendation(v ReviewRecommendation)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *ReviewDecision) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetComments

`func (o *ReviewDecision) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *ReviewDecision) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *ReviewDecision) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *ReviewDecision) HasComments() bool`

HasComments returns a boolean if a field has been set.


