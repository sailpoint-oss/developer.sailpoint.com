---
id: entitlementref
title: Entitlementref
pagination_label: Entitlementref
sidebar_label: Entitlementref
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementref', 'Entitlementref'] 
slug: /tools/sdk/powershell/accessprofiles/models/entitlementref
tags: ['SDK', 'Software Development Kit', 'Entitlementref', 'Entitlementref']
---


# Entitlementref

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "ENTITLEMENT" ] | Entitlement's DTO type. | [optional] 
**Id** | **String** | Entitlement's ID. | [optional] 
**Name** | **String** | Entitlement's display name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementref = Initialize-Entitlementref  -Type ENTITLEMENT `
 -Id 2c91809773dee32014e13e122092014e `
 -Name CN=entitlement.490efde5,OU=OrgCo,OU=ServiceDept,DC=HQAD,DC=local
```

- Convert the resource to JSON
```powershell
$Entitlementref | ConvertTo-JSON
```


[[Back to top]](#) 

