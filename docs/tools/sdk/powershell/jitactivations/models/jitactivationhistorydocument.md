# Jitactivationhistorydocument

# Jitactivationhistorydocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique identifier of the activation record. | [optional] 
**TenantId** | **String** | Tenant (pod/org) identifier. | [optional] 
**IdentityId** | **String** | Identifier of the identity that requested activation. | [optional] 
**AccountId** | **String** | Identifier of the account on which the entitlement was provisioned. | [optional] 
**EntitlementId** | **String** | Identifier of the entitlement that was activated. | [optional] 
**SourceId** | **String** | Identifier of the source that owns the entitlement. | [optional] 
**ConnectionId** | **String** | Identifier of the entitlement connection used for this activation. | [optional] 
**IdentityName** | **String** | Display name of the identity. | [optional] 
**EntitlementName** | **String** | Display name of the entitlement. | [optional] 
**SourceDisplayName** | **String** | Display name of the source. | [optional] 
**PolicyDisplayNames** | **[]String** | Display names of the JIT policies that matched this activation. | [optional] 
**Status** | **String** | Current or final status of the activation workflow. Possible values: ACTIVATING, AWAITING_FRICTIONS, PROVISIONING, PROVISIONED, DEPROVISIONING, COMPLETE, CANCELLED, ERROR, TIMED_OUT, REVOKED. | [optional] 
**VarError** | **String** | Error message if the activation ended in an ERROR state. | [optional] 
**PolicyFrictionOutcome** | **String** | Outcome of policy friction evaluation (e.g. SUCCESS_ENFORCED, BYPASSED). | [optional] 
**PolicyMatchDetails** | **[]String** | UUIDs of the policy records that matched this activation. | [optional] 
**ActivationInitiated** | **System.DateTime** | Timestamp when the activation was initiated. | [optional] 
**ProvisionStart** | **System.DateTime** | Timestamp when provisioning started. | [optional] 
**ProvisionCompleted** | **System.DateTime** | Timestamp when provisioning completed. | [optional] 
**DeprovisionStart** | **System.DateTime** | Timestamp when deprovisioning started. | [optional] 
**DeprovisionComplete** | **System.DateTime** | Timestamp when deprovisioning completed. | [optional] 
**ProvisionDurationMins** | **Double** | Duration of the provisioning phase in minutes. | [optional] 
**DeprovisionDurationMins** | **Double** | Duration of the deprovisioning phase in minutes. | [optional] 
**Summary** | [**JitactivationhistorydocumentSummary**](jitactivationhistorydocument-summary) |  | [optional] 
**Frictions** | [**[]JitactivationhistorydocumentFrictionsInner**](jitactivationhistorydocument-frictions-inner) | Individual friction items presented to the user during activation (e.g. TICKET, JUSTIFICATION, REAUTH). Null when no friction was evaluated. | [optional] 
**ActivationDetails** | **map[string]AnyType** | Additional structured metadata about the activation. Shape is subject to change. | [optional] 
**ActivationDuration** | **map[string]AnyType** | Duration breakdown of the full activation lifecycle. Shape is subject to change. | [optional] 
**ProvisioningDetails** | **map[string]AnyType** | Low-level provisioning operation detail. Shape is subject to change. | [optional] 

## Examples

- Prepare the resource
```powershell
$Jitactivationhistorydocument = Initialize-Jitactivationhistorydocument  -Id 2c9180867e20630b017e20be7c222499 `
 -TenantId 2c9180867e20630b017e20be7c222491 `
 -IdentityId 2c9180867e20630b017e20be7c222492 `
 -AccountId 2c9180867e20630b017e20be7c222493 `
 -EntitlementId ae735f40-4de9-4163-801d-4a1444e59d35 `
 -SourceId 2c9180867e20630b017e20be7c222494 `
 -ConnectionId 667fb802-0025-4865-a519-91a56e4c5b7e `
 -IdentityName Jane Doe `
 -EntitlementName Azure AD - Global Admin `
 -SourceDisplayName Azure Active Directory `
 -PolicyDisplayNames ["Privileged Access Policy"] `
 -Status PROVISIONED `
 -VarError Upstream provisioning failed after 3 retries (503) `
 -PolicyFrictionOutcome SUCCESS_ENFORCED `
 -PolicyMatchDetails ["4d79eca9-8a77-4d06-8297-9be9868906f1"] `
 -ActivationInitiated 2026-04-01T10:00Z `
 -ProvisionStart 2026-04-01T10:00:05Z `
 -ProvisionCompleted 2026-04-01T10:00:30Z `
 -DeprovisionStart 2026-04-01T11:00Z `
 -DeprovisionComplete 2026-04-01T11:00:20Z `
 -ProvisionDurationMins 0.42 `
 -DeprovisionDurationMins 0.33 `
 -Summary null `
 -Frictions [{"type":"TICKET","bypassAllowed":false,"submittedData":"INC0012345","status":"COMPLETE"},{"type":"JUSTIFICATION","bypassAllowed":false,"submittedData":"Need access to deploy to production.","status":"COMPLETE"}] `
 -ActivationDetails null `
 -ActivationDuration null `
 -ProvisioningDetails null
```

- Convert the resource to JSON
```powershell
$Jitactivationhistorydocument | ConvertTo-JSON
```


[[Back to top]](#) 

