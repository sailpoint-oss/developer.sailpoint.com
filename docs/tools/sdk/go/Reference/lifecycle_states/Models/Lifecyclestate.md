---
id: v1-lifecyclestate
title: Lifecyclestate
pagination_label: Lifecyclestate
sidebar_label: Lifecyclestate
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Lifecyclestate', 'V1Lifecyclestate'] 
slug: /tools/sdk/go/lifecyclestates/models/lifecyclestate
tags: ['SDK', 'Software Development Kit', 'Lifecyclestate', 'V1Lifecyclestate']
---

# Lifecyclestate

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
**EmailNotificationOption** | Pointer to [**Emailnotificationoption**](emailnotificationoption) |  | [optional] 
**AccountActions** | Pointer to [**[]Accountaction**](accountaction) |  | [optional] 
**AccessProfileIds** | Pointer to **[]string** | List of unique access-profile IDs that are associated with the lifecycle state. | [optional] 
**IdentityState** | Pointer to **NullableString** | The lifecycle state's associated identity state. This field is generally 'null'. | [optional] 
**AccessActionConfiguration** | Pointer to [**Accessactionconfiguration**](accessactionconfiguration) |  | [optional] 
**Priority** | Pointer to **NullableInt32** | Used to control the order of lifecycle states when listing with `?sorters=priority`. Lower numbers appear first (ascending order). Out-of-the-box lifecycle states are assigned priorities in increments of 10. | [optional] 

## Methods

### NewLifecyclestate

`func NewLifecyclestate(name NullableString, technicalName string, ) *Lifecyclestate`

NewLifecyclestate instantiates a new Lifecyclestate object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewLifecyclestateWithDefaults

`func NewLifecyclestateWithDefaults() *Lifecyclestate`

NewLifecyclestateWithDefaults instantiates a new Lifecyclestate object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Lifecyclestate) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Lifecyclestate) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Lifecyclestate) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Lifecyclestate) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *Lifecyclestate) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Lifecyclestate) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Lifecyclestate) SetName(v string)`

SetName sets Name field to given value.


### SetNameNil

`func (o *Lifecyclestate) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *Lifecyclestate) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetCreated

`func (o *Lifecyclestate) GetCreated() SailPointTime`

GetCreated returns the Created field if non-nil, zero value otherwise.

### GetCreatedOk

`func (o *Lifecyclestate) GetCreatedOk() (*SailPointTime, bool)`

GetCreatedOk returns a tuple with the Created field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreated

`func (o *Lifecyclestate) SetCreated(v SailPointTime)`

SetCreated sets Created field to given value.

### HasCreated

`func (o *Lifecyclestate) HasCreated() bool`

HasCreated returns a boolean if a field has been set.

### GetModified

`func (o *Lifecyclestate) GetModified() SailPointTime`

GetModified returns the Modified field if non-nil, zero value otherwise.

### GetModifiedOk

`func (o *Lifecyclestate) GetModifiedOk() (*SailPointTime, bool)`

GetModifiedOk returns a tuple with the Modified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetModified

`func (o *Lifecyclestate) SetModified(v SailPointTime)`

SetModified sets Modified field to given value.

### HasModified

`func (o *Lifecyclestate) HasModified() bool`

HasModified returns a boolean if a field has been set.

### GetEnabled

`func (o *Lifecyclestate) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Lifecyclestate) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Lifecyclestate) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Lifecyclestate) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetTechnicalName

`func (o *Lifecyclestate) GetTechnicalName() string`

GetTechnicalName returns the TechnicalName field if non-nil, zero value otherwise.

### GetTechnicalNameOk

`func (o *Lifecyclestate) GetTechnicalNameOk() (*string, bool)`

GetTechnicalNameOk returns a tuple with the TechnicalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTechnicalName

`func (o *Lifecyclestate) SetTechnicalName(v string)`

SetTechnicalName sets TechnicalName field to given value.


### GetDescription

`func (o *Lifecyclestate) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Lifecyclestate) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Lifecyclestate) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Lifecyclestate) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Lifecyclestate) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Lifecyclestate) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetIdentityCount

`func (o *Lifecyclestate) GetIdentityCount() int32`

GetIdentityCount returns the IdentityCount field if non-nil, zero value otherwise.

### GetIdentityCountOk

`func (o *Lifecyclestate) GetIdentityCountOk() (*int32, bool)`

GetIdentityCountOk returns a tuple with the IdentityCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityCount

`func (o *Lifecyclestate) SetIdentityCount(v int32)`

SetIdentityCount sets IdentityCount field to given value.

### HasIdentityCount

