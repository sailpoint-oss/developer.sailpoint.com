---
id: sod-policy-request
title: SodPolicyRequest
pagination_label: SodPolicyRequest
sidebar_label: SodPolicyRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicyRequest', 'SodPolicyRequest'] 
slug: /tools/sdk/go/v3/models/sod-policy-request
tags: ['SDK', 'Software Development Kit', 'SodPolicyRequest', 'SodPolicyRequest']
---

# SodPolicyRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Policy id | [optional] [readonly] 
**Name** | Pointer to **string** | Policy Business Name | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** | Pointer to **NullableString** | Optional description of the SOD policy | [optional] 
**OwnerRef** | Pointer to [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**ExternalPolicyReference** | Pointer to **NullableString** | Optional External Policy Reference | [optional] 
**PolicyQuery** | Pointer to **string** | Search query of the SOD policy | [optional] 
**CompensatingControls** | Pointer to **NullableString** | Optional compensating controls(Mitigating Controls) | [optional] 
**CorrectionAdvice** | Pointer to **NullableString** | Optional correction advice | [optional] 
**State** | Pointer to **string** | whether the policy is enforced or not | [optional] 
**Tags** | Pointer to **[]string** | tags for this policy object | [optional] 
**CreatorId** | Pointer to **string** | Policy's creator ID | [optional] [readonly] 
**ModifierId** | Pointer to **NullableString** | Policy's modifier ID | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** | Pointer to [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**Scheduled** | Pointer to **bool** | defines whether a policy has been scheduled or not | [optional] [default to false]
**Type** | Pointer to **string** | whether a policy is query based or conflicting access based | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** | Pointer to [**SodPolicyRequestAllOfConflictingAccessCriteria**](sod-policy-request-all-of-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodPolicyRequest

`func NewSodPolicyRequest() *SodPolicyRequest`

NewSodPolicyRequest instantiates a new SodPolicyRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyRequestWithDefaults

`func NewSodPolicyRequestWithDefaults() *SodPolicyRequest`

NewSodPolicyRequestWithDefaults instantiates a new SodPolicyRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SodPolicyRequest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodPolicyRequest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodPolicyRequest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodPolicyRequest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodPolicyRequest) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodPolicyRequest) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodPolicyRequest) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodPolicyRequest) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *SodPolicyRequest) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SodPolicyRequest) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SodPolicyRequest) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SodPolicyRequest) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SodPolicyRequest) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SodPolicyRequest) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SodPolicyRequest) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SodPolicyRequest) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *SodPolicyRequest) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SodPolicyRequest) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SodPolicyRequest) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SodPolicyRequest) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *SodPolicyRequest) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SodPolicyRequest) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwnerRef

`func (o *SodPolicyRequest) GetOwnerRef() SodPolicyOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *SodPolicyRequest) GetOwnerRefOk() (*SodPolicyOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *SodPolicyRequest) SetOwnerRef(v SodPolicyOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *SodPolicyRequest) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetExternalPolicyReference

`func (o *SodPolicyRequest) GetExternalPolicyReference() string`

GetExternalPolicyReference returns the ExternalPolicyReference field if non-nil, zero value otherwise.

### GetExternalPolicyReferenceOk

`func (o *SodPolicyRequest) GetExternalPolicyReferenceOk() (*string, bool)`

GetExternalPolicyReferenceOk returns a tuple with the ExternalPolicyReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalPolicyReference

`func (o *SodPolicyRequest) SetExternalPolicyReference(v string)`

SetExternalPolicyReference sets ExternalPolicyReference field to given value.

### HasExternalPolicyReference

`func (o *SodPolicyRequest) HasExternalPolicyReference() bool`

HasExternalPolicyReference returns a boolean if a field has been set.

### SetExternalPolicyReferenceNil

`func (o *SodPolicyRequest) SetExternalPolicyReferenceNil(b bool)`

 SetExternalPolicyReferenceNil sets the value for ExternalPolicyReference to be an explicit nil

### UnsetExternalPolicyReference
`func (o *SodPolicyRequest) UnsetExternalPolicyReference()`

UnsetExternalPolicyReference ensures that no value is present for ExternalPolicyReference, not even an explicit nil
### GetPolicyQuery

`func (o *SodPolicyRequest) GetPolicyQuery() string`

GetPolicyQuery returns the PolicyQuery field if non-nil, zero value otherwise.

### GetPolicyQueryOk

`func (o *SodPolicyRequest) GetPolicyQueryOk() (*string, bool)`

GetPolicyQueryOk returns a tuple with the PolicyQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyQuery

`func (o *SodPolicyRequest) SetPolicyQuery(v string)`

SetPolicyQuery sets PolicyQuery field to given value.

### HasPolicyQuery

`func (o *SodPolicyRequest) HasPolicyQuery() bool`

HasPolicyQuery returns a boolean if a field has been set.

### GetCompensatingControls

`func (o *SodPolicyRequest) GetCompensatingControls() string`

GetCompensatingControls returns the CompensatingControls field if non-nil, zero value otherwise.

### GetCompensatingControlsOk

`func (o *SodPolicyRequest) GetCompensatingControlsOk() (*string, bool)`

GetCompensatingControlsOk returns a tuple with the CompensatingControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompensatingControls

`func (o *SodPolicyRequest) SetCompensatingControls(v string)`

SetCompensatingControls sets CompensatingControls field to given value.

### HasCompensatingControls

`func (o *SodPolicyRequest) HasCompensatingControls() bool`

HasCompensatingControls returns a boolean if a field has been set.

### SetCompensatingControlsNil

`func (o *SodPolicyRequest) SetCompensatingControlsNil(b bool)`

 SetCompensatingControlsNil sets the value for CompensatingControls to be an explicit nil

### UnsetCompensatingControls
`func (o *SodPolicyRequest) UnsetCompensatingControls()`

UnsetCompensatingControls ensures that no value is present for CompensatingControls, not even an explicit nil
### GetCorrectionAdvice

`func (o *SodPolicyRequest) GetCorrectionAdvice() string`

GetCorrectionAdvice returns the CorrectionAdvice field if non-nil, zero value otherwise.

### GetCorrectionAdviceOk

`func (o *SodPolicyRequest) GetCorrectionAdviceOk() (*string, bool)`

GetCorrectionAdviceOk returns a tuple with the CorrectionAdvice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectionAdvice

`func (o *SodPolicyRequest) SetCorrectionAdvice(v string)`

SetCorrectionAdvice sets CorrectionAdvice field to given value.

### HasCorrectionAdvice

`func (o *SodPolicyRequest) HasCorrectionAdvice() bool`

HasCorrectionAdvice returns a boolean if a field has been set.

### SetCorrectionAdviceNil

`func (o *SodPolicyRequest) SetCorrectionAdviceNil(b bool)`

 SetCorrectionAdviceNil sets the value for CorrectionAdvice to be an explicit nil

### UnsetCorrectionAdvice
`func (o *SodPolicyRequest) UnsetCorrectionAdvice()`

UnsetCorrectionAdvice ensures that no value is present for CorrectionAdvice, not even an explicit nil
### GetState

`func (o *SodPolicyRequest) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SodPolicyRequest) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SodPolicyRequest) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SodPolicyRequest) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTags

