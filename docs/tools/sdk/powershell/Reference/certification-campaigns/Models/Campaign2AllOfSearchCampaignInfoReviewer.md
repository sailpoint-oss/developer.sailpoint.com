---
id: campaign2-all-of-search-campaign-info-reviewer
title: Campaign2AllOfSearchCampaignInfoReviewer
pagination_label: Campaign2AllOfSearchCampaignInfoReviewer
sidebar_label: Campaign2AllOfSearchCampaignInfoReviewer
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'Campaign2AllOfSearchCampaignInfoReviewer', 'Campaign2AllOfSearchCampaignInfoReviewer'] 
slug: /tools/sdk/powershell/certificationcampaigns/models/campaign2-all-of-search-campaign-info-reviewer
tags: ['SDK', 'Software Development Kit', 'Campaign2AllOfSearchCampaignInfoReviewer', 'Campaign2AllOfSearchCampaignInfoReviewer']
---


# Campaign2AllOfSearchCampaignInfoReviewer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  **Enum** [  "GOVERNANCE_GROUP",    "IDENTITY" ] | The reviewer's DTO type. | [optional] 
**Id** | **String** | The reviewer's ID. | [optional] 
**Name** | **String** | The reviewer's name. | [optional] 

## Examples

- Prepare the resource
```powershell
$Campaign2AllOfSearchCampaignInfoReviewer = Initialize-Campaign2AllOfSearchCampaignInfoReviewer  -Type IDENTITY `
 -Id 2c91808568c529c60168cca6f90c1313 `
 -Name William Wilson
```

- Convert the resource to JSON
```powershell
$Campaign2AllOfSearchCampaignInfoReviewer | ConvertTo-JSON
```


[[Back to top]](#) 

