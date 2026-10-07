# AccessSummaryAccess

# AccessSummaryAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **DtoType** |  | [optional] 
**Id** | **String** | The ID of the item being certified | [optional] 
**Name** | **String** | The name of the item being certified | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessSummaryAccess = Initialize-AccessSummaryAccess  -Type null `
 -Id 2c9180867160846801719932c5153fb7 `
 -Name Entitlement for Company Database
```

- Convert the resource to JSON
```powershell
$AccessSummaryAccess | ConvertTo-JSON
```


[[Back to top]](#) 

