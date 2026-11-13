# AttributeChange

# AttributeChange

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | the attribute name | [optional] 
**PreviousValue** | **String** | the old value of attribute | [optional] 
**NewValue** | **String** | the new value of attribute | [optional] 

## Examples

- Prepare the resource
```powershell
$AttributeChange = Initialize-AttributeChange  -Name firstname `
 -PreviousValue adam `
 -NewValue zampa
```

- Convert the resource to JSON
```powershell
$AttributeChange | ConvertTo-JSON
```


[[Back to top]](#) 

