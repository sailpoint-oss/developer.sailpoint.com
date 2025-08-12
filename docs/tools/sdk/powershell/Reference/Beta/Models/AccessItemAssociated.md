---
id: beta-access-item-associated
title: AccessItemAssociated
pagination_label: AccessItemAssociated
sidebar_label: AccessItemAssociated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemAssociated', 'BetaAccessItemAssociated'] 
slug: /tools/sdk/powershell/beta/models/access-item-associated
tags: ['SDK', 'Software Development Kit', 'AccessItemAssociated', 'BetaAccessItemAssociated']
---


# AccessItemAssociated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [required]
**GovernanceEvent** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [required]
**AccessItemType** |  **Enum** [  "account",    "app",    "entitlement",    "role",    "accessProfile" ] | the access item type | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAssociated = Initialize-BetaAccessItemAssociated  -EventType AccessItemAssociated `
 -DateTime 2019-03-08T22:37:33.901Z `
 -IdentityId 8c190e6787aa4ed9a90bd9d5344523fb `
 -AccessItem null `
 -GovernanceEvent null `
 -AccessItemType account
```

- Convert the resource to JSON
```powershell
$AccessItemAssociated | ConvertTo-JSON
```


[[Back to top]](#) 

