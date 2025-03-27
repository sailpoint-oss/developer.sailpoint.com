---
id: client-log-configuration-duration-minutes
title: ClientLogConfigurationDurationMinutes
pagination_label: ClientLogConfigurationDurationMinutes
sidebar_label: ClientLogConfigurationDurationMinutes
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClientLogConfigurationDurationMinutes', 'ClientLogConfigurationDurationMinutes'] 
slug: /tools/sdk/go/v3/models/client-log-configuration-duration-minutes
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationDurationMinutes', 'ClientLogConfigurationDurationMinutes']
---

# ClientLogConfigurationDurationMinutes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration&#39;s client ID | [optional] 
**DurationMinutes** | Pointer to **int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** | [**StandardLevel**](standard-level) |  | 
**LogLevels** | Pointer to [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 

## Methods

### NewClientLogConfigurationDurationMinutes

`func NewClientLogConfigurationDurationMinutes(rootLevel StandardLevel, ) *ClientLogConfigurationDurationMinutes`

NewClientLogConfigurationDurationMinutes instantiates a new ClientLogConfigurationDurationMinutes object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientLogConfigurationDurationMinutesWithDefaults

`func NewClientLogConfigurationDurationMinutesWithDefaults() *ClientLogConfigurationDurationMinutes`

NewClientLogConfigurationDurationMinutesWithDefaults instantiates a new ClientLogConfigurationDurationMinutes object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *ClientLogConfigurationDurationMinutes) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *ClientLogConfigurationDurationMinutes) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *ClientLogConfigurationDurationMinutes) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *ClientLogConfigurationDurationMinutes) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *ClientLogConfigurationDurationMinutes) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *ClientLogConfigurationDurationMinutes) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *ClientLogConfigurationDurationMinutes) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *ClientLogConfigurationDurationMinutes) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.

### GetRootLevel

`func (o *ClientLogConfigurationDurationMinutes) GetRootLevel() StandardLevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *ClientLogConfigurationDurationMinutes) GetRootLevelOk() (*StandardLevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *ClientLogConfigurationDurationMinutes) SetRootLevel(v StandardLevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *ClientLogConfigurationDurationMinutes) GetLogLevels() map[string]StandardLevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *ClientLogConfigurationDurationMinutes) GetLogLevelsOk() (*map[string]StandardLevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *ClientLogConfigurationDurationMinutes) SetLogLevels(v map[string]StandardLevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *ClientLogConfigurationDurationMinutes) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.


