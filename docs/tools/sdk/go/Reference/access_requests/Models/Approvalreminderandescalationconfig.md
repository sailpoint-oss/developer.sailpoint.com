---
id: v1-approvalreminderandescalationconfig
title: Approvalreminderandescalationconfig
pagination_label: Approvalreminderandescalationconfig
sidebar_label: Approvalreminderandescalationconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Approvalreminderandescalationconfig', 'V1Approvalreminderandescalationconfig'] 
slug: /tools/sdk/go/accessrequests/models/approvalreminderandescalationconfig
tags: ['SDK', 'Software Development Kit', 'Approvalreminderandescalationconfig', 'V1Approvalreminderandescalationconfig']
---

# Approvalreminderandescalationconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DaysUntilEscalation** | Pointer to **NullableInt32** | Number of days to wait before the first reminder. If no reminders are configured, then this is the number of days to wait before escalation. | [optional] 
**DaysBetweenReminders** | Pointer to **NullableInt32** | Number of days to wait between reminder notifications. | [optional] 
**MaxReminders** | Pointer to **NullableInt32** | Maximum number of reminder notifications to send to the reviewer before approval escalation. The maximum allowed value is 20. | [optional] 
**FallbackApproverRef** | Pointer to [**NullableIdentityreferencewithnameandemail**](identityreferencewithnameandemail) |  | [optional] 

## Methods

### NewApprovalreminderandescalationconfig

`func NewApprovalreminderandescalationconfig() *Approvalreminderandescalationconfig`

NewApprovalreminderandescalationconfig instantiates a new Approvalreminderandescalationconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApprovalreminderandescalationconfigWithDefaults

`func NewApprovalreminderandescalationconfigWithDefaults() *Approvalreminderandescalationconfig`

NewApprovalreminderandescalationconfigWithDefaults instantiates a new Approvalreminderandescalationconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDaysUntilEscalation

`func (o *Approvalreminderandescalationconfig) GetDaysUntilEscalation() int32`

GetDaysUntilEscalation returns the DaysUntilEscalation field if non-nil, zero value otherwise.

### GetDaysUntilEscalationOk

`func (o *Approvalreminderandescalationconfig) GetDaysUntilEscalationOk() (*int32, bool)`

GetDaysUntilEscalationOk returns a tuple with the DaysUntilEscalation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysUntilEscalation

`func (o *Approvalreminderandescalationconfig) SetDaysUntilEscalation(v int32)`

SetDaysUntilEscalation sets DaysUntilEscalation field to given value.

### HasDaysUntilEscalation

`func (o *Approvalreminderandescalationconfig) HasDaysUntilEscalation() bool`

HasDaysUntilEscalation returns a boolean if a field has been set.

### SetDaysUntilEscalationNil

`func (o *Approvalreminderandescalationconfig) SetDaysUntilEscalationNil(b bool)`

 SetDaysUntilEscalationNil sets the value for DaysUntilEscalation to be an explicit nil

### UnsetDaysUntilEscalation
`func (o *Approvalreminderandescalationconfig) UnsetDaysUntilEscalation()`

UnsetDaysUntilEscalation ensures that no value is present for DaysUntilEscalation, not even an explicit nil
### GetDaysBetweenReminders

`func (o *Approvalreminderandescalationconfig) GetDaysBetweenReminders() int32`

GetDaysBetweenReminders returns the DaysBetweenReminders field if non-nil, zero value otherwise.

### GetDaysBetweenRemindersOk

`func (o *Approvalreminderandescalationconfig) GetDaysBetweenRemindersOk() (*int32, bool)`

GetDaysBetweenRemindersOk returns a tuple with the DaysBetweenReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDaysBetweenReminders

`func (o *Approvalreminderandescalationconfig) SetDaysBetweenReminders(v int32)`

SetDaysBetweenReminders sets DaysBetweenReminders field to given value.

### HasDaysBetweenReminders

`func (o *Approvalreminderandescalationconfig) HasDaysBetweenReminders() bool`

HasDaysBetweenReminders returns a boolean if a field has been set.

### SetDaysBetweenRemindersNil

`func (o *Approvalreminderandescalationconfig) SetDaysBetweenRemindersNil(b bool)`

 SetDaysBetweenRemindersNil sets the value for DaysBetweenReminders to be an explicit nil

### UnsetDaysBetweenReminders
`func (o *Approvalreminderandescalationconfig) UnsetDaysBetweenReminders()`

UnsetDaysBetweenReminders ensures that no value is present for DaysBetweenReminders, not even an explicit nil
### GetMaxReminders

`func (o *Approvalreminderandescalationconfig) GetMaxReminders() int32`

GetMaxReminders returns the MaxReminders field if non-nil, zero value otherwise.

### GetMaxRemindersOk

`func (o *Approvalreminderandescalationconfig) GetMaxRemindersOk() (*int32, bool)`

GetMaxRemindersOk returns a tuple with the MaxReminders field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxReminders

`func (o *Approvalreminderandescalationconfig) SetMaxReminders(v int32)`

SetMaxReminders sets MaxReminders field to given value.

### HasMaxReminders

`func (o *Approvalreminderandescalationconfig) HasMaxReminders() bool`

HasMaxReminders returns a boolean if a field has been set.

### SetMaxRemindersNil

`func (o *Approvalreminderandescalationconfig) SetMaxRemindersNil(b bool)`

 SetMaxRemindersNil sets the value for MaxReminders to be an explicit nil

### UnsetMaxReminders
`func (o *Approvalreminderandescalationconfig) UnsetMaxReminders()`

UnsetMaxReminders ensures that no value is present for MaxReminders, not even an explicit nil
### GetFallbackApproverRef

`func (o *Approvalreminderandescalationconfig) GetFallbackApproverRef() Identityreferencewithnameandemail`

GetFallbackApproverRef returns the FallbackApproverRef field if non-nil, zero value otherwise.

### GetFallbackApproverRefOk

`func (o *Approvalreminderandescalationconfig) GetFallbackApproverRefOk() (*Identityreferencewithnameandemail, bool)`

GetFallbackApproverRefOk returns a tuple with the FallbackApproverRef field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFallbackApproverRef

`func (o *Approvalreminderandescalationconfig) SetFallbackApproverRef(v Identityreferencewithnameandemail)`

SetFallbackApproverRef sets FallbackApproverRef field to given value.

### HasFallbackApproverRef

`func (o *Approvalreminderandescalationconfig) HasFallbackApproverRef() bool`

HasFallbackApproverRef returns a boolean if a field has been set.

### SetFallbackApproverRefNil

`func (o *Approvalreminderandescalationconfig) SetFallbackApproverRefNil(b bool)`

 SetFallbackApproverRefNil sets the value for FallbackApproverRef to be an explicit nil

### UnsetFallbackApproverRef
`func (o *Approvalreminderandescalationconfig) UnsetFallbackApproverRef()`

UnsetFallbackApproverRef ensures that no value is present for FallbackApproverRef, not even an explicit nil

