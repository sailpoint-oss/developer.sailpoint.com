# Rolepropagationongoingresponse

# Rolepropagationongoingresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IsRunning** | **Boolean** | Indicates if the role propagation process is currently running on the tenant | [optional] [default to $false]
**RolePropagationDetails** | [**RolepropagationongoingresponseRolePropagationDetails**](rolepropagationongoingresponse-role-propagation-details) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Rolepropagationongoingresponse = Initialize-Rolepropagationongoingresponse  -IsRunning true `
 -RolePropagationDetails null
```

- Convert the resource to JSON
```powershell
$Rolepropagationongoingresponse | ConvertTo-JSON
```


[[Back to top]](#) 

