---
id: beta-trigger-example-output
title: TriggerExampleOutput
pagination_label: TriggerExampleOutput
sidebar_label: TriggerExampleOutput
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'TriggerExampleOutput', 'BetaTriggerExampleOutput'] 
slug: /tools/sdk/powershell/beta/models/trigger-example-output
tags: ['SDK', 'Software Development Kit', 'TriggerExampleOutput', 'BetaTriggerExampleOutput']
---


# TriggerExampleOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the identity to add to the approver list for the access request. | [required]
**Name** | **String** | The name of the identity to add to the approver list for the access request. | [required]
**Type** |  **Enum** [  "IDENTITY",    "GOVERNANCE_GROUP" ] | The type of object being referenced. | [required]
**Approved** | **Boolean** | Whether or not to approve the access request. | [required]
**Comment** | **String** | A comment about the decision to approve or deny the request. | [required]
**Approver** | **String** | The name of the entity that approved or denied the request. | [required]

## Examples

- Prepare the resource
```powershell
$TriggerExampleOutput = Initialize-BetaTriggerExampleOutput  -Id 2c91808b6ef1d43e016efba0ce470906 `
 -Name Adam Adams `
 -Type IDENTITY `
 -Approved false `
 -Comment This access should be denied, because this will cause an SOD violation. `
 -Approver AcmeCorpExternalIntegration
```

- Convert the resource to JSON
```powershell
$TriggerExampleOutput | ConvertTo-JSON
```


[[Back to top]](#) 

