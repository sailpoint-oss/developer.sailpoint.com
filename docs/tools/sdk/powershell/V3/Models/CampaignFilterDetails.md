---
id: campaign-filter-details
title: CampaignFilterDetails
pagination_label: CampaignFilterDetails
sidebar_label: CampaignFilterDetails
sidebar_class_name: powershellsdk
keywords: ['go', 'golang', 'sdk', 'CampaignFilterDetails'] 
slug: /tools/sdk/powershell/v3/models/campaign-filter-details
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetails']
---


# CampaignFilterDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** |  Pointer to **String** | Id of the campaign filter | [optional] 
**Name** |  **String** | This is campaign filter&#39;s name. | 
**Description** |  **String** | This is campaign filter&#39;s description. | 
**Owner** |  **String** | The owner of this filter. This field is automatically populated at creation time with the current user. | 
**Mode** |   **Enum** [  "INCLUSION",    "EXCLUSION" ] | The mode/type of Filter, where it is of INCLUSION or EXCLUSION type. INCLUSION type will include the data in generated campaign  as per specified in criteria, whereas EXCLUSION type will exclude the the data in generated campaign as per specified in criteria. | 
**CriteriaList** |  Pointer to [**[]CampaignFilterDetailsCriteriaListInner**](campaign-filter-details-criteria-list-inner) | List of criteria. | [optional] 

## Examples

- Prepare the resource
```powershell
$CampaignFilterDetails = Initialize-PSSailpointCampaignFilterDetails  -Id e9f9a1397b842fd5a65842087040d3ac `
 -Name Identity Attribute Campaign Filter `
 -Description Campaign filter to certify data based on specified property of Identity Attribute. `
 -Owner SailPoint Support `
 -Mode INCLUSION `
 -CriteriaList [{type&#x3D;IDENTITY_ATTRIBUTE, property&#x3D;displayName, value&#x3D;support, operation&#x3D;CONTAINS, negateResult&#x3D;false, shortCircuit&#x3D;false, recordChildMatches&#x3D;false, id&#x3D;null, suppressMatchedItems&#x3D;false, children&#x3D;null}]
```

- Convert the resource to JSON
```powershell
$CampaignFilterDetails | ConvertTo-JSON
```


[[Back to top]](#) 

