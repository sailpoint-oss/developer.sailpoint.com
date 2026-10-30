# Selector

# Selector

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **SelectorType** |  | [required]
**Values** | **[]String** | The selected values.  | [required]
**Interval** | **Int32** | The selected interval for RANGE selectors.  | [optional] 

## Examples

- Prepare the resource
```powershell
$Selector = Initialize-Selector  -Type null `
 -Values ["MON","WED"] `
 -Interval 3
```

- Convert the resource to JSON
```powershell
$Selector | ConvertTo-JSON
```


[[Back to top]](#) 

