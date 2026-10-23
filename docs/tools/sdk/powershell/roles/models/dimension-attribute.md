# DimensionAttribute

# DimensionAttribute

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Name of the attribute | [optional] 
**DisplayName** | **String** | Display name of the attribute | [optional] 
**Derived** | **Boolean** | If an attribute is derived, its value comes from the identity. Otherwise, it can be provided with access request | [optional] [default to $true]

## Examples

- Prepare the resource
```powershell
$DimensionAttribute = Initialize-DimensionAttribute  -Name city `
 -DisplayName City `
 -Derived true
```

- Convert the resource to JSON
```powershell
$DimensionAttribute | ConvertTo-JSON
```


[[Back to top]](#) 

