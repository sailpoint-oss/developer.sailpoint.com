# AccountAttributes

# AccountAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | **map[string]AnyType** | The schema attribute values for the account | [required]

## Examples

- Prepare the resource
```powershell
$AccountAttributes = Initialize-AccountAttributes  -Attributes {"city":"Austin","displayName":"John Doe","userName":"jdoe","sAMAccountName":"jDoe","mail":"john.doe@sailpoint.com"}
```

- Convert the resource to JSON
```powershell
$AccountAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

