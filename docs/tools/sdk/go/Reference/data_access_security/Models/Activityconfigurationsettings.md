---
id: v1-activityconfigurationsettings
title: Activityconfigurationsettings
pagination_label: Activityconfigurationsettings
sidebar_label: Activityconfigurationsettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Activityconfigurationsettings', 'V1Activityconfigurationsettings'] 
slug: /tools/sdk/go/dataaccesssecurity/models/activityconfigurationsettings
tags: ['SDK', 'Software Development Kit', 'Activityconfigurationsettings', 'V1Activityconfigurationsettings']
---

# Activityconfigurationsettings

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

### NewActivityconfigurationsettings

`func NewActivityconfigurationsettings() *Activityconfigurationsettings`

NewActivityconfigurationsettings instantiates a new Activityconfigurationsettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewActivityconfigurationsettingsWithDefaults

`func NewActivityconfigurationsettingsWithDefaults() *Activityconfigurationsettings`

NewActivityconfigurationsettingsWithDefaults instantiates a new Activityconfigurationsettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *Activityconfigurationsettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *Activityconfigurationsettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *Activityconfigurationsettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *Activityconfigurationsettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *Activityconfigurationsettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *Activityconfigurationsettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *Activityconfigurationsettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *Activityconfigurationsettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *Activityconfigurationsettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *Activityconfigurationsettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil
### GetRetentionTimePeriod

`func (o *Activityconfigurationsettings) GetRetentionTimePeriod() int32`

GetRetentionTimePeriod returns the RetentionTimePeriod field if non-nil, zero value otherwise.

### GetRetentionTimePeriodOk

`func (o *Activityconfigurationsettings) GetRetentionTimePeriodOk() (*int32, bool)`

GetRetentionTimePeriodOk returns a tuple with the RetentionTimePeriod field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionTimePeriod

`func (o *Activityconfigurationsettings) SetRetentionTimePeriod(v int32)`

SetRetentionTimePeriod sets RetentionTimePeriod field to given value.

### HasRetentionTimePeriod

`func (o *Activityconfigurationsettings) HasRetentionTimePeriod() bool`

HasRetentionTimePeriod returns a boolean if a field has been set.

### GetRetentionTimeType

`func (o *Activityconfigurationsettings) GetRetentionTimeType() string`

GetRetentionTimeType returns the RetentionTimeType field if non-nil, zero value otherwise.

### GetRetentionTimeTypeOk

`func (o *Activityconfigurationsettings) GetRetentionTimeTypeOk() (*string, bool)`

GetRetentionTimeTypeOk returns a tuple with the RetentionTimeType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRetentionTimeType

`func (o *Activityconfigurationsettings) SetRetentionTimeType(v string)`

SetRetentionTimeType sets RetentionTimeType field to given value.

### HasRetentionTimeType

`func (o *Activityconfigurationsettings) HasRetentionTimeType() bool`

HasRetentionTimeType returns a boolean if a field has been set.

### SetRetentionTimeTypeNil

`func (o *Activityconfigurationsettings) SetRetentionTimeTypeNil(b bool)`

 SetRetentionTimeTypeNil sets the value for RetentionTimeType to be an explicit nil

### UnsetRetentionTimeType
`func (o *Activityconfigurationsettings) UnsetRetentionTimeType()`

UnsetRetentionTimeType ensures that no value is present for RetentionTimeType, not even an explicit nil
### GetExcludeUsers

`func (o *Activityconfigurationsettings) GetExcludeUsers() []string`

GetExcludeUsers returns the ExcludeUsers field if non-nil, zero value otherwise.

### GetExcludeUsersOk

`func (o *Activityconfigurationsettings) GetExcludeUsersOk() (*[]string, bool)`

GetExcludeUsersOk returns a tuple with the ExcludeUsers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeUsers

`func (o *Activityconfigurationsettings) SetExcludeUsers(v []string)`

SetExcludeUsers sets ExcludeUsers field to given value.

### HasExcludeUsers

`func (o *Activityconfigurationsettings) HasExcludeUsers() bool`

