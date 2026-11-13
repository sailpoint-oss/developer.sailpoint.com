# AccessProfile

# AccessProfile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The id of the Access Profile | [optional] 
**Name** | **String** | Name of the Access Profile | [optional] 
**Description** | **String** | Information about the Access Profile | [optional] 
**Privileged** | **Boolean** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access profile contains any entitlements that are privileged. Retained for backward compatibility. | [optional] [default to $false]
**CloudGoverned** | **Boolean** | True if the access profile is cloud governed. | [optional] [default to $false]
**EndDate** | **System.DateTime** | The date at which a user's access expires | [optional] 
**Owner** | [**IdentityReference**](identity-reference) |  | [optional] 
**SourceName** | **String** | The name of the source for which this entitlement belongs | [optional] 
**SourceType** | **String** | The type of the source for which the entitlement belongs | [optional] 
**SourceId** | **String** | The ID of the source for which the entitlement belongs | [optional] 
**Created** | **System.DateTime** | Date the Access Profile was created. | [optional] 
**Modified** | **System.DateTime** | Date the Access Profile was last modified. | [optional] 
**Entitlements** | [**[]EntitlementReference**](entitlement-reference) | A list of entitlement references associated to this access profile. | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessProfile = Initialize-AccessProfile  -Id 2c91808a7190d06e01719938fcd20792 `
 -Name Employee-database-read-write `
 -Description Collection of entitlements to read/write the employee database `
 -Privileged false `
 -CloudGoverned false `
 -EndDate 2021-12-25T00:00Z `
 -Owner null `
 -SourceName ODS-AD-Source `
 -SourceType Active Directory - Direct `
 -SourceId 78ca6be511cb41fbb86dba2fcca7780c `
 -Created 2021-01-01T22:32:58.104Z `
 -Modified 2021-02-01T22:32:58.104Z `
 -Entitlements null
```

- Convert the resource to JSON
```powershell
$AccessProfile | ConvertTo-JSON
```


[[Back to top]](#) 

