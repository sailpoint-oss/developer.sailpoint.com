---
id: v1-dataclassificationsettings
title: Dataclassificationsettings
pagination_label: Dataclassificationsettings
sidebar_label: Dataclassificationsettings
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Dataclassificationsettings', 'V1Dataclassificationsettings'] 
slug: /tools/sdk/go/dataaccesssecurity/models/dataclassificationsettings
tags: ['SDK', 'Software Development Kit', 'Dataclassificationsettings', 'V1Dataclassificationsettings']
---

# Dataclassificationsettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsEnabled** | Pointer to **bool** | Indicates whether the feature or configuration is enabled. | [optional] [default to false]
**ClusterId** | Pointer to **NullableString** | The identifier of the cluster associated with this configuration, if applicable. | [optional] 

## Methods

### NewDataclassificationsettings

`func NewDataclassificationsettings() *Dataclassificationsettings`

NewDataclassificationsettings instantiates a new Dataclassificationsettings object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDataclassificationsettingsWithDefaults

`func NewDataclassificationsettingsWithDefaults() *Dataclassificationsettings`

NewDataclassificationsettingsWithDefaults instantiates a new Dataclassificationsettings object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIsEnabled

`func (o *Dataclassificationsettings) GetIsEnabled() bool`

GetIsEnabled returns the IsEnabled field if non-nil, zero value otherwise.

### GetIsEnabledOk

`func (o *Dataclassificationsettings) GetIsEnabledOk() (*bool, bool)`

GetIsEnabledOk returns a tuple with the IsEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsEnabled

`func (o *Dataclassificationsettings) SetIsEnabled(v bool)`

SetIsEnabled sets IsEnabled field to given value.

### HasIsEnabled

`func (o *Dataclassificationsettings) HasIsEnabled() bool`

HasIsEnabled returns a boolean if a field has been set.

### GetClusterId

`func (o *Dataclassificationsettings) GetClusterId() string`

GetClusterId returns the ClusterId field if non-nil, zero value otherwise.

### GetClusterIdOk

`func (o *Dataclassificationsettings) GetClusterIdOk() (*string, bool)`

GetClusterIdOk returns a tuple with the ClusterId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClusterId

`func (o *Dataclassificationsettings) SetClusterId(v string)`

SetClusterId sets ClusterId field to given value.

### HasClusterId

`func (o *Dataclassificationsettings) HasClusterId() bool`

HasClusterId returns a boolean if a field has been set.

### SetClusterIdNil

`func (o *Dataclassificationsettings) SetClusterIdNil(b bool)`

 SetClusterIdNil sets the value for ClusterId to be an explicit nil

### UnsetClusterId
`func (o *Dataclassificationsettings) UnsetClusterId()`

UnsetClusterId ensures that no value is present for ClusterId, not even an explicit nil

