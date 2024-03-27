---
id: subscription-patch-request-inner
title: SubscriptionPatchRequestInner
pagination_label: SubscriptionPatchRequestInner
sidebar_label: SubscriptionPatchRequestInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SubscriptionPatchRequestInner'] 
slug: /tools/sdk/powershell/beta/models/subscription-patch-request-inner
tags: ['SDK', 'Software Development Kit', 'SubscriptionPatchRequestInner']
---


# SubscriptionPatchRequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |   **Enum** [  "add",    "remove",    "replace",    "move",    "copy" ] | The operation to be performed | 
**Path** |  **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | 
**Value** |  Pointer to [**SubscriptionPatchRequestInnerValue**](subscription-patch-request-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionPatchRequestInner = Initialize-PSSailpointBetaSubscriptionPatchRequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$SubscriptionPatchRequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

