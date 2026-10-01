# Target

# Target

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Target ID | [optional] 
**Type** |  **Enum** [  "APPLICATION",    "IDENTITY" ] | Target type | [optional] 
**Name** | **String** | Target name | [optional] 

## Examples

- Prepare the resource
```powershell
$Target = Initialize-Target  -Id c6dc37bf508149b28ce5b7d90ca4bbf9 `
 -Type APPLICATION `
 -Name Active Directory [source]
```

- Convert the resource to JSON
```powershell
$Target | ConvertTo-JSON
```


[[Back to top]](#) 

