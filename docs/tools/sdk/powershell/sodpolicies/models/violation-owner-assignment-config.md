# ViolationOwnerAssignmentConfig

# ViolationOwnerAssignmentConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssignmentRule** |  **Enum** [  "MANAGER",    "STATIC" ] | Details about the violations owner. MANAGER - identity's manager STATIC - Governance Group or Identity | [optional] 
**OwnerRef** | [**ViolationOwnerAssignmentConfigOwnerRef**](violation-owner-assignment-config-owner-ref) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationOwnerAssignmentConfig = Initialize-ViolationOwnerAssignmentConfig  -AssignmentRule MANAGER `
 -OwnerRef null
```

- Convert the resource to JSON
```powershell
$ViolationOwnerAssignmentConfig | ConvertTo-JSON
```


[[Back to top]](#) 

