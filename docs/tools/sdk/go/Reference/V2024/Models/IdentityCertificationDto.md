---
id: v2024-identity-certification-dto
title: IdentityCertificationDto
pagination_label: IdentityCertificationDto
sidebar_label: IdentityCertificationDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'IdentityCertificationDto', 'V2024IdentityCertificationDto'] 
slug: /tools/sdk/go/v2024/models/identity-certification-dto
tags: ['SDK', 'Software Development Kit', 'IdentityCertificationDto', 'V2024IdentityCertificationDto']
---

# IdentityCertificationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | id of the certification | [optional] 
**Name** | Pointer to **string** | name of the certification | [optional] 
**Campaign** | Pointer to [**CampaignReference**](campaign-reference) |  | [optional] 
**Completed** | Pointer to **bool** | Have all decisions been made? | [optional] 
**IdentitiesCompleted** | Pointer to **int32** | The number of identities for whom all decisions have been made and are complete. | [optional] 
**IdentitiesTotal** | Pointer to **int32** | The total number of identities in the Certification, both complete and incomplete. | [optional] 
**Created** | Pointer to **time.Time** | created date | [optional] 
**Modified** | Pointer to **time.Time** | modified date | [optional] 
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

### NewIdentityCertificationDto

`func NewIdentityCertificationDto() *IdentityCertificationDto`

NewIdentityCertificationDto instantiates a new IdentityCertificationDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIdentityCertificationDtoWithDefaults

`func NewIdentityCertificationDtoWithDefaults() *IdentityCertificationDto`

NewIdentityCertificationDtoWithDefaults instantiates a new IdentityCertificationDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *IdentityCertificationDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *IdentityCertificationDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *IdentityCertificationDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *IdentityCertificationDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *IdentityCertificationDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *IdentityCertificationDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *IdentityCertificationDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *IdentityCertificationDto) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCampaign

`func (o *IdentityCertificationDto) GetCampaign() CampaignReference`

GetCampaign returns the Campaign field if non-nil, zero value otherwise.

### GetCampaignOk

`func (o *IdentityCertificationDto) GetCampaignOk() (*CampaignReference, bool)`

GetCampaignOk returns a tuple with the Campaign field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCampaign

`func (o *IdentityCertificationDto) SetCampaign(v CampaignReference)`

SetCampaign sets Campaign field to given value.

### HasCampaign

`func (o *IdentityCertificationDto) HasCampaign() bool`

HasCampaign returns a boolean if a field has been set.

### GetCompleted

`func (o *IdentityCertificationDto) GetCompleted() bool`

GetCompleted returns the Completed field if non-nil, zero value otherwise.

### GetCompletedOk

`func (o *IdentityCertificationDto) GetCompletedOk() (*bool, bool)`

GetCompletedOk returns a tuple with the Completed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompleted

`func (o *IdentityCertificationDto) SetCompleted(v bool)`

SetCompleted sets Completed field to given value.

### HasCompleted

`func (o *IdentityCertificationDto) HasCompleted() bool`

HasCompleted returns a boolean if a field has been set.

### GetIdentitiesCompleted

`func (o *IdentityCertificationDto) GetIdentitiesCompleted() int32`

GetIdentitiesCompleted returns the IdentitiesCompleted field if non-nil, zero value otherwise.

### GetIdentitiesCompletedOk

`func (o *IdentityCertificationDto) GetIdentitiesCompletedOk() (*int32, bool)`

GetIdentitiesCompletedOk returns a tuple with the IdentitiesCompleted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesCompleted

`func (o *IdentityCertificationDto) SetIdentitiesCompleted(v int32)`

SetIdentitiesCompleted sets IdentitiesCompleted field to given value.

### HasIdentitiesCompleted

`func (o *IdentityCertificationDto) HasIdentitiesCompleted() bool`

HasIdentitiesCompleted returns a boolean if a field has been set.

### GetIdentitiesTotal

`func (o *IdentityCertificationDto) GetIdentitiesTotal() int32`

