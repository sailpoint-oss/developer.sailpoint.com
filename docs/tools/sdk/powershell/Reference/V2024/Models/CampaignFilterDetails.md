---
id: v2024-campaign-filter-details
title: CampaignFilterDetails
pagination_label: CampaignFilterDetails
sidebar_label: CampaignFilterDetails
sidebar_class_name: powershellsdk
keywords: ['powershell', 'PowerShell', 'sdk', 'CampaignFilterDetails', 'V2024CampaignFilterDetails'] 
slug: /tools/sdk/powershell/v2024/models/campaign-filter-details
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetails', 'V2024CampaignFilterDetails']
---


# CampaignFilterDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **String** | The unique ID of the campaign filter | [required]
**Name** | **String** | Campaign filter name. | [required]
**Description** | **String** | Campaign filter description. | [optional] 
**Owner** | **String** | Owner of the filter. This field automatically populates at creation time with the current user. | [required]
**Mode** |  **Enum** [  "INCLUSION",    "EXCLUSION" ] | Mode/type of filter, either the INCLUSION or EXCLUSION type. The INCLUSION type includes the data in generated campaigns  as per specified in the criteria, whereas the EXCLUSION type excludes the data in generated campaigns as per specified in criteria. | [required]
**CriteriaList** | [**[]CampaignFilterDetailsCriteriaListInner**](campaign-filter-details-criteria-list-inner) | List of criteria. | [optional] 
**IsSystemFilter** | **Boolean** | If true, the filter is created by the system. If false, the filter is created by a user. | [required][default to $false]

## Examples

- Prepare the resource
```powershell
$CampaignFilterDetails = Initialize-V2024CampaignFilterDetails  -Id 5ec18cef39020d6fd7a60ad3970aba61 `
 -Name Identity Attribute Campaign Filter `
 -Description Campaign filter to certify data based on an identity attribute's specified property. `
 -Owner SailPoint Support `
 -Mode INCLUSION `
 -CriteriaList [{type=IDENTITY_ATTRIBUTE, property=displayName, value=support, operation=CONTAINS, negateResult=false, shortCircuit=false, recordChildMatches=false, id=null, suppressMatchedItems=false, children=null}] `
 -IsSystemFilter false
```

- Convert the resource to JSON
```powershell
$CampaignFilterDetails | ConvertTo-JSON
```


[[Back to top]](#) 

