---
id: v1-reviewableentitlement-account
title: ReviewableentitlementAccount
pagination_label: ReviewableentitlementAccount
sidebar_label: ReviewableentitlementAccount
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ReviewableentitlementAccount', 'V1ReviewableentitlementAccount'] 
slug: /tools/sdk/go/certifications/models/reviewableentitlement-account
tags: ['SDK', 'Software Development Kit', 'ReviewableentitlementAccount', 'V1ReviewableentitlementAccount']
---

# ReviewableentitlementAccount

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NativeIdentity** | Pointer to **string** | The native identity for this account | [optional] 
**Disabled** | Pointer to **bool** | Indicates whether this account is currently disabled | [optional] [default to false]
**Locked** | Pointer to **bool** | Indicates whether this account is currently locked | [optional] [default to false]
**Type** | Pointer to [**Dtotype**](dtotype) |  | [optional] 
**Id** | Pointer to **NullableString** | The id associated with the account | [optional] 
**Name** | Pointer to **NullableString** | The account name | [optional] 
**Created** | Pointer to **NullableTime** | When the account was created | [optional] 
**Modified** | Pointer to **NullableTime** | When the account was last modified | [optional] 
**ActivityInsights** | Pointer to [**Activityinsights**](activityinsights) |  | [optional] 
**Description** | Pointer to **NullableString** | Information about the account | [optional] 
**GovernanceGroupId** | Pointer to **NullableString** | The id associated with the machine Account Governance Group | [optional] 
**Owner** | Pointer to [**NullableReviewableentitlementAccountOwner**](reviewableentitlement-account-owner) |  | [optional] 

## Methods

### NewReviewableentitlementAccount

`func NewReviewableentitlementAccount() *ReviewableentitlementAccount`

NewReviewableentitlementAccount instantiates a new ReviewableentitlementAccount object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReviewableentitlementAccountWithDefaults

`func NewReviewableentitlementAccountWithDefaults() *ReviewableentitlementAccount`

NewReviewableentitlementAccountWithDefaults instantiates a new ReviewableentitlementAccount object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetNativeIdentity

`func (o *ReviewableentitlementAccount) GetNativeIdentity() string`

GetNativeIdentity returns the NativeIdentity field if non-nil, zero value otherwise.

### GetNativeIdentityOk

`func (o *ReviewableentitlementAccount) GetNativeIdentityOk() (*string, bool)`

GetNativeIdentityOk returns a tuple with the NativeIdentity field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNativeIdentity

`func (o *ReviewableentitlementAccount) SetNativeIdentity(v string)`

SetNativeIdentity sets NativeIdentity field to given value.

### HasNativeIdentity

`func (o *ReviewableentitlementAccount) HasNativeIdentity() bool`

HasNativeIdentity returns a boolean if a field has been set.

### GetDisabled

`func (o *ReviewableentitlementAccount) GetDisabled() bool`

GetDisabled returns the Disabled field if non-nil, zero value otherwise.

### GetDisabledOk

`func (o *ReviewableentitlementAccount) GetDisabledOk() (*bool, bool)`

GetDisabledOk returns a tuple with the Disabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisabled

`func (o *ReviewableentitlementAccount) SetDisabled(v bool)`

SetDisabled sets Disabled field to given value.

### HasDisabled

`func (o *ReviewableentitlementAccount) HasDisabled() bool`

HasDisabled returns a boolean if a field has been set.

### GetLocked

`func (o *ReviewableentitlementAccount) GetLocked() bool`

GetLocked returns the Locked field if non-nil, zero value otherwise.

### GetLockedOk

`func (o *ReviewableentitlementAccount) GetLockedOk() (*bool, bool)`

GetLockedOk returns a tuple with the Locked field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLocked

`func (o *ReviewableentitlementAccount) SetLocked(v bool)`

SetLocked sets Locked field to given value.

### HasLocked

`func (o *ReviewableentitlementAccount) HasLocked() bool`

HasLocked returns a boolean if a field has been set.

### GetType

