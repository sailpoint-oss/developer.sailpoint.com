---
id: v1-reviewdecision
title: Reviewdecision
pagination_label: Reviewdecision
sidebar_label: Reviewdecision
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Reviewdecision', 'V1Reviewdecision'] 
slug: /tools/sdk/go/certifications/models/reviewdecision
tags: ['SDK', 'Software Development Kit', 'Reviewdecision', 'V1Reviewdecision']
---

# Reviewdecision

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | The id of the review decision | 
**Decision** | [**Certificationdecision**](certificationdecision) |  | 
**ProposedEndDate** | Pointer to **SailPointTime** | The date at which a user's access should be taken away. Should only be set for `REVOKE` decisions. | [optional] 
**Bulk** | **bool** | Indicates whether decision should be marked as part of a larger bulk decision | 
**Recommendation** | Pointer to [**Reviewrecommendation**](reviewrecommendation) |  | [optional] 
**Comments** | Pointer to **string** | Comments recorded when the decision was made | [optional] 

## Methods

### NewReviewdecision

`func NewReviewdecision(id string, decision Certificationdecision, bulk bool, ) *Reviewdecision`

NewReviewdecision instantiates a new Reviewdecision object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewdecisionWithDefaults

`func NewReviewdecisionWithDefaults() *Reviewdecision`

NewReviewdecisionWithDefaults instantiates a new Reviewdecision object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Reviewdecision) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Reviewdecision) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Reviewdecision) SetId(v string)`

SetId sets Id field to given value.


### GetDecision

`func (o *Reviewdecision) GetDecision() Certificationdecision`

GetDecision returns the Decision field if non-nil, zero value otherwise.

### GetDecisionOk

`func (o *Reviewdecision) GetDecisionOk() (*Certificationdecision, bool)`

GetDecisionOk returns a tuple with the Decision field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecision

`func (o *Reviewdecision) SetDecision(v Certificationdecision)`

SetDecision sets Decision field to given value.


### GetProposedEndDate

`func (o *Reviewdecision) GetProposedEndDate() SailPointTime`

GetProposedEndDate returns the ProposedEndDate field if non-nil, zero value otherwise.

### GetProposedEndDateOk

`func (o *Reviewdecision) GetProposedEndDateOk() (*SailPointTime, bool)`

GetProposedEndDateOk returns a tuple with the ProposedEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProposedEndDate

`func (o *Reviewdecision) SetProposedEndDate(v SailPointTime)`

SetProposedEndDate sets ProposedEndDate field to given value.

### HasProposedEndDate

`func (o *Reviewdecision) HasProposedEndDate() bool`

HasProposedEndDate returns a boolean if a field has been set.

### GetBulk

`func (o *Reviewdecision) GetBulk() bool`

GetBulk returns the Bulk field if non-nil, zero value otherwise.

### GetBulkOk

`func (o *Reviewdecision) GetBulkOk() (*bool, bool)`

GetBulkOk returns a tuple with the Bulk field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBulk

`func (o *Reviewdecision) SetBulk(v bool)`

SetBulk sets Bulk field to given value.


### GetRecommendation

`func (o *Reviewdecision) GetRecommendation() Reviewrecommendation`

GetRecommendation returns the Recommendation field if non-nil, zero value otherwise.

### GetRecommendationOk

`func (o *Reviewdecision) GetRecommendationOk() (*Reviewrecommendation, bool)`

GetRecommendationOk returns a tuple with the Recommendation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRecommendation

`func (o *Reviewdecision) SetRecommendation(v Reviewrecommendation)`

SetRecommendation sets Recommendation field to given value.

### HasRecommendation

`func (o *Reviewdecision) HasRecommendation() bool`

HasRecommendation returns a boolean if a field has been set.

### GetComments

`func (o *Reviewdecision) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *Reviewdecision) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *Reviewdecision) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *Reviewdecision) HasComments() bool`

HasComments returns a boolean if a field has been set.


