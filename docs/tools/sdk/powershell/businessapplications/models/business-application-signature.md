# BusinessApplicationSignature

# BusinessApplicationSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "AI Agent",    "Application" ] | Signature type, matched against the machine identity's subtype. Kept consistent with the machine identity subtype values. | [required]
**Name** | **String** | Connector signature value to match against the machine identity's `spBusinessApplication` connector attribute. | [required]

## Examples

- Prepare the resource
```powershell
$BusinessApplicationSignature = Initialize-BusinessApplicationSignature  -Type AI Agent `
 -Name cursor
```

- Convert the resource to JSON
```powershell
$BusinessApplicationSignature | ConvertTo-JSON
```


[[Back to top]](#) 

