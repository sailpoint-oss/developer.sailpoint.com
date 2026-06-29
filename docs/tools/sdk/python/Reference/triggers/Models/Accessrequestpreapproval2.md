---
id: accessrequestpreapproval2
title: Accessrequestpreapproval2
pagination_label: Accessrequestpreapproval2
sidebar_label: Accessrequestpreapproval2
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Accessrequestpreapproval2', 'Accessrequestpreapproval2'] 
slug: /tools/sdk/python/triggers/models/accessrequestpreapproval2
tags: ['SDK', 'Software Development Kit', 'Accessrequestpreapproval2', 'Accessrequestpreapproval2']
---

# Accessrequestpreapproval2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved** | **bool** | Whether or not to approve the access request. | [required]
**comment** | **str** | A comment about the decision to approve or deny the request. | [required]
**approver** | **str** | The name of the entity that approved or denied the request. | [required]
}

## Example

```python
from sailpoint.triggers.models.accessrequestpreapproval2 import Accessrequestpreapproval2

accessrequestpreapproval2 = Accessrequestpreapproval2(
approved=False,
comment='This access should be denied, because this will cause an SOD violation.',
approver='AcmeCorpExternalIntegration'
)

```
[[Back to top]](#) 

