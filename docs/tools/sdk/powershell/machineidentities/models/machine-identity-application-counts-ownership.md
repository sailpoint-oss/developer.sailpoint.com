# MachineIdentityApplicationCountsOwnership

# MachineIdentityApplicationCountsOwnership

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**OwnedApplications** | **Int64** | Number of applications that have at least one owner. | [optional] 
**OwnedPercent** | **Int32** | Percentage of applications that have at least one owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityApplicationCountsOwnership = Initialize-MachineIdentityApplicationCountsOwnership  -OwnedApplications 95 `
 -OwnedPercent 79
```

- Convert the resource to JSON
```powershell
$MachineIdentityApplicationCountsOwnership | ConvertTo-JSON
```


[[Back to top]](#) 

