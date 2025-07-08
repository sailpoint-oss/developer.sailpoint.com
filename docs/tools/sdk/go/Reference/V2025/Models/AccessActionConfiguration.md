---
id: v2025-access-action-configuration
title: AccessActionConfiguration
pagination_label: AccessActionConfiguration
sidebar_label: AccessActionConfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AccessActionConfiguration', 'V2025AccessActionConfiguration'] 
slug: /tools/sdk/go/v2025/models/access-action-configuration
tags: ['SDK', 'Software Development Kit', 'AccessActionConfiguration', 'V2025AccessActionConfiguration']
---

# AccessActionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemoveAllAccessEnabled** | Pointer to **bool** | If true, then all accesses are marked for removal. | [optional] [default to false]

## Methods

### NewAccessActionConfiguration

`func NewAccessActionConfiguration() *AccessActionConfiguration`

NewAccessActionConfiguration instantiates a new AccessActionConfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessActionConfigurationWithDefaults

`func NewAccessActionConfigurationWithDefaults() *AccessActionConfiguration`

NewAccessActionConfigurationWithDefaults instantiates a new AccessActionConfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRemoveAllAccessEnabled

`func (o *AccessActionConfiguration) GetRemoveAllAccessEnabled() bool`

GetRemoveAllAccessEnabled returns the RemoveAllAccessEnabled field if non-nil, zero value otherwise.

### GetRemoveAllAccessEnabledOk

`func (o *AccessActionConfiguration) GetRemoveAllAccessEnabledOk() (*bool, bool)`

GetRemoveAllAccessEnabledOk returns a tuple with the RemoveAllAccessEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemoveAllAccessEnabled

`func (o *AccessActionConfiguration) SetRemoveAllAccessEnabled(v bool)`

SetRemoveAllAccessEnabled sets RemoveAllAccessEnabled field to given value.

### HasRemoveAllAccessEnabled

`func (o *AccessActionConfiguration) HasRemoveAllAccessEnabled() bool`

HasRemoveAllAccessEnabled returns a boolean if a field has been set.


