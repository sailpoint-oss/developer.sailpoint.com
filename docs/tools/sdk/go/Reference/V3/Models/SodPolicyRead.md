---
id: sod-policy-read
title: SodPolicyRead
pagination_label: SodPolicyRead
sidebar_label: SodPolicyRead
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'SodPolicyRead', 'SodPolicyRead'] 
slug: /tools/sdk/go/v3/models/sod-policy-read
tags: ['SDK', 'Software Development Kit', 'SodPolicyRead', 'SodPolicyRead']
---

# SodPolicyRead

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
**ConflictingAccessCriteria** | Pointer to [**SodPolicyReadAllOfConflictingAccessCriteria**](sod-policy-read-all-of-conflicting-access-criteria) |  | [optional] 

## Methods

### NewSodPolicyRead

`func NewSodPolicyRead() *SodPolicyRead`

NewSodPolicyRead instantiates a new SodPolicyRead object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSodPolicyReadWithDefaults

`func NewSodPolicyReadWithDefaults() *SodPolicyRead`

NewSodPolicyReadWithDefaults instantiates a new SodPolicyRead object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *SodPolicyRead) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *SodPolicyRead) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *SodPolicyRead) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *SodPolicyRead) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *SodPolicyRead) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *SodPolicyRead) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *SodPolicyRead) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *SodPolicyRead) HasName() bool`

HasName returns a boolean if a field has been set.

### GetCreated

`func (o *SodPolicyRead) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *SodPolicyRead) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *SodPolicyRead) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *SodPolicyRead) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *SodPolicyRead) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *SodPolicyRead) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *SodPolicyRead) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *SodPolicyRead) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetDescription

