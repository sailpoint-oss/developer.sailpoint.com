---
id: v2024-access-request-pre-approval1
title: AccessRequestPreApproval1
pagination_label: AccessRequestPreApproval1
sidebar_label: AccessRequestPreApproval1
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'AccessRequestPreApproval1', 'V2024AccessRequestPreApproval1'] 
slug: /tools/sdk/python/v2024/models/access-request-pre-approval1
tags: ['SDK', 'Software Development Kit', 'AccessRequestPreApproval1', 'V2024AccessRequestPreApproval1']
---

# AccessRequestPreApproval1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Whether or not to approve the access request. | [required]
**comment** | **str** | A comment about the decision to approve or deny the request. | [required]
**approver** | **str** | The name of the entity that approved or denied the request. | [required]
}

## Example

```python
from sailpoint.v2024.models.access_request_pre_approval1 import AccessRequestPreApproval1

access_request_pre_approval1 = AccessRequestPreApproval1(
approved=False,
comment='This access should be denied, because this will cause an SOD violation.',
approver='AcmeCorpExternalIntegration'
)

```
[[Back to top]](#) 

