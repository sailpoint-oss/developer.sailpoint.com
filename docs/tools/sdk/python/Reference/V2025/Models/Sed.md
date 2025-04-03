---
id: v2025-sed
title: Sed
pagination_label: Sed
sidebar_label: Sed
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Sed', 'V2025Sed'] 
slug: /tools/sdk/python/v2025/models/sed
tags: ['SDK', 'Software Development Kit', 'Sed', 'V2025Sed']
---

# Sed

Suggested Entitlement Description

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | name of the entitlement | [optional] 
**approved_by** | **str** | entitlement approved by | [optional] 
**approved_type** | **str** | entitlement approved type | [optional] 
**approved_when** | **datetime** | entitlement approved then | [optional] 
**attribute** | **str** | entitlement attribute | [optional] 
**description** | **str** | description of entitlement | [optional] 
**display_name** | **str** | entitlement display name | [optional] 
**id** | **str** | sed id | [optional] 
**source_id** | **str** | entitlement source id | [optional] 
**source_name** | **str** | entitlement source name | [optional] 
**status** | **str** | entitlement status | [optional] 
**suggested_description** | **str** | llm suggested entitlement description | [optional] 
**type** | **str** | entitlement type | [optional] 
**value** | **str** | entitlement value | [optional] 
}

## Example

```python
from sailpoint.v2025.models.sed import Sed

sed = Sed(
name='BatchInvoiceProcessing',
approved_by='2c918086-76de-afbf-0176-f6d28f65565a',
approved_type='admin',
approved_when=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
attribute='Role',
description='This entitlement allows automated processing of invoices in batches on a scheduled basis to streamline accounts payable procedures.',
display_name='AWS-Cloud-Billing',
id='ead281ee-12a9-40ac-9534-36b5d7d65d53',
source_id='103f567b93ee49b991c40f9412f87643',
source_name='IDN Salesforce',
status='suggested',
suggested_description='This entitlement allows automated processing of invoices in batches on a scheduled basis to streamline accounts payable',
type='group',
value='group'
)

```
[[Back to top]](#) 

