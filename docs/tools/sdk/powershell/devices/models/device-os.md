# DeviceOS

# DeviceOS

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **String** | The operating system type. | [optional] 
**Version** | **String** | The operating system version. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeviceOS = Initialize-DeviceOS  -Type macos `
 -Version 14.5
```

- Convert the resource to JSON
```powershell
$DeviceOS | ConvertTo-JSON
```


[[Back to top]](#) 

