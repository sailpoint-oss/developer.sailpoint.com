# DeviceOSCounts

# DeviceOSCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Macos** | **Int64** | The number of macOS devices. | [optional] 
**Windows** | **Int64** | The number of Windows devices. | [optional] 
**Linux** | **Int64** | The number of Linux devices. | [optional] 
**Unknown** | **Int64** | The number of devices whose operating system is missing or is not macOS, Windows, or Linux. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeviceOSCounts = Initialize-DeviceOSCounts  -Macos 610 `
 -Windows 540 `
 -Linux 85 `
 -Unknown 15
```

- Convert the resource to JSON
```powershell
$DeviceOSCounts | ConvertTo-JSON
```


[[Back to top]](#) 

