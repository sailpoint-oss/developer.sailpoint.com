---
id: beta-certification-signed-off-certification
title: CertificationSignedOffCertification
pagination_label: CertificationSignedOffCertification
sidebar_label: CertificationSignedOffCertification
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CertificationSignedOffCertification', 'BetaCertificationSignedOffCertification'] 
slug: /tools/sdk/powershell/beta/models/certification-signed-off-certification
tags: ['SDK', 'Software Development Kit', 'CertificationSignedOffCertification', 'BetaCertificationSignedOffCertification']
---


# CertificationSignedOffCertification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Certification's unique ID. | [required]
**Name** | **String** | Certification's name. | [required]
**Created** | **System.DateTime** | Date and time when the certification was created. | [required]
**Modified** | **System.DateTime** | Date and time when the certification was last modified. | [optional] 
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
$CertificationSignedOffCertification = Initialize-PSSailpoint.BetaCertificationSignedOffCertification  -Id 2c91808576f886190176f88caf0d0067 `
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

