---
id: certificationdto
title: Certificationdto
pagination_label: Certificationdto
sidebar_label: Certificationdto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certificationdto', 'Certificationdto'] 
slug: /tools/sdk/powershell/triggers/models/certificationdto
tags: ['SDK', 'Software Development Kit', 'Certificationdto', 'Certificationdto']
---


# Certificationdto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** | [**Campaignreference**](campaignreference) |  | [required]
**Phase** | [**Certificationphase**](certificationphase) |  | [required]
**Due** | **System.DateTime** | The due date of the certification. | [required]
**Signed** | **System.DateTime** | The date the reviewer signed off on the certification. | [required]
**Reviewer** | [**Reviewer**](reviewer) |  | [required]
**Reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**HasErrors** | **Boolean** | Indicates it the certification has any errors. | [required]
**ErrorMessage** | **String** | A message indicating what the error is. | [optional] 
**Completed** | **Boolean** | Indicates if all certification decisions have been made. | [required]
**DecisionsMade** | **Int32** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [required]
**DecisionsTotal** | **Int32** | The total number of approve/revoke/acknowledge decisions for the certification. | [required]
**EntitiesCompleted** | **Int32** | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [required]
**EntitiesTotal** | **Int32** | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]

## Examples

- Prepare the resource
```powershell
$Certificationdto = Initialize-Certificationdto  -CampaignRef null `
 -Phase null `
 -Due 2018-10-19T13:49:37.385Z `
 -Signed 2018-10-19T13:49:37.385Z `
 -Reviewer null `
 -Reassignment null `
 -HasErrors false `
 -ErrorMessage The certification has an error `
 -Completed false `
 -DecisionsMade 20 `
 -DecisionsTotal 40 `
 -EntitiesCompleted 5 `
 -EntitiesTotal 10
```

- Convert the resource to JSON
```powershell
$Certificationdto | ConvertTo-JSON
```


[[Back to top]](#) 

