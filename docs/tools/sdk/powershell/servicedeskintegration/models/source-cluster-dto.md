# SourceClusterDto

# SourceClusterDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "CLUSTER" ] | Source cluster DTO type. | [optional] 
**Id** | **String** | Source cluster ID. | [optional] 
**Name** | **String** | Source cluster display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$SourceClusterDto = Initialize-SourceClusterDto  -Type CLUSTER `
 -Id 2c9180847a7fccdd017aa5896f9f4f6f `
 -Name Training VA
```

- Convert the resource to JSON
```powershell
$SourceClusterDto | ConvertTo-JSON
```


[[Back to top]](#) 

