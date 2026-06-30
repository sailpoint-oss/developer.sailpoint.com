---
id: campaignfilterdetails
title: Campaignfilterdetails
pagination_label: Campaignfilterdetails
sidebar_label: Campaignfilterdetails
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaignfilterdetails', 'Campaignfilterdetails'] 
slug: /tools/sdk/python/certification-campaign-filters/models/campaignfilterdetails
tags: ['SDK', 'Software Development Kit', 'Campaignfilterdetails', 'Campaignfilterdetails']
---

# Campaignfilterdetails

Campaign Filter Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The unique ID of the campaign filter | [required]
**name** | **str** | Campaign filter name. | [required]
**description** | **str** | Campaign filter description. | [optional] 
**owner** | **str** | Owner of the filter. This field automatically populates at creation time with the current user. | [required]
**mode** |  **Enum** [  'INCLUSION',    'EXCLUSION' ] | Mode/type of filter, either the INCLUSION or EXCLUSION type. The INCLUSION type includes the data in generated campaigns  as per specified in the criteria, whereas the EXCLUSION type excludes the data in generated campaigns as per specified in criteria. | [required]
**criteria_list** | [**[]CampaignfilterdetailsCriteriaListInner**](campaignfilterdetails-criteria-list-inner) | List of criteria. | [optional] 
**is_system_filter** | **bool** | If true, the filter is created by the system. If false, the filter is created by a user. | [required][default to False]
}

## Example

```python
from sailpoint.certification_campaign_filters.models.campaignfilterdetails import Campaignfilterdetails

campaignfilterdetails = Campaignfilterdetails(
id='5ec18cef39020d6fd7a60ad3970aba61',
name='Identity Attribute Campaign Filter',
description='Campaign filter to certify data based on an identity attribute's specified property.',
owner='SailPoint Support',
mode='INCLUSION',
criteria_list=[{"type":"IDENTITY_ATTRIBUTE","property":"displayName","value":"support","operation":"CONTAINS","negateResult":false,"shortCircuit":false,"recordChildMatches":false,"id":null,"suppressMatchedItems":false,"children":null}],
is_system_filter=False
)

```
[[Back to top]](#) 

