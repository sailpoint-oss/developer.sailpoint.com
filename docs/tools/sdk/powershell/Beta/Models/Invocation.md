---
id: invocation
title: Invocation
pagination_label: Invocation
sidebar_label: Invocation
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Invocation'] 
slug: /tools/sdk/powershell/beta/models/invocation
tags: ['SDK', 'Software Development Kit', 'Invocation']
---


# Invocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Invocation ID | [optional] 
**TriggerId** |  Pointer to **String** | Trigger ID | [optional] 
**Secret** |  Pointer to **String** | Unique invocation secret. | [optional] 
**ContentJson** |  Pointer to [**SystemCollectionsHashtable**](system-collections-hashtable) | JSON map of invocation metadata. | [optional] 

## Examples

- Prepare the resource
```powershell
$Invocation = Initialize-PSSailpointBetaInvocation  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -TriggerId idn:access-requested `
 -Secret 0f979022-08be-44f2-b6f9-7393ec73ed9b `
 -ContentJson {workflowId&#x3D;1234}
```

- Convert the resource to JSON
```powershell
$Invocation | ConvertTo-JSON
```


[[Back to top]](#) 

