# TargetAttributes

# TargetAttributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Attributes** | **[]String** | The target attribute names. | [optional] 

## Examples

- Prepare the resource
```powershell
$TargetAttributes = Initialize-TargetAttributes  -Attributes ["name","nativeIdentity"]
```

- Convert the resource to JSON
```powershell
$TargetAttributes | ConvertTo-JSON
```


[[Back to top]](#) 

