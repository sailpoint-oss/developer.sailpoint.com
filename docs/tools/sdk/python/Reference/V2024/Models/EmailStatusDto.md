---
id: v2024-email-status-dto
title: EmailStatusDto
pagination_label: EmailStatusDto
sidebar_label: EmailStatusDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EmailStatusDto', 'V2024EmailStatusDto'] 
slug: /tools/sdk/python/v2024/models/email-status-dto
tags: ['SDK', 'Software Development Kit', 'EmailStatusDto', 'V2024EmailStatusDto']
---

# EmailStatusDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**is_verified_by_domain** | **bool** |  | [optional] 
**verification_status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED' ] |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.email_status_dto import EmailStatusDto

email_status_dto = EmailStatusDto(
id='',
email='sender@example.com',
is_verified_by_domain=False,
verification_status='PENDING'
)

```
[[Back to top]](#) 

