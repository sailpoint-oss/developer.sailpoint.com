---
id: identity-cert-decision-summary
title: IdentityCertDecisionSummary
pagination_label: IdentityCertDecisionSummary
sidebar_label: IdentityCertDecisionSummary
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'IdentityCertDecisionSummary'] 
slug: /tools/sdk/powershell/v3/models/identity-cert-decision-summary
tags: ['SDK', 'Software Development Kit', 'IdentityCertDecisionSummary']
---


# IdentityCertDecisionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EntitlementDecisionsMade** |  Pointer to **Int32** | Number of entitlement decisions that have been made | [optional] 
**AccessProfileDecisionsMade** |  Pointer to **Int32** | Number of access profile decisions that have been made | [optional] 
**RoleDecisionsMade** |  Pointer to **Int32** | Number of role decisions that have been made | [optional] 
**AccountDecisionsMade** |  Pointer to **Int32** | Number of account decisions that have been made | [optional] 
**EntitlementDecisionsTotal** |  Pointer to **Int32** | The total number of entitlement decisions on the certification, both complete and incomplete | [optional] 
**AccessProfileDecisionsTotal** |  Pointer to **Int32** | The total number of access profile decisions on the certification, both complete and incomplete | [optional] 
**RoleDecisionsTotal** |  Pointer to **Int32** | The total number of role decisions on the certification, both complete and incomplete | [optional] 
**AccountDecisionsTotal** |  Pointer to **Int32** | The total number of account decisions on the certification, both complete and incomplete | [optional] 
**EntitlementsApproved** |  Pointer to **Int32** | The number of entitlement decisions that have been made which were approved | [optional] 
**EntitlementsRevoked** |  Pointer to **Int32** | The number of entitlement decisions that have been made which were revoked | [optional] 
**AccessProfilesApproved** |  Pointer to **Int32** | The number of access profile decisions that have been made which were approved | [optional] 
**AccessProfilesRevoked** |  Pointer to **Int32** | The number of access profile decisions that have been made which were revoked | [optional] 
**RolesApproved** |  Pointer to **Int32** | The number of role decisions that have been made which were approved | [optional] 
**RolesRevoked** |  Pointer to **Int32** | The number of role decisions that have been made which were revoked | [optional] 
**AccountsApproved** |  Pointer to **Int32** | The number of account decisions that have been made which were approved | [optional] 
**AccountsRevoked** |  Pointer to **Int32** | The number of account decisions that have been made which were revoked | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCertDecisionSummary = Initialize-PSSailpointIdentityCertDecisionSummary  -EntitlementDecisionsMade 3 `
 -AccessProfileDecisionsMade 5 `
 -RoleDecisionsMade 2 `
 -AccountDecisionsMade 4 `
 -EntitlementDecisionsTotal 6 `
 -AccessProfileDecisionsTotal 10 `
 -RoleDecisionsTotal 4 `
 -AccountDecisionsTotal 8 `
 -EntitlementsApproved 2 `
 -EntitlementsRevoked 1 `
 -AccessProfilesApproved 3 `
 -AccessProfilesRevoked 2 `
 -RolesApproved 2 `
 -RolesRevoked 0 `
 -AccountsApproved 1 `
 -AccountsRevoked 3
```

- Convert the resource to JSON
```powershell
$IdentityCertDecisionSummary | ConvertTo-JSON
```


[[Back to top]](#) 

