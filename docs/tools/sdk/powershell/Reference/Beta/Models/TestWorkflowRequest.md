---
id: beta-test-workflow-request
title: TestWorkflowRequest
pagination_label: TestWorkflowRequest
sidebar_label: TestWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestWorkflowRequest', 'BetaTestWorkflowRequest'] 
slug: /tools/sdk/powershell/beta/models/test-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestWorkflowRequest', 'BetaTestWorkflowRequest']
---


# TestWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | The test input for the workflow. | [required]

## Examples

- Prepare the resource
```powershell
$TestWorkflowRequest = Initialize-BetaTestWorkflowRequest  -VarInput null
```

- Convert the resource to JSON
```powershell
$TestWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

