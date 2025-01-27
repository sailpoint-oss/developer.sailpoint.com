---
id: campaign-all-of-role-composition-campaign-info
title: CampaignAllOfRoleCompositionCampaignInfo
pagination_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/powershell/v3/models/campaign-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfo']
---


# CampaignAllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Reviewer** |  Pointer to [**CampaignAllOfSearchCampaignInfoReviewer**](campaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**RoleIds** |  Pointer to **[]String** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**RemediatorRef** |  [**CampaignAllOfRoleCompositionCampaignInfoRemediatorRef**](campaign-all-of-role-composition-campaign-info-remediator-ref) |  | [required]
**Query** |  Pointer to **String** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**Description** |  Pointer to **String** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfRoleCompositionCampaignInfo = Initialize-PSSailpoint.V3CampaignAllOfRoleCompositionCampaignInfo  -Reviewer null `
 -RoleIds [2c90ad2a70ace7d50170acf22ca90010] `
 -RemediatorRef null `
 -Query Search Query `
 -Description Role Composition Description
```

- Convert the resource to JSON
```powershell
$CampaignAllOfRoleCompositionCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

