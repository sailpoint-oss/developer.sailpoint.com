---
id: managedclusterredis
title: Managedclusterredis
pagination_label: Managedclusterredis
sidebar_label: Managedclusterredis
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Managedclusterredis', 'Managedclusterredis'] 
slug: /tools/sdk/powershell/managedclusters/models/managedclusterredis
tags: ['SDK', 'Software Development Kit', 'Managedclusterredis', 'Managedclusterredis']
---


# Managedclusterredis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RedisHost** | **String** | ManagedCluster redisHost | [optional] 
**RedisPort** | **Int32** | ManagedCluster redisPort | [optional] 

## Examples

- Prepare the resource
```powershell
$Managedclusterredis = Initialize-Managedclusterredis  -RedisHost megapod-useast1-shared-redis.cloud.sailpoint.com `
 -RedisPort 6379
```

- Convert the resource to JSON
```powershell
$Managedclusterredis | ConvertTo-JSON
```


[[Back to top]](#) 

