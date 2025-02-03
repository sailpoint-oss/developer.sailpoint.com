---
id: beta-fullcampaign-all-of-sources-with-orphan-entitlements
title: FullcampaignAllOfSourcesWithOrphanEntitlements
pagination_label: FullcampaignAllOfSourcesWithOrphanEntitlements
sidebar_label: FullcampaignAllOfSourcesWithOrphanEntitlements
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'FullcampaignAllOfSourcesWithOrphanEntitlements', 'BetaFullcampaignAllOfSourcesWithOrphanEntitlements'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-sources-with-orphan-entitlements
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSourcesWithOrphanEntitlements', 'BetaFullcampaignAllOfSourcesWithOrphanEntitlements']
---


# FullcampaignAllOfSourcesWithOrphanEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | Id of the source | [optional] 
**Type** |  **Enum** [  "SOURCE" ] | Type | [optional] 
**Name** | **String** | Name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfSourcesWithOrphanEntitlements = Initialize-PSSailpoint.BetaFullcampaignAllOfSourcesWithOrphanEntitlements  -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Type SOURCE `
 -Name Source with orphan entitlements
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfSourcesWithOrphanEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