`func (o *ReviewableentitlementAccount) GetType() Dtotype`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *ReviewableentitlementAccount) GetTypeOk() (*Dtotype, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *ReviewableentitlementAccount) SetType(v Dtotype)`

SetType sets Type field to given value.

### HasType

`func (o *ReviewableentitlementAccount) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *ReviewableentitlementAccount) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ReviewableentitlementAccount) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ReviewableentitlementAccount) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ReviewableentitlementAccount) HasId() bool`

HasId returns a boolean if a field has been set.

### SetIdNil

`func (o *ReviewableentitlementAccount) SetIdNil(b bool)`

 SetIdNil sets the value for Id to be an explicit nil

### UnsetId
`func (o *ReviewableentitlementAccount) UnsetId()`

UnsetId ensures that no value is present for Id, not even an explicit nil
### GetName

`func (o *ReviewableentitlementAccount) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ReviewableentitlementAccount) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ReviewableentitlementAccount) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *ReviewableentitlementAccount) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *ReviewableentitlementAccount) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *ReviewableentitlementAccount) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *ReviewableentitlementAccount) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *ReviewableentitlementAccount) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *ReviewableentitlementAccount) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *ReviewableentitlementAccount) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### SetCreatedNil

`func (o *ReviewableentitlementAccount) SetCreatedNil(b bool)`

 SetCreatedNil sets the value for Created to be an explicit nil

### UnsetCreated
`func (o *ReviewableentitlementAccount) UnsetCreated()`

UnsetCreated ensures that no value is present for Created, not even an explicit nil
### GetModified

`func (o *ReviewableentitlementAccount) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *ReviewableentitlementAccount) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *ReviewableentitlementAccount) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *ReviewableentitlementAccount) HasModified() bool`

HasModified returns a boolean if a field has been set.

### SetModifiedNil

`func (o *ReviewableentitlementAccount) SetModifiedNil(b bool)`

 SetModifiedNil sets the value for Modified to be an explicit nil

### UnsetModified
`func (o *ReviewableentitlementAccount) UnsetModified()`

UnsetModified ensures that no value is present for Modified, not even an explicit nil
### GetActivityInsights

`func (o *ReviewableentitlementAccount) GetActivityInsights() Activityinsights`

GetActivityInsights returns the ActivityInsights field if non-nil, zero value otherwise.

### GetActivityInsightsOk

`func (o *ReviewableentitlementAccount) GetActivityInsightsOk() (*Activityinsights, bool)`

GetActivityInsightsOk returns a tuple with the ActivityInsights field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActivityInsights

`func (o *ReviewableentitlementAccount) SetActivityInsights(v Activityinsights)`

SetActivityInsights sets ActivityInsights field to given value.

### HasActivityInsights

`func (o *ReviewableentitlementAccount) HasActivityInsights() bool`

HasActivityInsights returns a boolean if a field has been set.

### GetDescription

`func (o *ReviewableentitlementAccount) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReviewableentitlementAccount) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReviewableentitlementAccount) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReviewableentitlementAccount) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *ReviewableentitlementAccount) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *ReviewableentitlementAccount) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetGovernanceGroupId

`func (o *ReviewableentitlementAccount) GetGovernanceGroupId() string`

GetGovernanceGroupId returns the GovernanceGroupId field if non-nil, zero value otherwise.

### GetGovernanceGroupIdOk

`func (o *ReviewableentitlementAccount) GetGovernanceGroupIdOk() (*string, bool)`

GetGovernanceGroupIdOk returns a tuple with the GovernanceGroupId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGovernanceGroupId

`func (o *ReviewableentitlementAccount) SetGovernanceGroupId(v string)`

SetGovernanceGroupId sets GovernanceGroupId field to given value.

### HasGovernanceGroupId

`func (o *ReviewableentitlementAccount) HasGovernanceGroupId() bool`

HasGovernanceGroupId returns a boolean if a field has been set.

### SetGovernanceGroupIdNil

`func (o *ReviewableentitlementAccount) SetGovernanceGroupIdNil(b bool)`

 SetGovernanceGroupIdNil sets the value for GovernanceGroupId to be an explicit nil

### UnsetGovernanceGroupId
`func (o *ReviewableentitlementAccount) UnsetGovernanceGroupId()`

UnsetGovernanceGroupId ensures that no value is present for GovernanceGroupId, not even an explicit nil
### GetOwner

`func (o *ReviewableentitlementAccount) GetOwner() ReviewableentitlementAccountOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *ReviewableentitlementAccount) GetOwnerOk() (*ReviewableentitlementAccountOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *ReviewableentitlementAccount) SetOwner(v ReviewableentitlementAccountOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *ReviewableentitlementAccount) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *ReviewableentitlementAccount) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *ReviewableentitlementAccount) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

