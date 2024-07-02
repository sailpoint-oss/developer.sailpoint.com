---
id: invocation-status
title: InvocationStatus
pagination_label: InvocationStatus
sidebar_label: InvocationStatus
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'InvocationStatus'] 
slug: /tools/sdk/powershell/beta/models/invocation-status
tags: ['SDK', 'Software Development Kit', 'InvocationStatus']
---


# InvocationStatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Invocation ID | 
**TriggerId** |  **String** | Trigger ID | 
**SubscriptionId** |  **String** | Subscription ID | 
**Type** |  [**InvocationStatusType**](invocation-status-type) |  | 
**Created** |  **System.DateTime** | Invocation created timestamp. ISO-8601 in UTC. | 
**Completed** |  Pointer to **System.DateTime** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] 
**StartInvocationInput** |  [**StartInvocationInput**](start-invocation-input) |  | 
**CompleteInvocationInput** |  Pointer to [**CompleteInvocationInput**](complete-invocation-input) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$InvocationStatus = Initialize-BetaInvocationStatus  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -TriggerId idn:access-requested `
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

