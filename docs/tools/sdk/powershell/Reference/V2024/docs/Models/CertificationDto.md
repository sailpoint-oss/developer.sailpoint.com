---
id: v2024-certification-dto
title: CertificationDto
pagination_label: CertificationDto
sidebar_label: CertificationDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationDto', 'V2024CertificationDto'] 
slug: /tools/sdk/powershell/v2024/models/certification-dto
tags: ['SDK', 'Software Development Kit', 'CertificationDto', 'V2024CertificationDto']
---


# CertificationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CampaignRef** |  [**CampaignReference**](campaign-reference) |  | [required]
**Phase** |  [**CertificationPhase**](certification-phase) |  | [required]
**Due** |  **System.DateTime** | The due date of the certification. | [required]
**Signed** |  **System.DateTime** | The date the reviewer signed off on the certification. | [required]
**Reviewer** |  [**Reviewer1**](reviewer1) |  | [required]
**Reassignment** |  Pointer to [**Reassignment1**](reassignment1) |  | [optional] 
**HasErrors** |  **Boolean** | Indicates it the certification has any errors. | [required]
**ErrorMessage** |  Pointer to **String** | A message indicating what the error is. | [optional] 
**Completed** |  **Boolean** | Indicates if all certification decisions have been made. | [required]
**DecisionsMade** |  **Int32** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | [required]
**DecisionsTotal** |  **Int32** | The total number of approve/revoke/acknowledge decisions for the certification. | [required]
**EntitiesCompleted** |  **Int32** | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | [required]
**EntitiesTotal** |  **Int32** | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | [required]

## Examples

- Prepare the resource
```powershell
$CertificationDto = Initialize-PSSailpoint.V2024CertificationDto  -CampaignRef null `
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

