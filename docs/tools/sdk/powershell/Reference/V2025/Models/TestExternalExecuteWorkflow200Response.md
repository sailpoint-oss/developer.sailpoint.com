---
id: v2025-test-external-execute-workflow200-response
title: TestExternalExecuteWorkflow200Response
pagination_label: TestExternalExecuteWorkflow200Response
sidebar_label: TestExternalExecuteWorkflow200Response
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestExternalExecuteWorkflow200Response', 'V2025TestExternalExecuteWorkflow200Response'] 
slug: /tools/sdk/powershell/v2025/models/test-external-execute-workflow200-response
tags: ['SDK', 'Software Development Kit', 'TestExternalExecuteWorkflow200Response', 'V2025TestExternalExecuteWorkflow200Response']
---


# TestExternalExecuteWorkflow200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Payload** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The input that was received | [optional] 

## Examples

- Prepare the resource
```powershell
$TestExternalExecuteWorkflow200Response = Initialize-V2025TestExternalExecuteWorkflow200Response  -Payload {test=hello world}
```

- Convert the resource to JSON
```powershell
$TestExternalExecuteWorkflow200Response | ConvertTo-JSON
```


[[Back to top]](#) 

