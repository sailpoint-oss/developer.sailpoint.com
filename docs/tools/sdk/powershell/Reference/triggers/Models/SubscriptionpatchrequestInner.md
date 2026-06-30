---
id: subscriptionpatchrequest-inner
title: SubscriptionpatchrequestInner
pagination_label: SubscriptionpatchrequestInner
sidebar_label: SubscriptionpatchrequestInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SubscriptionpatchrequestInner', 'SubscriptionpatchrequestInner'] 
slug: /tools/sdk/powershell/triggers/models/subscriptionpatchrequest-inner
tags: ['SDK', 'Software Development Kit', 'SubscriptionpatchrequestInner', 'SubscriptionpatchrequestInner']
---


# SubscriptionpatchrequestInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** |  **Enum** [  "add",    "remove",    "replace",    "move",    "copy" ] | The operation to be performed | [required]
**Path** | **String** | A string JSON Pointer representing the target path to an element to be affected by the operation | [required]
**Value** | [**SubscriptionpatchrequestInnerValue**](subscriptionpatchrequest-inner-value) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionpatchrequestInner = Initialize-SubscriptionpatchrequestInner  -Op replace `
 -Path /description `
 -Value null
```

- Convert the resource to JSON
```powershell
$SubscriptionpatchrequestInner | ConvertTo-JSON
```


[[Back to top]](#) 

