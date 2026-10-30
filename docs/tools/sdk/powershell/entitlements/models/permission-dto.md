# PermissionDTO

# PermissionDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rights** | **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] [readonly] 
**Target** | **String** | The target the permission would grants rights on. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$PermissionDTO = Initialize-PermissionDTO  -Rights HereIsRight1 `
 -Target SYS.GV_$TRANSACTION
```

- Convert the resource to JSON
```powershell
$PermissionDTO | ConvertTo-JSON
```


[[Back to top]](#) 

