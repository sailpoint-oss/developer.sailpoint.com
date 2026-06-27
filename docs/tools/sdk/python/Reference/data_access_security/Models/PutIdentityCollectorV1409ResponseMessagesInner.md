---
id: put-identity-collector-v1409-response-messages-inner
title: PutIdentityCollectorV1409ResponseMessagesInner
pagination_label: PutIdentityCollectorV1409ResponseMessagesInner
sidebar_label: PutIdentityCollectorV1409ResponseMessagesInner
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'PutIdentityCollectorV1409ResponseMessagesInner', 'PutIdentityCollectorV1409ResponseMessagesInner'] 
slug: /tools/sdk/python/data-access-security/models/put-identity-collector-v1409-response-messages-inner
tags: ['SDK', 'Software Development Kit', 'PutIdentityCollectorV1409ResponseMessagesInner', 'PutIdentityCollectorV1409ResponseMessagesInner']
---

# PutIdentityCollectorV1409ResponseMessagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [optional] 
**locale_origin** | **str** | An indicator of how the locale was selected. | [optional] 
**text** | **str** | Actual text of the error message in the indicated locale. | [optional] 
}

## Example

```python
from sailpoint.data_access_security.models.put_identity_collector_v1409_response_messages_inner import PutIdentityCollectorV1409ResponseMessagesInner

put_identity_collector_v1409_response_messages_inner = PutIdentityCollectorV1409ResponseMessagesInner(
locale='en-US',
locale_origin='DEFAULT',
text='An identity collector with the same name already exists.'
)

```
[[Back to top]](#) 

