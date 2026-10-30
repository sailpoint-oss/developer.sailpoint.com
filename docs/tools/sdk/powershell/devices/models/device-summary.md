# DeviceSummary

# DeviceSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalEndpoints** | **Int64** | The total number of devices in the tenant. | [optional] 
**ByOs** | [**DeviceOSCounts**](device-os-counts) |  | [optional] 
**AvgAgentsPerEndpoint** | **Double** | The average number of agents per device, rounded to one decimal place. | [optional] 
**EndpointsWithoutRecentData** | **Int64** | The number of devices for which the source has sent no endpoint data or resource link in the last three days. | [optional] 
**EndpointsWithActiveAgents** | **Int64** | The number of devices linked to at least one existing agent. | [optional] 

## Examples

- Prepare the resource
```powershell
$DeviceSummary = Initialize-DeviceSummary  -TotalEndpoints 1250 `
 -ByOs null `
 -AvgAgentsPerEndpoint 2.4 `
 -EndpointsWithoutRecentData 37 `
 -EndpointsWithActiveAgents 980
```

- Convert the resource to JSON
```powershell
$DeviceSummary | ConvertTo-JSON
```


[[Back to top]](#) 

