---
id: campaign-all-of-sources-with-orphan-entitlements
title: CampaignAllOfSourcesWithOrphanEntitlements
pagination_label: CampaignAllOfSourcesWithOrphanEntitlements
sidebar_label: CampaignAllOfSourcesWithOrphanEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignAllOfSourcesWithOrphanEntitlements', 'CampaignAllOfSourcesWithOrphanEntitlements'] 
slug: /tools/sdk/powershell/v3/models/campaign-all-of-sources-with-orphan-entitlements
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfSourcesWithOrphanEntitlements', 'CampaignAllOfSourcesWithOrphanEntitlements']
---


# CampaignAllOfSourcesWithOrphanEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the source | [optional] 
**Type** |  **Enum** [  "SOURCE" ] | Type | [optional] 
**Name** | **String** | Name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignAllOfSourcesWithOrphanEntitlements = Initialize-CampaignAllOfSourcesWithOrphanEntitlements  -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Type SOURCE `
 -Name Source with orphan entitlements
```

- Convert the resource to JSON
```powershell
$CampaignAllOfSourcesWithOrphanEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

