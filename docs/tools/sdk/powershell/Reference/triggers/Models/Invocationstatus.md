---
id: invocationstatus
title: Invocationstatus
pagination_label: Invocationstatus
sidebar_label: Invocationstatus
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Invocationstatus', 'Invocationstatus'] 
slug: /tools/sdk/powershell/triggers/models/invocationstatus
tags: ['SDK', 'Software Development Kit', 'Invocationstatus', 'Invocationstatus']
---


# Invocationstatus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Invocation ID | [required]
**TriggerId** | **String** | Trigger ID | [required]
**SubscriptionName** | **String** | Subscription name | [required]
**SubscriptionId** | **String** | Subscription ID | [required]
**Type** | [**Invocationstatustype**](invocationstatustype) |  | [required]
**Created** | **System.DateTime** | Invocation created timestamp. ISO-8601 in UTC. | [required]
**Completed** | **System.DateTime** | Invocation completed timestamp; empty fields imply invocation is in-flight or not completed. ISO-8601 in UTC. | [optional] 
**StartInvocationInput** | [**Startinvocationinput**](startinvocationinput) |  | [required]
**CompleteInvocationInput** | [**Completeinvocationinput**](completeinvocationinput) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Invocationstatus = Initialize-Invocationstatus  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
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
$Invocationstatus | ConvertTo-JSON
```


[[Back to top]](#) 

