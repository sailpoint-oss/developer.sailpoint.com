---
id: v2025-attr-sync-source-config
title: AttrSyncSourceConfig
pagination_label: AttrSyncSourceConfig
sidebar_label: AttrSyncSourceConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'AttrSyncSourceConfig', 'V2025AttrSyncSourceConfig'] 
slug: /tools/sdk/go/v2025/models/attr-sync-source-config
tags: ['SDK', 'Software Development Kit', 'AttrSyncSourceConfig', 'V2025AttrSyncSourceConfig']
---

# AttrSyncSourceConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Source** | [**AttrSyncSource**](attr-sync-source) |  | 
**Attributes** | [**[]AttrSyncSourceAttributeConfig**](attr-sync-source-attribute-config) | Attribute synchronization configuration for specific identity attributes in the context of a source | 

## Methods

### NewAttrSyncSourceConfig

`func NewAttrSyncSourceConfig(source AttrSyncSource, attributes []AttrSyncSourceAttributeConfig, ) *AttrSyncSourceConfig`

NewAttrSyncSourceConfig instantiates a new AttrSyncSourceConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAttrSyncSourceConfigWithDefaults

`func NewAttrSyncSourceConfigWithDefaults() *AttrSyncSourceConfig`

NewAttrSyncSourceConfigWithDefaults instantiates a new AttrSyncSourceConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSource

`func (o *AttrSyncSourceConfig) GetSource() AttrSyncSource`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *AttrSyncSourceConfig) GetSourceOk() (*AttrSyncSource, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *AttrSyncSourceConfig) SetSource(v AttrSyncSource)`

SetSource sets Source field to given value.


### GetAttributes

`func (o *AttrSyncSourceConfig) GetAttributes() []AttrSyncSourceAttributeConfig`

GetAttributes returns the Attributes field if non-nil, zero value otherwise.

### GetAttributesOk

`func (o *AttrSyncSourceConfig) GetAttributesOk() (*[]AttrSyncSourceAttributeConfig, bool)`

GetAttributesOk returns a tuple with the Attributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributes

`func (o *AttrSyncSourceConfig) SetAttributes(v []AttrSyncSourceAttributeConfig)`

SetAttributes sets Attributes field to given value.



