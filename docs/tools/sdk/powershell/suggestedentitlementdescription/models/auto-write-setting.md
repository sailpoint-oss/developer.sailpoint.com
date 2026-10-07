# AutoWriteSetting

# AutoWriteSetting

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | **Boolean** | Whether auto-write is currently enabled for the tenant | [optional] [default to $false]
**IncludedSourceIds** | **[]String** | Source IDs in the allowlist. Empty array means not in allowlist mode. | [optional] 
**ExcludedSourceIds** | **[]String** | Source IDs to exclude from auto-write. Always applied. | [optional] 

## Examples

- Prepare the resource
```powershell
$AutoWriteSetting = Initialize-AutoWriteSetting  -Enabled true `
 -IncludedSourceIds ["2c91808a7813090a017814552e526349","2c91808a7813090a017814552e52634a"] `
 -ExcludedSourceIds ["2c91808a7813090a017814552e526350"]
```

- Convert the resource to JSON
```powershell
$AutoWriteSetting | ConvertTo-JSON
```


[[Back to top]](#) 

