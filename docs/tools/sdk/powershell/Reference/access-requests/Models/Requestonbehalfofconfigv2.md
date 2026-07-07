---
id: requestonbehalfofconfigv2
title: Requestonbehalfofconfigv2
pagination_label: Requestonbehalfofconfigv2
sidebar_label: Requestonbehalfofconfigv2
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Requestonbehalfofconfigv2', 'Requestonbehalfofconfigv2'] 
slug: /tools/sdk/powershell/accessrequests/models/requestonbehalfofconfigv2
tags: ['SDK', 'Software Development Kit', 'Requestonbehalfofconfigv2', 'Requestonbehalfofconfigv2']
---


# Requestonbehalfofconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | **Boolean** | If this is true, anyone can request access for anyone. | [optional] [default to $false]
**AllowRequestOnBehalfOfEmployeeByManager** | **Boolean** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$Requestonbehalfofconfigv2 = Initialize-Requestonbehalfofconfigv2  -AllowRequestOnBehalfOfAnyoneByAnyone true `
 -AllowRequestOnBehalfOfEmployeeByManager true
```

- Convert the resource to JSON
```powershell
$Requestonbehalfofconfigv2 | ConvertTo-JSON
```


[[Back to top]](#) 

