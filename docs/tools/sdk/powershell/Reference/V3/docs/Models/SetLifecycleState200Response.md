---
id: set-lifecycle-state200-response
title: SetLifecycleState200Response
pagination_label: SetLifecycleState200Response
sidebar_label: SetLifecycleState200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleState200Response', 'SetLifecycleState200Response'] 
slug: /tools/sdk/powershell/v3/models/set-lifecycle-state200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleState200Response', 'SetLifecycleState200Response']
---


# SetLifecycleState200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** |  Pointer to **String** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/v3/get-account-activity/). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleState200Response = Initialize-PSSailpoint.V3SetLifecycleState200Response  -AccountActivityId 2c9180837ab5b716017ab7c6c9ef1e20
```

- Convert the resource to JSON
```powershell
$SetLifecycleState200Response | ConvertTo-JSON
```


[[Back to top]](#) 

