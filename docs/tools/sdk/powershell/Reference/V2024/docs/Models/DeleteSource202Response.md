---
id: v2024-delete-source202-response
title: DeleteSource202Response
pagination_label: DeleteSource202Response
sidebar_label: DeleteSource202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteSource202Response', 'V2024DeleteSource202Response'] 
slug: /tools/sdk/powershell/v2024/models/delete-source202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSource202Response', 'V2024DeleteSource202Response']
---


# DeleteSource202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "TASK_RESULT" ] | Type of object being referenced. | [optional] 
**Id** |  Pointer to **String** | Task result ID. | [optional] 
**Name** |  Pointer to **String** | Task result's human-readable display name (this should be null/empty). | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteSource202Response = Initialize-PSSailpoint.V2024DeleteSource202Response  -Type TASK_RESULT `
 -Id 2c91808779ecf55b0179f720942f181a `
 -Name null
```

- Convert the resource to JSON
```powershell
$DeleteSource202Response | ConvertTo-JSON
```


[[Back to top]](#) 

