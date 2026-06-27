---
id: v1-clientlogconfiguration
title: Clientlogconfiguration
pagination_label: Clientlogconfiguration
sidebar_label: Clientlogconfiguration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Clientlogconfiguration', 'V1Clientlogconfiguration'] 
slug: /tools/sdk/go/managedclusters/models/clientlogconfiguration
tags: ['SDK', 'Software Development Kit', 'Clientlogconfiguration', 'V1Clientlogconfiguration']
---

# Clientlogconfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration's client ID | [optional] 
**DurationMinutes** | Pointer to **int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**Expiration** | Pointer to **SailPointTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** | [**Standardlevel**](standardlevel) |  | 
**LogLevels** | Pointer to [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 

## Methods

### NewClientlogconfiguration

`func NewClientlogconfiguration(rootLevel Standardlevel, ) *Clientlogconfiguration`

NewClientlogconfiguration instantiates a new Clientlogconfiguration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientlogconfigurationWithDefaults

`func NewClientlogconfigurationWithDefaults() *Clientlogconfiguration`

NewClientlogconfigurationWithDefaults instantiates a new Clientlogconfiguration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *Clientlogconfiguration) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *Clientlogconfiguration) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *Clientlogconfiguration) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *Clientlogconfiguration) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *Clientlogconfiguration) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *Clientlogconfiguration) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *Clientlogconfiguration) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *Clientlogconfiguration) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.

### GetExpiration

`func (o *Clientlogconfiguration) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Clientlogconfiguration) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Clientlogconfiguration) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Clientlogconfiguration) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetRootLevel

`func (o *Clientlogconfiguration) GetRootLevel() Standardlevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *Clientlogconfiguration) GetRootLevelOk() (*Standardlevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *Clientlogconfiguration) SetRootLevel(v Standardlevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *Clientlogconfiguration) GetLogLevels() map[string]Standardlevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *Clientlogconfiguration) GetLogLevelsOk() (*map[string]Standardlevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *Clientlogconfiguration) SetLogLevels(v map[string]Standardlevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *Clientlogconfiguration) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.


