---
id: v2025-entitlement-document-all-of-permissions
title: EntitlementDocumentAllOfPermissions
pagination_label: EntitlementDocumentAllOfPermissions
sidebar_label: EntitlementDocumentAllOfPermissions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementDocumentAllOfPermissions', 'V2025EntitlementDocumentAllOfPermissions'] 
slug: /tools/sdk/powershell/v2025/models/entitlement-document-all-of-permissions
tags: ['SDK', 'Software Development Kit', 'EntitlementDocumentAllOfPermissions', 'V2025EntitlementDocumentAllOfPermissions']
---


# EntitlementDocumentAllOfPermissions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | **String** | The target the permission would grants rights on. | [optional] 
**Rights** | **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementDocumentAllOfPermissions = Initialize-PSSailpoint.V2025EntitlementDocumentAllOfPermissions  -Target SYS.GV_$TRANSACTION `
 -Rights null
```

- Convert the resource to JSON
```powershell
$EntitlementDocumentAllOfPermissions | ConvertTo-JSON
```


[[Back to top]](#) 

