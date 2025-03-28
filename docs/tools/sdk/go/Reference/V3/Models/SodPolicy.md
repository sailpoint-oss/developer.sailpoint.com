---
id: sod-policy
title: SodPolicy
pagination_label: SodPolicy
sidebar_label: SodPolicy
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicy', 'SodPolicy'] 
slug: /tools/sdk/go/v3/models/sod-policy
tags: ['SDK', 'Software Development Kit', 'SodPolicy', 'SodPolicy']
---

# SodPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | Policy id | [optional] [readonly] 
**Name** | Pointer to **string** | Policy Business Name | [optional] 
**Created** | Pointer to **time.Time** | The time when this SOD policy is created. | [optional] [readonly] 
**Modified** | Pointer to **time.Time** | The time when this SOD policy is modified. | [optional] [readonly] 
**Description** | Pointer to **NullableString** | Optional description of the SOD policy | [optional] 
**OwnerRef** | Pointer to [**SodPolicyOwnerRef**](sod-policy-owner-ref) |  | [optional] 
**ExternalPolicyReference** | Pointer to **NullableString** | Optional External Policy Reference | [optional] 
**PolicyQuery** | Pointer to **string** | Search query of the SOD policy | [optional] 
**CompensatingControls** | Pointer to **NullableString** | Optional compensating controls(Mitigating Controls) | [optional] 
**CorrectionAdvice** | Pointer to **NullableString** | Optional correction advice | [optional] 
**State** | Pointer to **string** | whether the policy is enforced or not | [optional] 
**Tags** | Pointer to **[]string** | tags for this policy object | [optional] 
**CreatorId** | Pointer to **string** | Policy&#39;s creator ID | [optional] [readonly] 
**ModifierId** | Pointer to **NullableString** | Policy&#39;s modifier ID | [optional] [readonly] 
**ViolationOwnerAssignmentConfig** | Pointer to [**ViolationOwnerAssignmentConfig**](violation-owner-assignment-config) |  | [optional] 
**Scheduled** | Pointer to **bool** | defines whether a policy has been scheduled or not | [optional] [default to false]
**Type** | Pointer to **string** | whether a policy is query based or conflicting access based | [optional] [default to "GENERAL"]
**ConflictingAccessCriteria** | Pointer to [**SodPolicyConflictingAccessCriteria**](sod-policy-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodPolicy

`func NewSodPolicy() *SodPolicy`

NewSodPolicy instantiates a new SodPolicy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyWithDefaults

`func NewSodPolicyWithDefaults() *SodPolicy`

NewSodPolicyWithDefaults instantiates a new SodPolicy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SodPolicy) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodPolicy) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodPolicy) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodPolicy) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodPolicy) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodPolicy) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodPolicy) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodPolicy) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *SodPolicy) GetCreated() time.Time`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SodPolicy) GetCreatedOk() (*time.Time, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SodPolicy) SetCreated(v time.Time)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SodPolicy) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SodPolicy) GetModified() time.Time`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SodPolicy) GetModifiedOk() (*time.Time, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SodPolicy) SetModified(v time.Time)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SodPolicy) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *SodPolicy) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SodPolicy) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SodPolicy) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SodPolicy) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *SodPolicy) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SodPolicy) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwnerRef

