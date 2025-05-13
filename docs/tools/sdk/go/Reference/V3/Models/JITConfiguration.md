---
id: jit-configuration
title: JITConfiguration
pagination_label: JITConfiguration
sidebar_label: JITConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'JITConfiguration', 'JITConfiguration'] 
slug: /tools/sdk/go/v3/models/jit-configuration
tags: ['SDK', 'Software Development Kit', 'JITConfiguration', 'JITConfiguration']
---

# JITConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | The indicator for just-in-time provisioning enabled | [optional] [default to false]
**SourceId** | Pointer to **string** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**SourceAttributeMappings** | Pointer to **map[string]string** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 

## Methods

### NewJITConfiguration

`func NewJITConfiguration() *JITConfiguration`

NewJITConfiguration instantiates a new JITConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJITConfigurationWithDefaults

`func NewJITConfigurationWithDefaults() *JITConfiguration`

NewJITConfigurationWithDefaults instantiates a new JITConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *JITConfiguration) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *JITConfiguration) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *JITConfiguration) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *JITConfiguration) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetSourceId

`func (o *JITConfiguration) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *JITConfiguration) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *JITConfiguration) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *JITConfiguration) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceAttributeMappings

`func (o *JITConfiguration) GetSourceAttributeMappings() map[string]string`

GetSourceAttributeMappings returns the SourceAttributeMappings field if non-nil, zero value otherwise.

### GetSourceAttributeMappingsOk

`func (o *JITConfiguration) GetSourceAttributeMappingsOk() (*map[string]string, bool)`

GetSourceAttributeMappingsOk returns a tuple with the SourceAttributeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAttributeMappings

`func (o *JITConfiguration) SetSourceAttributeMappings(v map[string]string)`

SetSourceAttributeMappings sets SourceAttributeMappings field to given value.

### HasSourceAttributeMappings

`func (o *JITConfiguration) HasSourceAttributeMappings() bool`

HasSourceAttributeMappings returns a boolean if a field has been set.


