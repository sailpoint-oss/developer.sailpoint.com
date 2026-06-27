---
id: update-multi-host-sources-v1-request-inner
title: UpdateMultiHostSourcesV1RequestInner
pagination_label: UpdateMultiHostSourcesV1RequestInner
sidebar_label: UpdateMultiHostSourcesV1RequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'UpdateMultiHostSourcesV1RequestInner', 'UpdateMultiHostSourcesV1RequestInner'] 
slug: /tools/sdk/powershell/multihostintegration/models/update-multi-host-sources-v1-request-inner
tags: ['SDK', 'Software Development Kit', 'UpdateMultiHostSourcesV1RequestInner', 'UpdateMultiHostSourcesV1RequestInner']
---


# UpdateMultiHostSourcesV1RequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "replace" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**UpdateMultiHostSourcesV1RequestInnerValue**](update-multi-host-sources-v1-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$UpdateMultiHostSourcesV1RequestInner = Initialize-UpdateMultiHostSourcesV1RequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$UpdateMultiHostSourcesV1RequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

