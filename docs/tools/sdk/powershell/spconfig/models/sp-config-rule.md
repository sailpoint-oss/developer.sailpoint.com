# SpConfigRule

# SpConfigRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **String** | JSONPath expression denoting the path within the object where a value substitution should be applied. | [optional] 
**Value** | [**SpConfigRuleValue**](sp-config-rule-value) |  | [optional] 
**Modes** | **[]String** | Draft modes the rule will apply to. | [optional] 

## Examples

- Prepare the resource
```powershell
$SpConfigRule = Initialize-SpConfigRule  -Path $.enabled `
 -Value null `
 -Modes ["RESTORE","PROMOTE"]
```

- Convert the resource to JSON
```powershell
$SpConfigRule | ConvertTo-JSON
```


[[Back to top]](#) 

