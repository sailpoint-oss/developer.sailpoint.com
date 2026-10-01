# EntitlementDocumentAllOfSource

# EntitlementDocumentAllOfSource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | ID of entitlement's source. | [optional] 
**Name** | **String** | Display name of entitlement's source. | [optional] 
**Type** | **String** | Type of object. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDocumentAllOfSource = Initialize-EntitlementDocumentAllOfSource  -Id 2c91808b6e9e6fb8016eec1a2b6f7b5f `
 -Name ODS-HR-Employees `
 -Type SOURCE
```

- Convert the resource to JSON
```powershell
$EntitlementDocumentAllOfSource | ConvertTo-JSON
```


[[Back to top]](#) 

