# AccessCriteria

# AccessCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the access criteria grouping. | [required]
**ConflictingItems** | [**[]Conflictingitem**](conflictingitem) | The list of access items that make up this side of the conflict. | [required]

## Examples

- Prepare the resource
```powershell
$AccessCriteria = Initialize-AccessCriteria  -Name money-in `
 -ConflictingItems [{"id":"2c9180866166b5b0016167c32ef31a66","name":"Administrator","type":"ENTITLEMENT"}]
```

- Convert the resource to JSON
```powershell
$AccessCriteria | ConvertTo-JSON
```


[[Back to top]](#) 

