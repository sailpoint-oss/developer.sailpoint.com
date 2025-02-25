---
id: beta-load-uncorrelated-accounts-task
title: LoadUncorrelatedAccountsTask
pagination_label: LoadUncorrelatedAccountsTask
sidebar_label: LoadUncorrelatedAccountsTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadUncorrelatedAccountsTask', 'BetaLoadUncorrelatedAccountsTask'] 
slug: /tools/sdk/python/beta/models/load-uncorrelated-accounts-task
tags: ['SDK', 'Software Development Kit', 'LoadUncorrelatedAccountsTask', 'BetaLoadUncorrelatedAccountsTask']
---

# LoadUncorrelatedAccountsTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | The status of the result | [optional] [default to True]
**task** | [**LoadUncorrelatedAccountsTaskTask**](load-uncorrelated-accounts-task-task) |  | [optional] 
}

## Example

```python
from sailpoint.beta.models.load_uncorrelated_accounts_task import LoadUncorrelatedAccountsTask

load_uncorrelated_accounts_task = LoadUncorrelatedAccountsTask(
success=True,
task=sailpoint.beta.models.load_uncorrelated_accounts_task_task.LoadUncorrelatedAccountsTask_task(
                    id = '90b83a6bb737489494794f84cd3a51e6', 
                    type = 'QUARTZ', 
                    name = 'Cloud Process Uncorrelated Accounts', 
                    description = 'Processes uncorrelated accounts for the specified application.', 
                    launcher = 'John Doe', 
                    created = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    launched = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    completed = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    completion_status = 'Success', 
                    parent_name = 'Audit Report', 
                    messages = [], 
                    progress = 'Initializing...', 
                    attributes = sailpoint.beta.models.load_uncorrelated_accounts_task_task_attributes.LoadUncorrelatedAccountsTask_task_attributes(
                        qpoc_job_id = '5d303d46-fc51-48cd-9c6d-4e211e3ab63c', 
                        task_start_delay = sailpoint.beta.models.task_start_delay.taskStartDelay(), ), 
                    returns = [{displayLabel=TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_IGNORED, attributeName=correlationFailures}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_FAILURES, attributeName=ignored}, {displayLabel=TASK_OUT_UNCHANGED_ACCOUNTS, attributeName=optimized}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION__CREATED, attributeName=created}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_UPDATED, attributeName=updated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_DELETED, attributeName=deleted}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGER_CHANGES, attributeName=managerChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_BUSINESS_ROLE_CHANGES, attributeName=detectedRoleChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_EXCEPTION_CHANGES, attributeName=exceptionChanges}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICIES, attributeName=policies}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICY_VIOLATIONS, attributeName=policyViolations}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_POLICY_NOTIFICATIONS, attributeName=policyNotifications}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCORES_CHANGED, attributeName=scoresChanged}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SNAPSHOTS_CREATED, attributeName=snapshotsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CREATED, attributeName=scopesCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_CORRELATED, attributeName=scopesCorrelated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_SELECTED, attributeName=scopesSelected}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_SCOPES_DORMANT, attributeName=scopesDormant}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_UNSCOPED_IDENTITIES, attributeName=unscopedIdentities}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_CREATED, attributeName=certificationsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_CERTIFICATIONS_DELETED, attributeName=certificationsDeleted}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_APPLICATIONS_GENERATED, attributeName=applicationsGenerated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED, attributeName=managedAttributesCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP, attributeName=managedAttributesCreatedByApplication}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_IDENTITYENTITLEMENTS_CREATED, attributeName=identityEntitlementsCreated}, {displayLabel=TASK_OUT_ACCOUNT_CORRELATION_GROUPS_CREATED, attributeName=groupsCreated}], )
)

```
[[Back to top]](#) 

