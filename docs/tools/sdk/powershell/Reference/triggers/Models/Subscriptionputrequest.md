---
id: subscriptionputrequest
title: Subscriptionputrequest
pagination_label: Subscriptionputrequest
sidebar_label: Subscriptionputrequest
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Subscriptionputrequest', 'Subscriptionputrequest'] 
slug: /tools/sdk/powershell/triggers/models/subscriptionputrequest
tags: ['SDK', 'Software Development Kit', 'Subscriptionputrequest', 'Subscriptionputrequest']
---


# Subscriptionputrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | Subscription name. | [optional] 
**Description** | **String** | Subscription description. | [optional] 
**Type** | [**Subscriptiontype**](subscriptiontype) |  | [optional] 
**ResponseDeadline** | **String** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to "PT1H"]
**HttpConfig** | [**Httpconfig**](httpconfig) |  | [optional] 
**EventBridgeConfig** | [**Eventbridgeconfig**](eventbridgeconfig) |  | [optional] 
**Enabled** | **Boolean** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to $true]
**VarFilter** | **String** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 

## Examples

- Prepare the resource
```powershell
$Subscriptionputrequest = Initialize-Subscriptionputrequest  -Name Access request subscription `
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
$Subscriptionputrequest | ConvertTo-JSON
```


[[Back to top]](#) 

