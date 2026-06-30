---
id: requestonbehalfofconfig
title: Requestonbehalfofconfig
pagination_label: Requestonbehalfofconfig
sidebar_label: Requestonbehalfofconfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestonbehalfofconfig', 'Requestonbehalfofconfig'] 
slug: /tools/sdk/powershell/accessrequests/models/requestonbehalfofconfig
tags: ['SDK', 'Software Development Kit', 'Requestonbehalfofconfig', 'Requestonbehalfofconfig']
---


# Requestonbehalfofconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | **Boolean** | If this is true, anyone can request access for anyone. | [optional] [default to $false]
**AllowRequestOnBehalfOfEmployeeByManager** | **Boolean** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Requestonbehalfofconfig = Initialize-Requestonbehalfofconfig  -AllowRequestOnBehalfOfAnyoneByAnyone true `
 -AllowRequestOnBehalfOfEmployeeByManager true
```

- Convert the resource to JSON
```powershell
$Requestonbehalfofconfig | ConvertTo-JSON
```


[[Back to top]](#) 

