# RolepropagationstatusresponseLaunchedBy

# RolepropagationstatusresponseLaunchedBy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | DTO type of the identity who launched the Role Propagation process. | [optional] 
**Id** | **String** | ID of the identity who launched the Role Propagation process. | [optional] 
**Name** | **String** | Name of the identity who launched the Role Propagation process. | [optional] 

## Examples

- Prepare the resource
```powershell
$RolepropagationstatusresponseLaunchedBy = Initialize-RolepropagationstatusresponseLaunchedBy  -Type IDENTITY `
 -Id 2c7180a46faadee4016fb4e018c20648 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$RolepropagationstatusresponseLaunchedBy | ConvertTo-JSON
```


[[Back to top]](#) 

