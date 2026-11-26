# ScopedAccess

# ScopedAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **ScopedAccessType** |  | [optional] 
**Id** | **String** | Unique identifier of the access item. | [optional] 
**Name** | **String** | Name of the access item. | [optional] 
**Description** | **String** | Description of the access item. | [optional] 
**SourceName** | **String** | Name of the source that provides this access. | [optional] 
**Privileged** | **Boolean** | Deprecated. Replaced by effectivePrivilege (HIGH, MEDIUM, LOW, NONE). Indicates if the access item is privileged. Retained for backward compatibility. | [optional] [default to $false]
**AttributeName** | **String** | Name of the attribute that defines this access. | [optional] 
**AttributeValue** | **String** | Value of the attribute that defines this access. | [optional] 
**HasDataAccess** | **Boolean** | Indicates whether this access grants data access. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$ScopedAccess = Initialize-ScopedAccess  -Type null `
 -Id 2c918085718230600171993742c63558 `
 -Name CN=entitlement.bbb7c650 `
 -Description Gives read/write access to the company database `
 -SourceName Active Directory `
 -Privileged false `
 -AttributeName memberOf `
 -AttributeValue CN=LauncherTest2,OU=LauncherTestOrg,OU=slpt-automation,DC=TestAutomationAD,DC=local `
 -HasDataAccess false
```

- Convert the resource to JSON
```powershell
$ScopedAccess | ConvertTo-JSON
```


[[Back to top]](#) 

