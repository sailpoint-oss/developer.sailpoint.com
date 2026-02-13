---
id: v2025-activity-configuration-settings
title: ActivityConfigurationSettings
pagination_label: ActivityConfigurationSettings
sidebar_label: ActivityConfigurationSettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ActivityConfigurationSettings', 'V2025ActivityConfigurationSettings'] 
slug: /tools/sdk/go/v2025/models/activity-configuration-settings
tags: ['SDK', 'Software Development Kit', 'ActivityConfigurationSettings', 'V2025ActivityConfigurationSettings']
---

# ActivityConfigurationSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | Pointer to **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to false]
**ClusterId** | Pointer to **NullableString** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 
**RetentionTimePeriod** | Pointer to **int32** | The time period for retaining activity logs. | [optional] 
**RetentionTimeType** | Pointer to **NullableString** | The type of retention period (e.g., days, months, years). | [optional] 
**ExcludeUsers** | Pointer to **[]string** | List of user identifiers to exclude from activity tracking. | [optional] 
**ExcludeFolders** | Pointer to **[]string** | List of folder paths to exclude from activity tracking. | [optional] 
**ExcludeFileExtensions** | Pointer to **[]string** | List of file extensions to exclude from activity tracking. | [optional] 
**ExcludeActions** | Pointer to **[]string** | List of actions to exclude from activity tracking. | [optional] 

## Methods

### NewActivityConfigurationSettings

`func NewActivityConfigurationSettings() *ActivityConfigurationSettings`

NewActivityConfigurationSettings instantiates a new ActivityConfigurationSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityConfigurationSettingsWithDefaults

`func NewActivityConfigurationSettingsWithDefaults() *ActivityConfigurationSettings`

NewActivityConfigurationSettingsWithDefaults instantiates a new ActivityConfigurationSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *ActivityConfigurationSettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *ActivityConfigurationSettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *ActivityConfigurationSettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *ActivityConfigurationSettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *ActivityConfigurationSettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *ActivityConfigurationSettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *ActivityConfigurationSettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *ActivityConfigurationSettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *ActivityConfigurationSettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *ActivityConfigurationSettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil
### GetRetentionTimePeriod

`func (o *ActivityConfigurationSettings) GetRetentionTimePeriod() int32`

GetRetentionTimePeriod returns the RetentionTimePeriod field if non-nil, zero value otherwise.

### GetRetentionTimePeriodOk

`func (o *ActivityConfigurationSettings) GetRetentionTimePeriodOk() (*int32, bool)`

GetRetentionTimePeriodOk returns a tuple with the RetentionTimePeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionTimePeriod

`func (o *ActivityConfigurationSettings) SetRetentionTimePeriod(v int32)`

SetRetentionTimePeriod sets RetentionTimePeriod field to given value.

### HasRetentionTimePeriod

`func (o *ActivityConfigurationSettings) HasRetentionTimePeriod() bool`

HasRetentionTimePeriod returns a boolean if a field has been set.

### GetRetentionTimeType

`func (o *ActivityConfigurationSettings) GetRetentionTimeType() string`

GetRetentionTimeType returns the RetentionTimeType field if non-nil, zero value otherwise.

### GetRetentionTimeTypeOk

`func (o *ActivityConfigurationSettings) GetRetentionTimeTypeOk() (*string, bool)`

GetRetentionTimeTypeOk returns a tuple with the RetentionTimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionTimeType

`func (o *ActivityConfigurationSettings) SetRetentionTimeType(v string)`

SetRetentionTimeType sets RetentionTimeType field to given value.

### HasRetentionTimeType

`func (o *ActivityConfigurationSettings) HasRetentionTimeType() bool`

HasRetentionTimeType returns a boolean if a field has been set.

### SetRetentionTimeTypeNil

`func (o *ActivityConfigurationSettings) SetRetentionTimeTypeNil(b bool)`

 SetRetentionTimeTypeNil sets the value for RetentionTimeType to be an explicit nil

### UnsetRetentionTimeType
`func (o *ActivityConfigurationSettings) UnsetRetentionTimeType()`

UnsetRetentionTimeType ensures that no value is present for RetentionTimeType, not even an explicit nil
### GetExcludeUsers

`func (o *ActivityConfigurationSettings) GetExcludeUsers() []string`

GetExcludeUsers returns the ExcludeUsers field if non-nil, zero value otherwise.

### GetExcludeUsersOk

`func (o *ActivityConfigurationSettings) GetExcludeUsersOk() (*[]string, bool)`

