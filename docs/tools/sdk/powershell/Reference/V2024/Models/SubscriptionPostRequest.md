---
id: v2024-subscription-post-request
title: SubscriptionPostRequest
pagination_label: SubscriptionPostRequest
sidebar_label: SubscriptionPostRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SubscriptionPostRequest', 'V2024SubscriptionPostRequest'] 
slug: /tools/sdk/powershell/v2024/models/subscription-post-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPostRequest', 'V2024SubscriptionPostRequest']
---


# SubscriptionPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  **String** | Subscription name. | [required]
**Description** |  Pointer to **String** | Subscription description. | [optional] 
**TriggerId** |  **String** | ID of trigger subscribed to. | [required]
**Type** |  [**SubscriptionType**](subscription-type) |  | [required]
**ResponseDeadline** |  Pointer to **String** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** |  Pointer to [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** |  Pointer to [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** |  Pointer to **Boolean** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to $true]
**VarFilter** |  Pointer to **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionPostRequest = Initialize-PSSailpoint.V2024SubscriptionPostRequest  -Name Access request subscription `
 -Description Access requested to site xyz `
 -TriggerId idn:access-requested `
 -Type null `
 -ResponseDeadline PT1H `
 -HttpConfig null `
 -EventBridgeConfig null `
 -Enabled true `
 -VarFilter $[?($.identityId &#x3D;&#x3D; &quot;201327fda1c44704ac01181e963d463c&quot;)]
```

- Convert the resource to JSON
```powershell
$SubscriptionPostRequest | ConvertTo-JSON
```


[[Back to top]](#) 

