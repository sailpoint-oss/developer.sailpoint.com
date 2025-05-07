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
**AccessItem** | [**AccessItemAssociatedAccessItem**](access-item-associated-access-item) |  | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**EventType** | **String** | the event type | [optional] 
**Dt** | **String** | the date of event | [optional] 
**GovernanceEvent** | [**CorrelatedGovernanceEvent**](correlated-governance-event) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$AccessItemAssociated = Initialize-BetaAccessItemAssociated  -AccessItem null `
 -IdentityId 8c190e6787aa4ed9a90bd9d5344523fb `
 -EventType AccessItemAssociated `
 -Dt 2019-03-08T22:37:33.901Z `
 -GovernanceEvent null
```

- Convert the resource to JSON
```powershell
$AccessItemAssociated | ConvertTo-JSON
```


[[Back to top]](#) 

