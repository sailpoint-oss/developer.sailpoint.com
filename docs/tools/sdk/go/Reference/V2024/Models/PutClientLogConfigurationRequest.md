---
id: v2024-put-client-log-configuration-request
title: PutClientLogConfigurationRequest
pagination_label: PutClientLogConfigurationRequest
sidebar_label: PutClientLogConfigurationRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'PutClientLogConfigurationRequest', 'V2024PutClientLogConfigurationRequest'] 
slug: /tools/sdk/go/v2024/models/put-client-log-configuration-request
tags: ['SDK', 'Software Development Kit', 'PutClientLogConfigurationRequest', 'V2024PutClientLogConfigurationRequest']
---

# PutClientLogConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration's client ID | [optional] 
**DurationMinutes** | Pointer to **int32** | Duration in minutes for log configuration to remain in effect before resetting to defaults. | [optional] [default to 240]
**RootLevel** | [**StandardLevel**](standard-level) |  | 
**LogLevels** | Pointer to [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 
**Expiration** | Pointer to **SailPointTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 

## Methods

### NewPutClientLogConfigurationRequest

`func NewPutClientLogConfigurationRequest(rootLevel StandardLevel, ) *PutClientLogConfigurationRequest`

NewPutClientLogConfigurationRequest instantiates a new PutClientLogConfigurationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutClientLogConfigurationRequestWithDefaults

`func NewPutClientLogConfigurationRequestWithDefaults() *PutClientLogConfigurationRequest`

NewPutClientLogConfigurationRequestWithDefaults instantiates a new PutClientLogConfigurationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *PutClientLogConfigurationRequest) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *PutClientLogConfigurationRequest) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *PutClientLogConfigurationRequest) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *PutClientLogConfigurationRequest) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetDurationMinutes

`func (o *PutClientLogConfigurationRequest) GetDurationMinutes() int32`

GetDurationMinutes returns the DurationMinutes field if non-nil, zero value otherwise.

### GetDurationMinutesOk

`func (o *PutClientLogConfigurationRequest) GetDurationMinutesOk() (*int32, bool)`

GetDurationMinutesOk returns a tuple with the DurationMinutes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDurationMinutes

`func (o *PutClientLogConfigurationRequest) SetDurationMinutes(v int32)`

SetDurationMinutes sets DurationMinutes field to given value.

### HasDurationMinutes

`func (o *PutClientLogConfigurationRequest) HasDurationMinutes() bool`

HasDurationMinutes returns a boolean if a field has been set.

### GetRootLevel

`func (o *PutClientLogConfigurationRequest) GetRootLevel() StandardLevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *PutClientLogConfigurationRequest) GetRootLevelOk() (*StandardLevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *PutClientLogConfigurationRequest) SetRootLevel(v StandardLevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *PutClientLogConfigurationRequest) GetLogLevels() map[string]StandardLevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *PutClientLogConfigurationRequest) GetLogLevelsOk() (*map[string]StandardLevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *PutClientLogConfigurationRequest) SetLogLevels(v map[string]StandardLevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *PutClientLogConfigurationRequest) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.

### GetExpiration

`func (o *PutClientLogConfigurationRequest) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *PutClientLogConfigurationRequest) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *PutClientLogConfigurationRequest) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *PutClientLogConfigurationRequest) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.


