---
id: v2024-list-campaign-filters200-response
title: ListCampaignFilters200Response
pagination_label: ListCampaignFilters200Response
sidebar_label: ListCampaignFilters200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ListCampaignFilters200Response', 'V2024ListCampaignFilters200Response'] 
slug: /tools/sdk/python/v2024/models/list-campaign-filters200-response
tags: ['SDK', 'Software Development Kit', 'ListCampaignFilters200Response', 'V2024ListCampaignFilters200Response']
---

# ListCampaignFilters200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**[]CampaignFilterDetails**](campaign-filter-details) | List of campaign filters. | [optional] 
**count** | **int** | Number of filters returned. | [optional] 
}

## Example

```python
from sailpoint.v2024.models.list_campaign_filters200_response import ListCampaignFilters200Response

list_campaign_filters200_response = ListCampaignFilters200Response(
items=[
                    sailpoint.v2024.models.campaign_filter_details.Campaign Filter Details(
                        id = '5ec18cef39020d6fd7a60ad3970aba61', 
                        name = 'Identity Attribute Campaign Filter', 
                        description = 'Campaign filter to certify data based on an identity attribute's specified property.', 
                        owner = 'SailPoint Support', 
                        mode = 'INCLUSION', 
                        criteria_list = [{type=IDENTITY_ATTRIBUTE, property=displayName, value=support, operation=CONTAINS, negateResult=false, shortCircuit=false, recordChildMatches=false, id=null, suppressMatchedItems=false, children=null}], 
                        is_system_filter = False, )
                    ],
count=2
)

```
[[Back to top]](#) 

