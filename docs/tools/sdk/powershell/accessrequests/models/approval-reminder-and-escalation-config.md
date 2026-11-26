# ApprovalReminderAndEscalationConfig

# ApprovalReminderAndEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysUntilEscalation** | **Int32** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**DaysBetweenReminders** | **Int32** | Number of days to wait between reminder notifications. | [optional] 
**MaxReminders** | **Int32** | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [optional] 
**FallbackApproverRef** | [**IdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 

## Examples

- Prepare the resource
```powershell
$ApprovalReminderAndEscalationConfig = Initialize-ApprovalReminderAndEscalationConfig  -DaysUntilEscalation 0 `
 -DaysBetweenReminders 0 `
 -MaxReminders 1 `
 -FallbackApproverRef null
```

- Convert the resource to JSON
```powershell
$ApprovalReminderAndEscalationConfig | ConvertTo-JSON
```


[[Back to top]](#) 

