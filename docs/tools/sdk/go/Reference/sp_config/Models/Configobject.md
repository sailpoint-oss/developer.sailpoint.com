---
id: v1-configobject
title: Configobject
pagination_label: Configobject
sidebar_label: Configobject
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Configobject', 'V1Configobject'] 
slug: /tools/sdk/go/spconfig/models/configobject
tags: ['SDK', 'Software Development Kit', 'Configobject', 'V1Configobject']
---

# Configobject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Version** | Pointer to **int32** | Current version of configuration object. | [optional] 
**Self** | Pointer to [**Selfimportexportdto**](selfimportexportdto) |  | [optional] 
**Object** | Pointer to **map[string]interface{}** | Object details. Format dependant on the object type. | [optional] 

## Methods

### NewConfigobject

`func NewConfigobject() *Configobject`

NewConfigobject instantiates a new Configobject object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewConfigobjectWithDefaults

`func NewConfigobjectWithDefaults() *Configobject`

NewConfigobjectWithDefaults instantiates a new Configobject object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetVersion

`func (o *Configobject) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Configobject) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Configobject) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Configobject) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetSelf

`func (o *Configobject) GetSelf() Selfimportexportdto`

GetSelf returns the Self field if non-nil, zero value otherwise.

### GetSelfOk

`func (o *Configobject) GetSelfOk() (*Selfimportexportdto, bool)`

GetSelfOk returns a tuple with the Self field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSelf

`func (o *Configobject) SetSelf(v Selfimportexportdto)`

SetSelf sets Self field to given value.

### HasSelf

`func (o *Configobject) HasSelf() bool`

HasSelf returns a boolean if a field has been set.

### GetObject

`func (o *Configobject) GetObject() map[string]interface{}`

GetObject returns the Object field if non-nil, zero value otherwise.

### GetObjectOk

`func (o *Configobject) GetObjectOk() (*map[string]interface{}, bool)`

GetObjectOk returns a tuple with the Object field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetObject

`func (o *Configobject) SetObject(v map[string]interface{})`

SetObject sets Object field to given value.

### HasObject

`func (o *Configobject) HasObject() bool`

HasObject returns a boolean if a field has been set.


