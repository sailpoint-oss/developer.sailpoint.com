---
id: v2025-certification-signed-off-certification
title: CertificationSignedOffCertification
pagination_label: CertificationSignedOffCertification
sidebar_label: CertificationSignedOffCertification
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CertificationSignedOffCertification', 'V2025CertificationSignedOffCertification'] 
slug: /tools/sdk/go/v2025/models/certification-signed-off-certification
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOffCertification', 'V2025CertificationSignedOffCertification']
---

# CertificationSignedOffCertification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique ID of the certification. | 
**Name** | **string** | The name of the certification. | 
**Created** | **SailPointTime** | The date and time the certification was created. | 
**Modified** | Pointer to **NullableTime** | The date and time the certification was last modified. | [optional] 
**CampaignRef** | [**CampaignReference**](campaign-reference) |  | 
**Phase** | [**CertificationPhase**](certification-phase) |  | 
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

### NewCertificationSignedOffCertification

`func NewCertificationSignedOffCertification(id string, name string, created SailPointTime, campaignRef CampaignReference, phase CertificationPhase, due SailPointTime, signed SailPointTime, reviewer Reviewer, hasErrors bool, completed bool, decisionsMade int32, decisionsTotal int32, entitiesCompleted int32, entitiesTotal int32, ) *CertificationSignedOffCertification`

NewCertificationSignedOffCertification instantiates a new CertificationSignedOffCertification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationSignedOffCertificationWithDefaults

`func NewCertificationSignedOffCertificationWithDefaults() *CertificationSignedOffCertification`

NewCertificationSignedOffCertificationWithDefaults instantiates a new CertificationSignedOffCertification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CertificationSignedOffCertification) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CertificationSignedOffCertification) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CertificationSignedOffCertification) SetId(v string)`

SetId sets Id field to given value.


### GetName

`func (o *CertificationSignedOffCertification) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CertificationSignedOffCertification) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CertificationSignedOffCertification) SetName(v string)`

SetName sets Name field to given value.


### GetCreated

`func (o *CertificationSignedOffCertification) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *CertificationSignedOffCertification) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *CertificationSignedOffCertification) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.


### GetModified

`func (o *CertificationSignedOffCertification) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *CertificationSignedOffCertification) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *CertificationSignedOffCertification) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *CertificationSignedOffCertification) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *CertificationSignedOffCertification) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *CertificationSignedOffCertification) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetCampaignRef

`func (o *CertificationSignedOffCertification) GetCampaignRef() CampaignReference`

GetCampaignRef returns the CampaignRef field if non-nil, zero value otherwise.

### GetCampaignRefOk

`func (o *CertificationSignedOffCertification) GetCampaignRefOk() (*CampaignReference, bool)`

GetCampaignRefOk returns a tuple with the CampaignRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaignRef

`func (o *CertificationSignedOffCertification) SetCampaignRef(v CampaignReference)`

SetCampaignRef sets CampaignRef field to given value.


### GetPhase

`func (o *CertificationSignedOffCertification) GetPhase() CertificationPhase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *CertificationSignedOffCertification) GetPhaseOk() (*CertificationPhase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *CertificationSignedOffCertification) SetPhase(v CertificationPhase)`

SetPhase sets Phase field to given value.


### GetDue

`func (o *CertificationSignedOffCertification) GetDue() SailPointTime`

GetDue returns the Due field if non-nil, zero value otherwise.

### GetDueOk

`func (o *CertificationSignedOffCertification) GetDueOk() (*SailPointTime, bool)`

GetDueOk returns a tuple with the Due field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDue

`func (o *CertificationSignedOffCertification) SetDue(v SailPointTime)`

SetDue sets Due field to given value.


### GetSigned

`func (o *CertificationSignedOffCertification) GetSigned() SailPointTime`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *CertificationSignedOffCertification) GetSignedOk() (*SailPointTime, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *CertificationSignedOffCertification) SetSigned(v SailPointTime)`

SetSigned sets Signed field to given value.


### GetReviewer

`func (o *CertificationSignedOffCertification) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *CertificationSignedOffCertification) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *CertificationSignedOffCertification) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.


### GetReassignment

`func (o *CertificationSignedOffCertification) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *CertificationSignedOffCertification) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *CertificationSignedOffCertification) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *CertificationSignedOffCertification) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### SetReassignmentNil

`func (o *CertificationSignedOffCertification) SetReassignmentNil(b bool)`

 SetReassignmentNil sets the value for Reassignment to be an explicit nil

### UnsetReassignment
`func (o *CertificationSignedOffCertification) UnsetReassignment()`

UnsetReassignment ensures that no value is present for Reassignment, not even an explicit nil
### GetHasErrors

`func (o *CertificationSignedOffCertification) GetHasErrors() bool`

GetHasErrors returns the HasErrors field if non-nil, zero value otherwise.

### GetHasErrorsOk

`func (o *CertificationSignedOffCertification) GetHasErrorsOk() (*bool, bool)`

GetHasErrorsOk returns a tuple with the HasErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasErrors

`func (o *CertificationSignedOffCertification) SetHasErrors(v bool)`

SetHasErrors sets HasErrors field to given value.


### GetErrorMessage

`func (o *CertificationSignedOffCertification) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *CertificationSignedOffCertification) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *CertificationSignedOffCertification) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *CertificationSignedOffCertification) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *CertificationSignedOffCertification) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *CertificationSignedOffCertification) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetCompleted

`func (o *CertificationSignedOffCertification) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *CertificationSignedOffCertification) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *CertificationSignedOffCertification) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.


### GetDecisionsMade

`func (o *CertificationSignedOffCertification) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *CertificationSignedOffCertification) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *CertificationSignedOffCertification) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.


### GetDecisionsTotal

`func (o *CertificationSignedOffCertification) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *CertificationSignedOffCertification) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *CertificationSignedOffCertification) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.


### GetEntitiesCompleted

`func (o *CertificationSignedOffCertification) GetEntitiesCompleted() int32`

GetEntitiesCompleted returns the EntitiesCompleted field if non-nil, zero value otherwise.

### GetEntitiesCompletedOk

`func (o *CertificationSignedOffCertification) GetEntitiesCompletedOk() (*int32, bool)`

GetEntitiesCompletedOk returns a tuple with the EntitiesCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesCompleted

`func (o *CertificationSignedOffCertification) SetEntitiesCompleted(v int32)`

SetEntitiesCompleted sets EntitiesCompleted field to given value.


### GetEntitiesTotal

`func (o *CertificationSignedOffCertification) GetEntitiesTotal() int32`

GetEntitiesTotal returns the EntitiesTotal field if non-nil, zero value otherwise.

### GetEntitiesTotalOk

`func (o *CertificationSignedOffCertification) GetEntitiesTotalOk() (*int32, bool)`

GetEntitiesTotalOk returns a tuple with the EntitiesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitiesTotal

`func (o *CertificationSignedOffCertification) SetEntitiesTotal(v int32)`

SetEntitiesTotal sets EntitiesTotal field to given value.



