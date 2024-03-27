---
id: set-lifecycle-state200-response
title: SetLifecycleState200Response
pagination_label: SetLifecycleState200Response
sidebar_label: SetLifecycleState200Response
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SetLifecycleState200Response'] 
slug: /tools/sdk/powershell/v3/models/set-lifecycle-state200-response
tags: ['SDK', 'Software Development Kit', 'SetLifecycleState200Response']
---


# SetLifecycleState200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccountActivityId** |  Pointer to **String** | The ID of the IdentityRequest object that was generated when the workflow launches | [optional] 

## Examples

- Prepare the resource
```powershell
$SetLifecycleState200Response = Initialize-PSSailpointSetLifecycleState200Response  -AccountActivityId 2c9180837ab5b716017ab7c6c9ef1e20
```

- Convert the resource to JSON
```powershell
$SetLifecycleState200Response | ConvertTo-JSON
```


[[Back to top]](#) 

