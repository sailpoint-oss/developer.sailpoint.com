# MultiHostIntegrationTemplateType

# MultiHostIntegrationTemplateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | This is the name of the type. | [optional] 
**Type** | **String** | This is the type value for the type. | [required]
**ScriptName** | **String** | This is the scriptName attribute value for the type. | [required]

## Examples

- Prepare the resource
```powershell
$MultiHostIntegrationTemplateType = Initialize-MultiHostIntegrationTemplateType  -Name aName `
 -Type aType `
 -ScriptName aScriptName
```

- Convert the resource to JSON
```powershell
$MultiHostIntegrationTemplateType | ConvertTo-JSON
```


[[Back to top]](#) 

