---
id: v2025-subscription-put-request
title: SubscriptionPutRequest
pagination_label: SubscriptionPutRequest
sidebar_label: SubscriptionPutRequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'SubscriptionPutRequest', 'V2025SubscriptionPutRequest'] 
slug: /tools/sdk/powershell/v2025/models/subscription-put-request
tags: ['SDK', 'Software Development Kit', 'SubscriptionPutRequest', 'V2025SubscriptionPutRequest']
---


# SubscriptionPutRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Subscription name. | [optional] 
**Description** | **String** | Subscription description. | [optional] 
**Type** | [**SubscriptionType**](subscription-type) |  | [optional] 
**ResponseDeadline** | **String** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** | [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** | [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** | **Boolean** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to $true]
**VarFilter** | **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Examples

- Prepare the resource
```powershell
$SubscriptionPutRequest = Initialize-PSSailpoint.V2025SubscriptionPutRequest  -Name Access request subscription `
 -Description Access requested to site xyz `
 -Type null `
 -ResponseDeadline PT1H `
 -HttpConfig null `
 -EventBridgeConfig null `
 -Enabled true `
 -VarFilter $[?($.identityId == "201327fda1c44704ac01181e963d463c")]
```

- Convert the resource to JSON
```powershell
$SubscriptionPutRequest | ConvertTo-JSON
```


[[Back to top]](#) 