HasExcludeUsers returns a boolean if a field has been set.

### SetExcludeUsersNil

`func (o *Activityconfigurationsettings) SetExcludeUsersNil(b bool)`

 SetExcludeUsersNil sets the value for ExcludeUsers to be an explicit nil

### UnsetExcludeUsers
`func (o *Activityconfigurationsettings) UnsetExcludeUsers()`

UnsetExcludeUsers ensures that no value is present for ExcludeUsers, not even an explicit nil
### GetExcludeFolders

`func (o *Activityconfigurationsettings) GetExcludeFolders() []string`

GetExcludeFolders returns the ExcludeFolders field if non-nil, zero value otherwise.

### GetExcludeFoldersOk

`func (o *Activityconfigurationsettings) GetExcludeFoldersOk() (*[]string, bool)`

GetExcludeFoldersOk returns a tuple with the ExcludeFolders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFolders

`func (o *Activityconfigurationsettings) SetExcludeFolders(v []string)`

SetExcludeFolders sets ExcludeFolders field to given value.

### HasExcludeFolders

`func (o *Activityconfigurationsettings) HasExcludeFolders() bool`

HasExcludeFolders returns a boolean if a field has been set.

### SetExcludeFoldersNil

`func (o *Activityconfigurationsettings) SetExcludeFoldersNil(b bool)`

 SetExcludeFoldersNil sets the value for ExcludeFolders to be an explicit nil

### UnsetExcludeFolders
`func (o *Activityconfigurationsettings) UnsetExcludeFolders()`

UnsetExcludeFolders ensures that no value is present for ExcludeFolders, not even an explicit nil
### GetExcludeFileExtensions

`func (o *Activityconfigurationsettings) GetExcludeFileExtensions() []string`

GetExcludeFileExtensions returns the ExcludeFileExtensions field if non-nil, zero value otherwise.

### GetExcludeFileExtensionsOk

`func (o *Activityconfigurationsettings) GetExcludeFileExtensionsOk() (*[]string, bool)`

GetExcludeFileExtensionsOk returns a tuple with the ExcludeFileExtensions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeFileExtensions

`func (o *Activityconfigurationsettings) SetExcludeFileExtensions(v []string)`

SetExcludeFileExtensions sets ExcludeFileExtensions field to given value.

### HasExcludeFileExtensions

`func (o *Activityconfigurationsettings) HasExcludeFileExtensions() bool`

HasExcludeFileExtensions returns a boolean if a field has been set.

### SetExcludeFileExtensionsNil

`func (o *Activityconfigurationsettings) SetExcludeFileExtensionsNil(b bool)`

 SetExcludeFileExtensionsNil sets the value for ExcludeFileExtensions to be an explicit nil

### UnsetExcludeFileExtensions
`func (o *Activityconfigurationsettings) UnsetExcludeFileExtensions()`

UnsetExcludeFileExtensions ensures that no value is present for ExcludeFileExtensions, not even an explicit nil
### GetExcludeActions

`func (o *Activityconfigurationsettings) GetExcludeActions() []string`

GetExcludeActions returns the ExcludeActions field if non-nil, zero value otherwise.

### GetExcludeActionsOk

`func (o *Activityconfigurationsettings) GetExcludeActionsOk() (*[]string, bool)`

GetExcludeActionsOk returns a tuple with the ExcludeActions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExcludeActions

`func (o *Activityconfigurationsettings) SetExcludeActions(v []string)`

SetExcludeActions sets ExcludeActions field to given value.

### HasExcludeActions

`func (o *Activityconfigurationsettings) HasExcludeActions() bool`

HasExcludeActions returns a boolean if a field has been set.

### SetExcludeActionsNil

`func (o *Activityconfigurationsettings) SetExcludeActionsNil(b bool)`

 SetExcludeActionsNil sets the value for ExcludeActions to be an explicit nil

### UnsetExcludeActions
`func (o *Activityconfigurationsettings) UnsetExcludeActions()`

UnsetExcludeActions ensures that no value is present for ExcludeActions, not even an explicit nil

