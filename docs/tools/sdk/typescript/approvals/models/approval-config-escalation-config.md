# ApprovalConfigEscalationConfig

# ApprovalConfigEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **(optional)** `boolean` | Indicates if escalations are enabled. | [default to false]
**daysUntilFirstEscalation** | **(optional)** `number` | Number of days until the first escalation. | [default to undefined]
**escalationCronSchedule** | **(optional)** `string` | Cron schedule for escalations. | [default to undefined]
**escalationChain** | **(optional)** `Array<ApprovalConfigEscalationConfigEscalationChainInner>` | Escalation chain configuration. | [default to undefined]

