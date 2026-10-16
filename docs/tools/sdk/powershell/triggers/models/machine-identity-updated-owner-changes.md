# MachineIdentityUpdatedOwnerChanges

# MachineIdentityUpdatedOwnerChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** | **String** | Name of the attribute that changed. | [optional] 
**Added** | **[]MachineIdentityOwnerReference** | Owners that were added. | [optional] 
**Removed** | **[]MachineIdentityOwnerReference** | Owners that were removed. | [optional] 

## Examples

- Prepare the resource
```powershell
$MachineIdentityUpdatedOwnerChanges = Initialize-MachineIdentityUpdatedOwnerChanges  -AttributeName owners `
 -Added null `
 -Removed null
```

- Convert the resource to JSON
```powershell
$MachineIdentityUpdatedOwnerChanges | ConvertTo-JSON
```


[[Back to top]](#) 

