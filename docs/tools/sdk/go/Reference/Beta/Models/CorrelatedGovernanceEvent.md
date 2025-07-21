---
id: beta-correlated-governance-event
title: CorrelatedGovernanceEvent
pagination_label: CorrelatedGovernanceEvent
sidebar_label: CorrelatedGovernanceEvent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CorrelatedGovernanceEvent', 'BetaCorrelatedGovernanceEvent'] 
slug: /tools/sdk/go/beta/models/correlated-governance-event
tags: ['SDK', 'Software Development Kit', 'CorrelatedGovernanceEvent', 'BetaCorrelatedGovernanceEvent']
---

# CorrelatedGovernanceEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the governance event, such as the certification name or access request ID. | [optional] 
**Dt** | Pointer to **string** | The date that the certification or access request was completed. | [optional] 
**Type** | Pointer to **string** | The type of governance event. | [optional] 
**GovernanceId** | Pointer to **string** | The ID of the instance that caused the event - either the certification ID or access request ID. | [optional] 
**Owners** | Pointer to [**[]CertifierResponse**](certifier-response) | The owners of the governance event (the certifiers or approvers) | [optional] 
**Reviewers** | Pointer to [**[]CertifierResponse**](certifier-response) | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [optional] 
**DecisionMaker** | Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 

## Methods

### NewCorrelatedGovernanceEvent

`func NewCorrelatedGovernanceEvent() *CorrelatedGovernanceEvent`

NewCorrelatedGovernanceEvent instantiates a new CorrelatedGovernanceEvent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelatedGovernanceEventWithDefaults

`func NewCorrelatedGovernanceEventWithDefaults() *CorrelatedGovernanceEvent`

NewCorrelatedGovernanceEventWithDefaults instantiates a new CorrelatedGovernanceEvent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *CorrelatedGovernanceEvent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CorrelatedGovernanceEvent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CorrelatedGovernanceEvent) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CorrelatedGovernanceEvent) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDt

`func (o *CorrelatedGovernanceEvent) GetDt() string`

GetDt returns the Dt field if non-nil, zero value otherwise.

### GetDtOk

`func (o *CorrelatedGovernanceEvent) GetDtOk() (*string, bool)`

GetDtOk returns a tuple with the Dt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDt

`func (o *CorrelatedGovernanceEvent) SetDt(v string)`

SetDt sets Dt field to given value.

### HasDt

`func (o *CorrelatedGovernanceEvent) HasDt() bool`

HasDt returns a boolean if a field has been set.

### GetType

`func (o *CorrelatedGovernanceEvent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CorrelatedGovernanceEvent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CorrelatedGovernanceEvent) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CorrelatedGovernanceEvent) HasType() bool`

HasType returns a boolean if a field has been set.

### GetGovernanceId

`func (o *CorrelatedGovernanceEvent) GetGovernanceId() string`

GetGovernanceId returns the GovernanceId field if non-nil, zero value otherwise.

### GetGovernanceIdOk

`func (o *CorrelatedGovernanceEvent) GetGovernanceIdOk() (*string, bool)`

GetGovernanceIdOk returns a tuple with the GovernanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceId

`func (o *CorrelatedGovernanceEvent) SetGovernanceId(v string)`

SetGovernanceId sets GovernanceId field to given value.

### HasGovernanceId

`func (o *CorrelatedGovernanceEvent) HasGovernanceId() bool`

HasGovernanceId returns a boolean if a field has been set.

### GetOwners

`func (o *CorrelatedGovernanceEvent) GetOwners() []CertifierResponse`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *CorrelatedGovernanceEvent) GetOwnersOk() (*[]CertifierResponse, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *CorrelatedGovernanceEvent) SetOwners(v []CertifierResponse)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *CorrelatedGovernanceEvent) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetReviewers

`func (o *CorrelatedGovernanceEvent) GetReviewers() []CertifierResponse`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *CorrelatedGovernanceEvent) GetReviewersOk() (*[]CertifierResponse, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *CorrelatedGovernanceEvent) SetReviewers(v []CertifierResponse)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *CorrelatedGovernanceEvent) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### GetDecisionMaker

`func (o *CorrelatedGovernanceEvent) GetDecisionMaker() CertifierResponse`

GetDecisionMaker returns the DecisionMaker field if non-nil, zero value otherwise.

### GetDecisionMakerOk

`func (o *CorrelatedGovernanceEvent) GetDecisionMakerOk() (*CertifierResponse, bool)`

GetDecisionMakerOk returns a tuple with the DecisionMaker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionMaker

`func (o *CorrelatedGovernanceEvent) SetDecisionMaker(v CertifierResponse)`

SetDecisionMaker sets DecisionMaker field to given value.

### HasDecisionMaker

`func (o *CorrelatedGovernanceEvent) HasDecisionMaker() bool`

HasDecisionMaker returns a boolean if a field has been set.


