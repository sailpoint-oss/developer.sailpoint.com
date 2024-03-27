---
id: request-on-behalf-of-config
title: RequestOnBehalfOfConfig
pagination_label: RequestOnBehalfOfConfig
sidebar_label: RequestOnBehalfOfConfig
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'RequestOnBehalfOfConfig'] 
slug: /tools/sdk/powershell/v3/models/request-on-behalf-of-config
tags: ['SDK', 'Software Development Kit', 'RequestOnBehalfOfConfig']
---


# RequestOnBehalfOfConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowRequestOnBehalfOfAnyoneByAnyone** |  Pointer to **Boolean** | If anyone can request access for anyone. | [optional] 
**AllowRequestOnBehalfOfEmployeeByManager** |  Pointer to **Boolean** | If a manager can request access for his/her direct reports. | [optional] 

## Examples

- Prepare the resource
```powershell
$RequestOnBehalfOfConfig = Initialize-PSSailpointRequestOnBehalfOfConfig  -AllowRequestOnBehalfOfAnyoneByAnyone true `
 -AllowRequestOnBehalfOfEmployeeByManager true
```

- Convert the resource to JSON
```powershell
$RequestOnBehalfOfConfig | ConvertTo-JSON
```


[[Back to top]](#) 

