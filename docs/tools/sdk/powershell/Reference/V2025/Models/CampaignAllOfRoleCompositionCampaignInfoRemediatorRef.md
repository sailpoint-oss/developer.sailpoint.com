---
id: v2025-campaign-all-of-role-composition-campaign-info-remediator-ref
title: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
pagination_label: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_label: CampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfoRemediatorRef', 'V2025CampaignAllOfRoleCompositionCampaignInfoRemediatorRef'] 
slug: /tools/sdk/powershell/v2025/models/campaign-all-of-role-composition-campaign-info-remediator-ref
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfoRemediatorRef', 'V2025CampaignAllOfRoleCompositionCampaignInfoRemediatorRef']
---


# CampaignAllOfRoleCompositionCampaignInfoRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY" ] | Legal Remediator Type | [required]
**Id** | **String** | The ID of the remediator. | [required]
**Name** | **String** | The name of the remediator. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfRoleCompositionCampaignInfoRemediatorRef = Initialize-PSSailpoint.V2025CampaignAllOfRoleCompositionCampaignInfoRemediatorRef  -Type IDENTITY `
 -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Name Role Admin
```

- Convert the resource to JSON
```powershell
$CampaignAllOfRoleCompositionCampaignInfoRemediatorRef | ConvertTo-JSON
```


[[Back to top]](#) 

