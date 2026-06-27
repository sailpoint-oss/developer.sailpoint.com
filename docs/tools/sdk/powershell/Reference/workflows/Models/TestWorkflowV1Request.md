---
id: test-workflow-v1-request
title: TestWorkflowV1Request
pagination_label: TestWorkflowV1Request
sidebar_label: TestWorkflowV1Request
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestWorkflowV1Request', 'TestWorkflowV1Request'] 
slug: /tools/sdk/powershell/workflows/models/test-workflow-v1-request
tags: ['SDK', 'Software Development Kit', 'TestWorkflowV1Request', 'TestWorkflowV1Request']
---


# TestWorkflowV1Request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The test input for the workflow. | [required]

## Examples

- Prepare the resource
```powershell
$TestWorkflowV1Request = Initialize-TestWorkflowV1Request  -VarInput null
```

- Convert the resource to JSON
```powershell
$TestWorkflowV1Request | ConvertTo-JSON
```


[[Back to top]](#) 

