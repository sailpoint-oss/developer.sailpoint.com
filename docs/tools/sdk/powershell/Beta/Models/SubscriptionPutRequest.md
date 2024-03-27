---
id: subscription-put-request
title: SubscriptionPutRequest
pagination_label: SubscriptionPutRequest
sidebar_label: SubscriptionPutRequest
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'SubscriptionPutRequest'] 
slug: /tools/sdk/powershell/beta/models/subscription-put-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPutRequest']
---


# SubscriptionPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | Subscription name. | [optional] 
**Description** |  Pointer to **String** | Subscription description. | [optional] 
**Type** |  Pointer to [**SubscriptionType**](subscription-type) |  | [optional] 
**ResponseDeadline** |  Pointer to **String** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** |  Pointer to [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** |  Pointer to [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** |  Pointer to **Boolean** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to $true]
**VarFilter** |  Pointer to **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionPutRequest = Initialize-PSSailpointBetaSubscriptionPutRequest  -Name Access request subscription `
 -Description Access requested to site xyz `
 -Type null `
 -ResponseDeadline PT1H `
 -HttpConfig null `
 -EventBridgeConfig null `
 -Enabled true `
 -VarFilter $[?($.identityId &#x3D;&#x3D; &quot;201327fda1c44704ac01181e963d463c&quot;)]
```

- Convert the resource to JSON
```powershell
$SubscriptionPutRequest | ConvertTo-JSON
```


[[Back to top]](#) 

