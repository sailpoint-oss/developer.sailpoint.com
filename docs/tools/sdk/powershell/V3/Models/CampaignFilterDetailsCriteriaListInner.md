---
id: campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/powershell/v3/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner']
---


# CampaignFilterDetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** |  [**CriteriaType**](criteria-type) |  | 
**Operation** |  [**Operation**](operation) |  | 
**Property** |  **String** | The specified key from the Type of criteria. | 
**Value** |  **String** | The value for the specified key from the Type of Criteria | 

## Examples

- Prepare the resource
```powershell
$CampaignFilterDetailsCriteriaListInner = Initialize-PSSailpointCampaignFilterDetailsCriteriaListInner  -Type null `
 -Operation null `
 -Property displayName `
 -Value Allie
```

- Convert the resource to JSON
```powershell
$CampaignFilterDetailsCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