`func (o *SodPolicyRead) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *SodPolicyRead) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *SodPolicyRead) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *SodPolicyRead) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *SodPolicyRead) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *SodPolicyRead) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetOwnerRef

`func (o *SodPolicyRead) GetOwnerRef() SodPolicyOwnerRef`

GetOwnerRef returns the OwnerRef field if non-nil, zero value otherwise.

### GetOwnerRefOk

`func (o *SodPolicyRead) GetOwnerRefOk() (*SodPolicyOwnerRef, bool)`

GetOwnerRefOk returns a tuple with the OwnerRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerRef

`func (o *SodPolicyRead) SetOwnerRef(v SodPolicyOwnerRef)`

SetOwnerRef sets OwnerRef field to given value.

### HasOwnerRef

`func (o *SodPolicyRead) HasOwnerRef() bool`

HasOwnerRef returns a boolean if a field has been set.

### GetExternalPolicyReference

`func (o *SodPolicyRead) GetExternalPolicyReference() string`

GetExternalPolicyReference returns the ExternalPolicyReference field if non-nil, zero value otherwise.

### GetExternalPolicyReferenceOk

`func (o *SodPolicyRead) GetExternalPolicyReferenceOk() (*string, bool)`

GetExternalPolicyReferenceOk returns a tuple with the ExternalPolicyReference field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExternalPolicyReference

`func (o *SodPolicyRead) SetExternalPolicyReference(v string)`

SetExternalPolicyReference sets ExternalPolicyReference field to given value.

### HasExternalPolicyReference

`func (o *SodPolicyRead) HasExternalPolicyReference() bool`

HasExternalPolicyReference returns a boolean if a field has been set.

### SetExternalPolicyReferenceNil

`func (o *SodPolicyRead) SetExternalPolicyReferenceNil(b bool)`

 SetExternalPolicyReferenceNil sets the value for ExternalPolicyReference to be an explicit nil

### UnsetExternalPolicyReference
`func (o *SodPolicyRead) UnsetExternalPolicyReference()`

UnsetExternalPolicyReference ensures that no value is present for ExternalPolicyReference, not even an explicit nil
### GetPolicyQuery

`func (o *SodPolicyRead) GetPolicyQuery() string`

GetPolicyQuery returns the PolicyQuery field if non-nil, zero value otherwise.

### GetPolicyQueryOk

`func (o *SodPolicyRead) GetPolicyQueryOk() (*string, bool)`

GetPolicyQueryOk returns a tuple with the PolicyQuery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPolicyQuery

`func (o *SodPolicyRead) SetPolicyQuery(v string)`

SetPolicyQuery sets PolicyQuery field to given value.

### HasPolicyQuery

`func (o *SodPolicyRead) HasPolicyQuery() bool`

HasPolicyQuery returns a boolean if a field has been set.

### GetCompensatingControls

`func (o *SodPolicyRead) GetCompensatingControls() string`

GetCompensatingControls returns the CompensatingControls field if non-nil, zero value otherwise.

### GetCompensatingControlsOk

`func (o *SodPolicyRead) GetCompensatingControlsOk() (*string, bool)`

GetCompensatingControlsOk returns a tuple with the CompensatingControls field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCompensatingControls

`func (o *SodPolicyRead) SetCompensatingControls(v string)`

SetCompensatingControls sets CompensatingControls field to given value.

### HasCompensatingControls

`func (o *SodPolicyRead) HasCompensatingControls() bool`

HasCompensatingControls returns a boolean if a field has been set.

### SetCompensatingControlsNil

`func (o *SodPolicyRead) SetCompensatingControlsNil(b bool)`

 SetCompensatingControlsNil sets the value for CompensatingControls to be an explicit nil

### UnsetCompensatingControls
`func (o *SodPolicyRead) UnsetCompensatingControls()`

UnsetCompensatingControls ensures that no value is present for CompensatingControls, not even an explicit nil
### GetCorrectionAdvice

`func (o *SodPolicyRead) GetCorrectionAdvice() string`

GetCorrectionAdvice returns the CorrectionAdvice field if non-nil, zero value otherwise.

### GetCorrectionAdviceOk

`func (o *SodPolicyRead) GetCorrectionAdviceOk() (*string, bool)`

GetCorrectionAdviceOk returns a tuple with the CorrectionAdvice field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCorrectionAdvice

`func (o *SodPolicyRead) SetCorrectionAdvice(v string)`

SetCorrectionAdvice sets CorrectionAdvice field to given value.

### HasCorrectionAdvice

`func (o *SodPolicyRead) HasCorrectionAdvice() bool`

HasCorrectionAdvice returns a boolean if a field has been set.

### SetCorrectionAdviceNil

`func (o *SodPolicyRead) SetCorrectionAdviceNil(b bool)`

 SetCorrectionAdviceNil sets the value for CorrectionAdvice to be an explicit nil

### UnsetCorrectionAdvice
`func (o *SodPolicyRead) UnsetCorrectionAdvice()`

UnsetCorrectionAdvice ensures that no value is present for CorrectionAdvice, not even an explicit nil
### GetState

`func (o *SodPolicyRead) GetState() string`

GetState returns the State field if non-nil, zero value otherwise.

### GetStateOk

`func (o *SodPolicyRead) GetStateOk() (*string, bool)`

GetStateOk returns a tuple with the State field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetState

`func (o *SodPolicyRead) SetState(v string)`

SetState sets State field to given value.

### HasState

`func (o *SodPolicyRead) HasState() bool`

HasState returns a boolean if a field has been set.

### GetTags

`func (o *SodPolicyRead) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *SodPolicyRead) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *SodPolicyRead) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *SodPolicyRead) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetCreatorId

`func (o *SodPolicyRead) GetCreatorId() string`

GetCreatorId returns the CreatorId field if non-nil, zero value otherwise.

### GetCreatorIdOk

`func (o *SodPolicyRead) GetCreatorIdOk() (*string, bool)`

GetCreatorIdOk returns a tuple with the CreatorId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatorId

`func (o *SodPolicyRead) SetCreatorId(v string)`

SetCreatorId sets CreatorId field to given value.

### HasCreatorId

