# RoleMiningPotentialRoleApplication

# RoleMiningPotentialRoleApplication

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the application | [optional] 
**Name** | **String** | Name of the application | [optional] 

## Examples

- Prepare the resource
```powershell
$RoleMiningPotentialRoleApplication = Initialize-RoleMiningPotentialRoleApplication  -Id {"id":"2c9180877212632a017228d5a796292b"} `
 -Name {"name":"Slack"}
```

- Convert the resource to JSON
```powershell
$RoleMiningPotentialRoleApplication | ConvertTo-JSON
```


[[Back to top]](#) 

