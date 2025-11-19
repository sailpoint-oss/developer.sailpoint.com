---
id: v2025-access-item-removed
title: AccessItemRemoved
pagination_label: AccessItemRemoved
sidebar_label: AccessItemRemoved
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRemoved', 'V2025AccessItemRemoved'] 
slug: /tools/sdk/powershell/v2025/models/access-item-removed
tags: ['SDK', 'Software Development Kit', 'AccessItemRemoved', 'V2025AccessItemRemoved']
---


# AccessItemRemoved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [required]
**IdentityId** | **String** | the identity id | [optional] 
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**AccessItemType** |  **Enum** [  "account",    "app",    "entitlement",    "role",    "accessProfile" ] | the access item type | [optional] 
**GovernanceEvent** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRemoved = Initialize-V2025AccessItemRemoved  -AccessItem null `
 -IdentityId 8c190e6787aa4ed9a90bd9d5344523fb `
 -EventType AccessItemRemoved `
 -DateTime 2019-03-08T22:37:33.901Z `
 -AccessItemType account `
 -GovernanceEvent null
```

- Convert the resource to JSON
```powershell
$AccessItemRemoved | ConvertTo-JSON
```


[[Back to top]](#) 

