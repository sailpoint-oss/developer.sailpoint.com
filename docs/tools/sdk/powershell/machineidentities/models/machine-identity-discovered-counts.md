# MachineIdentityDiscoveredCounts

# MachineIdentityDiscoveredCounts

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Count** | **Int64** | Number of machine identities created within the window. | [optional] 
**WindowDays** | **Int32** | Length of the window, in days. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityDiscoveredCounts = Initialize-MachineIdentityDiscoveredCounts  -Count 8 `
 -WindowDays 30
```

- Convert the resource to JSON
```powershell
$MachineIdentityDiscoveredCounts | ConvertTo-JSON
```


[[Back to top]](#) 

