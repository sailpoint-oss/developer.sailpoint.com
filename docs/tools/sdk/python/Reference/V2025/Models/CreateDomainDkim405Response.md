---
id: v2025-create-domain-dkim405-response
title: CreateDomainDkim405Response
pagination_label: CreateDomainDkim405Response
sidebar_label: CreateDomainDkim405Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'CreateDomainDkim405Response', 'V2025CreateDomainDkim405Response'] 
slug: /tools/sdk/python/v2025/models/create-domain-dkim405-response
tags: ['SDK', 'Software Development Kit', 'CreateDomainDkim405Response', 'V2025CreateDomainDkim405Response']
---

# CreateDomainDkim405Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_name** | **object** | A message describing the error | [optional] 
**error_message** | **object** | Description of the error | [optional] 
**tracking_id** | **str** | Unique tracking id for the error. | [optional] 
}

## Example

```python
from sailpoint.v2025.models.create_domain_dkim405_response import CreateDomainDkim405Response

create_domain_dkim405_response = CreateDomainDkim405Response(
error_name=NotSupportedException,
error_message=Cannot consume content type,
tracking_id='e7eab60924f64aa284175b9fa3309599'
)

```
[[Back to top]](#) 

