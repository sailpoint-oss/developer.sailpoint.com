---
id: v2024-campaign-filter-details-criteria-list-inner
title: CampaignFilterDetailsCriteriaListInner
pagination_label: CampaignFilterDetailsCriteriaListInner
sidebar_label: CampaignFilterDetailsCriteriaListInner
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignFilterDetailsCriteriaListInner', 'V2024CampaignFilterDetailsCriteriaListInner'] 
slug: /tools/sdk/powershell/v2024/models/campaign-filter-details-criteria-list-inner
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetailsCriteriaListInner', 'V2024CampaignFilterDetailsCriteriaListInner']
---


# CampaignFilterDetailsCriteriaListInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | [**CriteriaType**](criteria-type) |  | [required]
**Operation** | [**Operation**](operation) |  | [optional] 
**Property** | **String** | Specified key from the type of criteria. | [required]
**Value** | **String** | Value for the specified key from the type of criteria. | [required]
**NegateResult** | **Boolean** | If true, the filter will negate the result of the criteria. | [optional] [default to $false]
**ShortCircuit** | **Boolean** | If true, the filter will short circuit the evaluation of the criteria. | [optional] [default to $false]
**RecordChildMatches** | **Boolean** | If true, the filter will record child matches for the criteria. | [optional] [default to $false]
**Id** | **String** | The unique ID of the criteria. | [optional] 
**SuppressMatchedItems** | **Boolean** | If this value is true, then matched items will not only be excluded from the campaign, they will also not have archived certification items created.  Such items will not appear in the exclusion report.  | [optional] [default to $false]
**Children** | [**[]SystemCollectionsHashtable**]https://learn.microsoft.com/en-us/dotnet/api/system.collections.hashtable?view=net-9.0 | List of child criteria. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignFilterDetailsCriteriaListInner = Initialize-V2024CampaignFilterDetailsCriteriaListInner  -Type null `
 -Operation null `
 -Property displayName `
 -Value Allie `
 -NegateResult false `
 -ShortCircuit false `
 -RecordChildMatches false `
 -Id 5ec18cef39020d6fd7a60ad3970aba61 `
 -SuppressMatchedItems false `
 -Children null
```

- Convert the resource to JSON
```powershell
$CampaignFilterDetailsCriteriaListInner | ConvertTo-JSON
```


[[Back to top]](#) 

