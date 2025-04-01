---
id: v2025-load-uncorrelated-accounts-task-task
title: LoadUncorrelatedAccountsTaskTask
pagination_label: LoadUncorrelatedAccountsTaskTask
sidebar_label: LoadUncorrelatedAccountsTaskTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadUncorrelatedAccountsTaskTask', 'V2025LoadUncorrelatedAccountsTaskTask'] 
slug: /tools/sdk/python/v2025/models/load-uncorrelated-accounts-task-task
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTaskTask', 'V2025LoadUncorrelatedAccountsTaskTask']
---

# LoadUncorrelatedAccountsTaskTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | System-generated unique ID of the task this taskStatus represents | [optional] 
**type** | **str** | Type of task this task represents | [optional] 
**name** | **str** | The name of uncorrelated accounts process | [optional] 
**description** | **str** | The description of the task | [optional] 
**launcher** | **str** | The user who initiated the task | [optional] 
**created** | **datetime** | The Task creation date | [optional] 
**launched** | **datetime** | The task start date | [optional] 
**completed** | **datetime** | The task completion date | [optional] 
**completion_status** |  **Enum** [  'SUCCESS',    'WARNING',    'ERROR',    'TERMINATED',    'TEMP_ERROR' ] | Task completion status. | [optional] 
**parent_name** | **str** | Name of the parent task if exists. | [optional] 
**messages** | [**[]LoadUncorrelatedAccountsTaskTaskMessagesInner**](load-uncorrelated-accounts-task-task-messages-inner) | List of the messages dedicated to the report.  From task definition perspective here usually should be warnings or errors. | [optional] 
**progress** | **str** | Current task state. | [optional] 
**attributes** | [**LoadUncorrelatedAccountsTaskTaskAttributes**](load-uncorrelated-accounts-task-task-attributes) |  | [optional] 
**returns** | **object** | Return values from the task | [optional] 
}

## Example

```python
from sailpoint.v2025.models.load_uncorrelated_accounts_task_task import LoadUncorrelatedAccountsTaskTask

load_uncorrelated_accounts_task_task = LoadUncorrelatedAccountsTaskTask(
id='90b83a6bb737489494794f84cd3a51e6',
type='QUARTZ',
name='Cloud Process Uncorrelated Accounts',
description='Processes uncorrelated accounts for the specified application.',
launcher='John Doe',
created=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
launched=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completed=datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'),
completion_status='Success',
parent_name='Audit Report',
messages=[],
progress='Initializing...',
attributes=sailpoint.v2025.models.load_uncorrelated_accounts_task_task_attributes.LoadUncorrelatedAccountsTask_task_attributes(
                    qpoc_job_id = '5d303d46-fc51-48cd-9c6d-4e211e3ab63c', 
                    task_start_delay = sailpoint.v2025.models.task_start_delay.taskStartDelay(), ),
returns=[{displayLabel=TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_IGNORED, attributeName=correlationFailures}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_FAILURES, attributeName=ignored}, {displayLabel=TASK_OUT_UNCHANGED_ACCOUNTS, attributeName=optimized}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION__CREATED, attributeName=created}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_UPDATED, attributeName=updated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_DELETED, attributeName=deleted}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGER_CHANGES, attributeName=managerChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_BUSINESS_ROLE_CHANGES, attributeName=detectedRoleChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_EXCEPTION_CHANGES, attributeName=exceptionChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICIES, attributeName=policies}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICY_VIOLATIONS, attributeName=policyViolations}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICY_NOTIFICATIONS, attributeName=policyNotifications}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCORES_CHANGED, attributeName=scoresChanged}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SNAPSHOTS_CREATED, attributeName=snapshotsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CREATED, attributeName=scopesCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CORRELATED, attributeName=scopesCorrelated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_SELECTED, attributeName=scopesSelected}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_DORMANT, attributeName=scopesDormant}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_UNSCOPED_IDENTITIES, attributeName=unscopedIdentities}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_CREATED, attributeName=certificationsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_DELETED, attributeName=certificationsDeleted}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS_GENERATED, attributeName=applicationsGenerated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED, attributeName=managedAttributesCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP, attributeName=managedAttributesCreatedByApplication}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_IDENTITYENTITLEMENTS_CREATED, attributeName=identityEntitlementsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_GROUPS_CREATED, attributeName=groupsCreated}]
)

```
[[Back to top]](#) 

