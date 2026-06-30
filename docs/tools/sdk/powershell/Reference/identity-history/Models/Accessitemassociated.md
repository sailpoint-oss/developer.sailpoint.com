---
id: accessitemassociated
title: Accessitemassociated
pagination_label: Accessitemassociated
sidebar_label: Accessitemassociated
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemassociated', 'Accessitemassociated'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemassociated
tags: ['SDK', 'Software Development Kit', 'Accessitemassociated', 'Accessitemassociated']
---


# Accessitemassociated

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**IdentityId** | **String** | the identity id | [optional] 
**AccessItem** | [**AccessitemassociatedAccessItem**](accessitemassociated-access-item) |  | [required]
**GovernanceEvent** | [**Correlatedgovernanceevent**](correlatedgovernanceevent) |  | [required]
**AccessItemType** |  **Enum** [  "account",    "app",    "entitlement",    "role",    "accessProfile" ] | the access item type | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemassociated = Initialize-Accessitemassociated  -EventType AccessItemAssociated `
 -DateTime 2019-03-08T22:37:33.901Z `
 -IdentityId 8c190e6787aa4ed9a90bd9d5344523fb `
 -AccessItem null `
 -GovernanceEvent null `
 -AccessItemType account
```

- Convert the resource to JSON
```powershell
$Accessitemassociated | ConvertTo-JSON
```


[[Back to top]](#) 

