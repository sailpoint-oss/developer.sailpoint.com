# Referenceinput

# Referenceinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Opaque identifier in the exact form required by the owning service (case, dashes, etc. must be preserved).  | [required]
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The type of object being referenced. | [required]

## Examples

- Prepare the resource
```powershell
$Referenceinput = Initialize-Referenceinput  -Id 3e07886555ed43cfb83c85c58d2016e6 `
 -Type IDENTITY
```

- Convert the resource to JSON
```powershell
$Referenceinput | ConvertTo-JSON
```


[[Back to top]](#) 

