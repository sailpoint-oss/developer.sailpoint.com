---
id: promptinsight
title: Promptinsight
pagination_label: Promptinsight
sidebar_label: Promptinsight
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'Promptinsight', 'Promptinsight'] 
slug: /tools/sdk/python/prompt-insights/models/promptinsight
tags: ['SDK', 'Software Development Kit', 'Promptinsight', 'Promptinsight']
---

# Promptinsight

A prompt security insight event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**timestamp** | **datetime** | Event time in UTC. | [optional] 
**user** | **str** | User identifier or display name. | [optional] 
**agent** | **str** | The AI agent that processed the prompt. | [optional] 
**policy_decision** |  **Enum** [  'ALLOWED',    'REDACTED' ] | The policy decision applied to the prompt. | [optional] 
**category** |  **Enum** [  'ANOMALIES',    'DATA_UPLOADS',    'MCP_TOOL_CALLS' ] | The category of the prompt security finding. | [optional] 
**severity** |  **Enum** [  'LOW',    'MEDIUM',    'HIGH',    'CRITICAL' ] | The severity of the prompt security finding. | [optional] 
**reason** | **str** | Human-readable or structured reason for the policy decision. | [optional] 
**rule** | **str** | The rule that matched the prompt. | [optional] 
**policy** | **str** | The policy that matched the prompt. | [optional] 
}

## Example

```python
from sailpoint.prompt_insights.models.promptinsight import Promptinsight

promptinsight = Promptinsight(
timestamp='2026-05-14T10:01:02.345Z',
user='john.doe@mail.com',
agent='ChatGPT',
policy_decision='REDACTED',
category='ANOMALIES',
severity='HIGH',
reason='Policy matched suspicious system override pattern',
rule='Prompt Guard - Clean',
policy='PG-INFO:None'
)

```
[[Back to top]](#) 

