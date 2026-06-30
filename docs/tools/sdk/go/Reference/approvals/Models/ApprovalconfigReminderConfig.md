---
id: v1-approvalconfig-reminder-config
title: ApprovalconfigReminderConfig
pagination_label: ApprovalconfigReminderConfig
sidebar_label: ApprovalconfigReminderConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ApprovalconfigReminderConfig', 'V1ApprovalconfigReminderConfig'] 
slug: /tools/sdk/go/approvals/models/approvalconfig-reminder-config
tags: ['SDK', 'Software Development Kit', 'ApprovalconfigReminderConfig', 'V1ApprovalconfigReminderConfig']
---

# ApprovalconfigReminderConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Enabled** | Pointer to **bool** | Indicates if reminders are enabled. | [optional] [default to false]
**DaysUntilFirstReminder** | Pointer to **int64** | Number of days until the first reminder. | [optional] 
**ReminderCronSchedule** | Pointer to **string** | Cron schedule for reminders. | [optional] 
**MaxReminders** | Pointer to **int64** | Maximum number of reminders. Max is 20. | [optional] 

## Methods

### NewApprovalconfigReminderConfig

`func NewApprovalconfigReminderConfig() *ApprovalconfigReminderConfig`

NewApprovalconfigReminderConfig instantiates a new ApprovalconfigReminderConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalconfigReminderConfigWithDefaults

`func NewApprovalconfigReminderConfigWithDefaults() *ApprovalconfigReminderConfig`

NewApprovalconfigReminderConfigWithDefaults instantiates a new ApprovalconfigReminderConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetEnabled

`func (o *ApprovalconfigReminderConfig) GetEnabled() bool`

GetEnabled returns the Enabled field if non-nil, zero value otherwise.

### GetEnabledOk

`func (o *ApprovalconfigReminderConfig) GetEnabledOk() (*bool, bool)`

GetEnabledOk returns a tuple with the Enabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEnabled

`func (o *ApprovalconfigReminderConfig) SetEnabled(v bool)`

SetEnabled sets Enabled field to given value.

### HasEnabled

`func (o *ApprovalconfigReminderConfig) HasEnabled() bool`

HasEnabled returns a boolean if a field has been set.

### GetDaysUntilFirstReminder

`func (o *ApprovalconfigReminderConfig) GetDaysUntilFirstReminder() int64`

GetDaysUntilFirstReminder returns the DaysUntilFirstReminder field if non-nil, zero value otherwise.

### GetDaysUntilFirstReminderOk

`func (o *ApprovalconfigReminderConfig) GetDaysUntilFirstReminderOk() (*int64, bool)`

GetDaysUntilFirstReminderOk returns a tuple with the DaysUntilFirstReminder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilFirstReminder

`func (o *ApprovalconfigReminderConfig) SetDaysUntilFirstReminder(v int64)`

SetDaysUntilFirstReminder sets DaysUntilFirstReminder field to given value.

### HasDaysUntilFirstReminder

`func (o *ApprovalconfigReminderConfig) HasDaysUntilFirstReminder() bool`

HasDaysUntilFirstReminder returns a boolean if a field has been set.

### GetReminderCronSchedule

`func (o *ApprovalconfigReminderConfig) GetReminderCronSchedule() string`

GetReminderCronSchedule returns the ReminderCronSchedule field if non-nil, zero value otherwise.

### GetReminderCronScheduleOk

`func (o *ApprovalconfigReminderConfig) GetReminderCronScheduleOk() (*string, bool)`

GetReminderCronScheduleOk returns a tuple with the ReminderCronSchedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReminderCronSchedule

`func (o *ApprovalconfigReminderConfig) SetReminderCronSchedule(v string)`

SetReminderCronSchedule sets ReminderCronSchedule field to given value.

### HasReminderCronSchedule

`func (o *ApprovalconfigReminderConfig) HasReminderCronSchedule() bool`

HasReminderCronSchedule returns a boolean if a field has been set.

### GetMaxReminders

`func (o *ApprovalconfigReminderConfig) GetMaxReminders() int64`

GetMaxReminders returns the MaxReminders field if non-nil, zero value otherwise.

### GetMaxRemindersOk

`func (o *ApprovalconfigReminderConfig) GetMaxRemindersOk() (*int64, bool)`

GetMaxRemindersOk returns a tuple with the MaxReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxReminders

`func (o *ApprovalconfigReminderConfig) SetMaxReminders(v int64)`

SetMaxReminders sets MaxReminders field to given value.

### HasMaxReminders

`func (o *ApprovalconfigReminderConfig) HasMaxReminders() bool`

HasMaxReminders returns a boolean if a field has been set.


