---
id: identitysyncjob
title: Identitysyncjob
pagination_label: Identitysyncjob
sidebar_label: Identitysyncjob
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Identitysyncjob', 'Identitysyncjob'] 
slug: /tools/sdk/python/identities/models/identitysyncjob
tags: ['SDK', 'Software Development Kit', 'Identitysyncjob', 'Identitysyncjob']
---

# Identitysyncjob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Job ID. | [required]
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] | The job status. | [required]
**payload** | [**Identitysyncpayload**](identitysyncpayload) |  | [required]
}

## Example

```python
from sailpoint.identities.models.identitysyncjob import Identitysyncjob

identitysyncjob = Identitysyncjob(
id='0f11f2a4-7c94-4bf3-a2bd-742580fe3bde',
status='IN_PROGRESS',
payload=sailpoint.identities.models.identity_sync_payload.Identity Sync Payload(
                    type = 'SYNCHRONIZE_IDENTITY_ATTRIBUTES', 
                    data_json = '{"identityId":"2c918083746f642c01746f990884012a"}', )
)

```
[[Back to top]](#) 

