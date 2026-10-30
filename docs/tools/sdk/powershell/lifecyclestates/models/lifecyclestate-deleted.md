# LifecyclestateDeleted

# LifecyclestateDeleted

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "LIFECYCLE_STATE",    "TASK_RESULT" ] | Deleted lifecycle state's DTO type. | [optional] 
**Id** | **String** | Deleted lifecycle state ID. | [optional] 
**Name** | **String** | Deleted lifecycle state's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$LifecyclestateDeleted = Initialize-LifecyclestateDeleted  -Type LIFECYCLE_STATE `
 -Id 12345 `
 -Name Contractor Lifecycle
```

- Convert the resource to JSON
```powershell
$LifecyclestateDeleted | ConvertTo-JSON
```


[[Back to top]](#) 

