---
id: fullcampaign-all-of-role-composition-campaign-info-remediator-ref
title: FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef
pagination_label: FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_label: FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-role-composition-campaign-info-remediator-ref
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef']
---


# FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY" ] | Legal Remediator Type | 
**Id** |  **String** | The ID of the remediator. | 
**Name** |  Pointer to **String** | The name of the remediator. | [optional] [readonly] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef = Initialize-BetaFullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef  -Type IDENTITY `
 -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Name Role Admin
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfRoleCompositionCampaignInfoRemediatorRef | ConvertTo-JSON
```


[[Back to top]](#) 

