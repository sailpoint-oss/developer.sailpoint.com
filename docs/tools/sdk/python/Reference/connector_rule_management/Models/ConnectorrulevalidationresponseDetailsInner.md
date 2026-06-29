---
id: connectorrulevalidationresponse-details-inner
title: ConnectorrulevalidationresponseDetailsInner
pagination_label: ConnectorrulevalidationresponseDetailsInner
sidebar_label: ConnectorrulevalidationresponseDetailsInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ConnectorrulevalidationresponseDetailsInner', 'ConnectorrulevalidationresponseDetailsInner'] 
slug: /tools/sdk/python/connector-rule-management/models/connectorrulevalidationresponse-details-inner
tags: ['SDK', 'Software Development Kit', 'ConnectorrulevalidationresponseDetailsInner', 'ConnectorrulevalidationresponseDetailsInner']
---

# ConnectorrulevalidationresponseDetailsInner

CodeErrorDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line** | **int** | The line number where the issue occurred | [required]
**column** | **int** | the column number where the issue occurred | [required]
**messsage** | **str** | a description of the issue in the code | [optional] 
}

## Example

```python
from sailpoint.connector_rule_management.models.connectorrulevalidationresponse_details_inner import ConnectorrulevalidationresponseDetailsInner

connectorrulevalidationresponse_details_inner = ConnectorrulevalidationresponseDetailsInner(
line=2,
column=5,
messsage='Remove reference to .decrypt('
)

```
[[Back to top]](#) 

