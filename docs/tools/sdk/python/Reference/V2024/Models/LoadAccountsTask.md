---
id: v2024-load-accounts-task
title: LoadAccountsTask
pagination_label: LoadAccountsTask
sidebar_label: LoadAccountsTask
sidebar_class_name: pythonsdk
keywords: ['python', 'Python', 'sdk', 'LoadAccountsTask', 'V2024LoadAccountsTask'] 
slug: /tools/sdk/python/v2024/models/load-accounts-task
tags: ['SDK', 'Software Development Kit', 'LoadAccountsTask', 'V2024LoadAccountsTask']
---

# LoadAccountsTask


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**success** | **bool** | The status of the result | [optional] [default to True]
**task** | [**LoadAccountsTaskTask**](load-accounts-task-task) |  | [optional] 
}

## Example

```python
from sailpoint.v2024.models.load_accounts_task import LoadAccountsTask

load_accounts_task = LoadAccountsTask(
success=True,
task=sailpoint.v2024.models.load_accounts_task_task.LoadAccountsTask_task(
                    id = 'ef38f94347e94562b5bb8424a56397d8', 
                    type = 'QUARTZ', 
                    name = 'Cloud Account Aggregation', 
                    description = 'Aggregate from the specified application', 
                    launcher = 'John Doe', 
                    created = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    launched = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    completed = datetime.datetime.strptime('2013-10-20 19:20:30.00', '%Y-%m-%d %H:%M:%S.%f'), 
                    completion_status = 'Success', 
                    parent_name = 'Audit Report', 
                    messages = [], 
                    progress = 'Initializing...', 
                    attributes = {
                        'key' : None
                        }, 
                    returns = [
                        [{displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS, attributeName=applications}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_TOTAL, attributeName=total}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_OPTIMIZED, attributeName=optimizedAggregation}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_IGNORED, attributeName=ignored}, {displayLabel=TASK_OUT_UNCHANGED_ACCOUNTS, attributeName=optimized}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CREATED, attributeName=created}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_UPDATED, attributeName=updated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_DELETED, attributeName=deleted}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGER_CHANGES, attributeName=managerChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_BUSINESS_ROLE_CHANGES, attributeName=detectedRoleChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_EXCEPTION_CHANGES, attributeName=exceptionChanges}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICIES, attributeName=policies}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICY_VIOLATIONS, attributeName=policyViolations}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_POLICY_NOTIFICATIONS, attributeName=policyNotifications}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCORES_CHANGED, attributeName=scoresChanged}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SNAPSHOTS_CREATED, attributeName=snapshotsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CREATED, attributeName=scopesCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_CORRELATED, attributeName=scopesCorrelated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_SELECTED, attributeName=scopesSelected}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_SCOPES_DORMANT, attributeName=scopesDormant}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_UNSCOPED_IDENTITIES, attributeName=unscopedIdentities}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_CREATED, attributeName=certificationsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_CERTIFICATIONS_DELETED, attributeName=certificationsDeleted}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_APPLICATIONS_GENERATED, attributeName=applicationsGenerated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED, attributeName=managedAttributesCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_MANAGED_ATTRIBUTES_PROMOTED_BY_APP, attributeName=managedAttributesCreatedByApplication}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_IDENTITYENTITLEMENTS_CREATED, attributeName=identityEntitlementsCreated}, {displayLabel=TASK_OUT_ACCOUNT_AGGREGATION_GROUPS_CREATED, attributeName=groupsCreated}]
                        ], )
)

```
[[Back to top]](#) 

