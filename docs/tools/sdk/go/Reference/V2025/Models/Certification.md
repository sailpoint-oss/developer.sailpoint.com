---
id: v2025-certification
title: Certification
pagination_label: Certification
sidebar_label: Certification
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Certification', 'V2025Certification'] 
slug: /tools/sdk/go/v2025/models/certification
tags: ['SDK', 'Software Development Kit', 'Certification', 'V2025Certification']
---

# Certification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | id of the certification | [optional] 
**Name** | Pointer to **string** | name of the certification | [optional] 
**Campaign** | Pointer to [**CampaignReference**](campaign-reference) |  | [optional] 
**Completed** | Pointer to **bool** | Have all decisions been made? | [optional] 
**IdentitiesCompleted** | Pointer to **int32** | The number of identities for whom all decisions have been made and are complete. | [optional] 
**IdentitiesTotal** | Pointer to **int32** | The total number of identities in the Certification, both complete and incomplete. | [optional] 
**Created** | Pointer to **SailPointTime** | created date | [optional] 
**Modified** | Pointer to **SailPointTime** | modified date | [optional] 
**DecisionsMade** | Pointer to **int32** | The number of approve/revoke/acknowledge decisions that have been made. | [optional] 
**DecisionsTotal** | Pointer to **int32** | The total number of approve/revoke/acknowledge decisions. | [optional] 
**Due** | Pointer to **NullableTime** | The due date of the certification. | [optional] 
**Signed** | Pointer to **NullableTime** | The date the reviewer signed off on the Certification. | [optional] 
**Reviewer** | Pointer to [**Reviewer**](reviewer) |  | [optional] 
**Reassignment** | Pointer to [**NullableReassignment**](reassignment) |  | [optional] 
**HasErrors** | Pointer to **bool** | Identifies if the certification has an error | [optional] 
**ErrorMessage** | Pointer to **NullableString** | Description of the certification error | [optional] 
**Phase** | Pointer to [**CertificationPhase**](certification-phase) |  | [optional] 

## Methods

### NewCertification

`func NewCertification() *Certification`

NewCertification instantiates a new Certification object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCertificationWithDefaults

`func NewCertificationWithDefaults() *Certification`

NewCertificationWithDefaults instantiates a new Certification object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Certification) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Certification) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Certification) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Certification) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Certification) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Certification) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Certification) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Certification) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCampaign

`func (o *Certification) GetCampaign() CampaignReference`

GetCampaign returns the Campaign field if non-nil, zero value otherwise.

### GetCampaignOk

`func (o *Certification) GetCampaignOk() (*CampaignReference, bool)`

GetCampaignOk returns a tuple with the Campaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaign

`func (o *Certification) SetCampaign(v CampaignReference)`

SetCampaign sets Campaign field to given value.

### HasCampaign

`func (o *Certification) HasCampaign() bool`

HasCampaign returns a boolean if a field has been set.

### GetCompleted

`func (o *Certification) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Certification) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Certification) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Certification) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetIdentitiesCompleted

`func (o *Certification) GetIdentitiesCompleted() int32`

GetIdentitiesCompleted returns the IdentitiesCompleted field if non-nil, zero value otherwise.

### GetIdentitiesCompletedOk

`func (o *Certification) GetIdentitiesCompletedOk() (*int32, bool)`

GetIdentitiesCompletedOk returns a tuple with the IdentitiesCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesCompleted

`func (o *Certification) SetIdentitiesCompleted(v int32)`

SetIdentitiesCompleted sets IdentitiesCompleted field to given value.

### HasIdentitiesCompleted

`func (o *Certification) HasIdentitiesCompleted() bool`

HasIdentitiesCompleted returns a boolean if a field has been set.

### GetIdentitiesTotal

`func (o *Certification) GetIdentitiesTotal() int32`

GetIdentitiesTotal returns the IdentitiesTotal field if non-nil, zero value otherwise.

### GetIdentitiesTotalOk

`func (o *Certification) GetIdentitiesTotalOk() (*int32, bool)`

GetIdentitiesTotalOk returns a tuple with the IdentitiesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesTotal

`func (o *Certification) SetIdentitiesTotal(v int32)`

SetIdentitiesTotal sets IdentitiesTotal field to given value.

### HasIdentitiesTotal

`func (o *Certification) HasIdentitiesTotal() bool`

HasIdentitiesTotal returns a boolean if a field has been set.

### GetCreated

`func (o *Certification) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Certification) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Certification) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Certification) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Certification) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Certification) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Certification) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Certification) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDecisionsMade

