# ConnectorRuleCreateRequestSignature

# ConnectorRuleCreateRequestSignature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**[]Argument**](argument) |  | [required]
**Output** | [**Argument**](argument) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleCreateRequestSignature = Initialize-ConnectorRuleCreateRequestSignature  -VarInput null `
 -Output null
```

- Convert the resource to JSON
```powershell
$ConnectorRuleCreateRequestSignature | ConvertTo-JSON
```


[[Back to top]](#) 

