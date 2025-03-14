---
id: beta-template-dto
title: TemplateDto
pagination_label: TemplateDto
sidebar_label: TemplateDto
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'TemplateDto', 'BetaTemplateDto'] 
slug: /tools/sdk/python/beta/models/template-dto
tags: ['SDK', 'Software Development Kit', 'TemplateDto', 'BetaTemplateDto']
---

# TemplateDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The key of the template | [required]
**name** | **str** | The name of the Task Manager Subscription | [optional] 
**medium** |  **Enum** [  'EMAIL',    'PHONE',    'SMS',    'SLACK',    'TEAMS' ] | The message medium. More mediums may be added in the future. | [required]
**locale** | **str** | The locale for the message text, a BCP 47 language tag. | [required]
**subject** | **str** | The subject line in the template | [optional] 
**header** | **str** | The header value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**body** | **str** | The body in the template | [optional] 
**footer** | **str** | The footer value is now located within the body field. If included with non-null values, will result in a 400. | [optional] 
**var_from** | **str** | The \"From:\" address in the template | [optional] 
**reply_to** | **str** | The \"Reply To\" line in the template | [optional] 
**description** | **str** | The description in the template | [optional] 
**id** | **str** | This is auto-generated. | [optional] 
**created** | **datetime** | The time when this template is created. This is auto-generated. | [optional] 
**modified** | **datetime** | The time when this template was last modified. This is auto-generated. | [optional] 
**slack_template** | **str** |  | [optional] 
**teams_template** | **str** |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.template_dto import TemplateDto

template_dto = TemplateDto(
key='cloud_manual_work_item_summary',
name='Task Manager Subscription',
medium='EMAIL',
locale='en',
subject='You have $numberOfPendingTasks $taskTasks to complete in ${__global.productName}.',
header='',
body='Please go to the task manager',
footer='',
var_from='$__global.emailFromAddress',
reply_to='$__global.emailFromAddress',
description='Daily digest - sent if number of outstanding tasks for task owner > 0',
id='c17bea3a-574d-453c-9e04-4365fbf5af0b',
created='2020-01-01T00:00Z',
modified='2020-01-01T00:00Z',
slack_template='',
teams_template=''
)

```
[[Back to top]](#) 

