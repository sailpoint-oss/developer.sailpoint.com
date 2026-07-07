---
id: workgroupconnectiondto
title: Workgroupconnectiondto
pagination_label: Workgroupconnectiondto
sidebar_label: Workgroupconnectiondto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Workgroupconnectiondto', 'Workgroupconnectiondto'] 
slug: /tools/sdk/powershell/governancegroups/models/workgroupconnectiondto
tags: ['SDK', 'Software Development Kit', 'Workgroupconnectiondto', 'Workgroupconnectiondto']
---


# Workgroupconnectiondto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Object** | [**WorkgroupconnectiondtoObject**](workgroupconnectiondto-object) |  | [optional] 
**ConnectionType** |  **Enum** [  "AccessRequestReviewer",    "Owner",    "ManagementWorkgroup" ] | Connection Type. | [optional] 

## Examples

- Prepare the resource
```powershell
$Workgroupconnectiondto = Initialize-Workgroupconnectiondto  -Object null `
 -ConnectionType AccessRequestReviewer
```

- Convert the resource to JSON
```powershell
$Workgroupconnectiondto | ConvertTo-JSON
```


[[Back to top]](#) 

