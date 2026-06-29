---
id: v1-clientlogconfigurationexpiration
title: Clientlogconfigurationexpiration
pagination_label: Clientlogconfigurationexpiration
sidebar_label: Clientlogconfigurationexpiration
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Clientlogconfigurationexpiration', 'V1Clientlogconfigurationexpiration'] 
slug: /tools/sdk/go/managedclusters/models/clientlogconfigurationexpiration
tags: ['SDK', 'Software Development Kit', 'Clientlogconfigurationexpiration', 'V1Clientlogconfigurationexpiration']
---

# Clientlogconfigurationexpiration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientId** | Pointer to **string** | Log configuration's client ID | [optional] 
**Expiration** | Pointer to **SailPointTime** | Expiration date-time of the log configuration request.  Can be no greater than 24 hours from current date-time. | [optional] 
**RootLevel** | [**Standardlevel**](standardlevel) |  | 
**LogLevels** | Pointer to [**map[string]Standardlevel**](standardlevel) | Mapping of identifiers to Standard Log Level values | [optional] 

## Methods

### NewClientlogconfigurationexpiration

`func NewClientlogconfigurationexpiration(rootLevel Standardlevel, ) *Clientlogconfigurationexpiration`

NewClientlogconfigurationexpiration instantiates a new Clientlogconfigurationexpiration object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewClientlogconfigurationexpirationWithDefaults

`func NewClientlogconfigurationexpirationWithDefaults() *Clientlogconfigurationexpiration`

NewClientlogconfigurationexpirationWithDefaults instantiates a new Clientlogconfigurationexpiration object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetClientId

`func (o *Clientlogconfigurationexpiration) GetClientId() string`

GetClientId returns the ClientId field if non-nil, zero value otherwise.

### GetClientIdOk

`func (o *Clientlogconfigurationexpiration) GetClientIdOk() (*string, bool)`

GetClientIdOk returns a tuple with the ClientId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetClientId

`func (o *Clientlogconfigurationexpiration) SetClientId(v string)`

SetClientId sets ClientId field to given value.

### HasClientId

`func (o *Clientlogconfigurationexpiration) HasClientId() bool`

HasClientId returns a boolean if a field has been set.

### GetExpiration

`func (o *Clientlogconfigurationexpiration) GetExpiration() SailPointTime`

GetExpiration returns the Expiration field if non-nil, zero value otherwise.

### GetExpirationOk

`func (o *Clientlogconfigurationexpiration) GetExpirationOk() (*SailPointTime, bool)`

GetExpirationOk returns a tuple with the Expiration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiration

`func (o *Clientlogconfigurationexpiration) SetExpiration(v SailPointTime)`

SetExpiration sets Expiration field to given value.

### HasExpiration

`func (o *Clientlogconfigurationexpiration) HasExpiration() bool`

HasExpiration returns a boolean if a field has been set.

### GetRootLevel

`func (o *Clientlogconfigurationexpiration) GetRootLevel() Standardlevel`

GetRootLevel returns the RootLevel field if non-nil, zero value otherwise.

### GetRootLevelOk

`func (o *Clientlogconfigurationexpiration) GetRootLevelOk() (*Standardlevel, bool)`

GetRootLevelOk returns a tuple with the RootLevel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRootLevel

`func (o *Clientlogconfigurationexpiration) SetRootLevel(v Standardlevel)`

SetRootLevel sets RootLevel field to given value.


### GetLogLevels

`func (o *Clientlogconfigurationexpiration) GetLogLevels() map[string]Standardlevel`

GetLogLevels returns the LogLevels field if non-nil, zero value otherwise.

### GetLogLevelsOk

`func (o *Clientlogconfigurationexpiration) GetLogLevelsOk() (*map[string]Standardlevel, bool)`

GetLogLevelsOk returns a tuple with the LogLevels field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLogLevels

`func (o *Clientlogconfigurationexpiration) SetLogLevels(v map[string]Standardlevel)`

SetLogLevels sets LogLevels field to given value.

### HasLogLevels

`func (o *Clientlogconfigurationexpiration) HasLogLevels() bool`

HasLogLevels returns a boolean if a field has been set.


