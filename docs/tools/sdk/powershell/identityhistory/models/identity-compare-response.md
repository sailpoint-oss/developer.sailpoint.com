# IdentityCompareResponse

# IdentityCompareResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItemDiff** | **map[string]SystemCollectionsHashtable** | Arbitrary key-value pairs. They will never be processed by the IdentityNow system but will be returned on completion of the violation check. | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCompareResponse = Initialize-IdentityCompareResponse  -AccessItemDiff null
```

- Convert the resource to JSON
```powershell
$IdentityCompareResponse | ConvertTo-JSON
```


[[Back to top]](#) 