GetExcludeUsersOk returns a tuple with the ExcludeUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeUsers

`func (o *ActivityConfigurationSettings) SetExcludeUsers(v []string)`

SetExcludeUsers sets ExcludeUsers field to given value.

### HasExcludeUsers

`func (o *ActivityConfigurationSettings) HasExcludeUsers() bool`

HasExcludeUsers returns a boolean if a field has been set.

### SetExcludeUsersNil

`func (o *ActivityConfigurationSettings) SetExcludeUsersNil(b bool)`

 SetExcludeUsersNil sets the value for ExcludeUsers to be an explicit nil

### UnsetExcludeUsers
`func (o *ActivityConfigurationSettings) UnsetExcludeUsers()`

UnsetExcludeUsers ensures that no value is present for ExcludeUsers, not even an explicit nil
### GetExcludeFolders

`func (o *ActivityConfigurationSettings) GetExcludeFolders() []string`

GetExcludeFolders returns the ExcludeFolders field if non-nil, zero value otherwise.

### GetExcludeFoldersOk

`func (o *ActivityConfigurationSettings) GetExcludeFoldersOk() (*[]string, bool)`

GetExcludeFoldersOk returns a tuple with the ExcludeFolders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFolders

`func (o *ActivityConfigurationSettings) SetExcludeFolders(v []string)`

SetExcludeFolders sets ExcludeFolders field to given value.

### HasExcludeFolders

`func (o *ActivityConfigurationSettings) HasExcludeFolders() bool`

HasExcludeFolders returns a boolean if a field has been set.

### SetExcludeFoldersNil

`func (o *ActivityConfigurationSettings) SetExcludeFoldersNil(b bool)`

 SetExcludeFoldersNil sets the value for ExcludeFolders to be an explicit nil

### UnsetExcludeFolders
`func (o *ActivityConfigurationSettings) UnsetExcludeFolders()`

UnsetExcludeFolders ensures that no value is present for ExcludeFolders, not even an explicit nil
### GetExcludeFileExtensions

`func (o *ActivityConfigurationSettings) GetExcludeFileExtensions() []string`

GetExcludeFileExtensions returns the ExcludeFileExtensions field if non-nil, zero value otherwise.

### GetExcludeFileExtensionsOk

`func (o *ActivityConfigurationSettings) GetExcludeFileExtensionsOk() (*[]string, bool)`

GetExcludeFileExtensionsOk returns a tuple with the ExcludeFileExtensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFileExtensions

`func (o *ActivityConfigurationSettings) SetExcludeFileExtensions(v []string)`

SetExcludeFileExtensions sets ExcludeFileExtensions field to given value.

### HasExcludeFileExtensions

`func (o *ActivityConfigurationSettings) HasExcludeFileExtensions() bool`

HasExcludeFileExtensions returns a boolean if a field has been set.

### SetExcludeFileExtensionsNil

`func (o *ActivityConfigurationSettings) SetExcludeFileExtensionsNil(b bool)`

 SetExcludeFileExtensionsNil sets the value for ExcludeFileExtensions to be an explicit nil

### UnsetExcludeFileExtensions
`func (o *ActivityConfigurationSettings) UnsetExcludeFileExtensions()`

UnsetExcludeFileExtensions ensures that no value is present for ExcludeFileExtensions, not even an explicit nil
### GetExcludeActions

`func (o *ActivityConfigurationSettings) GetExcludeActions() []string`

GetExcludeActions returns the ExcludeActions field if non-nil, zero value otherwise.

### GetExcludeActionsOk

`func (o *ActivityConfigurationSettings) GetExcludeActionsOk() (*[]string, bool)`

GetExcludeActionsOk returns a tuple with the ExcludeActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeActions

`func (o *ActivityConfigurationSettings) SetExcludeActions(v []string)`

SetExcludeActions sets ExcludeActions field to given value.

### HasExcludeActions

`func (o *ActivityConfigurationSettings) HasExcludeActions() bool`

HasExcludeActions returns a boolean if a field has been set.

### SetExcludeActionsNil

`func (o *ActivityConfigurationSettings) SetExcludeActionsNil(b bool)`

 SetExcludeActionsNil sets the value for ExcludeActions to be an explicit nil

### UnsetExcludeActions
`func (o *ActivityConfigurationSettings) UnsetExcludeActions()`

UnsetExcludeActions ensures that no value is present for ExcludeActions, not even an explicit nil

