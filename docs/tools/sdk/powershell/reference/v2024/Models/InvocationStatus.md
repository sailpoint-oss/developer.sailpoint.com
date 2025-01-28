---
id: v2024-invocation-status
title: InvocationStatus
pagination_label: InvocationStatus
sidebar_label: InvocationStatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'InvocationStatus', 'V2024InvocationStatus'] 
slug: /tools/sdk/powershell/v2024/models/invocation-status
tags: ['SDK', 'Software Development Kit', 'InvocationStatus', 'V2024InvocationStatus']
---


# InvocationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Invocation ID | [required]
**TriggerId** |  **String** | Trigger ID | [required]
**SubscriptionName** |  **String** | Subscription name | [required]
**SubscriptionId** |  **String** | Subscription ID | [required]
**Type** |  [**InvocationStatusType**](invocation-status-type) |  | [required]
**Created** |  **System.DateTime** | Invocation created timestamp. ISO-8601 in UTC. | [required]
**Completed** |  Pointer to **System.DateTime** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] 
**StartInvocationInput** |  [**StartInvocationInput**](start-invocation-input) |  | [required]
**CompleteInvocationInput** |  Pointer to [**CompleteInvocationInput**](complete-invocation-input) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$InvocationStatus = Initialize-PSSailpoint.V2024InvocationStatus  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -TriggerId idn:access-request-post-approval `
 -SubscriptionName Access request subscription `
 -SubscriptionId 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Type null `
 -Created 2020-03-27T20:40:10.738Z `
 -Completed 2020-03-27T20:42:14.738Z `
 -StartInvocationInput null `
 -CompleteInvocationInput null
```

- Convert the resource to JSON
```powershell
$InvocationStatus | ConvertTo-JSON
```


[[Back to top]](#) 

