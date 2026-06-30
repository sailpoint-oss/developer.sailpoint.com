---
id: delete-source-v1202-response
title: DeleteSourceV1202Response
pagination_label: DeleteSourceV1202Response
sidebar_label: DeleteSourceV1202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteSourceV1202Response', 'DeleteSourceV1202Response'] 
slug: /tools/sdk/powershell/sources/models/delete-source-v1202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSourceV1202Response', 'DeleteSourceV1202Response']
---


# DeleteSourceV1202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "TASK_RESULT" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Task result ID. | [optional] 
**Name** | **String** | Task result's human-readable display name (this should be null/empty). | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteSourceV1202Response = Initialize-DeleteSourceV1202Response  -Type TASK_RESULT `
 -Id 2c91808779ecf55b0179f720942f181a `
 -Name null
```

- Convert the resource to JSON
```powershell
$DeleteSourceV1202Response | ConvertTo-JSON
```


[[Back to top]](#) 