`func (o *Lifecyclestate) HasIdentityCount() bool`

HasIdentityCount returns a boolean if a field has been set.

### GetEmailNotificationOption

`func (o *Lifecyclestate) GetEmailNotificationOption() Emailnotificationoption`

GetEmailNotificationOption returns the EmailNotificationOption field if non-nil, zero value otherwise.

### GetEmailNotificationOptionOk

`func (o *Lifecyclestate) GetEmailNotificationOptionOk() (*Emailnotificationoption, bool)`

GetEmailNotificationOptionOk returns a tuple with the EmailNotificationOption field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmailNotificationOption

`func (o *Lifecyclestate) SetEmailNotificationOption(v Emailnotificationoption)`

SetEmailNotificationOption sets EmailNotificationOption field to given value.

### HasEmailNotificationOption

`func (o *Lifecyclestate) HasEmailNotificationOption() bool`

HasEmailNotificationOption returns a boolean if a field has been set.

### GetAccountActions

`func (o *Lifecyclestate) GetAccountActions() []Accountaction`

GetAccountActions returns the AccountActions field if non-nil, zero value otherwise.

### GetAccountActionsOk

`func (o *Lifecyclestate) GetAccountActionsOk() (*[]Accountaction, bool)`

GetAccountActionsOk returns a tuple with the AccountActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccountActions

`func (o *Lifecyclestate) SetAccountActions(v []Accountaction)`

SetAccountActions sets AccountActions field to given value.

### HasAccountActions

`func (o *Lifecyclestate) HasAccountActions() bool`

HasAccountActions returns a boolean if a field has been set.

### GetAccessProfileIds

`func (o *Lifecyclestate) GetAccessProfileIds() []string`

GetAccessProfileIds returns the AccessProfileIds field if non-nil, zero value otherwise.

### GetAccessProfileIdsOk

`func (o *Lifecyclestate) GetAccessProfileIdsOk() (*[]string, bool)`

GetAccessProfileIdsOk returns a tuple with the AccessProfileIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessProfileIds

`func (o *Lifecyclestate) SetAccessProfileIds(v []string)`

SetAccessProfileIds sets AccessProfileIds field to given value.

### HasAccessProfileIds

`func (o *Lifecyclestate) HasAccessProfileIds() bool`

HasAccessProfileIds returns a boolean if a field has been set.

### GetIdentityState

`func (o *Lifecyclestate) GetIdentityState() string`

GetIdentityState returns the IdentityState field if non-nil, zero value otherwise.

### GetIdentityStateOk

`func (o *Lifecyclestate) GetIdentityStateOk() (*string, bool)`

GetIdentityStateOk returns a tuple with the IdentityState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIdentityState

`func (o *Lifecyclestate) SetIdentityState(v string)`

SetIdentityState sets IdentityState field to given value.

### HasIdentityState

`func (o *Lifecyclestate) HasIdentityState() bool`

HasIdentityState returns a boolean if a field has been set.

### SetIdentityStateNil

`func (o *Lifecyclestate) SetIdentityStateNil(b bool)`

 SetIdentityStateNil sets the value for IdentityState to be an explicit nil

### UnsetIdentityState
`func (o *Lifecyclestate) UnsetIdentityState()`

UnsetIdentityState ensures that no value is present for IdentityState, not even an explicit nil
### GetAccessActionConfiguration

`func (o *Lifecyclestate) GetAccessActionConfiguration() Accessactionconfiguration`

GetAccessActionConfiguration returns the AccessActionConfiguration field if non-nil, zero value otherwise.

### GetAccessActionConfigurationOk

`func (o *Lifecyclestate) GetAccessActionConfigurationOk() (*Accessactionconfiguration, bool)`

GetAccessActionConfigurationOk returns a tuple with the AccessActionConfiguration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessActionConfiguration

`func (o *Lifecyclestate) SetAccessActionConfiguration(v Accessactionconfiguration)`

SetAccessActionConfiguration sets AccessActionConfiguration field to given value.

### HasAccessActionConfiguration

`func (o *Lifecyclestate) HasAccessActionConfiguration() bool`

HasAccessActionConfiguration returns a boolean if a field has been set.

### GetPriority

`func (o *Lifecyclestate) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *Lifecyclestate) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *Lifecyclestate) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *Lifecyclestate) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### SetPriorityNil

`func (o *Lifecyclestate) SetPriorityNil(b bool)`

 SetPriorityNil sets the value for Priority to be an explicit nil

### UnsetPriority
`func (o *Lifecyclestate) UnsetPriority()`

UnsetPriority ensures that no value is present for Priority, not even an explicit nil

