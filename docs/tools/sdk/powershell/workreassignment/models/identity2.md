# Identity2

# Identity2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The ID of the object | [optional] 
**Name** | **String** | Human-readable display name of the object | [optional] 

## Examples

- Prepare the resource
```powershell
$Identity2 = Initialize-Identity2  -Id 2c91808380aa05580180aaaaf1940410 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Identity2 | ConvertTo-JSON
```


[[Back to top]](#) 

