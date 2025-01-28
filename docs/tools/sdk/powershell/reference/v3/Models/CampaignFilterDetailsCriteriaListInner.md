---
id: campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignFilterDetailsCriteriaListInner', 'CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/powershell/v3/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner', 'CampaignFilterDetailsCriteriaListInner']
---


# CampaignFilterDetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**CriteriaType**](criteria-type) |  | [required]
**Operation** |  [**Operation**](operation) |  | [required]
**Property** |  **String** | Specified key from the type of criteria. | [required]
**Value** |  **String** | Value for the specified key from the type of criteria. | [required]

## Examples

- Prepare the resource
```powershell
$CampaignFilterDetailsCriteriaListInner = Initialize-PSSailpoint.V3CampaignFilterDetailsCriteriaListInner  -Type null `
 -Operation null `
 -Property displayName `
 -Value Allie
```

- Convert the resource to JSON
```powershell
$CampaignFilterDetailsCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

