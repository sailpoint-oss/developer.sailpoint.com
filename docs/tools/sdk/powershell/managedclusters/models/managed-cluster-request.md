# ManagedClusterRequest

# ManagedClusterRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | ManagedCluster name | [required]
**Type** | **ManagedClusterTypes** |  | [optional] 
**Configuration** | **map[string]String** | ManagedProcess configuration map | [optional] 
**Description** | **String** | ManagedCluster description | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterRequest = Initialize-ManagedClusterRequest  -Name Managed Cluster Name `
 -Type null `
 -Configuration {"clusterExternalId":"externalId","ccgVersion":"77.0.0"} `
 -Description A short description of the managed cluster.
```

- Convert the resource to JSON
```powershell
$ManagedClusterRequest | ConvertTo-JSON
```


[[Back to top]](#) 

