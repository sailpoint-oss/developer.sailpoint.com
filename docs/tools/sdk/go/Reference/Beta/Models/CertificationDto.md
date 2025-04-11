---
id: beta-certification-dto
title: CertificationDto
pagination_label: CertificationDto
sidebar_label: CertificationDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationDto', 'BetaCertificationDto'] 
slug: /tools/sdk/go/beta/models/certification-dto
tags: ['SDK', 'Software Development Kit', 'CertificationDto', 'BetaCertificationDto']
---

# CertificationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** | [**CampaignReference**](campaign-reference) |  | 
**Phase** | [**CertificationPhase**](certification-phase) |  | 
**Due** | **time.Time** | Date and time when the certification is due. | 
**Signed** | **time.Time** | Date and time when the reviewer signed off on the certification. | 
**Reviewer** | [**Reviewer**](reviewer) |  | 
**Reassignment** | Pointer to [**Reassignment**](reassignment) |  | [optional] 
**HasErrors** | **bool** | Indicates whether the certification has any errors. | 
**ErrorMessage** | Pointer to **NullableString** | Message indicating what the error is. | [optional] 
**Completed** | **bool** | Indicates whether all certification decisions have been made. | 
**DecisionsMade** | **int32** | Number of approve/revoke/acknowledge decisions the reviewer has made. | 
**DecisionsTotal** | **int32** | Total number of approve/revoke/acknowledge decisions for the certification. | 
**EntitiesCompleted** | **int32** | Number of entities (identities, access profiles, roles, etc.) that are complete and all decisions have been made for. | 
**EntitiesTotal** | **int32** | Total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | 

## Methods

### NewCertificationDto

`func NewCertificationDto(campaignRef CampaignReference, phase CertificationPhase, due time.Time, signed time.Time, reviewer Reviewer, hasErrors bool, completed bool, decisionsMade int32, decisionsTotal int32, entitiesCompleted int32, entitiesTotal int32, ) *CertificationDto`

NewCertificationDto instantiates a new CertificationDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationDtoWithDefaults

`func NewCertificationDtoWithDefaults() *CertificationDto`

NewCertificationDtoWithDefaults instantiates a new CertificationDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCampaignRef

`func (o *CertificationDto) GetCampaignRef() CampaignReference`

GetCampaignRef returns the CampaignRef field if non-nil, zero value otherwise.

### GetCampaignRefOk

`func (o *CertificationDto) GetCampaignRefOk() (*CampaignReference, bool)`

GetCampaignRefOk returns a tuple with the CampaignRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignRef

`func (o *CertificationDto) SetCampaignRef(v CampaignReference)`

SetCampaignRef sets CampaignRef field to given value.


### GetPhase

`func (o *CertificationDto) GetPhase() CertificationPhase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *CertificationDto) GetPhaseOk() (*CertificationPhase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *CertificationDto) SetPhase(v CertificationPhase)`

SetPhase sets Phase field to given value.


### GetDue

`func (o *CertificationDto) GetDue() time.Time`

GetDue returns the Due field if non-nil, zero value otherwise.

### GetDueOk

`func (o *CertificationDto) GetDueOk() (*time.Time, bool)`

GetDueOk returns a tuple with the Due field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDue

`func (o *CertificationDto) SetDue(v time.Time)`

SetDue sets Due field to given value.


### GetSigned

`func (o *CertificationDto) GetSigned() time.Time`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *CertificationDto) GetSignedOk() (*time.Time, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *CertificationDto) SetSigned(v time.Time)`

SetSigned sets Signed field to given value.


### GetReviewer

`func (o *CertificationDto) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CertificationDto) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CertificationDto) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetReassignment

`func (o *CertificationDto) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *CertificationDto) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *CertificationDto) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *CertificationDto) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### GetHasErrors

`func (o *CertificationDto) GetHasErrors() bool`

GetHasErrors returns the HasErrors field if non-nil, zero value otherwise.

### GetHasErrorsOk

`func (o *CertificationDto) GetHasErrorsOk() (*bool, bool)`

GetHasErrorsOk returns a tuple with the HasErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasErrors

`func (o *CertificationDto) SetHasErrors(v bool)`

SetHasErrors sets HasErrors field to given value.


### GetErrorMessage

`func (o *CertificationDto) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CertificationDto) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CertificationDto) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CertificationDto) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *CertificationDto) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *CertificationDto) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetCompleted

`func (o *CertificationDto) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *CertificationDto) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *CertificationDto) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.


### GetDecisionsMade

`func (o *CertificationDto) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *CertificationDto) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *CertificationDto) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.


### GetDecisionsTotal

`func (o *CertificationDto) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *CertificationDto) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *CertificationDto) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.


### GetEntitiesCompleted

`func (o *CertificationDto) GetEntitiesCompleted() int32`

GetEntitiesCompleted returns the EntitiesCompleted field if non-nil, zero value otherwise.

### GetEntitiesCompletedOk

`func (o *CertificationDto) GetEntitiesCompletedOk() (*int32, bool)`

GetEntitiesCompletedOk returns a tuple with the EntitiesCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesCompleted

`func (o *CertificationDto) SetEntitiesCompleted(v int32)`

SetEntitiesCompleted sets EntitiesCompleted field to given value.


### GetEntitiesTotal

`func (o *CertificationDto) GetEntitiesTotal() int32`

GetEntitiesTotal returns the EntitiesTotal field if non-nil, zero value otherwise.

### GetEntitiesTotalOk

`func (o *CertificationDto) GetEntitiesTotalOk() (*int32, bool)`

GetEntitiesTotalOk returns a tuple with the EntitiesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesTotal

`func (o *CertificationDto) SetEntitiesTotal(v int32)`

SetEntitiesTotal sets EntitiesTotal field to given value.



