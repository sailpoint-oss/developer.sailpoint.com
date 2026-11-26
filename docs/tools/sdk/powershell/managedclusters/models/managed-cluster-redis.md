# ManagedClusterRedis

# ManagedClusterRedis

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RedisHost** | **String** | ManagedCluster redisHost | [optional] 
**RedisPort** | **Int32** | ManagedCluster redisPort | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterRedis = Initialize-ManagedClusterRedis  -RedisHost megapod-useast1-shared-redis.cloud.sailpoint.com `
 -RedisPort 6379
```

- Convert the resource to JSON
```powershell
$ManagedClusterRedis | ConvertTo-JSON
```


[[Back to top]](#) 

