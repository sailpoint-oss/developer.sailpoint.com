---
id: beta-attr-sync-source-attribute-config
title: AttrSyncSourceAttributeConfig
pagination_label: AttrSyncSourceAttributeConfig
sidebar_label: AttrSyncSourceAttributeConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttrSyncSourceAttributeConfig', 'BetaAttrSyncSourceAttributeConfig'] 
slug: /tools/sdk/go/beta/models/attr-sync-source-attribute-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceAttributeConfig', 'BetaAttrSyncSourceAttributeConfig']
---

# AttrSyncSourceAttributeConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | Name of the identity attribute | 
**DisplayName** | **string** | Display name of the identity attribute | 
**Enabled** | **bool** | Determines whether or not the attribute is enabled for synchronization | 
**Target** | **string** | Name of the source account attribute to which the identity attribute value will be synchronized if enabled | 

## Methods

### NewAttrSyncSourceAttributeConfig

`func NewAttrSyncSourceAttributeConfig(name string, displayName string, enabled bool, target string, ) *AttrSyncSourceAttributeConfig`

NewAttrSyncSourceAttributeConfig instantiates a new AttrSyncSourceAttributeConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttrSyncSourceAttributeConfigWithDefaults

`func NewAttrSyncSourceAttributeConfigWithDefaults() *AttrSyncSourceAttributeConfig`

NewAttrSyncSourceAttributeConfigWithDefaults instantiates a new AttrSyncSourceAttributeConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AttrSyncSourceAttributeConfig) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AttrSyncSourceAttributeConfig) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AttrSyncSourceAttributeConfig) SetName(v string)`

SetName sets Name field to given value.


### GetDisplayName

`func (o *AttrSyncSourceAttributeConfig) GetDisplayName() string`

GetDisplayName returns the DisplayName field if non-nil, zero value otherwise.

### GetDisplayNameOk

`func (o *AttrSyncSourceAttributeConfig) GetDisplayNameOk() (*string, bool)`

GetDisplayNameOk returns a tuple with the DisplayName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplayName

`func (o *AttrSyncSourceAttributeConfig) SetDisplayName(v string)`

SetDisplayName sets DisplayName field to given value.


### GetEnabled

`func (o *AttrSyncSourceAttributeConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *AttrSyncSourceAttributeConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *AttrSyncSourceAttributeConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.


### GetTarget

`func (o *AttrSyncSourceAttributeConfig) GetTarget() string`

GetTarget returns the Target field if non-nil, zero value otherwise.

### GetTargetOk

`func (o *AttrSyncSourceAttributeConfig) GetTargetOk() (*string, bool)`

GetTargetOk returns a tuple with the Target field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTarget

`func (o *AttrSyncSourceAttributeConfig) SetTarget(v string)`

SetTarget sets Target field to given value.



