---
id: correlatedgovernanceevent
title: Correlatedgovernanceevent
pagination_label: Correlatedgovernanceevent
sidebar_label: Correlatedgovernanceevent
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Correlatedgovernanceevent', 'Correlatedgovernanceevent'] 
slug: /tools/sdk/powershell/identityhistory/models/correlatedgovernanceevent
tags: ['SDK', 'Software Development Kit', 'Correlatedgovernanceevent', 'Correlatedgovernanceevent']
---


# Correlatedgovernanceevent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **String** | The name of the governance event, such as the certification name or access request ID. | [optional] 
**DateTime** | **String** | The date that the certification or access request was completed. | [optional] 
**Type** |  **Enum** [  "certification",    "accessRequest" ] | The type of governance event. | [optional] 
**GovernanceId** | **String** | The ID of the instance that caused the event - either the certification ID or access request ID. | [optional] 
**Owners** | [**[]Certifierresponse**](certifierresponse) | The owners of the governance event (the certifiers or approvers) | [optional] 
**Reviewers** | [**[]Certifierresponse**](certifierresponse) | The owners of the governance event (the certifiers or approvers), this field should be preferred over owners | [optional] 
**DecisionMaker** | [**Certifierresponse**](certifierresponse) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Correlatedgovernanceevent = Initialize-Correlatedgovernanceevent  -Name Manager Certification for Jon Snow `
 -DateTime 2019-03-08T22:37:33.901Z `
 -Type certification `
 -GovernanceId 2c91808a77ff216301782327a50f09bf `
 -Owners [{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}] `
 -Reviewers [{"id":"8a80828f643d484f01643e14202e206f","displayName":"John Snow"}] `
 -DecisionMaker null
```

- Convert the resource to JSON
```powershell
$Correlatedgovernanceevent | ConvertTo-JSON
```


[[Back to top]](#) 

