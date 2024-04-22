---
id: entitlement-ref
title: EntitlementRef
pagination_label: EntitlementRef
sidebar_label: EntitlementRef
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'EntitlementRef'] 
slug: /tools/sdk/powershell/v3/models/entitlement-ref
tags: ['SDK', 'Software Development Kit', 'EntitlementRef']
---


# EntitlementRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "ENTITLEMENT" ] | Entitlement&#39;s DTO type. | [optional] 
**Id** |  Pointer to **String** | Entitlement&#39;s ID. | [optional] 
**Name** |  Pointer to **String** | Entitlement&#39;s display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$EntitlementRef = Initialize-EntitlementRef  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$EntitlementRef | ConvertTo-JSON
```


[[Back to top]](#) 

