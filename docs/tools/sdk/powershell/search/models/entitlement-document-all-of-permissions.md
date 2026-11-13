# EntitlementDocumentAllOfPermissions

# EntitlementDocumentAllOfPermissions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | **String** | The target the permission would grants rights on. | [optional] 
**Rights** | **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDocumentAllOfPermissions = Initialize-EntitlementDocumentAllOfPermissions  -Target SYS.GV_$TRANSACTION `
 -Rights null
```

- Convert the resource to JSON
```powershell
$EntitlementDocumentAllOfPermissions | ConvertTo-JSON
```


[[Back to top]](#) 

