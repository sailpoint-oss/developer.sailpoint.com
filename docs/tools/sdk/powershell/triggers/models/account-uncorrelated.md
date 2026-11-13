# AccountUncorrelated

# AccountUncorrelated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Identity** | [**AccountUncorrelatedIdentity**](account-uncorrelated-identity) |  | [required]
**Source** | [**AccountUncorrelatedSource**](account-uncorrelated-source) |  | [required]
**Account** | [**AccountUncorrelatedAccount**](account-uncorrelated-account) |  | [required]
**EntitlementCount** | **Int32** | The number of entitlements associated with this account. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccountUncorrelated = Initialize-AccountUncorrelated  -Identity null `
 -Source null `
 -Account null `
 -EntitlementCount 0
```

- Convert the resource to JSON
```powershell
$AccountUncorrelated | ConvertTo-JSON
```


[[Back to top]](#) 

