---
id: campaign-template
title: CampaignTemplate
pagination_label: CampaignTemplate
sidebar_label: CampaignTemplate
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignTemplate', 'CampaignTemplate'] 
slug: /tools/sdk/powershell/v3/models/campaign-template
tags: ['SDK', 'Software Development Kit', 'CampaignTemplate', 'CampaignTemplate']
---


# CampaignTemplate

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the campaign template | [optional] 
**Name** | **String** | This template's name. Has no bearing on generated campaigns' names. | [required]
**Description** | **String** | This template's description. Has no bearing on generated campaigns' descriptions. | [required]
**Created** | **System.DateTime** | Creation date of Campaign Template | [required][readonly] 
**Modified** | **System.DateTime** | Modification date of Campaign Template | [required][readonly] 
**Scheduled** | **Boolean** | Indicates if this campaign template has been scheduled. | [optional] [readonly] [default to $false]
**OwnerRef** | [**CampaignTemplateOwnerRef**](campaign-template-owner-ref) |  | [optional] 
**DeadlineDuration** | **String** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was ""P2W"" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**Campaign** | [**Campaign**](campaign) |  | [required]

## Examples

- Prepare the resource
```powershell
$CampaignTemplate = Initialize-CampaignTemplate  -Id 2c9079b270a266a60170a277bb960008 `
 -Name Manager Campaign Template `
 -Description Template for the annual manager campaign. `
 -Created 2020-03-05T22:44:00.364Z `
 -Modified 2020-03-05T22:52:09.969Z `
 -Scheduled false `
 -OwnerRef null `
 -DeadlineDuration P2W `
 -Campaign null
```

- Convert the resource to JSON
```powershell
$CampaignTemplate | ConvertTo-JSON
```


[[Back to top]](#) 

