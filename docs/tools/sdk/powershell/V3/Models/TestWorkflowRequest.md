---
id: test-workflow-request
title: TestWorkflowRequest
pagination_label: TestWorkflowRequest
sidebar_label: TestWorkflowRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'TestWorkflowRequest'] 
slug: /tools/sdk/powershell/v3/models/test-workflow-request
tags: ['SDK', 'Software Development Kit', 'TestWorkflowRequest']
---


# TestWorkflowRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**VarInput** |  [**SystemCollectionsHashtable**](system-collections-hashtable) | The test input for the workflow. | 

## Examples

- Prepare the resource
```powershell
$TestWorkflowRequest = Initialize-PSSailpointTestWorkflowRequest  -VarInput null
```

- Convert the resource to JSON
```powershell
$TestWorkflowRequest | ConvertTo-JSON
```


[[Back to top]](#) 

