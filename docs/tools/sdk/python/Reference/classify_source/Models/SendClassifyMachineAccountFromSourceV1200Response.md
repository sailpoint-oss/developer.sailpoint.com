---
id: send-classify-machine-account-from-source-v1200-response
title: SendClassifyMachineAccountFromSourceV1200Response
pagination_label: SendClassifyMachineAccountFromSourceV1200Response
sidebar_label: SendClassifyMachineAccountFromSourceV1200Response
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'SendClassifyMachineAccountFromSourceV1200Response', 'SendClassifyMachineAccountFromSourceV1200Response'] 
slug: /tools/sdk/python/classify-source/models/send-classify-machine-account-from-source-v1200-response
tags: ['SDK', 'Software Development Kit', 'SendClassifyMachineAccountFromSourceV1200Response', 'SendClassifyMachineAccountFromSourceV1200Response']
---

# SendClassifyMachineAccountFromSourceV1200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accounts_submitted_for_processing** | **int** | Returns the number of all the accounts from source submitted for processing. | [optional] 
}

## Example

```python
from sailpoint.classify_source.models.send_classify_machine_account_from_source_v1200_response import SendClassifyMachineAccountFromSourceV1200Response

send_classify_machine_account_from_source_v1200_response = SendClassifyMachineAccountFromSourceV1200Response(
accounts_submitted_for_processing=100
)

```
[[Back to top]](#) 

