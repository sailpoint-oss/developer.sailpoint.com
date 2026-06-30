---
id: v1-managedcluster-update-preferences
title: ManagedclusterUpdatePreferences
pagination_label: ManagedclusterUpdatePreferences
sidebar_label: ManagedclusterUpdatePreferences
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedclusterUpdatePreferences', 'V1ManagedclusterUpdatePreferences'] 
slug: /tools/sdk/go/managedclusters/models/managedcluster-update-preferences
tags: ['SDK', 'Software Development Kit', 'ManagedclusterUpdatePreferences', 'V1ManagedclusterUpdatePreferences']
---

# ManagedclusterUpdatePreferences

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessGroups** | Pointer to **NullableString** | The processGroups for updatePreferences | [optional] 
**UpdateState** | Pointer to **NullableString** | The current updateState for the cluster | [optional] 
**NotificationEmail** | Pointer to **NullableString** | The mail id to which new releases will be notified | [optional] 

## Methods

### NewManagedclusterUpdatePreferences

`func NewManagedclusterUpdatePreferences() *ManagedclusterUpdatePreferences`

NewManagedclusterUpdatePreferences instantiates a new ManagedclusterUpdatePreferences object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterUpdatePreferencesWithDefaults

`func NewManagedclusterUpdatePreferencesWithDefaults() *ManagedclusterUpdatePreferences`

NewManagedclusterUpdatePreferencesWithDefaults instantiates a new ManagedclusterUpdatePreferences object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetProcessGroups

`func (o *ManagedclusterUpdatePreferences) GetProcessGroups() string`

GetProcessGroups returns the ProcessGroups field if non-nil, zero value otherwise.

### GetProcessGroupsOk

`func (o *ManagedclusterUpdatePreferences) GetProcessGroupsOk() (*string, bool)`

GetProcessGroupsOk returns a tuple with the ProcessGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetProcessGroups

`func (o *ManagedclusterUpdatePreferences) SetProcessGroups(v string)`

SetProcessGroups sets ProcessGroups field to given value.

### HasProcessGroups

`func (o *ManagedclusterUpdatePreferences) HasProcessGroups() bool`

HasProcessGroups returns a boolean if a field has been set.

### SetProcessGroupsNil

`func (o *ManagedclusterUpdatePreferences) SetProcessGroupsNil(b bool)`

 SetProcessGroupsNil sets the value for ProcessGroups to be an explicit nil

### UnsetProcessGroups
`func (o *ManagedclusterUpdatePreferences) UnsetProcessGroups()`

UnsetProcessGroups ensures that no value is present for ProcessGroups, not even an explicit nil
### GetUpdateState

`func (o *ManagedclusterUpdatePreferences) GetUpdateState() string`

GetUpdateState returns the UpdateState field if non-nil, zero value otherwise.

### GetUpdateStateOk

`func (o *ManagedclusterUpdatePreferences) GetUpdateStateOk() (*string, bool)`

GetUpdateStateOk returns a tuple with the UpdateState field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdateState

`func (o *ManagedclusterUpdatePreferences) SetUpdateState(v string)`

SetUpdateState sets UpdateState field to given value.

### HasUpdateState

`func (o *ManagedclusterUpdatePreferences) HasUpdateState() bool`

HasUpdateState returns a boolean if a field has been set.

### SetUpdateStateNil

`func (o *ManagedclusterUpdatePreferences) SetUpdateStateNil(b bool)`

 SetUpdateStateNil sets the value for UpdateState to be an explicit nil

### UnsetUpdateState
`func (o *ManagedclusterUpdatePreferences) UnsetUpdateState()`

UnsetUpdateState ensures that no value is present for UpdateState, not even an explicit nil
### GetNotificationEmail

`func (o *ManagedclusterUpdatePreferences) GetNotificationEmail() string`

GetNotificationEmail returns the NotificationEmail field if non-nil, zero value otherwise.

### GetNotificationEmailOk

`func (o *ManagedclusterUpdatePreferences) GetNotificationEmailOk() (*string, bool)`

GetNotificationEmailOk returns a tuple with the NotificationEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationEmail

`func (o *ManagedclusterUpdatePreferences) SetNotificationEmail(v string)`

SetNotificationEmail sets NotificationEmail field to given value.

### HasNotificationEmail

`func (o *ManagedclusterUpdatePreferences) HasNotificationEmail() bool`

HasNotificationEmail returns a boolean if a field has been set.

### SetNotificationEmailNil

`func (o *ManagedclusterUpdatePreferences) SetNotificationEmailNil(b bool)`

 SetNotificationEmailNil sets the value for NotificationEmail to be an explicit nil

### UnsetNotificationEmail
`func (o *ManagedclusterUpdatePreferences) UnsetNotificationEmail()`

UnsetNotificationEmail ensures that no value is present for NotificationEmail, not even an explicit nil

