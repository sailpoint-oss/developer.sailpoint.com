---
id: list-campaign-filters-v1200-response
title: ListCampaignFiltersV1200Response
pagination_label: ListCampaignFiltersV1200Response
sidebar_label: ListCampaignFiltersV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListCampaignFiltersV1200Response', 'ListCampaignFiltersV1200Response'] 
slug: /tools/sdk/python/certification-campaign-filters/models/list-campaign-filters-v1200-response
tags: ['SDK', 'Software Development Kit', 'ListCampaignFiltersV1200Response', 'ListCampaignFiltersV1200Response']
---

# ListCampaignFiltersV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]Campaignfilterdetails**](campaignfilterdetails) | List of campaign filters. | [optional] 
**count** | **int** | Number of filters returned. | [optional] 
}

## Example

```python
from sailpoint.certification_campaign_filters.models.list_campaign_filters_v1200_response import ListCampaignFiltersV1200Response

list_campaign_filters_v1200_response = ListCampaignFiltersV1200Response(
items=[
                    sailpoint.certification_campaign_filters.models.campaign_filter_details.Campaign Filter Details(
                        id = '5ec18cef39020d6fd7a60ad3970aba61', 
                        name = 'Identity Attribute Campaign Filter', 
                        description = 'Campaign filter to certify data based on an identity attribute's specified property.', 
                        owner = 'SailPoint Support', 
                        mode = 'INCLUSION', 
                        criteria_list = [{"type":"IDENTITY_ATTRIBUTE","property":"displayName","value":"support","operation":"CONTAINS","negateResult":false,"shortCircuit":false,"recordChildMatches":false,"id":null,"suppressMatchedItems":false,"children":null}], 
                        is_system_filter = False, )
                    ],
count=2
)

```
[[Back to top]](#) 

