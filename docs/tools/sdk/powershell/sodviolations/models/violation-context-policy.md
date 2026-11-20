# ViolationContextPolicy

# ViolationContextPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | The type of object that is referenced | [optional] 
**Id** | **String** | SOD policy ID. | [optional] 
**Name** | **String** |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ViolationContextPolicy = Initialize-ViolationContextPolicy  -Type ENTITLEMENT `
 -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name A very cool policy name
```

- Convert the resource to JSON
```powershell
$ViolationContextPolicy | ConvertTo-JSON
```


[[Back to top]](#) 

