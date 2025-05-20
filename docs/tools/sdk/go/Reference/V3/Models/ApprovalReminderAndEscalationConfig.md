---
id: approval-reminder-and-escalation-config
title: ApprovalReminderAndEscalationConfig
pagination_label: ApprovalReminderAndEscalationConfig
sidebar_label: ApprovalReminderAndEscalationConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalReminderAndEscalationConfig', 'ApprovalReminderAndEscalationConfig'] 
slug: /tools/sdk/go/v3/models/approval-reminder-and-escalation-config
tags: ['SDK', 'Software Development Kit', 'ApprovalReminderAndEscalationConfig', 'ApprovalReminderAndEscalationConfig']
---

# ApprovalReminderAndEscalationConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysUntilEscalation** | Pointer to **NullableInt32** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**DaysBetweenReminders** | Pointer to **NullableInt32** | Number of days to wait between reminder notifications. | [optional] 
**MaxReminders** | Pointer to **NullableInt32** | Maximum number of reminder notification to send to the reviewer before approval escalation. | [optional] 
**FallbackApproverRef** | Pointer to [**NullableIdentityReferenceWithNameAndEmail**](identity-reference-with-name-and-email) |  | [optional] 

## Methods

### NewApprovalReminderAndEscalationConfig

`func NewApprovalReminderAndEscalationConfig() *ApprovalReminderAndEscalationConfig`

NewApprovalReminderAndEscalationConfig instantiates a new ApprovalReminderAndEscalationConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalReminderAndEscalationConfigWithDefaults

`func NewApprovalReminderAndEscalationConfigWithDefaults() *ApprovalReminderAndEscalationConfig`

NewApprovalReminderAndEscalationConfigWithDefaults instantiates a new ApprovalReminderAndEscalationConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDaysUntilEscalation

`func (o *ApprovalReminderAndEscalationConfig) GetDaysUntilEscalation() int32`

GetDaysUntilEscalation returns the DaysUntilEscalation field if non-nil, zero value otherwise.

### GetDaysUntilEscalationOk

`func (o *ApprovalReminderAndEscalationConfig) GetDaysUntilEscalationOk() (*int32, bool)`

GetDaysUntilEscalationOk returns a tuple with the DaysUntilEscalation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilEscalation

`func (o *ApprovalReminderAndEscalationConfig) SetDaysUntilEscalation(v int32)`

SetDaysUntilEscalation sets DaysUntilEscalation field to given value.

### HasDaysUntilEscalation

`func (o *ApprovalReminderAndEscalationConfig) HasDaysUntilEscalation() bool`

HasDaysUntilEscalation returns a boolean if a field has been set.

### SetDaysUntilEscalationNil

`func (o *ApprovalReminderAndEscalationConfig) SetDaysUntilEscalationNil(b bool)`

 SetDaysUntilEscalationNil sets the value for DaysUntilEscalation to be an explicit nil

### UnsetDaysUntilEscalation
`func (o *ApprovalReminderAndEscalationConfig) UnsetDaysUntilEscalation()`

UnsetDaysUntilEscalation ensures that no value is present for DaysUntilEscalation, not even an explicit nil
### GetDaysBetweenReminders

`func (o *ApprovalReminderAndEscalationConfig) GetDaysBetweenReminders() int32`

GetDaysBetweenReminders returns the DaysBetweenReminders field if non-nil, zero value otherwise.

### GetDaysBetweenRemindersOk

`func (o *ApprovalReminderAndEscalationConfig) GetDaysBetweenRemindersOk() (*int32, bool)`

GetDaysBetweenRemindersOk returns a tuple with the DaysBetweenReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysBetweenReminders

`func (o *ApprovalReminderAndEscalationConfig) SetDaysBetweenReminders(v int32)`

SetDaysBetweenReminders sets DaysBetweenReminders field to given value.

### HasDaysBetweenReminders

`func (o *ApprovalReminderAndEscalationConfig) HasDaysBetweenReminders() bool`

HasDaysBetweenReminders returns a boolean if a field has been set.

### SetDaysBetweenRemindersNil

`func (o *ApprovalReminderAndEscalationConfig) SetDaysBetweenRemindersNil(b bool)`

 SetDaysBetweenRemindersNil sets the value for DaysBetweenReminders to be an explicit nil

### UnsetDaysBetweenReminders
`func (o *ApprovalReminderAndEscalationConfig) UnsetDaysBetweenReminders()`

UnsetDaysBetweenReminders ensures that no value is present for DaysBetweenReminders, not even an explicit nil
### GetMaxReminders

`func (o *ApprovalReminderAndEscalationConfig) GetMaxReminders() int32`

GetMaxReminders returns the MaxReminders field if non-nil, zero value otherwise.

### GetMaxRemindersOk

`func (o *ApprovalReminderAndEscalationConfig) GetMaxRemindersOk() (*int32, bool)`

GetMaxRemindersOk returns a tuple with the MaxReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxReminders

`func (o *ApprovalReminderAndEscalationConfig) SetMaxReminders(v int32)`

SetMaxReminders sets MaxReminders field to given value.

### HasMaxReminders

`func (o *ApprovalReminderAndEscalationConfig) HasMaxReminders() bool`

HasMaxReminders returns a boolean if a field has been set.

### SetMaxRemindersNil

`func (o *ApprovalReminderAndEscalationConfig) SetMaxRemindersNil(b bool)`

 SetMaxRemindersNil sets the value for MaxReminders to be an explicit nil

### UnsetMaxReminders
`func (o *ApprovalReminderAndEscalationConfig) UnsetMaxReminders()`

UnsetMaxReminders ensures that no value is present for MaxReminders, not even an explicit nil
### GetFallbackApproverRef

`func (o *ApprovalReminderAndEscalationConfig) GetFallbackApproverRef() IdentityReferenceWithNameAndEmail`

GetFallbackApproverRef returns the FallbackApproverRef field if non-nil, zero value otherwise.

### GetFallbackApproverRefOk

`func (o *ApprovalReminderAndEscalationConfig) GetFallbackApproverRefOk() (*IdentityReferenceWithNameAndEmail, bool)`

GetFallbackApproverRefOk returns a tuple with the FallbackApproverRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallbackApproverRef

`func (o *ApprovalReminderAndEscalationConfig) SetFallbackApproverRef(v IdentityReferenceWithNameAndEmail)`

SetFallbackApproverRef sets FallbackApproverRef field to given value.

### HasFallbackApproverRef

`func (o *ApprovalReminderAndEscalationConfig) HasFallbackApproverRef() bool`

HasFallbackApproverRef returns a boolean if a field has been set.

### SetFallbackApproverRefNil

`func (o *ApprovalReminderAndEscalationConfig) SetFallbackApproverRefNil(b bool)`

 SetFallbackApproverRefNil sets the value for FallbackApproverRef to be an explicit nil

### UnsetFallbackApproverRef
`func (o *ApprovalReminderAndEscalationConfig) UnsetFallbackApproverRef()`

UnsetFallbackApproverRef ensures that no value is present for FallbackApproverRef, not even an explicit nil

