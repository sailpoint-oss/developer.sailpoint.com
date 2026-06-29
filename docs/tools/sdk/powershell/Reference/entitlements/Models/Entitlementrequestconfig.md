---
id: entitlementrequestconfig
title: Entitlementrequestconfig
pagination_label: Entitlementrequestconfig
sidebar_label: Entitlementrequestconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementrequestconfig', 'Entitlementrequestconfig'] 
slug: /tools/sdk/powershell/entitlements/models/entitlementrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementrequestconfig', 'Entitlementrequestconfig']
---


# Entitlementrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**RevocationRequestConfig** | [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementrequestconfig = Initialize-Entitlementrequestconfig  -AccessRequestConfig null `
 -RevocationRequestConfig null
```

- Convert the resource to JSON
```powershell
$Entitlementrequestconfig | ConvertTo-JSON
```


[[Back to top]](#) 

