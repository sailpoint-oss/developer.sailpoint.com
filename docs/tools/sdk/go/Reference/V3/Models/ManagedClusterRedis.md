---
id: managed-cluster-redis
title: ManagedClusterRedis
pagination_label: ManagedClusterRedis
sidebar_label: ManagedClusterRedis
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ManagedClusterRedis', 'ManagedClusterRedis'] 
slug: /tools/sdk/go/v3/models/managed-cluster-redis
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRedis', 'ManagedClusterRedis']
---

# ManagedClusterRedis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RedisHost** | Pointer to **string** | ManagedCluster redisHost | [optional] 
**RedisPort** | Pointer to **int32** | ManagedCluster redisPort | [optional] 

## Methods

### NewManagedClusterRedis

`func NewManagedClusterRedis() *ManagedClusterRedis`

NewManagedClusterRedis instantiates a new ManagedClusterRedis object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewManagedClusterRedisWithDefaults

`func NewManagedClusterRedisWithDefaults() *ManagedClusterRedis`

NewManagedClusterRedisWithDefaults instantiates a new ManagedClusterRedis object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRedisHost

`func (o *ManagedClusterRedis) GetRedisHost() string`

GetRedisHost returns the RedisHost field if non-nil, zero value otherwise.

### GetRedisHostOk

`func (o *ManagedClusterRedis) GetRedisHostOk() (*string, bool)`

GetRedisHostOk returns a tuple with the RedisHost field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedisHost

`func (o *ManagedClusterRedis) SetRedisHost(v string)`

SetRedisHost sets RedisHost field to given value.

### HasRedisHost

`func (o *ManagedClusterRedis) HasRedisHost() bool`

HasRedisHost returns a boolean if a field has been set.

### GetRedisPort

`func (o *ManagedClusterRedis) GetRedisPort() int32`

GetRedisPort returns the RedisPort field if non-nil, zero value otherwise.

### GetRedisPortOk

`func (o *ManagedClusterRedis) GetRedisPortOk() (*int32, bool)`

GetRedisPortOk returns a tuple with the RedisPort field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRedisPort

`func (o *ManagedClusterRedis) SetRedisPort(v int32)`

SetRedisPort sets RedisPort field to given value.

### HasRedisPort

`func (o *ManagedClusterRedis) HasRedisPort() bool`

HasRedisPort returns a boolean if a field has been set.


