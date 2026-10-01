# ConnectorRuleValidationResponseDetailsInner

# ConnectorRuleValidationResponseDetailsInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Line** | **Int32** | The line number where the issue occurred | [required]
**Column** | **Int32** | the column number where the issue occurred | [required]
**Messsage** | **String** | a description of the issue in the code | [optional] 

## Examples

- Prepare the resource
```powershell
$ConnectorRuleValidationResponseDetailsInner = Initialize-ConnectorRuleValidationResponseDetailsInner  -Line 2 `
 -Column 5 `
 -Messsage Remove reference to .decrypt(
```

- Convert the resource to JSON
```powershell
$ConnectorRuleValidationResponseDetailsInner | ConvertTo-JSON
```


[[Back to top]](#) 

