# Referenceresponse

# Referenceresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique identifier of the referenced object. | [required]
**Name** | **String** | Optional display name when metadata resolves. Omitted when unknown or not resolvable. | [optional] [readonly] 
**Type** | **String** | The type of the referenced object. | [required]

## Examples

- Prepare the resource
```powershell
$Referenceresponse = Initialize-Referenceresponse  -Id 3e07886555ed43cfb83c85c58d2016e6 `
 -Name John Doe `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$Referenceresponse | ConvertTo-JSON
```


[[Back to top]](#) 

