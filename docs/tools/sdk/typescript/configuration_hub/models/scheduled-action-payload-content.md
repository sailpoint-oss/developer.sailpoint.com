# ScheduledActionPayloadContent

# ScheduledActionPayloadContent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | `string` | Name of the scheduled action (maximum 50 characters). | [default to undefined]
**backupOptions** | **(optional)** `ScheduledActionPayloadContentBackupOptions` |  | [default to undefined]
**sourceBackupId** | **(optional)** `string` | ID of the source backup. Required for CREATE_DRAFT jobs. | [default to undefined]
**sourceTenant** | **(optional)** `string` | Source tenant identifier. Required for CREATE_DRAFT jobs. | [default to undefined]
**draftId** | **(optional)** `string` | ID of the draft to be deployed. Required for CONFIG_DEPLOY_DRAFT jobs. | [default to undefined]

