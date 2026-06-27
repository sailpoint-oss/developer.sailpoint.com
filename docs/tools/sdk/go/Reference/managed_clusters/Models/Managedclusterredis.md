---
id: v1-managedclusterredis
title: Managedclusterredis
pagination_label: Managedclusterredis
sidebar_label: Managedclusterredis
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Managedclusterredis', 'V1Managedclusterredis'] 
slug: /tools/sdk/go/managedclusters/models/managedclusterredis
tags: ['SDK', 'Software Development Kit', 'Managedclusterredis', 'V1Managedclusterredis']
---

# Managedclusterredis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RedisHost** | Pointer to **string** | ManagedCluster redisHost | [optional] 
**RedisPort** | Pointer to **int32** | ManagedCluster redisPort | [optional] 

## Methods

### NewManagedclusterredis

`func NewManagedclusterredis() *Managedclusterredis`

NewManagedclusterredis instantiates a new Managedclusterredis object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedclusterredisWithDefaults

`func NewManagedclusterredisWithDefaults() *Managedclusterredis`

NewManagedclusterredisWithDefaults instantiates a new Managedclusterredis object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRedisHost

`func (o *Managedclusterredis) GetRedisHost() string`

GetRedisHost returns the RedisHost field if non-nil, zero value otherwise.

### GetRedisHostOk

`func (o *Managedclusterredis) GetRedisHostOk() (*string, bool)`

GetRedisHostOk returns a tuple with the RedisHost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedisHost

`func (o *Managedclusterredis) SetRedisHost(v string)`

SetRedisHost sets RedisHost field to given value.

### HasRedisHost

`func (o *Managedclusterredis) HasRedisHost() bool`

HasRedisHost returns a boolean if a field has been set.

### GetRedisPort

`func (o *Managedclusterredis) GetRedisPort() int32`

GetRedisPort returns the RedisPort field if non-nil, zero value otherwise.

### GetRedisPortOk

`func (o *Managedclusterredis) GetRedisPortOk() (*int32, bool)`

GetRedisPortOk returns a tuple with the RedisPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedisPort

`func (o *Managedclusterredis) SetRedisPort(v int32)`

SetRedisPort sets RedisPort field to given value.

### HasRedisPort

`func (o *Managedclusterredis) HasRedisPort() bool`

HasRedisPort returns a boolean if a field has been set.


