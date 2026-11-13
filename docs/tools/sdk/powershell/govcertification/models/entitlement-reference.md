# EntitlementReference

# EntitlementReference

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id for the entitlement | [optional] 
**Name** | **String** | The name of the entitlement | [optional] 
**Description** | **String** | Information about the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementReference = Initialize-EntitlementReference  -Id 2c918085718230600171993742c63558 `
 -Name CN=entitlement.bbb7c650 `
 -Description Gives read/write access to the company database
```

- Convert the resource to JSON
```powershell
$EntitlementReference | ConvertTo-JSON
```


[[Back to top]](#) 

