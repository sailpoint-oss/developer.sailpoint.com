---
id: v1-correlatedgovernanceevent
title: Correlatedgovernanceevent
pagination_label: Correlatedgovernanceevent
sidebar_label: Correlatedgovernanceevent
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Correlatedgovernanceevent', 'V1Correlatedgovernanceevent'] 
slug: /tools/sdk/go/identityhistory/models/correlatedgovernanceevent
tags: ['SDK', 'Software Development Kit', 'Correlatedgovernanceevent', 'V1Correlatedgovernanceevent']
---

# Correlatedgovernanceevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | The name of the governance event, such as the certification name or access request ID. | [optional] 
**DateTime** | Pointer to **string** | The date that the certification or access request was completed. | [optional] 
**Type** | Pointer to **string** | The type of governance event. | [optional] 
**GovernanceId** | Pointer to **string** | The ID of the instance that caused the event - either the certification ID or access request ID. | [optional] 
**Owners** | Pointer to [**[]Certifierresponse**](certifierresponse) | The owners of the governance event (the certifiers or approvers) | [optional] 
**Reviewers** | Pointer to [**[]Certifierresponse**](certifierresponse) | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [optional] 
**DecisionMaker** | Pointer to [**Certifierresponse**](certifierresponse) |  | [optional] 

## Methods

### NewCorrelatedgovernanceevent

`func NewCorrelatedgovernanceevent() *Correlatedgovernanceevent`

NewCorrelatedgovernanceevent instantiates a new Correlatedgovernanceevent object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCorrelatedgovernanceeventWithDefaults

`func NewCorrelatedgovernanceeventWithDefaults() *Correlatedgovernanceevent`

NewCorrelatedgovernanceeventWithDefaults instantiates a new Correlatedgovernanceevent object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Correlatedgovernanceevent) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Correlatedgovernanceevent) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Correlatedgovernanceevent) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Correlatedgovernanceevent) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDateTime

`func (o *Correlatedgovernanceevent) GetDateTime() string`

GetDateTime returns the DateTime field if non-nil, zero value otherwise.

### GetDateTimeOk

`func (o *Correlatedgovernanceevent) GetDateTimeOk() (*string, bool)`

GetDateTimeOk returns a tuple with the DateTime field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDateTime

`func (o *Correlatedgovernanceevent) SetDateTime(v string)`

SetDateTime sets DateTime field to given value.

### HasDateTime

`func (o *Correlatedgovernanceevent) HasDateTime() bool`

HasDateTime returns a boolean if a field has been set.

### GetType

`func (o *Correlatedgovernanceevent) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Correlatedgovernanceevent) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Correlatedgovernanceevent) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Correlatedgovernanceevent) HasType() bool`

HasType returns a boolean if a field has been set.

### GetGovernanceId

`func (o *Correlatedgovernanceevent) GetGovernanceId() string`

GetGovernanceId returns the GovernanceId field if non-nil, zero value otherwise.

### GetGovernanceIdOk

`func (o *Correlatedgovernanceevent) GetGovernanceIdOk() (*string, bool)`

GetGovernanceIdOk returns a tuple with the GovernanceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceId

`func (o *Correlatedgovernanceevent) SetGovernanceId(v string)`

SetGovernanceId sets GovernanceId field to given value.

### HasGovernanceId

`func (o *Correlatedgovernanceevent) HasGovernanceId() bool`

HasGovernanceId returns a boolean if a field has been set.

### GetOwners

`func (o *Correlatedgovernanceevent) GetOwners() []Certifierresponse`

GetOwners returns the Owners field if non-nil, zero value otherwise.

### GetOwnersOk

`func (o *Correlatedgovernanceevent) GetOwnersOk() (*[]Certifierresponse, bool)`

GetOwnersOk returns a tuple with the Owners field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwners

`func (o *Correlatedgovernanceevent) SetOwners(v []Certifierresponse)`

SetOwners sets Owners field to given value.

### HasOwners

`func (o *Correlatedgovernanceevent) HasOwners() bool`

HasOwners returns a boolean if a field has been set.

### GetReviewers

`func (o *Correlatedgovernanceevent) GetReviewers() []Certifierresponse`

GetReviewers returns the Reviewers field if non-nil, zero value otherwise.

### GetReviewersOk

`func (o *Correlatedgovernanceevent) GetReviewersOk() (*[]Certifierresponse, bool)`

GetReviewersOk returns a tuple with the Reviewers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewers

`func (o *Correlatedgovernanceevent) SetReviewers(v []Certifierresponse)`

SetReviewers sets Reviewers field to given value.

### HasReviewers

`func (o *Correlatedgovernanceevent) HasReviewers() bool`

HasReviewers returns a boolean if a field has been set.

### GetDecisionMaker

`func (o *Correlatedgovernanceevent) GetDecisionMaker() Certifierresponse`

GetDecisionMaker returns the DecisionMaker field if non-nil, zero value otherwise.

### GetDecisionMakerOk

`func (o *Correlatedgovernanceevent) GetDecisionMakerOk() (*Certifierresponse, bool)`

GetDecisionMakerOk returns a tuple with the DecisionMaker field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionMaker

`func (o *Correlatedgovernanceevent) SetDecisionMaker(v Certifierresponse)`

SetDecisionMaker sets DecisionMaker field to given value.

### HasDecisionMaker

`func (o *Correlatedgovernanceevent) HasDecisionMaker() bool`

HasDecisionMaker returns a boolean if a field has been set.


