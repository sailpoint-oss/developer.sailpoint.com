# CorrelationCondition

# CorrelationCondition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | System-generated unique ID of the condition. | [optional] 
**LeftAttributeName** | **String** | The left-hand attribute name of the condition. | [required]
**OperatorType** | **String** | The comparison operator applied between the left and right attributes. | [required]
**RightAttributeName** | **String** | The right-hand attribute name. Use an empty string when there is no RHS attribute. | [required]
**Transform** | **String** | Optional transform applied before comparison. | [optional] 
**Ordinal** | **Int32** | The position of this condition within the rule. | [required]

## Examples

- Prepare the resource
```powershell
$CorrelationCondition = Initialize-CorrelationCondition  -Id 1b2c3d4e-5f60-4a7b-8c9d-0e1f2a3b4c5d `
 -LeftAttributeName manager `
 -OperatorType EQUALS `
 -RightAttributeName owner `
 -Transform toUpper `
 -Ordinal 0
```

- Convert the resource to JSON
```powershell
$CorrelationCondition | ConvertTo-JSON
```


[[Back to top]](#) 