GetIdentitiesTotal returns the IdentitiesTotal field if non-nil, zero value otherwise.

### GetIdentitiesTotalOk

`func (o *IdentityCertificationDto) GetIdentitiesTotalOk() (*int32, bool)`

GetIdentitiesTotalOk returns a tuple with the IdentitiesTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentitiesTotal

`func (o *IdentityCertificationDto) SetIdentitiesTotal(v int32)`

SetIdentitiesTotal sets IdentitiesTotal field to given value.

### HasIdentitiesTotal

`func (o *IdentityCertificationDto) HasIdentitiesTotal() bool`

HasIdentitiesTotal returns a boolean if a field has been set.

### GetCreated

`func (o *IdentityCertificationDto) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *IdentityCertificationDto) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *IdentityCertificationDto) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *IdentityCertificationDto) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *IdentityCertificationDto) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *IdentityCertificationDto) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *IdentityCertificationDto) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *IdentityCertificationDto) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDecisionsMade

`func (o *IdentityCertificationDto) GetDecisionsMade() int32`

GetDecisionsMade returns the DecisionsMade field if non-nil, zero value otherwise.

### GetDecisionsMadeOk

`func (o *IdentityCertificationDto) GetDecisionsMadeOk() (*int32, bool)`

GetDecisionsMadeOk returns a tuple with the DecisionsMade field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsMade

`func (o *IdentityCertificationDto) SetDecisionsMade(v int32)`

SetDecisionsMade sets DecisionsMade field to given value.

### HasDecisionsMade

`func (o *IdentityCertificationDto) HasDecisionsMade() bool`

HasDecisionsMade returns a boolean if a field has been set.

### GetDecisionsTotal

`func (o *IdentityCertificationDto) GetDecisionsTotal() int32`

GetDecisionsTotal returns the DecisionsTotal field if non-nil, zero value otherwise.

### GetDecisionsTotalOk

`func (o *IdentityCertificationDto) GetDecisionsTotalOk() (*int32, bool)`

GetDecisionsTotalOk returns a tuple with the DecisionsTotal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDecisionsTotal

`func (o *IdentityCertificationDto) SetDecisionsTotal(v int32)`

SetDecisionsTotal sets DecisionsTotal field to given value.

### HasDecisionsTotal

`func (o *IdentityCertificationDto) HasDecisionsTotal() bool`

HasDecisionsTotal returns a boolean if a field has been set.

### GetDue

`func (o *IdentityCertificationDto) GetDue() time.Time`

GetDue returns the Due field if non-nil, zero value otherwise.

### GetDueOk

`func (o *IdentityCertificationDto) GetDueOk() (*time.Time, bool)`

GetDueOk returns a tuple with the Due field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDue

`func (o *IdentityCertificationDto) SetDue(v time.Time)`

SetDue sets Due field to given value.

### HasDue

`func (o *IdentityCertificationDto) HasDue() bool`

HasDue returns a boolean if a field has been set.

### SetDueNil

`func (o *IdentityCertificationDto) SetDueNil(b bool)`

 SetDueNil sets the value for Due to be an explicit nil

### UnsetDue
`func (o *IdentityCertificationDto) UnsetDue()`

UnsetDue ensures that no value is present for Due, not even an explicit nil
### GetSigned

`func (o *IdentityCertificationDto) GetSigned() time.Time`

GetSigned returns the Signed field if non-nil, zero value otherwise.

### GetSignedOk

`func (o *IdentityCertificationDto) GetSignedOk() (*time.Time, bool)`

GetSignedOk returns a tuple with the Signed field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSigned

`func (o *IdentityCertificationDto) SetSigned(v time.Time)`

SetSigned sets Signed field to given value.

### HasSigned

`func (o *IdentityCertificationDto) HasSigned() bool`

HasSigned returns a boolean if a field has been set.

### SetSignedNil

`func (o *IdentityCertificationDto) SetSignedNil(b bool)`

 SetSignedNil sets the value for Signed to be an explicit nil

### UnsetSigned
`func (o *IdentityCertificationDto) UnsetSigned()`

UnsetSigned ensures that no value is present for Signed, not even an explicit nil
### GetReviewer

`func (o *IdentityCertificationDto) GetReviewer() Reviewer`

GetReviewer returns the Reviewer field if non-nil, zero value otherwise.

### GetReviewerOk

`func (o *IdentityCertificationDto) GetReviewerOk() (*Reviewer, bool)`

GetReviewerOk returns a tuple with the Reviewer field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReviewer

`func (o *IdentityCertificationDto) SetReviewer(v Reviewer)`

SetReviewer sets Reviewer field to given value.

### HasReviewer

`func (o *IdentityCertificationDto) HasReviewer() bool`

HasReviewer returns a boolean if a field has been set.

### GetReassignment

`func (o *IdentityCertificationDto) GetReassignment() Reassignment`

GetReassignment returns the Reassignment field if non-nil, zero value otherwise.

### GetReassignmentOk

`func (o *IdentityCertificationDto) GetReassignmentOk() (*Reassignment, bool)`

GetReassignmentOk returns a tuple with the Reassignment field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReassignment

`func (o *IdentityCertificationDto) SetReassignment(v Reassignment)`

SetReassignment sets Reassignment field to given value.

### HasReassignment

`func (o *IdentityCertificationDto) HasReassignment() bool`

HasReassignment returns a boolean if a field has been set.

### SetReassignmentNil

`func (o *IdentityCertificationDto) SetReassignmentNil(b bool)`

 SetReassignmentNil sets the value for Reassignment to be an explicit nil

### UnsetReassignment
`func (o *IdentityCertificationDto) UnsetReassignment()`

UnsetReassignment ensures that no value is present for Reassignment, not even an explicit nil
### GetHasErrors

`func (o *IdentityCertificationDto) GetHasErrors() bool`

GetHasErrors returns the HasErrors field if non-nil, zero value otherwise.

### GetHasErrorsOk

`func (o *IdentityCertificationDto) GetHasErrorsOk() (*bool, bool)`

GetHasErrorsOk returns a tuple with the HasErrors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHasErrors

`func (o *IdentityCertificationDto) SetHasErrors(v bool)`

SetHasErrors sets HasErrors field to given value.

### HasHasErrors

`func (o *IdentityCertificationDto) HasHasErrors() bool`

HasHasErrors returns a boolean if a field has been set.

### GetErrorMessage

`func (o *IdentityCertificationDto) GetErrorMessage() string`

GetErrorMessage returns the ErrorMessage field if non-nil, zero value otherwise.

### GetErrorMessageOk

`func (o *IdentityCertificationDto) GetErrorMessageOk() (*string, bool)`

GetErrorMessageOk returns a tuple with the ErrorMessage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetErrorMessage

`func (o *IdentityCertificationDto) SetErrorMessage(v string)`

SetErrorMessage sets ErrorMessage field to given value.

### HasErrorMessage

`func (o *IdentityCertificationDto) HasErrorMessage() bool`

HasErrorMessage returns a boolean if a field has been set.

### SetErrorMessageNil

`func (o *IdentityCertificationDto) SetErrorMessageNil(b bool)`

 SetErrorMessageNil sets the value for ErrorMessage to be an explicit nil

### UnsetErrorMessage
`func (o *IdentityCertificationDto) UnsetErrorMessage()`

UnsetErrorMessage ensures that no value is present for ErrorMessage, not even an explicit nil
### GetPhase

`func (o *IdentityCertificationDto) GetPhase() CertificationPhase`

GetPhase returns the Phase field if non-nil, zero value otherwise.

### GetPhaseOk

`func (o *IdentityCertificationDto) GetPhaseOk() (*CertificationPhase, bool)`

GetPhaseOk returns a tuple with the Phase field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPhase

`func (o *IdentityCertificationDto) SetPhase(v CertificationPhase)`

SetPhase sets Phase field to given value.

### HasPhase

`func (o *IdentityCertificationDto) HasPhase() bool`

HasPhase returns a boolean if a field has been set.