`func (o *Certification) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *Certification) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *Certification) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.

### HasDecisionsMade

`func (o *Certification) HasDecisionsMade() bool`

HasDecisionsMade returns a boolean if a field has been set.

### GetDecisionsTotal

`func (o *Certification) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *Certification) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *Certification) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.

### HasDecisionsTotal

`func (o *Certification) HasDecisionsTotal() bool`

HasDecisionsTotal returns a boolean if a field has been set.

### GetDue

`func (o *Certification) GetDue() SailPointTime`

GetDue returns the Due field if non-nil, zero value otherwise.

### GetDueOk

`func (o *Certification) GetDueOk() (*SailPointTime, bool)`

GetDueOk returns a tuple with the Due field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDue

`func (o *Certification) SetDue(v SailPointTime)`

SetDue sets Due field to given value.

### HasDue

`func (o *Certification) HasDue() bool`

HasDue returns a boolean if a field has been set.

### SetDueNil

`func (o *Certification) SetDueNil(b bool)`

 SetDueNil sets the value for Due to be an explicit nil

### UnsetDue
`func (o *Certification) UnsetDue()`

UnsetDue ensures that no value is present for Due, not even an explicit nil
### GetSigned

`func (o *Certification) GetSigned() SailPointTime`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *Certification) GetSignedOk() (*SailPointTime, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *Certification) SetSigned(v SailPointTime)`

SetSigned sets Signed field to given value.

### HasSigned

`func (o *Certification) HasSigned() bool`

HasSigned returns a boolean if a field has been set.

### SetSignedNil

`func (o *Certification) SetSignedNil(b bool)`

 SetSignedNil sets the value for Signed to be an explicit nil

### UnsetSigned
`func (o *Certification) UnsetSigned()`

UnsetSigned ensures that no value is present for Signed, not even an explicit nil
### GetReviewer

`func (o *Certification) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Certification) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Certification) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *Certification) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetReassignment

`func (o *Certification) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *Certification) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *Certification) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *Certification) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### SetReassignmentNil

`func (o *Certification) SetReassignmentNil(b bool)`

 SetReassignmentNil sets the value for Reassignment to be an explicit nil

### UnsetReassignment
`func (o *Certification) UnsetReassignment()`

UnsetReassignment ensures that no value is present for Reassignment, not even an explicit nil
### GetHasErrors

`func (o *Certification) GetHasErrors() bool`

GetHasErrors returns the HasErrors field if non-nil, zero value otherwise.

### GetHasErrorsOk

`func (o *Certification) GetHasErrorsOk() (*bool, bool)`

GetHasErrorsOk returns a tuple with the HasErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasErrors

`func (o *Certification) SetHasErrors(v bool)`

SetHasErrors sets HasErrors field to given value.

### HasHasErrors

`func (o *Certification) HasHasErrors() bool`

HasHasErrors returns a boolean if a field has been set.

### GetErrorMessage

`func (o *Certification) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *Certification) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *Certification) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *Certification) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *Certification) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *Certification) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetPhase

`func (o *Certification) GetPhase() CertificationPhase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *Certification) GetPhaseOk() (*CertificationPhase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *Certification) SetPhase(v CertificationPhase)`

SetPhase sets Phase field to given value.

### HasPhase

`func (o *Certification) HasPhase() bool`

HasPhase returns a boolean if a field has been set.


