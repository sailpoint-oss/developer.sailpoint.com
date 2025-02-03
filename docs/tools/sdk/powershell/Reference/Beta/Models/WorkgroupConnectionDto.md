---
id: beta-workgroup-connection-dto
title: WorkgroupConnectionDto
pagination_label: WorkgroupConnectionDto
sidebar_label: WorkgroupConnectionDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'WorkgroupConnectionDto', 'BetaWorkgroupConnectionDto'] 
slug: /tools/sdk/powershell/beta/models/workgroup-connection-dto
tags: ['SDK', 'Software Development Kit', 'WorkgroupConnectionDto', 'BetaWorkgroupConnectionDto']
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
$WorkgroupConnectionDto = Initialize-PSSailpoint.BetaWorkgroupConnectionDto  -Object null `
 -ConnectionType AccessRequestReviewer
```

- Convert the resource to JSON
```powershell
$WorkgroupConnectionDto | ConvertTo-JSON
```


[[Back to top]](#) 

