# BulkAddTaggedObject

# BulkAddTaggedObject

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRefs** | [**[]TaggedObjectDto**](tagged-object-dto) |  | [optional] 
**Tags** | **[]String** | Label to be applied to an Object | [optional] 
**Operation** |  **Enum** [  "APPEND",    "MERGE" ] | If APPEND, tags are appended to the list of tags for the object. A 400 error is returned if this would add duplicate tags to the object.  If MERGE, tags are merged with the existing tags. Duplicate tags are silently ignored. | [optional] [default to "APPEND"]

## Examples

- Prepare the resource
```powershell
$BulkAddTaggedObject = Initialize-BulkAddTaggedObject  -ObjectRefs null `
 -Tags ["BU_FINANCE","PCI"] `
 -Operation MERGE
```

- Convert the resource to JSON
```powershell
$BulkAddTaggedObject | ConvertTo-JSON
```


[[Back to top]](#) 

