# BulkTaggedObjectResponse

# BulkTaggedObjectResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 

## Examples

- Prepare the resource
```powershell
$BulkTaggedObjectResponse = Initialize-BulkTaggedObjectResponse  -ObjectRefs null `
 -Tags ["BU_FINANCE","PCI"]
```

- Convert the resource to JSON
```powershell
$BulkTaggedObjectResponse | ConvertTo-JSON
```


[[Back to top]](#) 

