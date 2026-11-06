# ConditionEffectConfig

# ConditionEffectConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DefaultValueLabel** | **String** | Effect type's label. | [optional] 
**Element** | **String** | Element's identifier. | [optional] 

## Examples

- Prepare the resource
```powershell
$ConditionEffectConfig = Initialize-ConditionEffectConfig  -DefaultValueLabel Access to Remove `
 -Element 8110662963316867
```

- Convert the resource to JSON
```powershell
$ConditionEffectConfig | ConvertTo-JSON
```


[[Back to top]](#) 

