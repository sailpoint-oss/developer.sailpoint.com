# WorkflowBodyOwner

# WorkflowBodyOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | The type of object that is referenced | [optional] 
**Id** | **String** | The unique ID of the object | [optional] 
**Name** | **String** | The name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkflowBodyOwner = Initialize-WorkflowBodyOwner  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$WorkflowBodyOwner | ConvertTo-JSON
```


[[Back to top]](#) 

