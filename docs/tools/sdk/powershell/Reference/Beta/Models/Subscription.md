---
id: beta-subscription
title: Subscription
pagination_label: Subscription
sidebar_label: Subscription
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Subscription', 'BetaSubscription'] 
slug: /tools/sdk/powershell/beta/models/subscription
tags: ['SDK', 'Software Development Kit', 'Subscription', 'BetaSubscription']
---


# Subscription

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Subscription ID. | [required]
**Name** |  **String** | Subscription name. | [required]
**Description** |  Pointer to **String** | Subscription description. | [optional] 
**TriggerId** |  **String** | ID of trigger subscribed to. | [required]
**TriggerName** |  **String** | Trigger name of trigger subscribed to. | [required]
**Type** |  [**SubscriptionType**](subscription-type) |  | [required]
**ResponseDeadline** |  Pointer to **String** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** |  Pointer to [**HttpConfig**](http-config) |  | [optional] 
**EventBridgeConfig** |  Pointer to [**EventBridgeConfig**](event-bridge-config) |  | [optional] 
**Enabled** |  **Boolean** | Whether subscription should receive real-time trigger invocations or not. Test trigger invocations are always enabled regardless of this option. | [required][default to $true]
**VarFilter** |  Pointer to **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Examples

- Prepare the resource
```powershell
$Subscription = Initialize-PSSailpoint.BetaSubscription  -Id 0f11f2a4-7c94-4bf3-a2bd-742580fe3bde `
 -Name Access request subscription `
 -Description Access requested to site xyz `
 -TriggerId idn:access-request-post-approval `
 -TriggerName Access Requested `
 -Type null `
 -ResponseDeadline PT1H `
 -HttpConfig null `
 -EventBridgeConfig null `
 -Enabled true `
 -VarFilter $[?($.identityId &#x3D;&#x3D; &quot;201327fda1c44704ac01181e963d463c&quot;)]
```

- Convert the resource to JSON
```powershell
$Subscription | ConvertTo-JSON
```


[[Back to top]](#) 

