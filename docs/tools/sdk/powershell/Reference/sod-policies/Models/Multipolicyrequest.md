---
id: multipolicyrequest
title: Multipolicyrequest
pagination_label: Multipolicyrequest
sidebar_label: Multipolicyrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Multipolicyrequest', 'Multipolicyrequest'] 
slug: /tools/sdk/powershell/sodpolicies/models/multipolicyrequest
tags: ['SDK', 'Software Development Kit', 'Multipolicyrequest', 'Multipolicyrequest']
---


# Multipolicyrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FilteredPolicyList** | **[]String** | Multi-policy report will be run for this list of ids | [optional] 

## Examples

- Prepare the resource
```powershell
$Multipolicyrequest = Initialize-Multipolicyrequest  -FilteredPolicyList null
```

- Convert the resource to JSON
```powershell
$Multipolicyrequest | ConvertTo-JSON
```


[[Back to top]](#) 

