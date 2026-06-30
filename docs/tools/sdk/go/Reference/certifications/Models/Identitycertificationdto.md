---
id: v1-identitycertificationdto
title: Identitycertificationdto
pagination_label: Identitycertificationdto
sidebar_label: Identitycertificationdto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Identitycertificationdto', 'V1Identitycertificationdto'] 
slug: /tools/sdk/go/certifications/models/identitycertificationdto
tags: ['SDK', 'Software Development Kit', 'Identitycertificationdto', 'V1Identitycertificationdto']
---

# Identitycertificationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | id of the certification | [optional] 
**Name** | Pointer to **string** | name of the certification | [optional] 
**Campaign** | Pointer to [**Campaignreference**](campaignreference) |  | [optional] 
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
**Phase** | Pointer to [**Certificationphase**](certificationphase) |  | [optional] 

## Methods

### NewIdentitycertificationdto

`func NewIdentitycertificationdto() *Identitycertificationdto`

NewIdentitycertificationdto instantiates a new Identitycertificationdto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentitycertificationdtoWithDefaults

`func NewIdentitycertificationdtoWithDefaults() *Identitycertificationdto`

NewIdentitycertificationdtoWithDefaults instantiates a new Identitycertificationdto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Identitycertificationdto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Identitycertificationdto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Identitycertificationdto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Identitycertificationdto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Identitycertificationdto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Identitycertificationdto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Identitycertificationdto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Identitycertificationdto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCampaign

`func (o *Identitycertificationdto) GetCampaign() Campaignreference`

GetCampaign returns the Campaign field if non-nil, zero value otherwise.

### GetCampaignOk

`func (o *Identitycertificationdto) GetCampaignOk() (*Campaignreference, bool)`

GetCampaignOk returns a tuple with the Campaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaign

`func (o *Identitycertificationdto) SetCampaign(v Campaignreference)`

SetCampaign sets Campaign field to given value.

### HasCampaign

`func (o *Identitycertificationdto) HasCampaign() bool`

HasCampaign returns a boolean if a field has been set.

### GetCompleted

`func (o *Identitycertificationdto) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *Identitycertificationdto) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *Identitycertificationdto) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *Identitycertificationdto) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetIdentitiesCompleted

`func (o *Identitycertificationdto) GetIdentitiesCompleted() int32`

GetIdentitiesCompleted returns the IdentitiesCompleted field if non-nil, zero value otherwise.

### GetIdentitiesCompletedOk

`func (o *Identitycertificationdto) GetIdentitiesCompletedOk() (*int32, bool)`

GetIdentitiesCompletedOk returns a tuple with the IdentitiesCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesCompleted

`func (o *Identitycertificationdto) SetIdentitiesCompleted(v int32)`

SetIdentitiesCompleted sets IdentitiesCompleted field to given value.

### HasIdentitiesCompleted

`func (o *Identitycertificationdto) HasIdentitiesCompleted() bool`

HasIdentitiesCompleted returns a boolean if a field has been set.

### GetIdentitiesTotal

`func (o *Identitycertificationdto) GetIdentitiesTotal() int32`

GetIdentitiesTotal returns the IdentitiesTotal field if non-nil, zero value otherwise.

### GetIdentitiesTotalOk

`func (o *Identitycertificationdto) GetIdentitiesTotalOk() (*int32, bool)`

GetIdentitiesTotalOk returns a tuple with the IdentitiesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesTotal

`func (o *Identitycertificationdto) SetIdentitiesTotal(v int32)`

SetIdentitiesTotal sets IdentitiesTotal field to given value.

### HasIdentitiesTotal

`func (o *Identitycertificationdto) HasIdentitiesTotal() bool`

HasIdentitiesTotal returns a boolean if a field has been set.

### GetCreated

`func (o *Identitycertificationdto) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Identitycertificationdto) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Identitycertificationdto) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Identitycertificationdto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Identitycertificationdto) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Identitycertificationdto) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Identitycertificationdto) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Identitycertificationdto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDecisionsMade

