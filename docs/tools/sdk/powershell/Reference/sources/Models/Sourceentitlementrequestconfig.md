---
id: sourceentitlementrequestconfig
title: Sourceentitlementrequestconfig
pagination_label: Sourceentitlementrequestconfig
sidebar_label: Sourceentitlementrequestconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Sourceentitlementrequestconfig', 'Sourceentitlementrequestconfig'] 
slug: /tools/sdk/powershell/sources/models/sourceentitlementrequestconfig
tags: ['SDK', 'Software Development Kit', 'Sourceentitlementrequestconfig', 'Sourceentitlementrequestconfig']
---


# Sourceentitlementrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**RevocationRequestConfig** | [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Sourceentitlementrequestconfig = Initialize-Sourceentitlementrequestconfig  -AccessRequestConfig null `
 -RevocationRequestConfig null
```

- Convert the resource to JSON
```powershell
$Sourceentitlementrequestconfig | ConvertTo-JSON
```


[[Back to top]](#) 

