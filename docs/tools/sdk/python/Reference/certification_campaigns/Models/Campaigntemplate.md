---
id: campaigntemplate
title: Campaigntemplate
pagination_label: Campaigntemplate
sidebar_label: Campaigntemplate
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Campaigntemplate', 'Campaigntemplate'] 
slug: /tools/sdk/python/certification-campaigns/models/campaigntemplate
tags: ['SDK', 'Software Development Kit', 'Campaigntemplate', 'Campaigntemplate']
---

# Campaigntemplate

Campaign Template

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the campaign template | [optional] 
**name** | **str** | This template's name. Has no bearing on generated campaigns' names. | [required]
**description** | **str** | This template's description. Has no bearing on generated campaigns' descriptions. | [required]
**created** | **datetime** | Creation date of Campaign Template | [required][readonly] 
**modified** | **datetime** | Modification date of Campaign Template | [required][readonly] 
**scheduled** | **bool** | Indicates if this campaign template has been scheduled. | [optional] [readonly] [default to False]
**owner_ref** | [**CampaigntemplateOwnerRef**](campaigntemplate-owner-ref) |  | [optional] 
**deadline_duration** | **str** | The time period during which the campaign should be completed, formatted as an ISO-8601 Duration. When this template generates a campaign, the campaign's deadline will be the current date plus this duration. For example, if generation occurred on 2020-01-01 and this field was \"P2W\" (two weeks), the resulting campaign's deadline would be 2020-01-15 (the current date plus 14 days). | [optional] 
**campaign** | [**Campaign2**](campaign2) |  | [required]
}

## Example

```python
from sailpoint.certification_campaigns.models.campaigntemplate import Campaigntemplate

campaigntemplate = Campaigntemplate(
id='2c9079b270a266a60170a277bb960008',
name='Manager Campaign Template',
description='Template for the annual manager campaign.',
created='2020-03-05T22:44:00.364Z',
modified='2020-03-05T22:52:09.969Z',
scheduled=False,
owner_ref=sailpoint.certification_campaigns.models.campaigntemplate_owner_ref.campaigntemplate_ownerRef(
                    id = '2c918086676d3e0601677611dbde220f', 
                    type = 'IDENTITY', 
                    name = 'Mister Manager', 
                    email = 'mr.manager@example.com', ),
deadline_duration='P2W',
campaign=sailpoint.certification_campaigns.models.campaign.Campaign()
)

```
[[Back to top]](#) 

