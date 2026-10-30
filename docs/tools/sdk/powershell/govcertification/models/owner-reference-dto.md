# OwnerReferenceDTO

# OwnerReferenceDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The owner id | [optional] 
**Name** | **String** | The owner name | [optional] 
**Type** |  **Enum** [  "IDENTITY" ] | The type of the owner. Initially only type IDENTITY is supported | [optional] 

## Examples

- Prepare the resource
```powershell
$OwnerReferenceDTO = Initialize-OwnerReferenceDTO  -Id 2a2fdacca5e345f18bf7970cfbb8fec2 `
 -Name identity 1 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$OwnerReferenceDTO | ConvertTo-JSON
```


[[Back to top]](#) 

