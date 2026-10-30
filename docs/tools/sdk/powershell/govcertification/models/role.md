# Role

# Role

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id for the Role | [optional] 
**Name** | **String** | The name of the Role | [optional] 
**Description** | **String** | Information about the Role | [optional] 
**Privileged** | **Boolean** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the role contains any access profiles that are privileged. Retained for backward compatibility. | [optional] [default to $false]
**Owner** | [**IdentityReference**](identity-reference) |  | [optional] 
**Revocable** | **Boolean** | Indicates whether the Role can be revoked or requested | [optional] [default to $false]
**AssignmentId** | **String** | the ID of the role assignment | [optional] 
**EndDate** | **System.DateTime** | The date when a user's access expires. | [optional] 
**Entitlements** | [**[]EntitlementReference**](entitlement-reference) | A list of entitlement references associated to this Role. | [optional] 
**AccessProfiles** | [**[]AccessProfileReference**](access-profile-reference) | A list of access profile references associated to this Role. | [optional] 

## Examples

- Prepare the resource
```powershell
$Role = Initialize-Role  -Id 2c91808a7190d06e0171993907fd0794 `
 -Name Accounting-Employees `
 -Description Role for members of the accounting department with the necessary Access Profiles `
 -Privileged false `
 -Owner null `
 -Revocable false `
 -AssignmentId 2c91808a7190d06e0171993907fd0794 `
 -EndDate 2021-12-25T00:00Z `
 -Entitlements null `
 -AccessProfiles null
```

- Convert the resource to JSON
```powershell
$Role | ConvertTo-JSON
```


[[Back to top]](#) 

