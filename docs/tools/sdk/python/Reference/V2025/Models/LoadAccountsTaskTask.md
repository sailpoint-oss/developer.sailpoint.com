---
id: v2025-load-accounts-task-task
title: LoadAccountsTaskTask
pagination_label: LoadAccountsTaskTask
sidebar_label: LoadAccountsTaskTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadAccountsTaskTask', 'V2025LoadAccountsTaskTask'] 
slug: /tools/sdk/python/v2025/models/load-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTaskTask', 'V2025LoadAccountsTaskTask']
---

# LoadAccountsTaskTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the task this taskStatus represents | [optional] 
**type** | **str** | Type of task this task represents | [optional] 
**name** | **str** | The name of the aggregation process | [optional] 
**description** | **str** | The description of the task | [optional] 
**launcher** | **str** | The user who initiated the task | [optional] 
**created** | **datetime** | The Task creation date | [optional] 
**launched** | **datetime** | The task start date | [optional] 
**completed** | **datetime** | The task completion date | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR' ] | Task completion status. | [optional] 
**parent_name** | **str** | Name of the parent task if exists. | [optional] 
**messages** | [**[]LoadAccountsTaskTaskMessagesInner**](load-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**progress** | **str** | Current task state. | [optional] 
**attributes** | [**LoadAccountsTaskTaskAttributes**](load-accounts-task-task-attributes) |  | [optional] 
**returns** | [**[]LoadAccountsTaskTaskReturnsInner**](load-accounts-task-task-returns-inner) | Return values from the task | [optional] 
}

## Example

```python
from sailpoint.v2025.models.load_accounts_task_task import LoadAccountsTaskTask

load_accounts_task_task = LoadAccountsTaskTask(
id='ef38f94347e94562b5bb8424a56397d8',
type='QUARTZ',
name='Cloud Account Aggregation',
description='Aggregate from the specified application',
launcher='John Doe',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
launched=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completed=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completion_status='Success',
parent_name='Audit Report',
messages=[],
progress='Initializing...',
attributes={
                    'key' : None
                    },
returns=[
                    [{displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED, attributeName=optimizedAggregation}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_IGNORED, attributeName=ignored}, {displayLabel=TASK_OUT_UNCHANGED_ACCOUNTS, attributeName=optimized}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CREATED, attributeName=created}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_UPDATED, attributeName=updated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_DELETED, attributeName=deleted}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES, attributeName=managerChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES, attributeName=detectedRoleChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES, attributeName=exceptionChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICIES, attributeName=policies}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS, attributeName=policyViolations}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS, attributeName=policyNotifications}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED, attributeName=scoresChanged}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED, attributeName=snapshotsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED, attributeName=scopesCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED, attributeName=scopesCorrelated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED, attributeName=scopesSelected}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT, attributeName=scopesDormant}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES, attributeName=unscopedIdentities}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED, attributeName=certificationsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED, attributeName=certificationsDeleted}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED, attributeName=applicationsGenerated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED, attributeName=managedAttributesCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP, attributeName=managedAttributesCreatedByApplication}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED, attributeName=identityEntitlementsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED, attributeName=groupsCreated}]
                    ]
)

```
[[Back to top]](#) 

