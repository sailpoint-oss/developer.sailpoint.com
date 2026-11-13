# SpConfigRules

# SpConfigRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TakeFromTargetRules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**DefaultRules** | [**[]SpConfigRule**](sp-config-rule) |  | [optional] 
**Editable** | **Boolean** | Indicates whether the object can be edited. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$SpConfigRules = Initialize-SpConfigRules  -TakeFromTargetRules null `
 -DefaultRules null `
 -Editable true
```

- Convert the resource to JSON
```powershell
$SpConfigRules | ConvertTo-JSON
```


[[Back to top]](#) 

