---
id: v2025-approval-config-reminder-config
title: ApprovalConfigReminderConfig
pagination_label: ApprovalConfigReminderConfig
sidebar_label: ApprovalConfigReminderConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalConfigReminderConfig', 'V2025ApprovalConfigReminderConfig'] 
slug: /tools/sdk/go/v2025/models/approval-config-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalConfigReminderConfig', 'V2025ApprovalConfigReminderConfig']
---

# ApprovalConfigReminderConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if reminders are enabled. | [optional] [default to false]
**DaysUntilFirstReminder** | Pointer to **int64** | Number of days until the first reminder. | [optional] 
**ReminderCronSchedule** | Pointer to **string** | Cron schedule for reminders. | [optional] 
**MaxReminders** | Pointer to **int64** | Maximum number of reminders. Max is 20. | [optional] 

## Methods

### NewApprovalConfigReminderConfig

`func NewApprovalConfigReminderConfig() *ApprovalConfigReminderConfig`

NewApprovalConfigReminderConfig instantiates a new ApprovalConfigReminderConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalConfigReminderConfigWithDefaults

`func NewApprovalConfigReminderConfigWithDefaults() *ApprovalConfigReminderConfig`

NewApprovalConfigReminderConfigWithDefaults instantiates a new ApprovalConfigReminderConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ApprovalConfigReminderConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ApprovalConfigReminderConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ApprovalConfigReminderConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ApprovalConfigReminderConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDaysUntilFirstReminder

`func (o *ApprovalConfigReminderConfig) GetDaysUntilFirstReminder() int64`

GetDaysUntilFirstReminder returns the DaysUntilFirstReminder field if non-nil, zero value otherwise.

### GetDaysUntilFirstReminderOk

`func (o *ApprovalConfigReminderConfig) GetDaysUntilFirstReminderOk() (*int64, bool)`

GetDaysUntilFirstReminderOk returns a tuple with the DaysUntilFirstReminder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilFirstReminder

`func (o *ApprovalConfigReminderConfig) SetDaysUntilFirstReminder(v int64)`

SetDaysUntilFirstReminder sets DaysUntilFirstReminder field to given value.

### HasDaysUntilFirstReminder

`func (o *ApprovalConfigReminderConfig) HasDaysUntilFirstReminder() bool`

HasDaysUntilFirstReminder returns a boolean if a field has been set.

### GetReminderCronSchedule

`func (o *ApprovalConfigReminderConfig) GetReminderCronSchedule() string`

GetReminderCronSchedule returns the ReminderCronSchedule field if non-nil, zero value otherwise.

### GetReminderCronScheduleOk

`func (o *ApprovalConfigReminderConfig) GetReminderCronScheduleOk() (*string, bool)`

GetReminderCronScheduleOk returns a tuple with the ReminderCronSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminderCronSchedule

`func (o *ApprovalConfigReminderConfig) SetReminderCronSchedule(v string)`

SetReminderCronSchedule sets ReminderCronSchedule field to given value.

### HasReminderCronSchedule

`func (o *ApprovalConfigReminderConfig) HasReminderCronSchedule() bool`

HasReminderCronSchedule returns a boolean if a field has been set.

### GetMaxReminders

`func (o *ApprovalConfigReminderConfig) GetMaxReminders() int64`

GetMaxReminders returns the MaxReminders field if non-nil, zero value otherwise.

### GetMaxRemindersOk

`func (o *ApprovalConfigReminderConfig) GetMaxRemindersOk() (*int64, bool)`

GetMaxRemindersOk returns a tuple with the MaxReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxReminders

`func (o *ApprovalConfigReminderConfig) SetMaxReminders(v int64)`

SetMaxReminders sets MaxReminders field to given value.

### HasMaxReminders

`func (o *ApprovalConfigReminderConfig) HasMaxReminders() bool`

HasMaxReminders returns a boolean if a field has been set.


