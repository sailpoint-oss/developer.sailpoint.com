---
id: beta-fullcampaign-all-of-search-campaign-info
title: FullcampaignAllOfSearchCampaignInfo
pagination_label: FullcampaignAllOfSearchCampaignInfo
sidebar_label: FullcampaignAllOfSearchCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FullcampaignAllOfSearchCampaignInfo', 'BetaFullcampaignAllOfSearchCampaignInfo'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSearchCampaignInfo', 'BetaFullcampaignAllOfSearchCampaignInfo']
---


# FullcampaignAllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |   **Enum** [  "IDENTITY",    "ACCESS" ] | The type of search campaign represented. | [required]
**Description** |  Pointer to **String** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**Reviewer** |  Pointer to [**FullcampaignAllOfSearchCampaignInfoReviewer**](fullcampaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**Query** |  Pointer to **String** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** |  Pointer to **[]String** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**AccessConstraints** |  Pointer to [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfSearchCampaignInfo = Initialize-PSSailpoint.BetaFullcampaignAllOfSearchCampaignInfo  -Type ACCESS `
 -Description Search Campaign description `
 -Reviewer null `
 -Query Search Campaign query description `
 -IdentityIds [0fbe863c063c4c88a35fd7f17e8a3df5] `
 -AccessConstraints null
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfSearchCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

