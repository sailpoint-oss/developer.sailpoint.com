# ManualWorkItemDetailsCurrentOwner

# ManualWorkItemDetailsCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | DTO type of current work item owner's identity. | [optional] 
**Id** | **String** | ID of current work item owner's identity. | [optional] 
**Name** | **String** | Display name of current work item owner. | [optional] 

## Examples

- Prepare the resource
```powershell
$ManualWorkItemDetailsCurrentOwner = Initialize-ManualWorkItemDetailsCurrentOwner  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$ManualWorkItemDetailsCurrentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

