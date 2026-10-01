# CreateIdentityCollectorV1200Response

# CreateIdentityCollectorV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **Int64** | The unique identifier of the created identity collector. | [optional] 
**Name** | **String** | The display name of the created identity collector. | [optional] 

## Examples

- Prepare the resource
```powershell
$CreateIdentityCollectorV1200Response = Initialize-CreateIdentityCollectorV1200Response  -Id 12345 `
 -Name Active Directory Identity Collector
```

- Convert the resource to JSON
```powershell
$CreateIdentityCollectorV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

