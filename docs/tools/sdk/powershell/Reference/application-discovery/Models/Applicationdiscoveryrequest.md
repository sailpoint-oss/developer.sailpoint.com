---
id: applicationdiscoveryrequest
title: Applicationdiscoveryrequest
pagination_label: Applicationdiscoveryrequest
sidebar_label: Applicationdiscoveryrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Applicationdiscoveryrequest', 'Applicationdiscoveryrequest'] 
slug: /tools/sdk/powershell/applicationdiscovery/models/applicationdiscoveryrequest
tags: ['SDK', 'Software Development Kit', 'Applicationdiscoveryrequest', 'Applicationdiscoveryrequest']
---


# Applicationdiscoveryrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DatasetIds** | **[]String** | List of dataset Ids to discover applications | [required]

## Examples

- Prepare the resource
```powershell
$Applicationdiscoveryrequest = Initialize-Applicationdiscoveryrequest  -DatasetIds null
```

- Convert the resource to JSON
```powershell
$Applicationdiscoveryrequest | ConvertTo-JSON
```


[[Back to top]](#) 

