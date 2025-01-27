---
id: trigger
title: Trigger
pagination_label: Trigger
sidebar_label: Trigger
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Trigger'] 
slug: /tools/sdk/powershell/v2024/models/trigger
tags: ['SDK', 'Software Development Kit', 'Trigger']
---


# Trigger

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Unique identifier of the trigger. | [required]
**Name** |  **String** | Trigger Name. | [required]
**Type** |  [**TriggerType**](trigger-type) |  | [required]
**Description** |  Pointer to **String** | Trigger Description. | [optional] 
**InputSchema** |  **String** | The JSON schema of the payload that will be sent by the trigger to the subscribed service. | [required]
**ExampleInput** |  [**TriggerExampleInput**](trigger-example-input) |  | [required]
**OutputSchema** |  Pointer to **String** | The JSON schema of the response that will be sent by the subscribed service to the trigger in response to an event.  This only applies to a trigger type of `REQUEST_RESPONSE`. | [optional] 
**ExampleOutput** |  Pointer to [**TriggerExampleOutput**](trigger-example-output) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Trigger = Initialize-PSSailpoint.V2024Trigger  -Id idn:access-request-dynamic-approver `
 -Name Access Request Dynamic Approver `
 -Type null `
 -Description Trigger for getting a dynamic approver. `
 -InputSchema {&quot;definitions&quot;:{&quot;record:AccessRequestDynamicApproverInput&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;required&quot;:[&quot;accessRequestId&quot;,&quot;requestedFor&quot;,&quot;requestedItems&quot;,&quot;requestedBy&quot;],&quot;additionalProperties&quot;:true,&quot;properties&quot;:{&quot;accessRequestId&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;requestedFor&quot;:{&quot;$ref&quot;:&quot;#/definitions/record:requestedForIdentityRef&quot;},&quot;requestedItems&quot;:{&quot;type&quot;:&quot;array&quot;,&quot;items&quot;:{&quot;$ref&quot;:&quot;#/definitions/record:requestedObjectRef&quot;}},&quot;requestedBy&quot;:{&quot;$ref&quot;:&quot;#/definitions/record:requestedByIdentityRef&quot;}}},&quot;record:requestedForIdentityRef&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;required&quot;:[&quot;id&quot;,&quot;name&quot;,&quot;type&quot;],&quot;additionalProperties&quot;:true,&quot;properties&quot;:{&quot;id&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;name&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;type&quot;:{&quot;type&quot;:&quot;string&quot;}}},&quot;record:requestedObjectRef&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;optional&quot;:[&quot;description&quot;,&quot;comment&quot;],&quot;required&quot;:[&quot;id&quot;,&quot;name&quot;,&quot;type&quot;,&quot;operation&quot;],&quot;additionalProperties&quot;:true,&quot;properties&quot;:{&quot;id&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;name&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;description&quot;:{&quot;oneOf&quot;:[{&quot;type&quot;:&quot;null&quot;},{&quot;type&quot;:&quot;string&quot;}]},&quot;type&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;operation&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;comment&quot;:{&quot;oneOf&quot;:[{&quot;type&quot;:&quot;null&quot;},{&quot;type&quot;:&quot;string&quot;}]}}},&quot;record:requestedByIdentityRef&quot;:{&quot;type&quot;:&quot;object&quot;,&quot;required&quot;:[&quot;type&quot;,&quot;id&quot;,&quot;name&quot;],&quot;additionalProperties&quot;:true,&quot;properties&quot;:{&quot;type&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;id&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;name&quot;:{&quot;type&quot;:&quot;string&quot;}}}},&quot;$ref&quot;:&quot;#/definitions/record:AccessRequestDynamicApproverInput&quot;} `
 -ExampleInput null `
 -OutputSchema {&quot;definitions&quot;:{&quot;record:AccessRequestDynamicApproverOutput&quot;:{&quot;type&quot;:[&quot;null&quot;,&quot;object&quot;],&quot;required&quot;:[&quot;id&quot;,&quot;name&quot;,&quot;type&quot;],&quot;additionalProperties&quot;:true,&quot;properties&quot;:{&quot;id&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;name&quot;:{&quot;type&quot;:&quot;string&quot;},&quot;type&quot;:{&quot;type&quot;:&quot;string&quot;}}}},&quot;$ref&quot;:&quot;#/definitions/record:AccessRequestDynamicApproverOutput&quot;} `
 -ExampleOutput null
```

- Convert the resource to JSON
```powershell
$Trigger | ConvertTo-JSON
```


[[Back to top]](#) 

