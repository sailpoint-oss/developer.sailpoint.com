---
id: v2024-entitlement-ref1
title: EntitlementRef1
pagination_label: EntitlementRef1
sidebar_label: EntitlementRef1
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRef1', 'V2024EntitlementRef1'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-ref1
tags: ['SDK', 'Software Development Kit', 'EntitlementRef1', 'V2024EntitlementRef1']
---


# EntitlementRef1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Entitlement's DTO type. | [optional] 
**Id** | **String** | Entitlement's ID. | [optional] 
**Name** | **String** | Entitlement's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRef1 = Initialize-PSSailpoint.V2024EntitlementRef1  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN&#x3D;entitlement.490efde5,OU&#x3D;OrgCo,OU&#x3D;ServiceDept,DC&#x3D;HQAD,DC&#x3D;local
```

- Convert the resource to JSON
```powershell
$EntitlementRef1 | ConvertTo-JSON
```


[[Back to top]](#) 

