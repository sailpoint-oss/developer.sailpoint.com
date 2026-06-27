---
id: set-lifecycle-state-v1200-response
title: SetLifecycleStateV1200Response
pagination_label: SetLifecycleStateV1200Response
sidebar_label: SetLifecycleStateV1200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SetLifecycleStateV1200Response', 'SetLifecycleStateV1200Response'] 
slug: /tools/sdk/powershell/lifecyclestates/models/set-lifecycle-state-v1200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleStateV1200Response', 'SetLifecycleStateV1200Response']
---


# SetLifecycleStateV1200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** | **String** | ID of the IdentityRequest object that is generated when the workflow launches. To follow the IdentityRequest, you can provide this ID with a [Get Account Activity request](https://developer.sailpoint.com/docs/api/v3/get-account-activity/). The response will contain relevant information about the IdentityRequest, such as its status. | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleStateV1200Response = Initialize-SetLifecycleStateV1200Response  -AccountActivityId 2c9180837ab5b716017ab7c6c9ef1e20
```

- Convert the resource to JSON
```powershell
$SetLifecycleStateV1200Response | ConvertTo-JSON
```


[[Back to top]](#) 

