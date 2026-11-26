# IntelAccessSourceWire

# IntelAccessSourceWire

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Source identifier referenced by the account wire object. | [optional] 
**Name** | **String** | Human-readable source name shown in administrative consoles. | [optional] 

## Examples

- Prepare the resource
```powershell
$IntelAccessSourceWire = Initialize-IntelAccessSourceWire  -Id 2c9180835d2e5168015d32f890301e89 `
 -Name Active Directory
```

- Convert the resource to JSON
```powershell
$IntelAccessSourceWire | ConvertTo-JSON
```


[[Back to top]](#) 

