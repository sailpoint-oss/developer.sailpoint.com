---
id: v2024-subscription-patch-request-inner
title: SubscriptionPatchRequestInner
pagination_label: SubscriptionPatchRequestInner
sidebar_label: SubscriptionPatchRequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SubscriptionPatchRequestInner'] 
slug: /tools/sdk/powershell/v2024/models/subscription-patch-request-inner
tags: ['SDK', 'Software Development Kit', 'SubscriptionPatchRequestInner']
---


# SubscriptionPatchRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |   **Enum** [  "add",    "remove",    "replace",    "move",    "copy" ] | The operation to be performed | [required]
**Path** |  **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** |  Pointer to [**SubscriptionPatchRequestInnerValue**](subscription-patch-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionPatchRequestInner = Initialize-PSSailpoint.V2024SubscriptionPatchRequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$SubscriptionPatchRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