`func (o *SodPolicyRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SodPolicyRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SodPolicyRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SodPolicyRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetCreatorId

`func (o *SodPolicyRequest) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *SodPolicyRequest) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *SodPolicyRequest) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *SodPolicyRequest) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetModifierId

`func (o *SodPolicyRequest) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *SodPolicyRequest) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *SodPolicyRequest) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *SodPolicyRequest) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.

### SetModifierIdNil

`func (o *SodPolicyRequest) SetModifierIdNil(b bool)`

 SetModifierIdNil sets the value for ModifierId to be an explicit nil

### UnsetModifierId
`func (o *SodPolicyRequest) UnsetModifierId()`

UnsetModifierId ensures that no value is present for ModifierId, not even an explicit nil
### GetViolationOwnerAssignmentConfig

`func (o *SodPolicyRequest) GetViolationOwnerAssignmentConfig() ViolationOwnerAssignmentConfig`

GetViolationOwnerAssignmentConfig returns the ViolationOwnerAssignmentConfig field if non-nil, zero value otherwise.

### GetViolationOwnerAssignmentConfigOk

`func (o *SodPolicyRequest) GetViolationOwnerAssignmentConfigOk() (*ViolationOwnerAssignmentConfig, bool)`

GetViolationOwnerAssignmentConfigOk returns a tuple with the ViolationOwnerAssignmentConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationOwnerAssignmentConfig

`func (o *SodPolicyRequest) SetViolationOwnerAssignmentConfig(v ViolationOwnerAssignmentConfig)`

SetViolationOwnerAssignmentConfig sets ViolationOwnerAssignmentConfig field to given value.

### HasViolationOwnerAssignmentConfig

`func (o *SodPolicyRequest) HasViolationOwnerAssignmentConfig() bool`

HasViolationOwnerAssignmentConfig returns a boolean if a field has been set.

### GetScheduled

`func (o *SodPolicyRequest) GetScheduled() bool`

GetScheduled returns the Scheduled field if non-nil, zero value otherwise.

### GetScheduledOk

`func (o *SodPolicyRequest) GetScheduledOk() (*bool, bool)`

GetScheduledOk returns a tuple with the Scheduled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduled

`func (o *SodPolicyRequest) SetScheduled(v bool)`

SetScheduled sets Scheduled field to given value.

### HasScheduled

`func (o *SodPolicyRequest) HasScheduled() bool`

HasScheduled returns a boolean if a field has been set.

### GetType

`func (o *SodPolicyRequest) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodPolicyRequest) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodPolicyRequest) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodPolicyRequest) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *SodPolicyRequest) GetConflictingAccessCriteria() SodPolicyRequestAllOfConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *SodPolicyRequest) GetConflictingAccessCriteriaOk() (*SodPolicyRequestAllOfConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *SodPolicyRequest) SetConflictingAccessCriteria(v SodPolicyRequestAllOfConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *SodPolicyRequest) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


