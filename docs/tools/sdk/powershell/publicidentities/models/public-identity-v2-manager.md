# PublicIdentityV2Manager

# PublicIdentityV2Manager

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Manager identity id | [required]
**Name** | **String** | Manager alias / technical name | [required]
**DisplayName** | **String** | Manager display name. Null when absent from the search hit. | [required]

## Examples

- Prepare the resource
```powershell
$PublicIdentityV2Manager = Initialize-PublicIdentityV2Manager  -Id 2c9180a46faadee4016fb4e018c20639 `
 -Name thomas.edison `
 -DisplayName Thomas Edison
```

- Convert the resource to JSON
```powershell
$PublicIdentityV2Manager | ConvertTo-JSON
```


[[Back to top]](#) 

