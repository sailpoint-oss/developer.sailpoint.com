---
id: v2024-workgroup-connection-dto
title: WorkgroupConnectionDto
pagination_label: WorkgroupConnectionDto
sidebar_label: WorkgroupConnectionDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupConnectionDto', 'V2024WorkgroupConnectionDto'] 
slug: /tools/sdk/powershell/v2024/models/workgroup-connection-dto
tags: ['SDK', 'Software Development Kit', 'WorkgroupConnectionDto', 'V2024WorkgroupConnectionDto']
---


# WorkgroupConnectionDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**ConnectedObject**](connected-object) |  | [optional] 
**ConnectionType** |  **Enum** [  "AccessRequestReviewer",    "Owner",    "ManagementWorkgroup" ] | Connection Type. | [optional] 

## Examples

- Prepare the resource
```powershell
$WorkgroupConnectionDto = Initialize-PSSailpoint.V2024WorkgroupConnectionDto  -Object null `
 -ConnectionType AccessRequestReviewer
```

- Convert the resource to JSON
```powershell
$WorkgroupConnectionDto | ConvertTo-JSON
```


[[Back to top]](#) 

