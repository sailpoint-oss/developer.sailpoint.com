---
id: fullcampaign-all-of-sources-with-orphan-entitlements
title: FullcampaignAllOfSourcesWithOrphanEntitlements
pagination_label: FullcampaignAllOfSourcesWithOrphanEntitlements
sidebar_label: FullcampaignAllOfSourcesWithOrphanEntitlements
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'FullcampaignAllOfSourcesWithOrphanEntitlements'] 
slug: /tools/sdk/powershell/beta/models/fullcampaign-all-of-sources-with-orphan-entitlements
tags: ['SDK', 'Software Development Kit', 'FullcampaignAllOfSourcesWithOrphanEntitlements']
---


# FullcampaignAllOfSourcesWithOrphanEntitlements

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the source | [optional] 
**Type** |  Pointer to  **Enum** [  "SOURCE" ] | Type | [optional] 
**Name** |  Pointer to **String** | Name of the source | [optional] 

## Examples

- Prepare the resource
```powershell
$FullcampaignAllOfSourcesWithOrphanEntitlements = Initialize-PSSailpointBetaFullcampaignAllOfSourcesWithOrphanEntitlements  -Id 2c90ad2a70ace7d50170acf22ca90010 `
 -Type SOURCE `
 -Name Source with orphan entitlements
```

- Convert the resource to JSON
```powershell
$FullcampaignAllOfSourcesWithOrphanEntitlements | ConvertTo-JSON
```


[[Back to top]](#) 

