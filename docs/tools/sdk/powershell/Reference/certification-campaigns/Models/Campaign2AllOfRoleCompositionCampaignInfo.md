---
id: campaign2-all-of-role-composition-campaign-info
title: Campaign2AllOfRoleCompositionCampaignInfo
pagination_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_label: Campaign2AllOfRoleCompositionCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaign2AllOfRoleCompositionCampaignInfo', 'Campaign2AllOfRoleCompositionCampaignInfo'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaign2-all-of-role-composition-campaign-info
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfRoleCompositionCampaignInfo', 'Campaign2AllOfRoleCompositionCampaignInfo']
---


# Campaign2AllOfRoleCompositionCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReviewerId** | **String** | The ID of the identity or governance group reviewing this campaign. Deprecated in favor of the ""reviewer"" object. | [optional] 
**Reviewer** | [**Campaign2AllOfRoleCompositionCampaignInfoReviewer**](campaign2-all-of-role-composition-campaign-info-reviewer) |  | [optional] 
**RoleIds** | **[]String** | Optional list of roles to include in this campaign. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**RemediatorRef** | [**Campaign2AllOfRoleCompositionCampaignInfoRemediatorRef**](campaign2-all-of-role-composition-campaign-info-remediator-ref) |  | [required]
**Query** | **String** | Optional search query to scope this campaign to a set of roles. Only one of `roleIds` and `query` may be set; if neither are set, all roles are included. | [optional] 
**Description** | **String** | Describes this role composition campaign. Intended for storing the query used, and possibly the number of roles selected/available. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfRoleCompositionCampaignInfo = Initialize-Campaign2AllOfRoleCompositionCampaignInfo  -ReviewerId 2c91808568c529c60168cca6f90c1313 `
 -Reviewer null `
 -RoleIds ["2c90ad2a70ace7d50170acf22ca90010"] `
 -RemediatorRef null `
 -Query Search Query `
 -Description Role Composition Description
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfRoleCompositionCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

