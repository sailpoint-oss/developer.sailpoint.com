---
id: beta-process-identities-request
title: ProcessIdentitiesRequest
pagination_label: ProcessIdentitiesRequest
sidebar_label: ProcessIdentitiesRequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'ProcessIdentitiesRequest', 'BetaProcessIdentitiesRequest'] 
slug: /tools/sdk/python/beta/models/process-identities-request
tags: ['SDK', 'Software Development Kit', 'ProcessIdentitiesRequest', 'BetaProcessIdentitiesRequest']
---

# ProcessIdentitiesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity_ids** | **[]str** | List of up to 250 identity IDs to process. | [optional] 
}

## Example

```python
from sailpoint.beta.models.process_identities_request import ProcessIdentitiesRequest

process_identities_request = ProcessIdentitiesRequest(
identity_ids=[
                    'ef38f94347e94562b5bb8424a56397d8'
                    ]
)

```
[[Back to top]](#) 

