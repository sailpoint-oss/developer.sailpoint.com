---
id: subscriptionpostrequest
title: Subscriptionpostrequest
pagination_label: Subscriptionpostrequest
sidebar_label: Subscriptionpostrequest
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Subscriptionpostrequest', 'Subscriptionpostrequest'] 
slug: /tools/sdk/python/triggers/models/subscriptionpostrequest
tags: ['SDK', 'Software Development Kit', 'Subscriptionpostrequest', 'Subscriptionpostrequest']
---

# Subscriptionpostrequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Subscription name. | [required]
**description** | **str** | Subscription description. | [optional] 
**trigger_id** | **str** | ID of trigger subscribed to. | [required]
**type** | [**Subscriptiontype**](subscriptiontype) |  | [required]
**response_deadline** | **str** | Deadline for completing REQUEST_RESPONSE trigger invocation, represented in ISO-8601 duration format. | [optional] [default to 'PT1H']
**http_config** | [**Httpconfig**](httpconfig) |  | [optional] 
**event_bridge_config** | [**Eventbridgeconfig**](eventbridgeconfig) |  | [optional] 
**enabled** | **bool** | Whether subscription should receive real-time trigger invocations or not.  Test trigger invocations are always enabled regardless of this option. | [optional] [default to True]
**filter** | **str** | JSONPath filter to conditionally invoke trigger when expression evaluates to true. | [optional] 
}

## Example

```python
from sailpoint.triggers.models.subscriptionpostrequest import Subscriptionpostrequest

subscriptionpostrequest = Subscriptionpostrequest(
name='Access request subscription',
description='Access requested to site xyz',
trigger_id='idn:access-requested',
type='HTTP',
response_deadline='PT1H',
http_config=sailpoint.triggers.models.http_config.Http Config(
                    url = 'https://www.example.com', 
                    http_dispatch_mode = 'SYNC', 
                    http_authentication_type = 'NO_AUTH', 
                    basic_auth_config = sailpoint.triggers.models.basic_auth_config.Basic Auth Config(
                        user_name = 'user@example.com', 
                        password = '', ), 
                    bearer_token_auth_config = sailpoint.triggers.models.bearer_token_auth_config.Bearer Token Auth Config(
                        bearer_token = '', ), ),
event_bridge_config=sailpoint.triggers.models.event_bridge_config.Event Bridge Config(
                    aws_account = '123456789012', 
                    aws_region = 'us-west-1', ),
enabled=True,
filter='$[?($.identityId == "201327fda1c44704ac01181e963d463c")]'
)

```
[[Back to top]](#) 

