---
id: processidentitiesrequest
title: Processidentitiesrequest
pagination_label: Processidentitiesrequest
sidebar_label: Processidentitiesrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Processidentitiesrequest', 'Processidentitiesrequest'] 
slug: /tools/sdk/powershell/identities/models/processidentitiesrequest
tags: ['SDK', 'Software Development Kit', 'Processidentitiesrequest', 'Processidentitiesrequest']
---


# Processidentitiesrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IdentityIds** | **[]String** | List of up to 250 identity IDs to process. | [optional] 

## Examples

- Prepare the resource
```powershell
$Processidentitiesrequest = Initialize-Processidentitiesrequest  -IdentityIds null
```

- Convert the resource to JSON
```powershell
$Processidentitiesrequest | ConvertTo-JSON
```


[[Back to top]](#) 

