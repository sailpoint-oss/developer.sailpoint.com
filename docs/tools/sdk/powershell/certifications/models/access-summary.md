# AccessSummary

# AccessSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Access** | [**AccessSummaryAccess**](access-summary-access) |  | [optional] 
**Entitlement** | [**ReviewableEntitlement**](reviewable-entitlement) |  | [optional] 
**AccessProfile** | [**ReviewableAccessProfile**](reviewable-access-profile) |  | [optional] 
**Role** | [**ReviewableRole**](reviewable-role) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessSummary = Initialize-AccessSummary  -Access null `
 -Entitlement null `
 -AccessProfile null `
 -Role null
```

- Convert the resource to JSON
```powershell
$AccessSummary | ConvertTo-JSON
```


[[Back to top]](#) 

