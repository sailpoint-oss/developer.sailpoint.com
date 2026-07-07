---
id: accessitemremoved
title: Accessitemremoved
pagination_label: Accessitemremoved
sidebar_label: Accessitemremoved
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Accessitemremoved', 'Accessitemremoved'] 
slug: /tools/sdk/powershell/identityhistory/models/accessitemremoved
tags: ['SDK', 'Software Development Kit', 'Accessitemremoved', 'Accessitemremoved']
---


# Accessitemremoved

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessItem** | [**AccessitemassociatedAccessItem**](accessitemassociated-access-item) |  | [required]
**IdentityId** | **String** | the identity id | [optional] 
**EventType** | **String** | the event type | [optional] 
**DateTime** | **String** | the date of event | [optional] 
**AccessItemType** |  **Enum** [  "account",    "app",    "entitlement",    "role",    "accessProfile" ] | the access item type | [optional] 
**GovernanceEvent** | [**Correlatedgovernanceevent**](correlatedgovernanceevent) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Accessitemremoved = Initialize-Accessitemremoved  -AccessItem null `
 -IdentityId 8c190e6787aa4ed9a90bd9d5344523fb `
 -EventType AccessItemRemoved `
 -DateTime 2019-03-08T22:37:33.901Z `
 -AccessItemType account `
 -GovernanceEvent null
```

- Convert the resource to JSON
```powershell
$Accessitemremoved | ConvertTo-JSON
```


[[Back to top]](#) 

