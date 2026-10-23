# TenantConfigurationRequest

# TenantConfigurationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ConfigDetails** | [**TenantConfigurationDetails**](tenant-configuration-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$TenantConfigurationRequest = Initialize-TenantConfigurationRequest  -ConfigDetails null
```

- Convert the resource to JSON
```powershell
$TenantConfigurationRequest | ConvertTo-JSON
```


[[Back to top]](#) 

