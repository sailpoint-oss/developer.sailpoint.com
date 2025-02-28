---
id: v2024-invocation
title: Invocation
pagination_label: Invocation
sidebar_label: Invocation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Invocation', 'V2024Invocation'] 
slug: /tools/sdk/powershell/v2024/models/invocation
tags: ['SDK', 'Software Development Kit', 'Invocation', 'V2024Invocation']
---


# Invocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Invocation ID | [optional] 
**TriggerId** | **String** | Trigger ID | [optional] 
**Secret** | **String** | Unique invocation secret. | [optional] 
**ContentJson** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | JSON map of invocation metadata. | [optional] 

## Examples

- Prepare the resource
```powershell
$Invocation = Initialize-PSSailpoint.V2024Invocation  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -TriggerId idn:access-requested `
 -Secret 0f979022-08be-44f2-b6f9-7393ec73ed9b `
 -ContentJson {workflowId=1234}
```

- Convert the resource to JSON
```powershell
$Invocation | ConvertTo-JSON
```


[[Back to top]](#) 

