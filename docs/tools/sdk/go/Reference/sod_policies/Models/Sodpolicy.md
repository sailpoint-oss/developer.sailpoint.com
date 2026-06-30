---
id: v1-sodpolicy
title: Sodpolicy
pagination_label: Sodpolicy
sidebar_label: Sodpolicy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sodpolicy', 'V1Sodpolicy'] 
slug: /tools/sdk/go/sodpolicies/models/sodpolicy
tags: ['SDK', 'Software Development Kit', 'Sodpolicy', 'V1Sodpolicy']
---

# Sodpolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Policy id | [optional] [readonly] 
**Name** | Pointer to **string** | Policy Business Name | [optional] 
**Created** | Pointer to **SailPointTime** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** | Pointer to **NullableString** | Optional description of the SOD policy | [optional] 
**OwnerRef** | Pointer to [**SodpolicyOwnerRef**](sodpolicy-owner-ref) |  | [optional] 
**ExternalPolicyReference** | Pointer to **NullableString** | Optional External Policy Reference | [optional] 
**PolicyQuery** | Pointer to **string** | Search query of the SOD policy | [optional] 
**CompensatingControls** | Pointer to **NullableString** | Optional compensating controls(Mitigating Controls) | [optional] 
**CorrectionAdvice** | Pointer to **NullableString** | Optional correction advice | [optional] 
**State** | Pointer to **string** | whether the policy is enforced or not | [optional] 
**Tags** | Pointer to **[]string** | tags for this policy object | [optional] 
**CreatorId** | Pointer to **string** | Policy's creator ID | [optional] [readonly] 
**ModifierId** | Pointer to **NullableString** | Policy's modifier ID | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** | Pointer to [**Violationownerassignmentconfig**](violationownerassignmentconfig) |  | [optional] 
**Scheduled** | Pointer to **bool** | defines whether a policy has been scheduled or not | [optional] [default to false]
**Type** | Pointer to **string** | whether a policy is query based or conflicting access based | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** | Pointer to [**SodpolicyConflictingAccessCriteria**](sodpolicy-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodpolicy

`func NewSodpolicy() *Sodpolicy`

NewSodpolicy instantiates a new Sodpolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodpolicyWithDefaults

`func NewSodpolicyWithDefaults() *Sodpolicy`

NewSodpolicyWithDefaults instantiates a new Sodpolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Sodpolicy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Sodpolicy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Sodpolicy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Sodpolicy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Sodpolicy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Sodpolicy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Sodpolicy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Sodpolicy) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *Sodpolicy) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Sodpolicy) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Sodpolicy) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Sodpolicy) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Sodpolicy) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Sodpolicy) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Sodpolicy) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Sodpolicy) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *Sodpolicy) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Sodpolicy) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Sodpolicy) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Sodpolicy) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Sodpolicy) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Sodpolicy) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwnerRef

