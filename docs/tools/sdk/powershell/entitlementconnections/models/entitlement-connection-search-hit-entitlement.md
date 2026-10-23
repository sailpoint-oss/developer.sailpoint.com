# EntitlementConnectionSearchHitEntitlement

# EntitlementConnectionSearchHitEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Entitlement identifier. | [optional] 
**Name** | **String** | Entitlement name. | [optional] 
**DisplayName** | **String** | Human-readable entitlement label. | [optional] 
**Description** | **String** | Entitlement description. | [optional] 
**Attribute** | **String** | Source attribute carrying entitlement values. | [optional] 
**Value** | **String** | Source entitlement value. | [optional] 
**SourceSchemaObjectType** | **String** | Source schema object type for the entitlement. | [optional] 
**PrivilegeLevel** | [**EntitlementConnectionSearchHitEntitlementPrivilegeLevel**](entitlement-connection-search-hit-entitlement-privilege-level) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementConnectionSearchHitEntitlement = Initialize-EntitlementConnectionSearchHitEntitlement  -Id 2c918085804e1a0601806289c30a66de `
 -Name Launcher `
 -DisplayName Launcher `
 -Description description of launcher entitlement `
 -Attribute memberOf `
 -Value CN=productivity-bryants-org-1,OU=Groups,dc=flatfile,dc=endtoend,dc=com `
 -SourceSchemaObjectType ENTITLEMENT `
 -PrivilegeLevel null
```

- Convert the resource to JSON
```powershell
$EntitlementConnectionSearchHitEntitlement | ConvertTo-JSON
```


[[Back to top]](#) 

