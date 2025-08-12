---
id: v2025-campaign-filter-details
title: CampaignFilterDetails
pagination_label: CampaignFilterDetails
sidebar_label: CampaignFilterDetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaignFilterDetails', 'V2025CampaignFilterDetails'] 
slug: /tools/sdk/python/v2025/models/campaign-filter-details
tags: ['SDK', 'Software Development Kit', 'CampaignFilterDetails', 'V2025CampaignFilterDetails']
---

# CampaignFilterDetails

Campaign Filter Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign filter | [required]
**name** | **str** | Campaign filter name. | [required]
**description** | **str** | Campaign filter description. | [optional] 
**owner** | **str** | Owner of the filter. This field automatically populates at creation time with the current user. | [required]
**mode** |  **Enum** [  'INCLUSION',    'EXCLUSION' ] | Mode/type of filter, either the INCLUSION or EXCLUSION type. The INCLUSION type includes the data in generated campaigns  as per specified in the criteria, whereas the EXCLUSION type excludes the data in generated campaigns as per specified in criteria. | [required]
**criteria_list** | [**[]CampaignFilterDetailsCriteriaListInner**](campaign-filter-details-criteria-list-inner) | List of criteria. | [optional] 
**is_system_filter** | **bool** | If true, the filter is created by the system. If false, the filter is created by a user. | [required][default to False]
}

## Example

```python
from sailpoint.v2025.models.campaign_filter_details import CampaignFilterDetails

campaign_filter_details = CampaignFilterDetails(
id='5ec18cef39020d6fd7a60ad3970aba61',
name='Identity Attribute Campaign Filter',
description='Campaign filter to certify data based on an identity attribute's specified property.',
owner='SailPoint Support',
mode='INCLUSION',
criteria_list=[{type=IDENTITY_ATTRIBUTE, property=displayName, value=support, operation=CONTAINS, negateResult=false, shortCircuit=false, recordChildMatches=false, id=null, suppressMatchedItems=false, children=null}],
is_system_filter=False
)

```
[[Back to top]](#) 

