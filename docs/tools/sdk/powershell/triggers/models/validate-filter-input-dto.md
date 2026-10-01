# ValidateFilterInputDto

# ValidateFilterInputDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | **SystemCollectionsHashtable** | Mock input to evaluate filter expression against. | [required]
**VarFilter** | **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [required]

## Examples

- Prepare the resource
```powershell
$ValidateFilterInputDto = Initialize-ValidateFilterInputDto  -VarInput {"identityId":"201327fda1c44704ac01181e963d463c"} `
 -VarFilter $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
```

- Convert the resource to JSON
```powershell
$ValidateFilterInputDto | ConvertTo-JSON
```


[[Back to top]](#) 

