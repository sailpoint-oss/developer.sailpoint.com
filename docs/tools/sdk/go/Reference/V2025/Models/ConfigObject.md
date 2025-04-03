---
id: v2025-config-object
title: ConfigObject
pagination_label: ConfigObject
sidebar_label: ConfigObject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ConfigObject', 'V2025ConfigObject'] 
slug: /tools/sdk/go/v2025/models/config-object
tags: ['SDK', 'Software Development Kit', 'ConfigObject', 'V2025ConfigObject']
---

# ConfigObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **int32** | Current version of configuration object. | [optional] 
**Self** | Pointer to [**SelfImportExportDto**](self-import-export-dto) |  | [optional] 
**Object** | Pointer to **map[string]interface{}** | Object details. Format dependant on the object type. | [optional] 

## Methods

### NewConfigObject

`func NewConfigObject() *ConfigObject`

NewConfigObject instantiates a new ConfigObject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigObjectWithDefaults

`func NewConfigObjectWithDefaults() *ConfigObject`

NewConfigObjectWithDefaults instantiates a new ConfigObject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *ConfigObject) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *ConfigObject) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *ConfigObject) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *ConfigObject) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetSelf

`func (o *ConfigObject) GetSelf() SelfImportExportDto`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *ConfigObject) GetSelfOk() (*SelfImportExportDto, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *ConfigObject) SetSelf(v SelfImportExportDto)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *ConfigObject) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetObject

`func (o *ConfigObject) GetObject() map[string]interface{}`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *ConfigObject) GetObjectOk() (*map[string]interface{}, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *ConfigObject) SetObject(v map[string]interface{})`

SetObject sets Object field to given value.

### HasObject

`func (o *ConfigObject) HasObject() bool`

HasObject returns a boolean if a field has been set.


