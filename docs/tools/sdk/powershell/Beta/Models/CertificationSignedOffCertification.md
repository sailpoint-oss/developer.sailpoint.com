---
id: certification-signed-off-certification
title: CertificationSignedOffCertification
pagination_label: CertificationSignedOffCertification
sidebar_label: CertificationSignedOffCertification
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CertificationSignedOffCertification'] 
slug: /tools/sdk/powershell/beta/models/certification-signed-off-certification
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOffCertification']
---


# CertificationSignedOffCertification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  **String** | Unique ID of the certification. | 
**Name** |  **String** | The name of the certification. | 
**Created** |  **System.DateTime** | The date and time the certification was created. | 
**Modified** |  Pointer to **System.DateTime** | The date and time the certification was last modified. | [optional] 
**CampaignRef** |  [**CampaignReference**](campaign-reference) |  | 
**Phase** |  [**CertificationPhase**](certification-phase) |  | 
**Due** |  **System.DateTime** | The due date of the certification. | 
**Signed** |  **System.DateTime** | The date the reviewer signed off on the certification. | 
**Reviewer** |  [**Reviewer**](reviewer) |  | 
**Reassignment** |  Pointer to [**Reassignment**](reassignment) |  | [optional] 
**HasErrors** |  **Boolean** | Indicates it the certification has any errors. | 
**ErrorMessage** |  Pointer to **String** | A message indicating what the error is. | [optional] 
**Completed** |  **Boolean** | Indicates if all certification decisions have been made. | 
**DecisionsMade** |  **Int32** | The number of approve/revoke/acknowledge decisions that have been made by the reviewer. | 
**DecisionsTotal** |  **Int32** | The total number of approve/revoke/acknowledge decisions for the certification. | 
**EntitiesCompleted** |  **Int32** | The number of entities (identities, access profiles, roles, etc.) for which all decisions have been made and are complete. | 
**EntitiesTotal** |  **Int32** | The total number of entities (identities, access profiles, roles, etc.) in the certification, both complete and incomplete. | 

## Examples

- Prepare the resource
```powershell
$CertificationSignedOffCertification = Initialize-PSSailpointBetaCertificationSignedOffCertification  -Id 2c91808576f886190176f88caf0d0067 `
 -Name Manager Access Review for Alice Baker `
 -Created 2020-02-16T03:04:45.815Z `
 -Modified 2020-02-16T03:06:45.815Z `
 -CampaignRef null `
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
$CertificationSignedOffCertification | ConvertTo-JSON
```


[[Back to top]](#) 

