---
id: beta-config-type
title: ConfigType
pagination_label: ConfigType
sidebar_label: ConfigType
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigType', 'BetaConfigType'] 
slug: /tools/sdk/go/beta/models/config-type
tags: ['SDK', 'Software Development Kit', 'ConfigType', 'BetaConfigType']
---

# ConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Priority** | Pointer to **int32** |  | [optional] 
**InternalName** | Pointer to [**ConfigTypeEnumCamel**](config-type-enum-camel) |  | [optional] 
**InternalNameCamel** | Pointer to [**ConfigTypeEnum**](config-type-enum) |  | [optional] 
**DisplayName** | Pointer to **string** | Human readable display name of the type to be shown on UI | [optional] 
**Description** | Pointer to **string** | Description of the type of work to be reassigned, displayed by the UI. | [optional] 

## Methods

### NewConfigType

`func NewConfigType() *ConfigType`

NewConfigType instantiates a new ConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigTypeWithDefaults

`func NewConfigTypeWithDefaults() *ConfigType`

NewConfigTypeWithDefaults instantiates a new ConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPriority

`func (o *ConfigType) GetPriority() int32`

GetPriority returns the Priority field if non-nil, zero value otherwise.

### GetPriorityOk

`func (o *ConfigType) GetPriorityOk() (*int32, bool)`

GetPriorityOk returns a tuple with the Priority field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriority

`func (o *ConfigType) SetPriority(v int32)`

SetPriority sets Priority field to given value.

### HasPriority

`func (o *ConfigType) HasPriority() bool`

HasPriority returns a boolean if a field has been set.

### GetInternalName

`func (o *ConfigType) GetInternalName() ConfigTypeEnumCamel`

GetInternalName returns the InternalName field if non-nil, zero value otherwise.

### GetInternalNameOk

`func (o *ConfigType) GetInternalNameOk() (*ConfigTypeEnumCamel, bool)`

GetInternalNameOk returns a tuple with the InternalName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalName

`func (o *ConfigType) SetInternalName(v ConfigTypeEnumCamel)`

SetInternalName sets InternalName field to given value.

### HasInternalName

`func (o *ConfigType) HasInternalName() bool`

HasInternalName returns a boolean if a field has been set.

### GetInternalNameCamel

`func (o *ConfigType) GetInternalNameCamel() ConfigTypeEnum`

GetInternalNameCamel returns the InternalNameCamel field if non-nil, zero value otherwise.

### GetInternalNameCamelOk

`func (o *ConfigType) GetInternalNameCamelOk() (*ConfigTypeEnum, bool)`

GetInternalNameCamelOk returns a tuple with the InternalNameCamel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInternalNameCamel

`func (o *ConfigType) SetInternalNameCamel(v ConfigTypeEnum)`

SetInternalNameCamel sets InternalNameCamel field to given value.

### HasInternalNameCamel

`func (o *ConfigType) HasInternalNameCamel() bool`

HasInternalNameCamel returns a boolean if a field has been set.

### GetDisplayName

`func (o *ConfigType) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *ConfigType) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *ConfigType) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.

### HasDisplayName

`func (o *ConfigType) HasDisplayName() bool`

HasDisplayName returns a boolean if a field has been set.

### GetDescription

`func (o *ConfigType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ConfigType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ConfigType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