`func (o *Sodpolicy) GetOwnerRef() SodpolicyOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *Sodpolicy) GetOwnerRefOk() (*SodpolicyOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *Sodpolicy) SetOwnerRef(v SodpolicyOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *Sodpolicy) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetExternalPolicyReference

`func (o *Sodpolicy) GetExternalPolicyReference() string`

GetExternalPolicyReference returns the ExternalPolicyReference field if non-nil, zero value otherwise.

### GetExternalPolicyReferenceOk

`func (o *Sodpolicy) GetExternalPolicyReferenceOk() (*string, bool)`

GetExternalPolicyReferenceOk returns a tuple with the ExternalPolicyReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalPolicyReference

`func (o *Sodpolicy) SetExternalPolicyReference(v string)`

SetExternalPolicyReference sets ExternalPolicyReference field to given value.

### HasExternalPolicyReference

`func (o *Sodpolicy) HasExternalPolicyReference() bool`

HasExternalPolicyReference returns a boolean if a field has been set.

### SetExternalPolicyReferenceNil

`func (o *Sodpolicy) SetExternalPolicyReferenceNil(b bool)`

 SetExternalPolicyReferenceNil sets the value for ExternalPolicyReference to be an explicit nil

### UnsetExternalPolicyReference
`func (o *Sodpolicy) UnsetExternalPolicyReference()`

UnsetExternalPolicyReference ensures that no value is present for ExternalPolicyReference, not even an explicit nil
### GetPolicyQuery

`func (o *Sodpolicy) GetPolicyQuery() string`

GetPolicyQuery returns the PolicyQuery field if non-nil, zero value otherwise.

### GetPolicyQueryOk

`func (o *Sodpolicy) GetPolicyQueryOk() (*string, bool)`

GetPolicyQueryOk returns a tuple with the PolicyQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyQuery

`func (o *Sodpolicy) SetPolicyQuery(v string)`

SetPolicyQuery sets PolicyQuery field to given value.

### HasPolicyQuery

`func (o *Sodpolicy) HasPolicyQuery() bool`

HasPolicyQuery returns a boolean if a field has been set.

### GetCompensatingControls

`func (o *Sodpolicy) GetCompensatingControls() string`

GetCompensatingControls returns the CompensatingControls field if non-nil, zero value otherwise.

### GetCompensatingControlsOk

`func (o *Sodpolicy) GetCompensatingControlsOk() (*string, bool)`

GetCompensatingControlsOk returns a tuple with the CompensatingControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompensatingControls

`func (o *Sodpolicy) SetCompensatingControls(v string)`

SetCompensatingControls sets CompensatingControls field to given value.

### HasCompensatingControls

`func (o *Sodpolicy) HasCompensatingControls() bool`

HasCompensatingControls returns a boolean if a field has been set.

### SetCompensatingControlsNil

`func (o *Sodpolicy) SetCompensatingControlsNil(b bool)`

 SetCompensatingControlsNil sets the value for CompensatingControls to be an explicit nil

### UnsetCompensatingControls
`func (o *Sodpolicy) UnsetCompensatingControls()`

UnsetCompensatingControls ensures that no value is present for CompensatingControls, not even an explicit nil
### GetCorrectionAdvice

`func (o *Sodpolicy) GetCorrectionAdvice() string`

GetCorrectionAdvice returns the CorrectionAdvice field if non-nil, zero value otherwise.

### GetCorrectionAdviceOk

`func (o *Sodpolicy) GetCorrectionAdviceOk() (*string, bool)`

GetCorrectionAdviceOk returns a tuple with the CorrectionAdvice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectionAdvice

`func (o *Sodpolicy) SetCorrectionAdvice(v string)`

SetCorrectionAdvice sets CorrectionAdvice field to given value.

### HasCorrectionAdvice

`func (o *Sodpolicy) HasCorrectionAdvice() bool`

HasCorrectionAdvice returns a boolean if a field has been set.

### SetCorrectionAdviceNil

`func (o *Sodpolicy) SetCorrectionAdviceNil(b bool)`

 SetCorrectionAdviceNil sets the value for CorrectionAdvice to be an explicit nil

### UnsetCorrectionAdvice
`func (o *Sodpolicy) UnsetCorrectionAdvice()`

UnsetCorrectionAdvice ensures that no value is present for CorrectionAdvice, not even an explicit nil
### GetState

`func (o *Sodpolicy) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *Sodpolicy) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *Sodpolicy) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *Sodpolicy) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTags

`func (o *Sodpolicy) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *Sodpolicy) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *Sodpolicy) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *Sodpolicy) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetCreatorId

`func (o *Sodpolicy) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *Sodpolicy) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *Sodpolicy) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *Sodpolicy) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetModifierId

`func (o *Sodpolicy) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *Sodpolicy) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *Sodpolicy) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *Sodpolicy) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.

### SetModifierIdNil

`func (o *Sodpolicy) SetModifierIdNil(b bool)`

 SetModifierIdNil sets the value for ModifierId to be an explicit nil

### UnsetModifierId
`func (o *Sodpolicy) UnsetModifierId()`

UnsetModifierId ensures that no value is present for ModifierId, not even an explicit nil
### GetViolationOwnerAssignmentConfig

`func (o *Sodpolicy) GetViolationOwnerAssignmentConfig() Violationownerassignmentconfig`

GetViolationOwnerAssignmentConfig returns the ViolationOwnerAssignmentConfig field if non-nil, zero value otherwise.

### GetViolationOwnerAssignmentConfigOk

`func (o *Sodpolicy) GetViolationOwnerAssignmentConfigOk() (*Violationownerassignmentconfig, bool)`

GetViolationOwnerAssignmentConfigOk returns a tuple with the ViolationOwnerAssignmentConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationOwnerAssignmentConfig

`func (o *Sodpolicy) SetViolationOwnerAssignmentConfig(v Violationownerassignmentconfig)`

SetViolationOwnerAssignmentConfig sets ViolationOwnerAssignmentConfig field to given value.

### HasViolationOwnerAssignmentConfig

`func (o *Sodpolicy) HasViolationOwnerAssignmentConfig() bool`

HasViolationOwnerAssignmentConfig returns a boolean if a field has been set.

### GetScheduled

`func (o *Sodpolicy) GetScheduled() bool`

GetScheduled returns the Scheduled field if non-nil, zero value otherwise.

### GetScheduledOk

`func (o *Sodpolicy) GetScheduledOk() (*bool, bool)`

GetScheduledOk returns a tuple with the Scheduled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduled

`func (o *Sodpolicy) SetScheduled(v bool)`

SetScheduled sets Scheduled field to given value.

### HasScheduled

`func (o *Sodpolicy) HasScheduled() bool`

HasScheduled returns a boolean if a field has been set.

### GetType

`func (o *Sodpolicy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Sodpolicy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Sodpolicy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *Sodpolicy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *Sodpolicy) GetConflictingAccessCriteria() SodpolicyConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *Sodpolicy) GetConflictingAccessCriteriaOk() (*SodpolicyConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *Sodpolicy) SetConflictingAccessCriteria(v SodpolicyConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *Sodpolicy) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


