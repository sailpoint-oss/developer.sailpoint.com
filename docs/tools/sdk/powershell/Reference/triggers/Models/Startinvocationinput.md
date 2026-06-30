---
id: startinvocationinput
title: Startinvocationinput
pagination_label: Startinvocationinput
sidebar_label: Startinvocationinput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Startinvocationinput', 'Startinvocationinput'] 
slug: /tools/sdk/powershell/triggers/models/startinvocationinput
tags: ['SDK', 'Software Development Kit', 'Startinvocationinput', 'Startinvocationinput']
---


# Startinvocationinput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** | **String** | Trigger ID | [optional] 
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Trigger input payload. Its schema is defined in the trigger definition. | [optional] 
**ContentJson** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | JSON map of invocation metadata | [optional] 

## Examples

- Prepare the resource
```powershell
$Startinvocationinput = Initialize-Startinvocationinput  -TriggerId idn:access-requested `
 -VarInput {"identityId":"201327fda1c44704ac01181e963d463c"} `
 -ContentJson {"workflowId":1234}
```

- Convert the resource to JSON
```powershell
$Startinvocationinput | ConvertTo-JSON
```


[[Back to top]](#) 

