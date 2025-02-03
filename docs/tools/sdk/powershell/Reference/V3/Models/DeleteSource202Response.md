---
id: delete-source202-response
title: DeleteSource202Response
pagination_label: DeleteSource202Response
sidebar_label: DeleteSource202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'DeleteSource202Response', 'DeleteSource202Response'] 
slug: /tools/sdk/powershell/v3/models/delete-source202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSource202Response', 'DeleteSource202Response']
---


# DeleteSource202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "TASK_RESULT" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Task result ID. | [optional] 
**Name** | **String** | Task result's human-readable display name (this should be null/empty). | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteSource202Response = Initialize-PSSailpoint.V3DeleteSource202Response  -Type TASK_RESULT `
 -Id 2c91808779ecf55b0179f720942f181a `
 -Name null
```

- Convert the resource to JSON
```powershell
$DeleteSource202Response | ConvertTo-JSON
```


[[Back to top]](#) 

