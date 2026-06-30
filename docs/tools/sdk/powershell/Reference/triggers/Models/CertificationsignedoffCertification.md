---
id: certificationsignedoff-certification
title: CertificationsignedoffCertification
pagination_label: CertificationsignedoffCertification
sidebar_label: CertificationsignedoffCertification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationsignedoffCertification', 'CertificationsignedoffCertification'] 
slug: /tools/sdk/powershell/triggers/models/certificationsignedoff-certification
tags: ['SDK', 'Software Development Kit', 'CertificationsignedoffCertification', 'CertificationsignedoffCertification']
---


# CertificationsignedoffCertification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Unique ID of the certification. | [required]
**Name** | **String** | The name of the certification. | [required]
**Created** | **System.DateTime** | The date and time the certification was created. | [required]
**Modified** | **System.DateTime** | The date and time the certification was last modified. | [optional] 
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
$CertificationsignedoffCertification = Initialize-CertificationsignedoffCertification  -Id 2c91808576f886190176f88caf0d0067 `
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
$CertificationsignedoffCertification | ConvertTo-JSON
```


[[Back to top]](#) 

