---
id: beta-delete202-response
title: Delete202Response
pagination_label: Delete202Response
sidebar_label: Delete202Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Delete202Response', 'BetaDelete202Response'] 
slug: /tools/sdk/powershell/beta/models/delete202-response
tags: ['SDK', 'Software Development Kit', 'Delete202Response', 'BetaDelete202Response']
---


# Delete202Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "TASK_RESULT" ] | Type of object being referenced. | [optional] 
**Id** | **String** | Task result ID. | [optional] 
**Name** | **String** | Task result's human-readable display name (this should be null/empty). | [optional] 

## Examples

- Prepare the resource
```powershell
$Delete202Response = Initialize-PSSailpoint.BetaDelete202Response  -Type TASK_RESULT `
 -Id 2c91808779ecf55b0179f720942f181a `
 -Name null
```

- Convert the resource to JSON
```powershell
$Delete202Response | ConvertTo-JSON
```


[[Back to top]](#) 

