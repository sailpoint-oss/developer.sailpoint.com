---
id: v1-clientlogconfigurationdurationminutes
title: Clientlogconfigurationdurationminutes
pagination_label: Clientlogconfigurationdurationminutes
sidebar_label: Clientlogconfigurationdurationminutes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Clientlogconfigurationdurationminutes', 'V1Clientlogconfigurationdurationminutes'] 
slug: /tools/sdk/go/managedclusters/models/clientlogconfigurationdurationminutes
tags: ['SDK', 'Software Development Kit', 'Clientlogconfigurationdurationminutes', 'V1Clientlogconfigurationdurationminutes']
---

# Clientlogconfigurationdurationminutes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration's client ID | [optional] 
**DurationMinutes** | Pointer to **int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** | [**Standardlevel**](standardlevel) |  | 
**LogLevels** | Pointer to [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 

## Methods

### NewClientlogconfigurationdurationminutes

`func NewClientlogconfigurationdurationminutes(rootLevel Standardlevel, ) *Clientlogconfigurationdurationminutes`

NewClientlogconfigurationdurationminutes instantiates a new Clientlogconfigurationdurationminutes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientlogconfigurationdurationminutesWithDefaults

`func NewClientlogconfigurationdurationminutesWithDefaults() *Clientlogconfigurationdurationminutes`

NewClientlogconfigurationdurationminutesWithDefaults instantiates a new Clientlogconfigurationdurationminutes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *Clientlogconfigurationdurationminutes) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *Clientlogconfigurationdurationminutes) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *Clientlogconfigurationdurationminutes) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *Clientlogconfigurationdurationminutes) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *Clientlogconfigurationdurationminutes) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *Clientlogconfigurationdurationminutes) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *Clientlogconfigurationdurationminutes) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *Clientlogconfigurationdurationminutes) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.

### GetRootLevel

`func (o *Clientlogconfigurationdurationminutes) GetRootLevel() Standardlevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *Clientlogconfigurationdurationminutes) GetRootLevelOk() (*Standardlevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *Clientlogconfigurationdurationminutes) SetRootLevel(v Standardlevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *Clientlogconfigurationdurationminutes) GetLogLevels() map[string]Standardlevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *Clientlogconfigurationdurationminutes) GetLogLevelsOk() (*map[string]Standardlevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *Clientlogconfigurationdurationminutes) SetLogLevels(v map[string]Standardlevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *Clientlogconfigurationdurationminutes) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.


