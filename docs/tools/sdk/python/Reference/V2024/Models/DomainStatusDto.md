---
id: v2024-domain-status-dto
title: DomainStatusDto
pagination_label: DomainStatusDto
sidebar_label: DomainStatusDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'DomainStatusDto', 'V2024DomainStatusDto'] 
slug: /tools/sdk/python/v2024/models/domain-status-dto
tags: ['SDK', 'Software Development Kit', 'DomainStatusDto', 'V2024DomainStatusDto']
---

# DomainStatusDto

Domain status DTO containing everything required to verify via DKIM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | New UUID associated with domain to be verified | [optional] 
**domain** | **str** | A domain address | [optional] 
**dkim_enabled** | **object** | DKIM is enabled for this domain | [optional] 
**dkim_tokens** | **[]str** | DKIM tokens required for authentication | [optional] 
**dkim_verification_status** | **str** | Status of DKIM authentication | [optional] 
}

## Example

```python
from sailpoint.v2024.models.domain_status_dto import DomainStatusDto

domain_status_dto = DomainStatusDto(
id='123b45b0-aaaa-bbbb-a7db-123456a56abc',
domain='sailpoint.com',
dkim_enabled=true,
dkim_tokens=[token1, token2, token3],
dkim_verification_status='PENDING'
)

```
[[Back to top]](#) 

