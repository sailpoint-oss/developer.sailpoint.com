---
id: correlated-governance-event
title: CorrelatedGovernanceEvent
pagination_label: CorrelatedGovernanceEvent
sidebar_label: CorrelatedGovernanceEvent
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CorrelatedGovernanceEvent'] 
slug: /tools/sdk/powershell/beta/models/correlated-governance-event
tags: ['SDK', 'Software Development Kit', 'CorrelatedGovernanceEvent']
---


# CorrelatedGovernanceEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** |  Pointer to **String** | The name of the governance event, such as the certification name or access request ID. | [optional] 
**Dt** |  Pointer to **String** | The date that the certification or access request was completed. | [optional] 
**Type** |  Pointer to  **Enum** [  "certification",    "accessRequest" ] | The type of governance event. | [optional] 
**GovernanceId** |  Pointer to **String** | The ID of the instance that caused the event - either the certification ID or access request ID. | [optional] 
**Owners** |  Pointer to [**[]CertifierResponse**](certifier-response) | The owners of the governance event (the certifiers or approvers) | [optional] 
**Reviewers** |  Pointer to [**[]CertifierResponse**](certifier-response) | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [optional] 
**DecisionMaker** |  Pointer to [**CertifierResponse**](certifier-response) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$CorrelatedGovernanceEvent = Initialize-BetaCorrelatedGovernanceEvent  -Name Manager Certification for Jon Snow `
 -Dt 2019-03-08T22:37:33.901Z `
 -Type certification `
 -GovernanceId 2c91808a77ff216301782327a50f09bf `
 -Owners [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}] `
 -Reviewers [{id=8a80828f643d484f01643e14202e206f, displayName=John Snow}] `
 -DecisionMaker null
```

- Convert the resource to JSON
```powershell
$CorrelatedGovernanceEvent | ConvertTo-JSON
```


[[Back to top]](#) 

