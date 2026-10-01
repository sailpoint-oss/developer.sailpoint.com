# Replace

# Replace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Regex** | **String** | This can be a string or a regex pattern in which you want to replace. | [required]
**Replacement** | **String** | This is the replacement string that should be substituded wherever the string or pattern is found. | [required]
**RequiresPeriodicRefresh** | **Boolean** | A value that indicates whether the transform logic should be re-evaluated every evening as part of the identity refresh process | [optional] [default to $false]
**VarInput** | **map[string]AnyType** | This is an optional attribute that can explicitly define the input data which will be fed into the transform logic. If input is not provided, the transform will take its input from the source and attribute combination configured via the UI. | [optional] 

## Examples

- Prepare the resource
```powershell
$Replace = Initialize-Replace  -Regex [^a-zA-Z] `
 -Replacement   `
 -RequiresPeriodicRefresh false `
 -VarInput {"type":"accountAttribute","attributes":{"attributeName":"first_name","sourceName":"Source"}}
```

- Convert the resource to JSON
```powershell
$Replace | ConvertTo-JSON
```


[[Back to top]](#) 

