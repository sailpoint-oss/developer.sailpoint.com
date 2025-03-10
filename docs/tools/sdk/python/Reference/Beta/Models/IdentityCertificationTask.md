---
id: beta-identity-certification-task
title: IdentityCertificationTask
pagination_label: IdentityCertificationTask
sidebar_label: IdentityCertificationTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'IdentityCertificationTask', 'BetaIdentityCertificationTask'] 
slug: /tools/sdk/python/beta/models/identity-certification-task
tags: ['SDK', 'Software Development Kit', 'IdentityCertificationTask', 'BetaIdentityCertificationTask']
---

# IdentityCertificationTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The task id | [optional] 
**certification_id** | **str** | The certification id | [optional] 
**type** |  **Enum** [  'REASSIGN' ] |  | [optional] 
**status** |  **Enum** [  'QUEUED',    'IN_PROGRESS',    'SUCCESS',    'ERROR' ] |  | [optional] 
**errors** | **[]str** | Any errors executing the task (Optional). | [optional] 
}

## Example

```python
from sailpoint.beta.models.identity_certification_task import IdentityCertificationTask

identity_certification_task = IdentityCertificationTask(
id='abcd-ef12-3456',
certification_id='ef38f94347e94562b5bb8424a56397d8',
type='REASSIGN',
status='QUEUED',
errors=[]
)

```
[[Back to top]](#) 

