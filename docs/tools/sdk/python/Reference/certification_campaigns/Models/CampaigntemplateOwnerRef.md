---
id: campaigntemplate-owner-ref
title: CampaigntemplateOwnerRef
pagination_label: CampaigntemplateOwnerRef
sidebar_label: CampaigntemplateOwnerRef
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CampaigntemplateOwnerRef', 'CampaigntemplateOwnerRef'] 
slug: /tools/sdk/python/certification-campaigns/models/campaigntemplate-owner-ref
tags: ['SDK', 'Software Development Kit', 'CampaigntemplateOwnerRef', 'CampaigntemplateOwnerRef']
---

# CampaigntemplateOwnerRef

The owner of this template, and the owner of campaigns generated from this template via a schedule. This field is automatically populated at creation time with the current user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the owner | [optional] 
**type** |  **Enum** [  'IDENTITY' ] | Type of the owner | [optional] 
**name** | **str** | Name of the owner | [optional] 
**email** | **str** | Email of the owner | [optional] 
}

## Example

```python
from sailpoint.certification_campaigns.models.campaigntemplate_owner_ref import CampaigntemplateOwnerRef

campaigntemplate_owner_ref = CampaigntemplateOwnerRef(
id='2c918086676d3e0601677611dbde220f',
type='IDENTITY',
name='Mister Manager',
email='mr.manager@example.com'
)

```
[[Back to top]](#) 

