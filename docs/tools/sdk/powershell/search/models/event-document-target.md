# EventDocumentTarget

# EventDocumentTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the target, or recipient, of the event. | [optional] 

## Examples

- Prepare the resource
```powershell
$EventDocumentTarget = Initialize-EventDocumentTarget  -Name Carol.Adams
```

- Convert the resource to JSON
```powershell
$EventDocumentTarget | ConvertTo-JSON
```


[[Back to top]](#) 

