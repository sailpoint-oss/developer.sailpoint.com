---
id: entitlementrevocationrequestconfig
title: Entitlementrevocationrequestconfig
pagination_label: Entitlementrevocationrequestconfig
sidebar_label: Entitlementrevocationrequestconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementrevocationrequestconfig', 'Entitlementrevocationrequestconfig'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementrevocationrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementrevocationrequestconfig', 'Entitlementrevocationrequestconfig']
---


# Entitlementrevocationrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | [**[]Entitlementapprovalscheme**](entitlementapprovalscheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementrevocationrequestconfig = Initialize-Entitlementrevocationrequestconfig  -ApprovalSchemes null
```

- Convert the resource to JSON
```powershell
$Entitlementrevocationrequestconfig | ConvertTo-JSON
```


[[Back to top]](#) 

