---
id: v2025-base-settings
title: BaseSettings
pagination_label: BaseSettings
sidebar_label: BaseSettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BaseSettings', 'V2025BaseSettings'] 
slug: /tools/sdk/go/v2025/models/base-settings
tags: ['SDK', 'Software Development Kit', 'BaseSettings', 'V2025BaseSettings']
---

# BaseSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | Pointer to **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to false]
**ClusterId** | Pointer to **NullableString** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 

## Methods

### NewBaseSettings

`func NewBaseSettings() *BaseSettings`

NewBaseSettings instantiates a new BaseSettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBaseSettingsWithDefaults

`func NewBaseSettingsWithDefaults() *BaseSettings`

NewBaseSettingsWithDefaults instantiates a new BaseSettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *BaseSettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *BaseSettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *BaseSettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *BaseSettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *BaseSettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *BaseSettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *BaseSettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *BaseSettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *BaseSettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *BaseSettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil

