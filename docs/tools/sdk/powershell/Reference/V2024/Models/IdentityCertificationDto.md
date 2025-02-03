---
id: v2024-identity-certification-dto
title: IdentityCertificationDto
pagination_label: IdentityCertificationDto
sidebar_label: IdentityCertificationDto
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'IdentityCertificationDto', 'V2024IdentityCertificationDto'] 
slug: /tools/sdk/powershell/v2024/models/identity-certification-dto
tags: ['SDK', 'Software Development Kit', 'IdentityCertificationDto', 'V2024IdentityCertificationDto']
---


# IdentityCertificationDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | id of the certification | [optional] 
**Name** | **String** | name of the certification | [optional] 
**Campaign** | [**CampaignReference**](campaign-reference) |  | [optional] 
**Completed** | **Boolean** | Have all decisions been made? | [optional] 
**IdentitiesCompleted** | **Int32** | The number of identities for whom all decisions have been made and are complete. | [optional] 
**IdentitiesTotal** | **Int32** | The total number of identities in the Certification, both complete and incomplete. | [optional] 
**Created** | **System.DateTime** | created date | [optional] 
**Modified** | **System.DateTime** | modified date | [optional] 
**DecisionsMade** | **Int32** | The number of approve/revoke/acknowledge decisions that have been made. | [optional] 
**DecisionsTotal** | **Int32** | The total number of approve/revoke/acknowledge decisions. | [optional] 
**Due** | **System.DateTime** | The due date of the certification. | [optional] 
**Signed** | **System.DateTime** | The date the reviewer signed off on the Certification. | [optional] 
**Reviewer** | [**Reviewer**](reviewer) |  | [optional] 
**Reassignment** | [**Reassignment**](reassignment) |  | [optional] 
**HasErrors** | **Boolean** | Identifies if the certification has an error | [optional] 
**ErrorMessage** | **String** | Description of the certification error | [optional] 
**Phase** | [**CertificationPhase**](certification-phase) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$IdentityCertificationDto = Initialize-PSSailpoint.V2024IdentityCertificationDto  -Id 2c9180835d2e5168015d32f890ca1581 `
 -Name Source Owner Access Review for Employees [source] `
 -Campaign null `
 -Completed true `
 -IdentitiesCompleted 5 `
 -IdentitiesTotal 10 `
 -Created 2018-06-25T20:22:28.104Z `
 -Modified 2018-06-25T20:22:28.104Z `
 -DecisionsMade 20 `
 -DecisionsTotal 40 `
 -Due 2018-10-19T13:49:37.385Z `
 -Signed 2018-10-19T13:49:37.385Z `
 -Reviewer null `
 -Reassignment null `
 -HasErrors false `
 -ErrorMessage The certification has an error `
 -Phase null
```

- Convert the resource to JSON
```powershell
$IdentityCertificationDto | ConvertTo-JSON
```


[[Back to top]](#) 

