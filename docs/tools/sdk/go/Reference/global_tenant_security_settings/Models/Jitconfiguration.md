---
id: v1-jitconfiguration
title: Jitconfiguration
pagination_label: Jitconfiguration
sidebar_label: Jitconfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitconfiguration', 'V1Jitconfiguration'] 
slug: /tools/sdk/go/globaltenantsecuritysettings/models/jitconfiguration
tags: ['SDK', 'Software Development Kit', 'Jitconfiguration', 'V1Jitconfiguration']
---

# Jitconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | The indicator for just-in-time provisioning enabled | [optional] [default to false]
**SourceId** | Pointer to **string** | the sourceId that mapped to just-in-time provisioning configuration | [optional] 
**SourceAttributeMappings** | Pointer to **map[string]string** | A mapping of identity profile attribute names to SAML assertion attribute names | [optional] 

## Methods

### NewJitconfiguration

`func NewJitconfiguration() *Jitconfiguration`

NewJitconfiguration instantiates a new Jitconfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitconfigurationWithDefaults

`func NewJitconfigurationWithDefaults() *Jitconfiguration`

NewJitconfigurationWithDefaults instantiates a new Jitconfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *Jitconfiguration) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *Jitconfiguration) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *Jitconfiguration) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *Jitconfiguration) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetSourceId

`func (o *Jitconfiguration) GetSourceId() string`

GetSourceId returns the SourceId field if non-nil, zero value otherwise.

### GetSourceIdOk

`func (o *Jitconfiguration) GetSourceIdOk() (*string, bool)`

GetSourceIdOk returns a tuple with the SourceId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceId

`func (o *Jitconfiguration) SetSourceId(v string)`

SetSourceId sets SourceId field to given value.

### HasSourceId

`func (o *Jitconfiguration) HasSourceId() bool`

HasSourceId returns a boolean if a field has been set.

### GetSourceAttributeMappings

`func (o *Jitconfiguration) GetSourceAttributeMappings() map[string]string`

GetSourceAttributeMappings returns the SourceAttributeMappings field if non-nil, zero value otherwise.

### GetSourceAttributeMappingsOk

`func (o *Jitconfiguration) GetSourceAttributeMappingsOk() (*map[string]string, bool)`

GetSourceAttributeMappingsOk returns a tuple with the SourceAttributeMappings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourceAttributeMappings

`func (o *Jitconfiguration) SetSourceAttributeMappings(v map[string]string)`

SetSourceAttributeMappings sets SourceAttributeMappings field to given value.

### HasSourceAttributeMappings

`func (o *Jitconfiguration) HasSourceAttributeMappings() bool`

HasSourceAttributeMappings returns a boolean if a field has been set.


