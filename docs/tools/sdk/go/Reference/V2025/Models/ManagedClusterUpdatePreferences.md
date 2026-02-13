---
id: v2025-managed-cluster-update-preferences
title: ManagedClusterUpdatePreferences
pagination_label: ManagedClusterUpdatePreferences
sidebar_label: ManagedClusterUpdatePreferences
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterUpdatePreferences', 'V2025ManagedClusterUpdatePreferences'] 
slug: /tools/sdk/go/v2025/models/managed-cluster-update-preferences
tags: ['SDK', 'Software Development Kit', 'ManagedClusterUpdatePreferences', 'V2025ManagedClusterUpdatePreferences']
---

# ManagedClusterUpdatePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessGroups** | Pointer to **NullableString** | The processGroups for updatePreferences | [optional] 
**UpdateState** | Pointer to **NullableString** | The current updateState for the cluster | [optional] 
**NotificationEmail** | Pointer to **NullableString** | The mail id to which new releases will be notified | [optional] 

## Methods

### NewManagedClusterUpdatePreferences

`func NewManagedClusterUpdatePreferences() *ManagedClusterUpdatePreferences`

NewManagedClusterUpdatePreferences instantiates a new ManagedClusterUpdatePreferences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterUpdatePreferencesWithDefaults

`func NewManagedClusterUpdatePreferencesWithDefaults() *ManagedClusterUpdatePreferences`

NewManagedClusterUpdatePreferencesWithDefaults instantiates a new ManagedClusterUpdatePreferences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProcessGroups

`func (o *ManagedClusterUpdatePreferences) GetProcessGroups() string`

GetProcessGroups returns the ProcessGroups field if non-nil, zero value otherwise.

### GetProcessGroupsOk

`func (o *ManagedClusterUpdatePreferences) GetProcessGroupsOk() (*string, bool)`

GetProcessGroupsOk returns a tuple with the ProcessGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessGroups

`func (o *ManagedClusterUpdatePreferences) SetProcessGroups(v string)`

SetProcessGroups sets ProcessGroups field to given value.

### HasProcessGroups

`func (o *ManagedClusterUpdatePreferences) HasProcessGroups() bool`

HasProcessGroups returns a boolean if a field has been set.

### SetProcessGroupsNil

`func (o *ManagedClusterUpdatePreferences) SetProcessGroupsNil(b bool)`

 SetProcessGroupsNil sets the value for ProcessGroups to be an explicit nil

### UnsetProcessGroups
`func (o *ManagedClusterUpdatePreferences) UnsetProcessGroups()`

UnsetProcessGroups ensures that no value is present for ProcessGroups, not even an explicit nil
### GetUpdateState

`func (o *ManagedClusterUpdatePreferences) GetUpdateState() string`

GetUpdateState returns the UpdateState field if non-nil, zero value otherwise.

### GetUpdateStateOk

`func (o *ManagedClusterUpdatePreferences) GetUpdateStateOk() (*string, bool)`

GetUpdateStateOk returns a tuple with the UpdateState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateState

`func (o *ManagedClusterUpdatePreferences) SetUpdateState(v string)`

SetUpdateState sets UpdateState field to given value.

### HasUpdateState

`func (o *ManagedClusterUpdatePreferences) HasUpdateState() bool`

HasUpdateState returns a boolean if a field has been set.

### SetUpdateStateNil

`func (o *ManagedClusterUpdatePreferences) SetUpdateStateNil(b bool)`

 SetUpdateStateNil sets the value for UpdateState to be an explicit nil

### UnsetUpdateState
`func (o *ManagedClusterUpdatePreferences) UnsetUpdateState()`

UnsetUpdateState ensures that no value is present for UpdateState, not even an explicit nil
### GetNotificationEmail

`func (o *ManagedClusterUpdatePreferences) GetNotificationEmail() string`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *ManagedClusterUpdatePreferences) GetNotificationEmailOk() (*string, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *ManagedClusterUpdatePreferences) SetNotificationEmail(v string)`

SetNotificationEmail sets NotificationEmail field to given value.

### HasNotificationEmail

`func (o *ManagedClusterUpdatePreferences) HasNotificationEmail() bool`

HasNotificationEmail returns a boolean if a field has been set.

### SetNotificationEmailNil

`func (o *ManagedClusterUpdatePreferences) SetNotificationEmailNil(b bool)`

 SetNotificationEmailNil sets the value for NotificationEmail to be an explicit nil

### UnsetNotificationEmail
`func (o *ManagedClusterUpdatePreferences) UnsetNotificationEmail()`

UnsetNotificationEmail ensures that no value is present for NotificationEmail, not even an explicit nil

