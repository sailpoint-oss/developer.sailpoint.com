# SectionDetails

# SectionDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the FormItem | [optional] 
**Label** | **String** | Label of the section | [optional] 
**FormItems** | **[]SystemCollectionsHashtable** | List of FormItems. FormItems can be SectionDetails and/or FieldDetails | [optional] 

## Examples

- Prepare the resource
```powershell
$SectionDetails = Initialize-SectionDetails  -Name Field1 `
 -Label Section 1 `
 -FormItems []
```

- Convert the resource to JSON
```powershell
$SectionDetails | ConvertTo-JSON
```


[[Back to top]](#) 

