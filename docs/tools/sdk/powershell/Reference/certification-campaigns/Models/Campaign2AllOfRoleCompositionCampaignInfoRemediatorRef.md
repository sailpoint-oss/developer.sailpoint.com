---
id: campaign2-all-of-role-composition-campaign-info-remediator-ref
title: Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef
pagination_label: Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaign2-all-of-role-composition-campaign-info-remediator-ref
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef', 'Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef']
---


# Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Legal Remediator Type | [required]
**Id** | **String** | The ID of the remediator. | [required]
**Name** | **String** | The name of the remediator. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef = Initialize-Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef  -Type IDENTITY `
 -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Name Role Admin
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef | ConvertTo-JSON
```


[[Back to top]](#) 

