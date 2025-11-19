---
id: beta-managed-cluster-redis
title: ManagedClusterRedis
pagination_label: ManagedClusterRedis
sidebar_label: ManagedClusterRedis
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'ManagedClusterRedis', 'BetaManagedClusterRedis'] 
slug: /tools/sdk/powershell/beta/models/managed-cluster-redis
tags: ['SDK', 'Software Development Kit', 'ManagedClusterRedis', 'BetaManagedClusterRedis']
---


# ManagedClusterRedis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RedisHost** | **String** | ManagedCluster redisHost | [optional] 
**RedisPort** | **Int32** | ManagedCluster redisPort | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterRedis = Initialize-BetaManagedClusterRedis  -RedisHost megapod-useast1-shared-redis.cloud.sailpoint.com `
 -RedisPort 6379
```

- Convert the resource to JSON
```powershell
$ManagedClusterRedis | ConvertTo-JSON
```


[[Back to top]](#) 

