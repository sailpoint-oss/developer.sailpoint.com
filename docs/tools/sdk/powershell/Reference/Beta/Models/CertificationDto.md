---
id: beta-certification-dto
title: CertificationDto
pagination_label: CertificationDto
sidebar_label: CertificationDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationDto', 'BetaCertificationDto'] 
slug: /tools/sdk/powershell/beta/models/certification-dto
tags: ['SDK', 'Software Development Kit', 'CertificationDto', 'BetaCertificationDto']
---


# CertificationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** | [**CampaignReference**](campaign-reference) |  | [required]
**Phase** | [**CertificationPhase**](certification-phase) |  | [required]
**Due** | **System.DateTime** | Date and time when the certification is due. | [required]
**Signed** | **System.DateTime** | Date and time when the reviewer signed off on the certification. | [required]
**Reviewer** | [**Reviewer**](reviewer) |  | [required]
**Reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**HasErrors** | **Boolean** | Indicates whether the certification has any errors. | [required]
**ErrorMessage** | **String** | Message indicating what the error is. | [optional] 
**Completed** | **Boolean** | Indicates whether all certification decisions have been made. | [required]
**DecisionsMade** | **Int32** | Number of approve/revoke/acknowledge decisions the reviewer has made. | [required]
**DecisionsTotal** | **Int32** | Total number of approve/revoke/acknowledge decisions for the certification. | [required]
**EntitiesCompleted** | **Int32** | Number of entities (identities, access profiles, roles, etc.) that are complete and all decisions have been made for. | [required]
**EntitiesTotal** | **Int32** | Total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]

## Examples

- Prepare the resource
```powershell
$CertificationDto = Initialize-BetaCertificationDto  -CampaignRef null `
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
$CertificationDto | ConvertTo-JSON
```


[[Back to top]](#) 

