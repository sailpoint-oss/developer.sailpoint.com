---
id: beta-test-external-execute-workflow200-response
title: TestExternalExecuteWorkflow200Response
pagination_label: TestExternalExecuteWorkflow200Response
sidebar_label: TestExternalExecuteWorkflow200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestExternalExecuteWorkflow200Response', 'BetaTestExternalExecuteWorkflow200Response'] 
slug: /tools/sdk/powershell/beta/models/test-external-execute-workflow200-response
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflow200Response', 'BetaTestExternalExecuteWorkflow200Response']
---


# TestExternalExecuteWorkflow200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payload** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input that was received | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflow200Response = Initialize-BetaTestExternalExecuteWorkflow200Response  -Payload {test=hello world}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflow200Response | ConvertTo-JSON
```


[[Back to top]](#) 

