# BaseAccessProfile

# BaseAccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Access profile's unique ID. | [optional] 
**Name** | **String** | Access profile's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$BaseAccessProfile = Initialize-BaseAccessProfile  -Id 2c91809c6faade77016fb4f0b63407ae `
 -Name Admin Access
```

- Convert the resource to JSON
```powershell
$BaseAccessProfile | ConvertTo-JSON
```


[[Back to top]](#) 

