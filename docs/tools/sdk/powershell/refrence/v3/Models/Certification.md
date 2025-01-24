---
id: certification
title: Certification
pagination_label: Certification
sidebar_label: Certification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Certification'] 
slug: /tools/sdk/powershell/v3/models/certification
tags: ['SDK', 'Software Development Kit', 'Certification']
---


# Certification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | id of the certification | [optional] 
**Name** |  Pointer to **String** | name of the certification | [optional] 
**Campaign** |  Pointer to [**CampaignReference**](campaign-reference) |  | [optional] 
**Completed** |  Pointer to **Boolean** | Have all decisions been made? | [optional] 
**IdentitiesCompleted** |  Pointer to **Int32** | The number of identities for whom all decisions have been made and are complete. | [optional] 
**IdentitiesTotal** |  Pointer to **Int32** | The total number of identities in the Certification, both complete and incomplete. | [optional] 
**Created** |  Pointer to **System.DateTime** | created date | [optional] 
**Modified** |  Pointer to **System.DateTime** | modified date | [optional] 
**DecisionsMade** |  Pointer to **Int32** | The number of approve/revoke/acknowledge decisions that have been made. | [optional] 
**DecisionsTotal** |  Pointer to **Int32** | The total number of approve/revoke/acknowledge decisions. | [optional] 
**Due** |  Pointer to **System.DateTime** | The due date of the certification. | [optional] 
**Signed** |  Pointer to **System.DateTime** | The date the reviewer signed off on the Certification. | [optional] 
**Reviewer** |  Pointer to [**Reviewer**](reviewer) |  | [optional] 
**Reassignment** |  Pointer to [**Reassignment**](reassignment) |  | [optional] 
**HasErrors** |  Pointer to **Boolean** | Identifies if the certification has an error | [optional] 
**ErrorMessage** |  Pointer to **String** | Description of the certification error | [optional] 
**Phase** |  Pointer to [**CertificationPhase**](certification-phase) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$Certification = Initialize-PSSailpoint.V3Certification  -Id 2c9180835d2e5168015d32f890ca1581 `
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
$Certification | ConvertTo-JSON
```


[[Back to top]](#) 

