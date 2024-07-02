---
id: entitlement-ref1
title: EntitlementRef1
pagination_label: EntitlementRef1
sidebar_label: EntitlementRef1
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementRef1'] 
slug: /tools/sdk/powershell/v3/models/entitlement-ref1
tags: ['SDK', 'Software Development Kit', 'EntitlementRef1']
---


# EntitlementRef1

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ENTITLEMENT" ] | Entitlement&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Entitlement&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | Entitlement&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRef1 = Initialize-EntitlementRef1  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$EntitlementRef1 | ConvertTo-JSON
```


[[Back to top]](#) 

