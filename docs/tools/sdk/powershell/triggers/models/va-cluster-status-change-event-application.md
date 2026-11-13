# VAClusterStatusChangeEventApplication

# VAClusterStatusChangeEventApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The GUID of the application | [required]
**Name** | **String** | The name of the application | [required]
**Attributes** | **map[string]AnyType** | Custom map of attributes for a source.  This will only be populated if type is `SOURCE` and the source has a proxy. | [required]

## Examples

- Prepare the resource
```powershell
$VAClusterStatusChangeEventApplication = Initialize-VAClusterStatusChangeEventApplication  -Id 2c9180866166b5b0016167c32ef31a66 `
 -Name Production VA Cluster `
 -Attributes null
```

- Convert the resource to JSON
```powershell
$VAClusterStatusChangeEventApplication | ConvertTo-JSON
```


[[Back to top]](#) 

