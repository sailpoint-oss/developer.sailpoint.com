---
id: v2024-campaign-all-of-search-campaign-info
title: CampaignAllOfSearchCampaignInfo
pagination_label: CampaignAllOfSearchCampaignInfo
sidebar_label: CampaignAllOfSearchCampaignInfo
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfSearchCampaignInfo', 'V2024CampaignAllOfSearchCampaignInfo'] 
slug: /tools/sdk/powershell/v2024/models/campaign-all-of-search-campaign-info
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSearchCampaignInfo', 'V2024CampaignAllOfSearchCampaignInfo']
---


# CampaignAllOfSearchCampaignInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "IDENTITY",    "ACCESS" ] | The type of search campaign represented. | [required]
**Description** | **String** | Describes this search campaign. Intended for storing the query used, and possibly the number of identities selected/available. | [optional] 
**Reviewer** | [**CampaignAllOfSearchCampaignInfoReviewer**](campaign-all-of-search-campaign-info-reviewer) |  | [optional] 
**Query** | **String** | The scope for the campaign. The campaign will cover identities returned by the query and identities that have access items returned by the query. One of `query` or `identityIds` must be set. | [optional] 
**IdentityIds** | **[]String** | A direct list of identities to include in this campaign. One of `identityIds` or `query` must be set. | [optional] 
**AccessConstraints** | [**[]AccessConstraint**](access-constraint) | Further reduces the scope of the campaign by excluding identities (from `query` or `identityIds`) that do not have this access. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfSearchCampaignInfo = Initialize-V2024CampaignAllOfSearchCampaignInfo  -Type ACCESS `
 -Description Search Campaign description `
 -Reviewer null `
 -Query Search Campaign query description `
 -IdentityIds [0fbe863c063c4c88a35fd7f17e8a3df5] `
 -AccessConstraints null
```

- Convert the resource to JSON
```powershell
$CampaignAllOfSearchCampaignInfo | ConvertTo-JSON
```


[[Back to top]](#) 

