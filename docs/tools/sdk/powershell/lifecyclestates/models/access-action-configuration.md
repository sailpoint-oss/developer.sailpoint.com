# AccessActionConfiguration

# AccessActionConfiguration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemoveAllAccessEnabled** | **Boolean** | If true, then all accesses are marked for removal. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$AccessActionConfiguration = Initialize-AccessActionConfiguration  -RemoveAllAccessEnabled true
```

- Convert the resource to JSON
```powershell
$AccessActionConfiguration | ConvertTo-JSON
```


[[Back to top]](#) 

