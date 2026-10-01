# TaskReturnDetails

# TaskReturnDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Display name of the TaskReturnDetails | [required]
**AttributeName** | **String** | Attribute the TaskReturnDetails is for | [required]

## Examples

- Prepare the resource
```powershell
$TaskReturnDetails = Initialize-TaskReturnDetails  -Name label `
 -AttributeName identityCount
```

- Convert the resource to JSON
```powershell
$TaskReturnDetails | ConvertTo-JSON
```


[[Back to top]](#) 

