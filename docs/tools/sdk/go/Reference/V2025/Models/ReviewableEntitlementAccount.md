---
id: v2025-reviewable-entitlement-account
title: ReviewableEntitlementAccount
pagination_label: ReviewableEntitlementAccount
sidebar_label: ReviewableEntitlementAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewableEntitlementAccount', 'V2025ReviewableEntitlementAccount'] 
slug: /tools/sdk/go/v2025/models/reviewable-entitlement-account
tags: ['SDK', 'Software Development Kit', 'ReviewableEntitlementAccount', 'V2025ReviewableEntitlementAccount']
---

# ReviewableEntitlementAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeIdentity** | Pointer to **string** | The native identity for this account | [optional] 
**Disabled** | Pointer to **bool** | Indicates whether this account is currently disabled | [optional] [default to false]
**Locked** | Pointer to **bool** | Indicates whether this account is currently locked | [optional] [default to false]
**Type** | Pointer to [**DtoType**](dto-type) |  | [optional] 
**Id** | Pointer to **NullableString** | The id associated with the account | [optional] 
**Name** | Pointer to **NullableString** | The account name | [optional] 
**Created** | Pointer to **NullableTime** | When the account was created | [optional] 
**Modified** | Pointer to **NullableTime** | When the account was last modified | [optional] 
**ActivityInsights** | Pointer to [**ActivityInsights**](activity-insights) |  | [optional] 
**Description** | Pointer to **NullableString** | Information about the account | [optional] 
**GovernanceGroupId** | Pointer to **NullableString** | The id associated with the machine Account Governance Group | [optional] 
**Owner** | Pointer to [**NullableReviewableEntitlementAccountOwner**](reviewable-entitlement-account-owner) |  | [optional] 

## Methods

### NewReviewableEntitlementAccount

`func NewReviewableEntitlementAccount() *ReviewableEntitlementAccount`

NewReviewableEntitlementAccount instantiates a new ReviewableEntitlementAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableEntitlementAccountWithDefaults

`func NewReviewableEntitlementAccountWithDefaults() *ReviewableEntitlementAccount`

NewReviewableEntitlementAccountWithDefaults instantiates a new ReviewableEntitlementAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNativeIdentity

`func (o *ReviewableEntitlementAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *ReviewableEntitlementAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *ReviewableEntitlementAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *ReviewableEntitlementAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisabled

`func (o *ReviewableEntitlementAccount) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *ReviewableEntitlementAccount) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *ReviewableEntitlementAccount) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *ReviewableEntitlementAccount) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *ReviewableEntitlementAccount) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *ReviewableEntitlementAccount) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *ReviewableEntitlementAccount) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *ReviewableEntitlementAccount) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetType

`func (o *ReviewableEntitlementAccount) GetType() DtoType`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReviewableEntitlementAccount) GetTypeOk() (*DtoType, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReviewableEntitlementAccount) SetType(v DtoType)`

SetType sets Type field to given value.

### HasType

`func (o *ReviewableEntitlementAccount) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ReviewableEntitlementAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewableEntitlementAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewableEntitlementAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewableEntitlementAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ReviewableEntitlementAccount) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ReviewableEntitlementAccount) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *ReviewableEntitlementAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReviewableEntitlementAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReviewableEntitlementAccount) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReviewableEntitlementAccount) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ReviewableEntitlementAccount) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ReviewableEntitlementAccount) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *ReviewableEntitlementAccount) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ReviewableEntitlementAccount) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ReviewableEntitlementAccount) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ReviewableEntitlementAccount) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *ReviewableEntitlementAccount) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *ReviewableEntitlementAccount) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *ReviewableEntitlementAccount) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ReviewableEntitlementAccount) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ReviewableEntitlementAccount) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ReviewableEntitlementAccount) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *ReviewableEntitlementAccount) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *ReviewableEntitlementAccount) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetActivityInsights

`func (o *ReviewableEntitlementAccount) GetActivityInsights() ActivityInsights`

GetActivityInsights returns the ActivityInsights field if non-nil, zero value otherwise.

### GetActivityInsightsOk

`func (o *ReviewableEntitlementAccount) GetActivityInsightsOk() (*ActivityInsights, bool)`

GetActivityInsightsOk returns a tuple with the ActivityInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityInsights

`func (o *ReviewableEntitlementAccount) SetActivityInsights(v ActivityInsights)`

SetActivityInsights sets ActivityInsights field to given value.

### HasActivityInsights

`func (o *ReviewableEntitlementAccount) HasActivityInsights() bool`

HasActivityInsights returns a boolean if a field has been set.

### GetDescription

`func (o *ReviewableEntitlementAccount) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReviewableEntitlementAccount) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReviewableEntitlementAccount) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReviewableEntitlementAccount) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ReviewableEntitlementAccount) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ReviewableEntitlementAccount) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetGovernanceGroupId

`func (o *ReviewableEntitlementAccount) GetGovernanceGroupId() string`

GetGovernanceGroupId returns the GovernanceGroupId field if non-nil, zero value otherwise.

### GetGovernanceGroupIdOk

`func (o *ReviewableEntitlementAccount) GetGovernanceGroupIdOk() (*string, bool)`

GetGovernanceGroupIdOk returns a tuple with the GovernanceGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceGroupId

`func (o *ReviewableEntitlementAccount) SetGovernanceGroupId(v string)`

SetGovernanceGroupId sets GovernanceGroupId field to given value.

### HasGovernanceGroupId

`func (o *ReviewableEntitlementAccount) HasGovernanceGroupId() bool`

HasGovernanceGroupId returns a boolean if a field has been set.

### SetGovernanceGroupIdNil

`func (o *ReviewableEntitlementAccount) SetGovernanceGroupIdNil(b bool)`

 SetGovernanceGroupIdNil sets the value for GovernanceGroupId to be an explicit nil

### UnsetGovernanceGroupId
`func (o *ReviewableEntitlementAccount) UnsetGovernanceGroupId()`

UnsetGovernanceGroupId ensures that no value is present for GovernanceGroupId, not even an explicit nil
### GetOwner

`func (o *ReviewableEntitlementAccount) GetOwner() ReviewableEntitlementAccountOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ReviewableEntitlementAccount) GetOwnerOk() (*ReviewableEntitlementAccountOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ReviewableEntitlementAccount) SetOwner(v ReviewableEntitlementAccountOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *ReviewableEntitlementAccount) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *ReviewableEntitlementAccount) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *ReviewableEntitlementAccount) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

