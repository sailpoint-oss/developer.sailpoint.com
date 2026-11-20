# Reminderescalationtenantconfigcreate

# Reminderescalationtenantconfigcreate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DomainObjectType** |  **Enum** [  "PERSONAL_ACCESS_TOKEN",    "CERTIFICATION" ] | Domain object type to create a default for. | [required]
**Rules** | [**Reminderescalationruleset**](reminderescalationruleset) |  | [required]

## Examples

- Prepare the resource
```powershell
$Reminderescalationtenantconfigcreate = Initialize-Reminderescalationtenantconfigcreate  -DomainObjectType CERTIFICATION `
 -Rules null
```

- Convert the resource to JSON
```powershell
$Reminderescalationtenantconfigcreate | ConvertTo-JSON
```


[[Back to top]](#) 

