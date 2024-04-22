---
id: trigger
title: Trigger
pagination_label: Trigger
sidebar_label: Trigger
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'Trigger'] 
slug: /tools/sdk/powershell/beta/models/trigger
tags: ['SDK', 'Software Development Kit', 'Trigger']
---


# Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Unique identifier of the trigger. | 
**Name** |  **String** | Trigger Name. | 
**Type** |  [**TriggerType**](trigger-type) |  | 
**Description** |  Pointer to **String** | Trigger Description. | [optional] 
**InputSchema** |  **String** | The JSON schema of the payload that will be sent by the trigger to the subscribed service. | 
**ExampleInput** |  [**TriggerExampleInput**](trigger-example-input) |  | 
**OutputSchema** |  Pointer to **String** | The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of &#x60;REQUEST_RESPONSE&#x60;. | [optional] 
**ExampleOutput** |  Pointer to [**TriggerExampleOutput**](trigger-example-output) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Trigger = Initialize-BetaTrigger  -Id idn:access-request-dynamic-approver `
 -Name Access Request Dynamic Approver `
 -Type null `
 -Description Trigger for getting a dynamic approver. `
 -InputSchema {"definitions":{"record:AccessRequestDynamicApproverInput":{"type":"object","required":["accessRequestId","requestedFor","requestedItems","requestedBy"],"additionalProperties":true,"properties":{"accessRequestId":{"type":"string"},"requestedFor":{"$ref":"#/definitions/record:requestedForIdentityRef"},"requestedItems":{"type":"array","items":{"$ref":"#/definitions/record:requestedObjectRef"}},"requestedBy":{"$ref":"#/definitions/record:requestedByIdentityRef"}}},"record:requestedForIdentityRef":{"type":"object","required":["id","name","type"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"type":{"type":"string"}}},"record:requestedObjectRef":{"type":"object","optional":["description","comment"],"required":["id","name","type","operation"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"description":{"oneOf":[{"type":"null"},{"type":"string"}]},"type":{"type":"string"},"operation":{"type":"string"},"comment":{"oneOf":[{"type":"null"},{"type":"string"}]}}},"record:requestedByIdentityRef":{"type":"object","required":["type","id","name"],"additionalProperties":true,"properties":{"type":{"type":"string"},"id":{"type":"string"},"name":{"type":"string"}}}},"$ref":"#/definitions/record:AccessRequestDynamicApproverInput"} `
 -ExampleInput null `
 -OutputSchema {"definitions":{"record:AccessRequestDynamicApproverOutput":{"type":["null","object"],"required":["id","name","type"],"additionalProperties":true,"properties":{"id":{"type":"string"},"name":{"type":"string"},"type":{"type":"string"}}}},"$ref":"#/definitions/record:AccessRequestDynamicApproverOutput"} `
 -ExampleOutput null
```

- Convert the resource to JSON
```powershell
$Trigger | ConvertTo-JSON
```


[[Back to top]](#) 

