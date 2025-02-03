---
id: beta-request-on-behalf-of-config
title: RequestOnBehalfOfConfig
pagination_label: RequestOnBehalfOfConfig
sidebar_label: RequestOnBehalfOfConfig
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'RequestOnBehalfOfConfig', 'BetaRequestOnBehalfOfConfig'] 
slug: /tools/sdk/powershell/beta/models/request-on-behalf-of-config
tags: ['SDK', 'Software Development Kit', 'RequestOnBehalfOfConfig', 'BetaRequestOnBehalfOfConfig']
---


# RequestOnBehalfOfConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** | **Boolean** | If this is true, anyone can request access for anyone. | [optional] [default to $false]
**AllowRequestOnBehalfOfEmployeeByManager** | **Boolean** | If this is true, a manager can request access for his or her direct reports. | [optional] [default to $false]

## Examples

- Prepare the resource
```powershell
$RequestOnBehalfOfConfig = Initialize-PSSailpoint.BetaRequestOnBehalfOfConfig  -AllowRequestOnBehalfOfAnyoneByAnyone true `
 -AllowRequestOnBehalfOfEmployeeByManager true
```

- Convert the resource to JSON
```powershell
$RequestOnBehalfOfConfig | ConvertTo-JSON
```


[[Back to top]](#) 

