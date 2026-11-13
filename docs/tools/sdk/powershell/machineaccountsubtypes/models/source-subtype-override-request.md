# SourceSubtypeOverrideRequest

# SourceSubtypeOverrideRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SourceId** | **String** | ID of the source to create the overriding source subtype on. | [required]

## Examples

- Prepare the resource
```powershell
$SourceSubtypeOverrideRequest = Initialize-SourceSubtypeOverrideRequest  -SourceId 6d0458373bec4b4b80460992b76016da
```

- Convert the resource to JSON
```powershell
$SourceSubtypeOverrideRequest | ConvertTo-JSON
```


[[Back to top]](#) 

