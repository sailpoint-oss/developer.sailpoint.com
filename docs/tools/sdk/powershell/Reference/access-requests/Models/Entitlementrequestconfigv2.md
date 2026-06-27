---
id: entitlementrequestconfigv2
title: Entitlementrequestconfigv2
pagination_label: Entitlementrequestconfigv2
sidebar_label: Entitlementrequestconfigv2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Entitlementrequestconfigv2', 'Entitlementrequestconfigv2'] 
slug: /tools/sdk/powershell/accessrequests/models/entitlementrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Entitlementrequestconfigv2', 'Entitlementrequestconfigv2']
---


# Entitlementrequestconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**RevocationRequestConfig** | [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Entitlementrequestconfigv2 = Initialize-Entitlementrequestconfigv2  -AccessRequestConfig null `
 -RevocationRequestConfig null
```

- Convert the resource to JSON
```powershell
$Entitlementrequestconfigv2 | ConvertTo-JSON
```


[[Back to top]](#) 

