---
id: v2025-data-classification-settings
title: DataClassificationSettings
pagination_label: DataClassificationSettings
sidebar_label: DataClassificationSettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'DataClassificationSettings', 'V2025DataClassificationSettings'] 
slug: /tools/sdk/go/v2025/models/data-classification-settings
tags: ['SDK', 'Software Development Kit', 'DataClassificationSettings', 'V2025DataClassificationSettings']
---

# DataClassificationSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | Pointer to **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to false]
**ClusterId** | Pointer to **NullableString** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 

## Methods

### NewDataClassificationSettings

`func NewDataClassificationSettings() *DataClassificationSettings`

NewDataClassificationSettings instantiates a new DataClassificationSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataClassificationSettingsWithDefaults

`func NewDataClassificationSettingsWithDefaults() *DataClassificationSettings`

NewDataClassificationSettingsWithDefaults instantiates a new DataClassificationSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *DataClassificationSettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *DataClassificationSettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *DataClassificationSettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *DataClassificationSettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *DataClassificationSettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *DataClassificationSettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *DataClassificationSettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *DataClassificationSettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *DataClassificationSettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *DataClassificationSettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil

