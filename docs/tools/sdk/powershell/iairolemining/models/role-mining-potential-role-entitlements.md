# RoleMiningPotentialRoleEntitlements

# RoleMiningPotentialRoleEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the entitlement | [optional] 
**Name** | **String** | Name of the entitlement | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleEntitlements = Initialize-RoleMiningPotentialRoleEntitlements  -Id {"id":"2c9180877212632a017228d5a796292c"} `
 -Name {"name":"LauncherTest2"}
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

