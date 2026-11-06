# ApprovalStatusDtoCurrentOwner

# ApprovalStatusDtoCurrentOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of identity who reviewed the access item request. | [optional] 
**Id** | **String** | ID of identity who reviewed the access item request. | [optional] 
**Name** | **String** | Human-readable display name of identity who reviewed the access item request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalStatusDtoCurrentOwner = Initialize-ApprovalStatusDtoCurrentOwner  -Type IDENTITY `
 -Id 2c3780a46faadee4016fb4e018c20652 `
 -Name Allen Albertson
```

- Convert the resource to JSON
```powershell
$ApprovalStatusDtoCurrentOwner | ConvertTo-JSON
```


[[Back to top]](#) 

