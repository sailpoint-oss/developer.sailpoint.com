---
id: beta-email-status-dto
title: EmailStatusDto
pagination_label: EmailStatusDto
sidebar_label: EmailStatusDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'EmailStatusDto', 'BetaEmailStatusDto'] 
slug: /tools/sdk/python/beta/models/email-status-dto
tags: ['SDK', 'Software Development Kit', 'EmailStatusDto', 'BetaEmailStatusDto']
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
from sailpoint.beta.models.email_status_dto import EmailStatusDto

email_status_dto = EmailStatusDto(
id='',
email='sender@example.com',
is_verified_by_domain=False,
verification_status='PENDING'
)

```
[[Back to top]](#) 

