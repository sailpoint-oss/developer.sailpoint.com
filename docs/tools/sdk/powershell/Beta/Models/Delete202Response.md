---
id: delete202-response
title: Delete202Response
pagination_label: Delete202Response
sidebar_label: Delete202Response
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Delete202Response'] 
slug: /tools/sdk/powershell/beta/models/delete202-response
tags: ['SDK', 'Software Development Kit', 'Delete202Response']
---


# Delete202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  Pointer to  **Enum** [  "TASK_RESULT" ] | The type of object being referenced | [optional] 
**Id** |  Pointer to **String** | ID of the task result | [optional] 
**Name** |  Pointer to **String** | Human-readable display name of the task result (should be null/empty) | [optional] 

## Examples

- Prepare the resource
```powershell
$Delete202Response = Initialize-BetaDelete202Response  -Type TASK_RESULT `
 -Id 2c91808779ecf55b0179f720942f181a `
 -Name null
```

- Convert the resource to JSON
```powershell
$Delete202Response | ConvertTo-JSON
```


[[Back to top]](#) 

