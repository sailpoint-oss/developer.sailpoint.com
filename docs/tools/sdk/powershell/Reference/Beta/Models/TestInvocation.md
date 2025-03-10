---
id: beta-test-invocation
title: TestInvocation
pagination_label: TestInvocation
sidebar_label: TestInvocation
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TestInvocation', 'BetaTestInvocation'] 
slug: /tools/sdk/powershell/beta/models/test-invocation
tags: ['SDK', 'Software Development Kit', 'TestInvocation', 'BetaTestInvocation']
---


# TestInvocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TriggerId** | **String** | Trigger ID | [required]
**VarInput** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | Mock input to use for test invocation.  This must adhere to the input schema defined in the trigger being invoked.  If this property is omitted, then the default trigger sample payload will be sent. | [optional] 
**ContentJson** | [**SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | JSON map of invocation metadata. | [required]
**SubscriptionIds** | **[]String** | Only send the test event to the subscription IDs listed.  If omitted, the test event will be sent to all subscribers. | [optional] 

## Examples

- Prepare the resource
```powershell
$TestInvocation = Initialize-PSSailpoint.BetaTestInvocation  -TriggerId idn:access-request-post-approval `
 -VarInput {identityId=201327fda1c44704ac01181e963d463c} `
 -ContentJson {workflowId=1234} `
 -SubscriptionIds [0f11f2a4-7c94-4bf3-a2bd-742580fe3bde]
```

- Convert the resource to JSON
```powershell
$TestInvocation | ConvertTo-JSON
```


[[Back to top]](#) 

