---
id: v2025-lifecycle-state
title: LifecycleState
pagination_label: LifecycleState
sidebar_label: LifecycleState
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'LifecycleState', 'V2025LifecycleState'] 
slug: /tools/sdk/go/v2025/models/lifecycle-state
tags: ['SDK', 'Software Development Kit', 'LifecycleState', 'V2025LifecycleState']
---

# LifecycleState

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **NullableString** | Name of the Object | 
**Created** | Pointer to **SailPointTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | Pointer to **SailPointTime** | Last modification date of the Object | [optional] [readonly] 
**Enabled** | Pointer to **bool** | Indicates whether the lifecycle state is enabled or disabled. | [optional] [default to false]
**TechnicalName** | **string** | The lifecycle state's technical name. This is for internal use. | 
**Description** | Pointer to **NullableString** | Lifecycle state's description. | [optional] 
**IdentityCount** | Pointer to **int32** | Number of identities that have the lifecycle state. | [optional] [readonly] 
**EmailNotificationOption** | Pointer to [**EmailNotificationOption**](email-notification-option) |  | [optional] 
**AccountActions** | Pointer to [**[]AccountAction**](account-action) |  | [optional] 
**AccessProfileIds** | Pointer to **[]string** | List of unique access-profile IDs that are associated with the lifecycle state. | [optional] 
**IdentityState** | Pointer to **NullableString** | The lifecycle state's associated identity state. This field is generally 'null'. | [optional] 

## Methods

### NewLifecycleState

`func NewLifecycleState(name NullableString, technicalName string, ) *LifecycleState`

NewLifecycleState instantiates a new LifecycleState object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecycleStateWithDefaults

`func NewLifecycleStateWithDefaults() *LifecycleState`

NewLifecycleStateWithDefaults instantiates a new LifecycleState object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *LifecycleState) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *LifecycleState) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *LifecycleState) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *LifecycleState) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *LifecycleState) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *LifecycleState) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *LifecycleState) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *LifecycleState) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *LifecycleState) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *LifecycleState) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *LifecycleState) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *LifecycleState) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *LifecycleState) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *LifecycleState) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *LifecycleState) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *LifecycleState) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *LifecycleState) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *LifecycleState) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *LifecycleState) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *LifecycleState) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *LifecycleState) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTechnicalName

`func (o *LifecycleState) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *LifecycleState) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *LifecycleState) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDescription

`func (o *LifecycleState) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *LifecycleState) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *LifecycleState) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *LifecycleState) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *LifecycleState) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *LifecycleState) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetIdentityCount

`func (o *LifecycleState) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *LifecycleState) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *LifecycleState) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *LifecycleState) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetEmailNotificationOption

`func (o *LifecycleState) GetEmailNotificationOption() EmailNotificationOption`

GetEmailNotificationOption returns the EmailNotificationOption field if non-nil, zero value otherwise.

### GetEmailNotificationOptionOk

`func (o *LifecycleState) GetEmailNotificationOptionOk() (*EmailNotificationOption, bool)`

GetEmailNotificationOptionOk returns a tuple with the EmailNotificationOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationOption

`func (o *LifecycleState) SetEmailNotificationOption(v EmailNotificationOption)`

SetEmailNotificationOption sets EmailNotificationOption field to given value.

### HasEmailNotificationOption

`func (o *LifecycleState) HasEmailNotificationOption() bool`

HasEmailNotificationOption returns a boolean if a field has been set.

### GetAccountActions

`func (o *LifecycleState) GetAccountActions() []AccountAction`

GetAccountActions returns the AccountActions field if non-nil, zero value otherwise.

### GetAccountActionsOk

`func (o *LifecycleState) GetAccountActionsOk() (*[]AccountAction, bool)`

GetAccountActionsOk returns a tuple with the AccountActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActions

`func (o *LifecycleState) SetAccountActions(v []AccountAction)`

SetAccountActions sets AccountActions field to given value.

### HasAccountActions

`func (o *LifecycleState) HasAccountActions() bool`

HasAccountActions returns a boolean if a field has been set.

### GetAccessProfileIds

`func (o *LifecycleState) GetAccessProfileIds() []string`

GetAccessProfileIds returns the AccessProfileIds field if non-nil, zero value otherwise.

### GetAccessProfileIdsOk

`func (o *LifecycleState) GetAccessProfileIdsOk() (*[]string, bool)`

GetAccessProfileIdsOk returns a tuple with the AccessProfileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileIds

`func (o *LifecycleState) SetAccessProfileIds(v []string)`

SetAccessProfileIds sets AccessProfileIds field to given value.

### HasAccessProfileIds

`func (o *LifecycleState) HasAccessProfileIds() bool`

HasAccessProfileIds returns a boolean if a field has been set.

### GetIdentityState

`func (o *LifecycleState) GetIdentityState() string`

GetIdentityState returns the IdentityState field if non-nil, zero value otherwise.

### GetIdentityStateOk

`func (o *LifecycleState) GetIdentityStateOk() (*string, bool)`

GetIdentityStateOk returns a tuple with the IdentityState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityState

`func (o *LifecycleState) SetIdentityState(v string)`

SetIdentityState sets IdentityState field to given value.

### HasIdentityState

`func (o *LifecycleState) HasIdentityState() bool`

HasIdentityState returns a boolean if a field has been set.

### SetIdentityStateNil

`func (o *LifecycleState) SetIdentityStateNil(b bool)`

 SetIdentityStateNil sets the value for IdentityState to be an explicit nil

### UnsetIdentityState
`func (o *LifecycleState) UnsetIdentityState()`

UnsetIdentityState ensures that no value is present for IdentityState, not even an explicit nil

