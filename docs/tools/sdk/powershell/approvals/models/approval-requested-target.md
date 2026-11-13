# ApprovalRequestedTarget

# ApprovalRequestedTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Target ID (for example a role ID or access profile ID). | [optional] 
**Ids** | **[]String** | Target IDs when the approval request applies to multiple targets. | [optional] 
**Name** | **String** | Target name (for example a role name or access profile name). | [optional] 
**Names** | **[]String** | Target names when the approval request applies to multiple targets. | [optional] 
**TargetType** | **String** | Target type (for example Role or Access Profile). | [optional] 
**TargetTypes** | **[]String** | Target types when the approval request applies to multiple targets. | [optional] 
**Description** | **String** | Optional description for the requested target. | [optional] 
**EpLevelAtCreation** |  **Enum** [  "HIGH",    "MEDIUM",    "LOW",    "NONE" ] | Effective privilege (EP) level at approval creation. | [optional] 
**CurrentEPLevel** |  **Enum** [  "HIGH",    "MEDIUM",    "LOW",    "NONE" ] | Current effective privilege (EP) level for the requested target. | [optional] 
**CurrentEPModifiedDate** | **System.DateTime** | Date and time when the current effective privilege level was last modified. | [optional] 
**RequestType** | **String** | Access request type (for example GRANT_ACCESS or REVOKE_ACCESS). | [optional] 
**ForcedAuthSignature** | **String** | Signature required for forced authentication. | [optional] 
**ReauthRequired** | **Boolean** | Indicates whether forced reauthentication is required upon approval. | [optional] [default to $false]
**StartDate** | **System.DateTime** | When temporary access will be granted, if applicable. | [optional] 
**RemovalDate** | **System.DateTime** | When temporary access will be removed, if applicable. | [optional] 
**ModifiedStartDate** | **System.DateTime** | Updated start date when startDate is edited during the approval request. | [optional] 
**ModifiedRemovalDate** | **System.DateTime** | Updated removal date when removalDate is edited during the approval request. | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalRequestedTarget = Initialize-ApprovalRequestedTarget  -Id string `
 -Ids ["2c9180835d191a86015d28455b4a2329"] `
 -Name string `
 -Names ["Engineering Role"] `
 -TargetType string `
 -TargetTypes ["ROLE","ACCESS_PROFILE"] `
 -Description string `
 -EpLevelAtCreation HIGH `
 -CurrentEPLevel HIGH `
 -CurrentEPModifiedDate 2025-07-07T18:10:13.687Z `
 -RequestType GRANT_ACCESS `
 -ForcedAuthSignature string `
 -ReauthRequired true `
 -StartDate 2025-07-07T18:10:13.687Z `
 -RemovalDate 2025-07-07T18:10:13.687Z `
 -ModifiedStartDate 2025-07-07T18:10:13.687Z `
 -ModifiedRemovalDate 2025-07-07T18:10:13.687Z
```

- Convert the resource to JSON
```powershell
$ApprovalRequestedTarget | ConvertTo-JSON
```


[[Back to top]](#) 