`func (o *SodPolicy) GetOwnerRef() SodPolicyOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *SodPolicy) GetOwnerRefOk() (*SodPolicyOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *SodPolicy) SetOwnerRef(v SodPolicyOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *SodPolicy) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetExternalPolicyReference

`func (o *SodPolicy) GetExternalPolicyReference() string`

GetExternalPolicyReference returns the ExternalPolicyReference field if non-nil, zero value otherwise.

### GetExternalPolicyReferenceOk

`func (o *SodPolicy) GetExternalPolicyReferenceOk() (*string, bool)`

GetExternalPolicyReferenceOk returns a tuple with the ExternalPolicyReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalPolicyReference

`func (o *SodPolicy) SetExternalPolicyReference(v string)`

SetExternalPolicyReference sets ExternalPolicyReference field to given value.

### HasExternalPolicyReference

`func (o *SodPolicy) HasExternalPolicyReference() bool`

HasExternalPolicyReference returns a boolean if a field has been set.

### SetExternalPolicyReferenceNil

`func (o *SodPolicy) SetExternalPolicyReferenceNil(b bool)`

 SetExternalPolicyReferenceNil sets the value for ExternalPolicyReference to be an explicit nil

### UnsetExternalPolicyReference
`func (o *SodPolicy) UnsetExternalPolicyReference()`

UnsetExternalPolicyReference ensures that no value is present for ExternalPolicyReference, not even an explicit nil
### GetPolicyQuery

`func (o *SodPolicy) GetPolicyQuery() string`

GetPolicyQuery returns the PolicyQuery field if non-nil, zero value otherwise.

### GetPolicyQueryOk

`func (o *SodPolicy) GetPolicyQueryOk() (*string, bool)`

GetPolicyQueryOk returns a tuple with the PolicyQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyQuery

`func (o *SodPolicy) SetPolicyQuery(v string)`

SetPolicyQuery sets PolicyQuery field to given value.

### HasPolicyQuery

`func (o *SodPolicy) HasPolicyQuery() bool`

HasPolicyQuery returns a boolean if a field has been set.

### GetCompensatingControls

`func (o *SodPolicy) GetCompensatingControls() string`

GetCompensatingControls returns the CompensatingControls field if non-nil, zero value otherwise.

### GetCompensatingControlsOk

`func (o *SodPolicy) GetCompensatingControlsOk() (*string, bool)`

GetCompensatingControlsOk returns a tuple with the CompensatingControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompensatingControls

`func (o *SodPolicy) SetCompensatingControls(v string)`

SetCompensatingControls sets CompensatingControls field to given value.

### HasCompensatingControls

`func (o *SodPolicy) HasCompensatingControls() bool`

HasCompensatingControls returns a boolean if a field has been set.

### SetCompensatingControlsNil

`func (o *SodPolicy) SetCompensatingControlsNil(b bool)`

 SetCompensatingControlsNil sets the value for CompensatingControls to be an explicit nil

### UnsetCompensatingControls
`func (o *SodPolicy) UnsetCompensatingControls()`

UnsetCompensatingControls ensures that no value is present for CompensatingControls, not even an explicit nil
### GetCorrectionAdvice

`func (o *SodPolicy) GetCorrectionAdvice() string`

GetCorrectionAdvice returns the CorrectionAdvice field if non-nil, zero value otherwise.

### GetCorrectionAdviceOk

`func (o *SodPolicy) GetCorrectionAdviceOk() (*string, bool)`

GetCorrectionAdviceOk returns a tuple with the CorrectionAdvice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectionAdvice

`func (o *SodPolicy) SetCorrectionAdvice(v string)`

SetCorrectionAdvice sets CorrectionAdvice field to given value.

### HasCorrectionAdvice

`func (o *SodPolicy) HasCorrectionAdvice() bool`

HasCorrectionAdvice returns a boolean if a field has been set.

### SetCorrectionAdviceNil

`func (o *SodPolicy) SetCorrectionAdviceNil(b bool)`

 SetCorrectionAdviceNil sets the value for CorrectionAdvice to be an explicit nil

### UnsetCorrectionAdvice
`func (o *SodPolicy) UnsetCorrectionAdvice()`

UnsetCorrectionAdvice ensures that no value is present for CorrectionAdvice, not even an explicit nil
### GetState

`func (o *SodPolicy) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SodPolicy) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SodPolicy) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SodPolicy) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTags

`func (o *SodPolicy) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SodPolicy) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SodPolicy) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SodPolicy) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetCreatorId

`func (o *SodPolicy) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *SodPolicy) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *SodPolicy) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *SodPolicy) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetModifierId

`func (o *SodPolicy) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *SodPolicy) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *SodPolicy) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *SodPolicy) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.

### SetModifierIdNil

`func (o *SodPolicy) SetModifierIdNil(b bool)`

 SetModifierIdNil sets the value for ModifierId to be an explicit nil

### UnsetModifierId
`func (o *SodPolicy) UnsetModifierId()`

UnsetModifierId ensures that no value is present for ModifierId, not even an explicit nil
### GetViolationOwnerAssignmentConfig

`func (o *SodPolicy) GetViolationOwnerAssignmentConfig() ViolationOwnerAssignmentConfig`

GetViolationOwnerAssignmentConfig returns the ViolationOwnerAssignmentConfig field if non-nil, zero value otherwise.

### GetViolationOwnerAssignmentConfigOk

`func (o *SodPolicy) GetViolationOwnerAssignmentConfigOk() (*ViolationOwnerAssignmentConfig, bool)`

GetViolationOwnerAssignmentConfigOk returns a tuple with the ViolationOwnerAssignmentConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationOwnerAssignmentConfig

`func (o *SodPolicy) SetViolationOwnerAssignmentConfig(v ViolationOwnerAssignmentConfig)`

SetViolationOwnerAssignmentConfig sets ViolationOwnerAssignmentConfig field to given value.

### HasViolationOwnerAssignmentConfig

`func (o *SodPolicy) HasViolationOwnerAssignmentConfig() bool`

HasViolationOwnerAssignmentConfig returns a boolean if a field has been set.

### GetScheduled

`func (o *SodPolicy) GetScheduled() bool`

GetScheduled returns the Scheduled field if non-nil, zero value otherwise.

### GetScheduledOk

`func (o *SodPolicy) GetScheduledOk() (*bool, bool)`

GetScheduledOk returns a tuple with the Scheduled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduled

`func (o *SodPolicy) SetScheduled(v bool)`

SetScheduled sets Scheduled field to given value.

### HasScheduled

`func (o *SodPolicy) HasScheduled() bool`

HasScheduled returns a boolean if a field has been set.

### GetType

`func (o *SodPolicy) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodPolicy) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodPolicy) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodPolicy) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *SodPolicy) GetConflictingAccessCriteria() SodPolicyConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *SodPolicy) GetConflictingAccessCriteriaOk() (*SodPolicyConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *SodPolicy) SetConflictingAccessCriteria(v SodPolicyConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *SodPolicy) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


