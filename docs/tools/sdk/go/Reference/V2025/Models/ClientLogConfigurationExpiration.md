---
id: client-log-configuration-expiration
title: ClientLogConfigurationExpiration
pagination_label: ClientLogConfigurationExpiration
sidebar_label: ClientLogConfigurationExpiration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ClientLogConfigurationExpiration', 'ClientLogConfigurationExpiration'] 
slug: /tools/sdk/go//models/client-log-configuration-expiration
tags: ['SDK', 'Software Development Kit', 'ClientLogConfigurationExpiration', 'ClientLogConfigurationExpiration']
---

# ClientLogConfigurationExpiration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration's client ID | [optional] 
**Expiration** | Pointer to **SailPointTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** | [**StandardLevel**](standard-level) |  | 
**LogLevels** | Pointer to [**map[string]StandardLevel**](standard-level) | Mapping of identifiers to Standard Log Level values | [optional] 

## Methods

### NewClientLogConfigurationExpiration

`func NewClientLogConfigurationExpiration(rootLevel StandardLevel, ) *ClientLogConfigurationExpiration`

NewClientLogConfigurationExpiration instantiates a new ClientLogConfigurationExpiration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientLogConfigurationExpirationWithDefaults

`func NewClientLogConfigurationExpirationWithDefaults() *ClientLogConfigurationExpiration`

NewClientLogConfigurationExpirationWithDefaults instantiates a new ClientLogConfigurationExpiration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *ClientLogConfigurationExpiration) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *ClientLogConfigurationExpiration) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *ClientLogConfigurationExpiration) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *ClientLogConfigurationExpiration) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetExpiration

`func (o *ClientLogConfigurationExpiration) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *ClientLogConfigurationExpiration) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *ClientLogConfigurationExpiration) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *ClientLogConfigurationExpiration) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetRootLevel

`func (o *ClientLogConfigurationExpiration) GetRootLevel() StandardLevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *ClientLogConfigurationExpiration) GetRootLevelOk() (*StandardLevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *ClientLogConfigurationExpiration) SetRootLevel(v StandardLevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *ClientLogConfigurationExpiration) GetLogLevels() map[string]StandardLevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *ClientLogConfigurationExpiration) GetLogLevelsOk() (*map[string]StandardLevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *ClientLogConfigurationExpiration) SetLogLevels(v map[string]StandardLevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *ClientLogConfigurationExpiration) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.