`func (o *SodPolicyRead) HasCreatorId() bool`

HasCreatorId returns a boolean if a field has been set.

### GetModifierId

`func (o *SodPolicyRead) GetModifierId() string`

GetModifierId returns the ModifierId field if non-nil, zero value otherwise.

### GetModifierIdOk

`func (o *SodPolicyRead) GetModifierIdOk() (*string, bool)`

GetModifierIdOk returns a tuple with the ModifierId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModifierId

`func (o *SodPolicyRead) SetModifierId(v string)`

SetModifierId sets ModifierId field to given value.

### HasModifierId

`func (o *SodPolicyRead) HasModifierId() bool`

HasModifierId returns a boolean if a field has been set.

### SetModifierIdNil

`func (o *SodPolicyRead) SetModifierIdNil(b bool)`

 SetModifierIdNil sets the value for ModifierId to be an explicit nil

### UnsetModifierId
`func (o *SodPolicyRead) UnsetModifierId()`

UnsetModifierId ensures that no value is present for ModifierId, not even an explicit nil
### GetViolationOwnerAssignmentConfig

`func (o *SodPolicyRead) GetViolationOwnerAssignmentConfig() ViolationOwnerAssignmentConfig`

GetViolationOwnerAssignmentConfig returns the ViolationOwnerAssignmentConfig field if non-nil, zero value otherwise.

### GetViolationOwnerAssignmentConfigOk

`func (o *SodPolicyRead) GetViolationOwnerAssignmentConfigOk() (*ViolationOwnerAssignmentConfig, bool)`

GetViolationOwnerAssignmentConfigOk returns a tuple with the ViolationOwnerAssignmentConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetViolationOwnerAssignmentConfig

`func (o *SodPolicyRead) SetViolationOwnerAssignmentConfig(v ViolationOwnerAssignmentConfig)`

SetViolationOwnerAssignmentConfig sets ViolationOwnerAssignmentConfig field to given value.

### HasViolationOwnerAssignmentConfig

`func (o *SodPolicyRead) HasViolationOwnerAssignmentConfig() bool`

HasViolationOwnerAssignmentConfig returns a boolean if a field has been set.

### GetScheduled

`func (o *SodPolicyRead) GetScheduled() bool`

GetScheduled returns the Scheduled field if non-nil, zero value otherwise.

### GetScheduledOk

`func (o *SodPolicyRead) GetScheduledOk() (*bool, bool)`

GetScheduledOk returns a tuple with the Scheduled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScheduled

`func (o *SodPolicyRead) SetScheduled(v bool)`

SetScheduled sets Scheduled field to given value.

### HasScheduled

`func (o *SodPolicyRead) HasScheduled() bool`

HasScheduled returns a boolean if a field has been set.

### GetType

`func (o *SodPolicyRead) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *SodPolicyRead) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *SodPolicyRead) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *SodPolicyRead) HasType() bool`

HasType returns a boolean if a field has been set.

### GetConflictingAccessCriteria

`func (o *SodPolicyRead) GetConflictingAccessCriteria() SodPolicyReadAllOfConflictingAccessCriteria`

GetConflictingAccessCriteria returns the ConflictingAccessCriteria field if non-nil, zero value otherwise.

### GetConflictingAccessCriteriaOk

`func (o *SodPolicyRead) GetConflictingAccessCriteriaOk() (*SodPolicyReadAllOfConflictingAccessCriteria, bool)`

GetConflictingAccessCriteriaOk returns a tuple with the ConflictingAccessCriteria field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetConflictingAccessCriteria

`func (o *SodPolicyRead) SetConflictingAccessCriteria(v SodPolicyReadAllOfConflictingAccessCriteria)`

SetConflictingAccessCriteria sets ConflictingAccessCriteria field to given value.

### HasConflictingAccessCriteria

`func (o *SodPolicyRead) HasConflictingAccessCriteria() bool`

HasConflictingAccessCriteria returns a boolean if a field has been set.