`func (o *Identitycertificationdto) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *Identitycertificationdto) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *Identitycertificationdto) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.

### HasDecisionsMade

`func (o *Identitycertificationdto) HasDecisionsMade() bool`

HasDecisionsMade returns a boolean if a field has been set.

### GetDecisionsTotal

`func (o *Identitycertificationdto) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *Identitycertificationdto) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *Identitycertificationdto) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.

### HasDecisionsTotal

`func (o *Identitycertificationdto) HasDecisionsTotal() bool`

HasDecisionsTotal returns a boolean if a field has been set.

### GetDue

`func (o *Identitycertificationdto) GetDue() SailPointTime`

GetDue returns the Due field if non-nil, zero value otherwise.

### GetDueOk

`func (o *Identitycertificationdto) GetDueOk() (*SailPointTime, bool)`

GetDueOk returns a tuple with the Due field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDue

`func (o *Identitycertificationdto) SetDue(v SailPointTime)`

SetDue sets Due field to given value.

### HasDue

`func (o *Identitycertificationdto) HasDue() bool`

HasDue returns a boolean if a field has been set.

### SetDueNil

`func (o *Identitycertificationdto) SetDueNil(b bool)`

 SetDueNil sets the value for Due to be an explicit nil

### UnsetDue
`func (o *Identitycertificationdto) UnsetDue()`

UnsetDue ensures that no value is present for Due, not even an explicit nil
### GetSigned

`func (o *Identitycertificationdto) GetSigned() SailPointTime`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *Identitycertificationdto) GetSignedOk() (*SailPointTime, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *Identitycertificationdto) SetSigned(v SailPointTime)`

SetSigned sets Signed field to given value.

### HasSigned

`func (o *Identitycertificationdto) HasSigned() bool`

HasSigned returns a boolean if a field has been set.

### SetSignedNil

`func (o *Identitycertificationdto) SetSignedNil(b bool)`

 SetSignedNil sets the value for Signed to be an explicit nil

### UnsetSigned
`func (o *Identitycertificationdto) UnsetSigned()`

UnsetSigned ensures that no value is present for Signed, not even an explicit nil
### GetReviewer

`func (o *Identitycertificationdto) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *Identitycertificationdto) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *Identitycertificationdto) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *Identitycertificationdto) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetReassignment

`func (o *Identitycertificationdto) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *Identitycertificationdto) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *Identitycertificationdto) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *Identitycertificationdto) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### SetReassignmentNil

`func (o *Identitycertificationdto) SetReassignmentNil(b bool)`

 SetReassignmentNil sets the value for Reassignment to be an explicit nil

### UnsetReassignment
`func (o *Identitycertificationdto) UnsetReassignment()`

UnsetReassignment ensures that no value is present for Reassignment, not even an explicit nil
### GetHasErrors

`func (o *Identitycertificationdto) GetHasErrors() bool`

GetHasErrors returns the HasErrors field if non-nil, zero value otherwise.

### GetHasErrorsOk

`func (o *Identitycertificationdto) GetHasErrorsOk() (*bool, bool)`

GetHasErrorsOk returns a tuple with the HasErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasErrors

`func (o *Identitycertificationdto) SetHasErrors(v bool)`

SetHasErrors sets HasErrors field to given value.

### HasHasErrors

`func (o *Identitycertificationdto) HasHasErrors() bool`

HasHasErrors returns a boolean if a field has been set.

### GetErrorMessage

`func (o *Identitycertificationdto) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *Identitycertificationdto) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *Identitycertificationdto) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *Identitycertificationdto) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *Identitycertificationdto) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *Identitycertificationdto) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetPhase

`func (o *Identitycertificationdto) GetPhase() Certificationphase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *Identitycertificationdto) GetPhaseOk() (*Certificationphase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *Identitycertificationdto) SetPhase(v Certificationphase)`

SetPhase sets Phase field to given value.

### HasPhase

`func (o *Identitycertificationdto) HasPhase() bool`

HasPhase returns a boolean if a field has been set.


