---
id: v2024-access-item-removed
title: AccessItemRemoved
pagination_label: AccessItemRemoved
sidebar_label: AccessItemRemoved
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'AccessItemRemoved', 'V2024AccessItemRemoved'] 
slug: /tools/sdk/powershell/v2024/models/access-item-removed
tags: ['SDK', 'Software Development Kit', 'AccessItemRemoved', 'V2024AccessItemRemoved']
---


# AccessItemRemoved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**EventType** | **String** | the event type | [optional] 
**Dt** | **String** | the date of event | [optional] 
**GovernanceEvent** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemRemoved = Initialize-V2024AccessItemRemoved  -AccessItem null `
 -IdentityId 8c190e6787aa4ed9a90bd9d5344523fb `
 -EventType AccessItemRemoved `
 -Dt 2019-03-08T22:37:33.901Z `
 -GovernanceEvent null
```

- Convert the resource to JSON
```powershell
$AccessItemRemoved | ConvertTo-JSON
```


[[Back to top]](#) 

