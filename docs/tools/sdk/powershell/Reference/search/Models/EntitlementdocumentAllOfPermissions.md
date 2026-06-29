---
id: entitlementdocument-all-of-permissions
title: EntitlementdocumentAllOfPermissions
pagination_label: EntitlementdocumentAllOfPermissions
sidebar_label: EntitlementdocumentAllOfPermissions
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementdocumentAllOfPermissions', 'EntitlementdocumentAllOfPermissions'] 
slug: /tools/sdk/powershell/search/models/entitlementdocument-all-of-permissions
tags: ['SDK', 'Software Development Kit', 'EntitlementdocumentAllOfPermissions', 'EntitlementdocumentAllOfPermissions']
---


# EntitlementdocumentAllOfPermissions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Target** | **String** | The target the permission would grants rights on. | [optional] 
**Rights** | **[]String** | All the rights (e.g. actions) that this permission allows on the target | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementdocumentAllOfPermissions = Initialize-EntitlementdocumentAllOfPermissions  -Target SYS.GV_$TRANSACTION `
 -Rights null
```

- Convert the resource to JSON
```powershell
$EntitlementdocumentAllOfPermissions | ConvertTo-JSON
```


[[Back to top]](#) 

