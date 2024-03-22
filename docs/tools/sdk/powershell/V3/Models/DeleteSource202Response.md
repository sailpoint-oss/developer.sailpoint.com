---
id: delete-source202-response
title: DeleteSource202Response
pagination_label: DeleteSource202Response
sidebar_label: DeleteSource202Response
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'DeleteSource202Response'] 
slug: /tools/sdk/powershell/v3/models/delete-source202-response
tags: ['SDK', 'Software Development Kit', 'DeleteSource202Response']
---


# DeleteSource202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "TASK_RESULT" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the task result | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the task result (should be null/empty) | [optional] 

## Examples

- Prepare the resource
```powershell
$DeleteSource202Response = Initialize-PSSailpointDeleteSource202Response  -Type TASK_RESULT `
 -Id 2c91808779ecf55b0179f720942f181a `
 -Name null
```

- Convert the resource to JSON
```powershell
$DeleteSource202Response | ConvertTo-JSON
```


[[Back to top]](#) 

