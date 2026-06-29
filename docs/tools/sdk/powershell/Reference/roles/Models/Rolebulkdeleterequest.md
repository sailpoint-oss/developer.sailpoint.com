---
id: rolebulkdeleterequest
title: Rolebulkdeleterequest
pagination_label: Rolebulkdeleterequest
sidebar_label: Rolebulkdeleterequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Rolebulkdeleterequest', 'Rolebulkdeleterequest'] 
slug: /tools/sdk/powershell/roles/models/rolebulkdeleterequest
tags: ['SDK', 'Software Development Kit', 'Rolebulkdeleterequest', 'Rolebulkdeleterequest']
---


# Rolebulkdeleterequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoleIds** | **[]String** | List of IDs of Roles to be deleted. | [required]

## Examples

- Prepare the resource
```powershell
$Rolebulkdeleterequest = Initialize-Rolebulkdeleterequest  -RoleIds ["2c9180847812e0b1017817051919ecca","2c9180887812e0b201781e129f151816"]
```

- Convert the resource to JSON
```powershell
$Rolebulkdeleterequest | ConvertTo-JSON
```


[[Back to top]](#) 

