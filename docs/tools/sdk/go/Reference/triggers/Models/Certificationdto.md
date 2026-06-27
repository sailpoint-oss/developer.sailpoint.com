---
id: v1-certificationdto
title: Certificationdto
pagination_label: Certificationdto
sidebar_label: Certificationdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certificationdto', 'V1Certificationdto'] 
slug: /tools/sdk/go/triggers/models/certificationdto
tags: ['SDK', 'Software Development Kit', 'Certificationdto', 'V1Certificationdto']
---

# Certificationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** | [**Campaignreference**](campaignreference) |  | 
**Phase** | [**Certificationphase**](certificationphase) |  | 
**Due** | **SailPointTime** | The due date of the certification. | 
**Signed** | **SailPointTime** | The date the reviewer signed off on the certification. | 
**Reviewer** | [**Reviewer**](reviewer) |  | 
**Reassignment** | Pointer to [**NullableReassignment**](reassignment) |  | [optional] 
**HasErrors** | **bool** | Indicates it the certification has any errors. | 
**ErrorMessage** | Pointer to **NullableString** | A message indicating what the error is. | [optional] 
**Completed** | **bool** | Indicates if all certification decisions have been made. | 
**DecisionsMade** | **int32** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | 
**DecisionsTotal** | **int32** | The total number of approve/revoke/acknowledge decisions for the certification. | 
**EntitiesCompleted** | **int32** | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | 
**EntitiesTotal** | **int32** | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | 

## Methods

### NewCertificationdto

`func NewCertificationdto(campaignRef Campaignreference, phase Certificationphase, due SailPointTime, signed SailPointTime, reviewer Reviewer, hasErrors bool, completed bool, decisionsMade int32, decisionsTotal int32, entitiesCompleted int32, entitiesTotal int32, ) *Certificationdto`

NewCertificationdto instantiates a new Certificationdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationdtoWithDefaults

`func NewCertificationdtoWithDefaults() *Certificationdto`

NewCertificationdtoWithDefaults instantiates a new Certificationdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCampaignRef

`func (o *Certificationdto) GetCampaignRef() Campaignreference`

GetCampaignRef returns the CampaignRef field if non-nil, zero value otherwise.

### GetCampaignRefOk

`func (o *Certificationdto) GetCampaignRefOk() (*Campaignreference, bool)`

GetCampaignRefOk returns a tuple with the CampaignRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignRef

`func (o *Certificationdto) SetCampaignRef(v Campaignreference)`

SetCampaignRef sets CampaignRef field to given value.


### GetPhase

`func (o *Certificationdto) GetPhase() Certificationphase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *Certificationdto) GetPhaseOk() (*Certificationphase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *Certificationdto) SetPhase(v Certificationphase)`

SetPhase sets Phase field to given value.


### GetDue

`func (o *Certificationdto) GetDue() SailPointTime`

GetDue returns the Due field if non-nil, zero value otherwise.

### GetDueOk

`func (o *Certificationdto) GetDueOk() (*SailPointTime, bool)`

GetDueOk returns a tuple with the Due field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDue

`func (o *Certificationdto) SetDue(v SailPointTime)`

SetDue sets Due field to given value.


### GetSigned

`func (o *Certificationdto) GetSigned() SailPointTime`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *Certificationdto) GetSignedOk() (*SailPointTime, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *Certificationdto) SetSigned(v SailPointTime)`

SetSigned sets Signed field to given value.


### GetReviewer

`func (o *Certificationdto) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Certificationdto) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Certificationdto) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetReassignment

`func (o *Certificationdto) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *Certificationdto) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *Certificationdto) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *Certificationdto) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### SetReassignmentNil

`func (o *Certificationdto) SetReassignmentNil(b bool)`

 SetReassignmentNil sets the value for Reassignment to be an explicit nil

### UnsetReassignment
`func (o *Certificationdto) UnsetReassignment()`

UnsetReassignment ensures that no value is present for Reassignment, not even an explicit nil
### GetHasErrors

`func (o *Certificationdto) GetHasErrors() bool`

GetHasErrors returns the HasErrors field if non-nil, zero value otherwise.

### GetHasErrorsOk

`func (o *Certificationdto) GetHasErrorsOk() (*bool, bool)`

GetHasErrorsOk returns a tuple with the HasErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasErrors

`func (o *Certificationdto) SetHasErrors(v bool)`

SetHasErrors sets HasErrors field to given value.


### GetErrorMessage

`func (o *Certificationdto) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *Certificationdto) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *Certificationdto) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *Certificationdto) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *Certificationdto) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *Certificationdto) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetCompleted

`func (o *Certificationdto) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Certificationdto) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Certificationdto) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.


### GetDecisionsMade

`func (o *Certificationdto) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *Certificationdto) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *Certificationdto) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.


### GetDecisionsTotal

`func (o *Certificationdto) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *Certificationdto) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *Certificationdto) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.


### GetEntitiesCompleted

`func (o *Certificationdto) GetEntitiesCompleted() int32`

GetEntitiesCompleted returns the EntitiesCompleted field if non-nil, zero value otherwise.

### GetEntitiesCompletedOk

`func (o *Certificationdto) GetEntitiesCompletedOk() (*int32, bool)`

GetEntitiesCompletedOk returns a tuple with the EntitiesCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesCompleted

`func (o *Certificationdto) SetEntitiesCompleted(v int32)`

SetEntitiesCompleted sets EntitiesCompleted field to given value.


### GetEntitiesTotal

`func (o *Certificationdto) GetEntitiesTotal() int32`

GetEntitiesTotal returns the EntitiesTotal field if non-nil, zero value otherwise.

### GetEntitiesTotalOk

`func (o *Certificationdto) GetEntitiesTotalOk() (*int32, bool)`

GetEntitiesTotalOk returns a tuple with the EntitiesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesTotal

`func (o *Certificationdto) SetEntitiesTotal(v int32)`

SetEntitiesTotal sets EntitiesTotal field to given value.



