---
id: emailstatusdto
title: Emailstatusdto
pagination_label: Emailstatusdto
sidebar_label: Emailstatusdto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Emailstatusdto', 'Emailstatusdto'] 
slug: /tools/sdk/python/notifications/models/emailstatusdto
tags: ['SDK', 'Software Development Kit', 'Emailstatusdto', 'Emailstatusdto']
---

# Emailstatusdto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier for the verified sender address | [optional] 
**email** | **str** | The verified sender email address | [optional] 
**is_verified_by_domain** | **bool** | Whether the sender address is verified by domain | [optional] [default to False]
**verification_status** |  **Enum** [  'PENDING',    'SUCCESS',    'FAILED',    'NA' ] | The verification status of the sender address | [optional] 
**region** | **str** | The AWS SES region the sender address is associated with | [optional] 
}

## Example

```python
from sailpoint.notifications.models.emailstatusdto import Emailstatusdto

emailstatusdto = Emailstatusdto(
id='',
email='sender@example.com',
is_verified_by_domain=False,
verification_status='SUCCESS',
region='us-east-1'
)

```
[[Back to top]](#) 

