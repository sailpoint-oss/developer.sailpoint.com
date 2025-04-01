---
id: v2025-update-multi-host-sources-request-inner
title: UpdateMultiHostSourcesRequestInner
pagination_label: UpdateMultiHostSourcesRequestInner
sidebar_label: UpdateMultiHostSourcesRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateMultiHostSourcesRequestInner', 'V2025UpdateMultiHostSourcesRequestInner'] 
slug: /tools/sdk/powershell/v2025/models/update-multi-host-sources-request-inner
tags: ['SDK', 'Software Development Kit', 'UpdateMultiHostSourcesRequestInner', 'V2025UpdateMultiHostSourcesRequestInner']
---


# UpdateMultiHostSourcesRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "replace" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**UpdateMultiHostSourcesRequestInnerValue**](update-multi-host-sources-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateMultiHostSourcesRequestInner = Initialize-PSSailpoint.V2025UpdateMultiHostSourcesRequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$UpdateMultiHostSourcesRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

