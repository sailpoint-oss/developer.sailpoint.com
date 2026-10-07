# ManagedClusterAttributes

# ManagedClusterAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Queue** | [**ManagedClusterQueue**](managed-cluster-queue) |  | [optional] 
**Keystore** | **String** | ManagedCluster keystore for spConnectCluster type | [optional] 

## Examples

- Prepare the resource
```powershell
$ManagedClusterAttributes = Initialize-ManagedClusterAttributes  -Queue null `
 -Keystore /u3+7QAAAAIAAAABAAAAAQAvL3Byb3h5LWNsdXN0ZXIvMmM5MTgwODc3Yjg3MW
```

- Convert the resource to JSON
```powershell
$ManagedClusterAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

