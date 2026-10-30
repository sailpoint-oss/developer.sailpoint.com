# Device

# Device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the Object | [optional] [readonly] 
**Name** | **String** | Name of the Object | [required]
**Created** | **System.DateTime** | Creation date of the Object | [optional] [readonly] 
**Modified** | **System.DateTime** | Last modification date of the Object | [optional] [readonly] 
**NativeIdentity** | **String** | The device's unique identifier on the source. | [optional] 
**Description** | **String** | Description of the device. | [optional] 
**Environment** | **String** | The environment the device belongs to. | [optional] 
**Hostname** | **String** | The device hostname reported by the source. | [optional] 
**Os** | [**DeviceOS**](device-os) |  | [optional] 
**Email** | **String** | The email address the source reports for the device. | [optional] 
**SentinelVersion** | **String** | The version of the endpoint agent the source reports for the device. | [optional] 
**DetectionModuleVersion** | **String** | The version of the detection module the source reports for the device. | [optional] 
**Source** | [**DeviceAllOfSource**](device-all-of-source) |  | [optional] 
**Resource** | [**DeviceResource**](device-resource) |  | [optional] 
**DatasetId** | **String** | The ID of the source dataset the device was retrieved from. | [optional] 
**Owners** | [**DeviceOwners**](device-owners) |  | [optional] 
**ConnectorAttributes** | **map[string]AnyType** | A map of attributes sourced from the connector during aggregation. | [optional] 
**Attributes** | **map[string]AnyType** | A map of curated device attributes. | [optional] 

## Examples

- Prepare the resource
```powershell
$Device = Initialize-Device  -Id id12345 `
 -Name aName `
 -Created 2015-05-28T14:07:17Z `
 -Modified 2015-05-28T14:07:17Z `
 -NativeIdentity 6c2f4a8e-1d3b-4f6a-9e2c-7b5d8a1f0c34 `
 -Description Finance team laptop `
 -Environment production `
 -Hostname lab-mbp-0142 `
 -Os null `
 -Email jane.doe@example.com `
 -SentinelVersion 24.1.2.6 `
 -DetectionModuleVersion 3.4.1 `
 -Source null `
 -Resource null `
 -DatasetId 8886e5e3-63d0-462f-a195-d98da885b8dc `
 -Owners null `
 -ConnectorAttributes {"agentId":1785462398123456800} `
 -Attributes {"hostname":"lab-mbp-0142","osType":"macos"}
```

- Convert the resource to JSON
```powershell
$Device | ConvertTo-JSON
```


[[Back to top]](#) 

