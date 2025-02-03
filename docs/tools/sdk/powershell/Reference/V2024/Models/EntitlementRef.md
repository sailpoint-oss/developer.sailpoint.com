---
id: v2024-entitlement-ref
title: EntitlementRef
pagination_label: EntitlementRef
sidebar_label: EntitlementRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'EntitlementRef', 'V2024EntitlementRef'] 
slug: /tools/sdk/powershell/v2024/models/entitlement-ref
tags: ['SDK', 'Software Development Kit', 'EntitlementRef', 'V2024EntitlementRef']
---


# EntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Entitlement's DTO type. | [optional] 
**Id** | **String** | Entitlement's ID. | [optional] 
**Name** | **String** | Entitlement's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRef = Initialize-PSSailpoint.V2024EntitlementRef  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN&#x3D;entitlement.490efde5,OU&#x3D;OrgCo,OU&#x3D;ServiceDept,DC&#x3D;HQAD,DC&#x3D;local
```

- Convert the resource to JSON
```powershell
$EntitlementRef | ConvertTo-JSON
```


[[Back to top]](#) 

