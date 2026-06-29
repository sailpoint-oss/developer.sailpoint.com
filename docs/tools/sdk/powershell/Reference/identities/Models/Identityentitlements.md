---
id: identityentitlements
title: Identityentitlements
pagination_label: Identityentitlements
sidebar_label: Identityentitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Identityentitlements', 'Identityentitlements'] 
slug: /tools/sdk/powershell/identities/models/identityentitlements
tags: ['SDK', 'Software Development Kit', 'Identityentitlements', 'Identityentitlements']
---


# Identityentitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ObjectRef** | [**Taggedobjectdto**](taggedobjectdto) |  | [optional] 
**Tags** | **[]String** | Labels to be applied to object. | [optional] 

## Examples

- Prepare the resource
```powershell
$Identityentitlements = Initialize-Identityentitlements  -ObjectRef null `
 -Tags ["BU_FINANCE","PCI"]
```

- Convert the resource to JSON
```powershell
$Identityentitlements | ConvertTo-JSON
```


[[Back to top]](#) 

