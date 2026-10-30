# SourceCluster

# SourceCluster

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CLUSTER" ] | Type of object being referenced. | [required]
**Id** | **String** | Cluster ID. | [required]
**Name** | **String** | Cluster's human-readable display name. | [required]

## Examples

- Prepare the resource
```powershell
$SourceCluster = Initialize-SourceCluster  -Type CLUSTER `
 -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Corporate Cluster
```

- Convert the resource to JSON
```powershell
$SourceCluster | ConvertTo-JSON
```


[[Back to top]](#) 

