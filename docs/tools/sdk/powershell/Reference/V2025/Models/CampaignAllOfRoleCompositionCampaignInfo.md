---
id: v2025-campaign-all-of-role-composition-campaign-info
title: CampaignAllOfRoleCompositionCampaignInfo
pagination_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_label: CampaignAllOfRoleCompositionCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfRoleCompositionCampaignInfo', 'V2025CampaignAllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/powershell/v2025/models/campaign-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfRoleCompositionCampaignInfo', 'V2025CampaignAllOfRoleCompositionCampaignInfo']
---


# CampaignAllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReviewerId** | **String** | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the ""reviewer"" object. | [optional] 
**Reviewer** | [**CampaignAllOfRoleCompositionCampaignInfoReviewer**](campaign-all-of-role-composition-campaign-info-reviewer) |  | [optional] 
**RoleIds** | **[]String** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**RemediatorRef** | [**CampaignAllOfRoleCompositionCampaignInfoRemediatorRef**](campaign-all-of-role-composition-campaign-info-remediator-ref) |  | [required]
**Query** | **String** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**Description** | **String** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfRoleCompositionCampaignInfo = Initialize-V2025CampaignAllOfRoleCompositionCampaignInfo  -ReviewerId 2c91808568c529c60168cca6f90c1313 `
 -Reviewer null `
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

