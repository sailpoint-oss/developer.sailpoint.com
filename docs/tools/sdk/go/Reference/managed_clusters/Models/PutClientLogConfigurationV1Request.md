---
id: v1-put-client-log-configuration-v1-request
title: PutClientLogConfigurationV1Request
pagination_label: PutClientLogConfigurationV1Request
sidebar_label: PutClientLogConfigurationV1Request
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutClientLogConfigurationV1Request', 'V1PutClientLogConfigurationV1Request'] 
slug: /tools/sdk/go/managedclusters/models/put-client-log-configuration-v1-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationV1Request', 'V1PutClientLogConfigurationV1Request']
---

# PutClientLogConfigurationV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration's client ID | [optional] 
**DurationMinutes** | Pointer to **int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** | [**Standardlevel**](standardlevel) |  | 
**LogLevels** | Pointer to [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 
**Expiration** | Pointer to **SailPointTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 

## Methods

### NewPutClientLogConfigurationV1Request

`func NewPutClientLogConfigurationV1Request(rootLevel Standardlevel, ) *PutClientLogConfigurationV1Request`

NewPutClientLogConfigurationV1Request instantiates a new PutClientLogConfigurationV1Request object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutClientLogConfigurationV1RequestWithDefaults

`func NewPutClientLogConfigurationV1RequestWithDefaults() *PutClientLogConfigurationV1Request`

NewPutClientLogConfigurationV1RequestWithDefaults instantiates a new PutClientLogConfigurationV1Request object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *PutClientLogConfigurationV1Request) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *PutClientLogConfigurationV1Request) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *PutClientLogConfigurationV1Request) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *PutClientLogConfigurationV1Request) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *PutClientLogConfigurationV1Request) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *PutClientLogConfigurationV1Request) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *PutClientLogConfigurationV1Request) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *PutClientLogConfigurationV1Request) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.

### GetRootLevel

`func (o *PutClientLogConfigurationV1Request) GetRootLevel() Standardlevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *PutClientLogConfigurationV1Request) GetRootLevelOk() (*Standardlevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *PutClientLogConfigurationV1Request) SetRootLevel(v Standardlevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *PutClientLogConfigurationV1Request) GetLogLevels() map[string]Standardlevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *PutClientLogConfigurationV1Request) GetLogLevelsOk() (*map[string]Standardlevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *PutClientLogConfigurationV1Request) SetLogLevels(v map[string]Standardlevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *PutClientLogConfigurationV1Request) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.

### GetExpiration

`func (o *PutClientLogConfigurationV1Request) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *PutClientLogConfigurationV1Request) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *PutClientLogConfigurationV1Request) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *PutClientLogConfigurationV1Request) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.


