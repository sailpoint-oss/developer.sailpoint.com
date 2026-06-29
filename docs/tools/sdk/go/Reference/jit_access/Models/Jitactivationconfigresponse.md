---
id: v1-jitactivationconfigresponse
title: Jitactivationconfigresponse
pagination_label: Jitactivationconfigresponse
sidebar_label: Jitactivationconfigresponse
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Jitactivationconfigresponse', 'V1Jitactivationconfigresponse'] 
slug: /tools/sdk/go/jitaccess/models/jitactivationconfigresponse
tags: ['SDK', 'Software Development Kit', 'Jitactivationconfigresponse', 'V1Jitactivationconfigresponse']
---

# Jitactivationconfigresponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | **string** | Unique identifier of this JIT activation configuration instance (persisted config id).  | 
**EntitlementIds** | Pointer to **[]string** | Entitlement IDs governed by JIT activation policy. May be a single-element array when only one entitlement is in scope.  | [optional] 
**MaxActivationPeriodMins** | Pointer to **NullableInt32** | Maximum allowed JIT activation duration for a single grant, in minutes; null if unset. | [optional] 
**MaxActivationPeriodExtensionMins** | Pointer to **NullableInt32** | Maximum allowed extension of an active JIT activation, in minutes; null if unset. | [optional] 
**DefaultMaxActivationPeriodMins** | Pointer to **NullableInt32** | Default activation duration offered when a user requests JIT access, in minutes; null if unset. | [optional] 
**DefaultMaxActivationPeriodExtensionMins** | Pointer to **NullableInt32** | Default extension duration offered for an active JIT activation, in minutes; null if unset. | [optional] 
**NotificationRecipients** | Pointer to **[]string** | Email addresses notified for JIT activation events (for example policy owners or a shared mailbox).  | [optional] 
**NotificationTemplate** | Pointer to **NullableString** | Name or key of the email template used for JIT activation notifications; null if unset. | [optional] 
**ApplyToFutureAssignments** | **bool** | Whether the policy applies to future entitlement assignments. | 

## Methods

### NewJitactivationconfigresponse

`func NewJitactivationconfigresponse(id string, applyToFutureAssignments bool, ) *Jitactivationconfigresponse`

NewJitactivationconfigresponse instantiates a new Jitactivationconfigresponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewJitactivationconfigresponseWithDefaults

`func NewJitactivationconfigresponseWithDefaults() *Jitactivationconfigresponse`

NewJitactivationconfigresponseWithDefaults instantiates a new Jitactivationconfigresponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Jitactivationconfigresponse) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Jitactivationconfigresponse) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Jitactivationconfigresponse) SetId(v string)`

SetId sets Id field to given value.


### GetEntitlementIds

`func (o *Jitactivationconfigresponse) GetEntitlementIds() []string`

GetEntitlementIds returns the EntitlementIds field if non-nil, zero value otherwise.

### GetEntitlementIdsOk

`func (o *Jitactivationconfigresponse) GetEntitlementIdsOk() (*[]string, bool)`

GetEntitlementIdsOk returns a tuple with the EntitlementIds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementIds

`func (o *Jitactivationconfigresponse) SetEntitlementIds(v []string)`

SetEntitlementIds sets EntitlementIds field to given value.

### HasEntitlementIds

`func (o *Jitactivationconfigresponse) HasEntitlementIds() bool`

HasEntitlementIds returns a boolean if a field has been set.

### GetMaxActivationPeriodMins

`func (o *Jitactivationconfigresponse) GetMaxActivationPeriodMins() int32`

GetMaxActivationPeriodMins returns the MaxActivationPeriodMins field if non-nil, zero value otherwise.

### GetMaxActivationPeriodMinsOk

`func (o *Jitactivationconfigresponse) GetMaxActivationPeriodMinsOk() (*int32, bool)`

GetMaxActivationPeriodMinsOk returns a tuple with the MaxActivationPeriodMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxActivationPeriodMins

`func (o *Jitactivationconfigresponse) SetMaxActivationPeriodMins(v int32)`

SetMaxActivationPeriodMins sets MaxActivationPeriodMins field to given value.

### HasMaxActivationPeriodMins

`func (o *Jitactivationconfigresponse) HasMaxActivationPeriodMins() bool`

HasMaxActivationPeriodMins returns a boolean if a field has been set.

### SetMaxActivationPeriodMinsNil

`func (o *Jitactivationconfigresponse) SetMaxActivationPeriodMinsNil(b bool)`

 SetMaxActivationPeriodMinsNil sets the value for MaxActivationPeriodMins to be an explicit nil

### UnsetMaxActivationPeriodMins
`func (o *Jitactivationconfigresponse) UnsetMaxActivationPeriodMins()`

UnsetMaxActivationPeriodMins ensures that no value is present for MaxActivationPeriodMins, not even an explicit nil
### GetMaxActivationPeriodExtensionMins

`func (o *Jitactivationconfigresponse) GetMaxActivationPeriodExtensionMins() int32`

GetMaxActivationPeriodExtensionMins returns the MaxActivationPeriodExtensionMins field if non-nil, zero value otherwise.

### GetMaxActivationPeriodExtensionMinsOk

`func (o *Jitactivationconfigresponse) GetMaxActivationPeriodExtensionMinsOk() (*int32, bool)`

GetMaxActivationPeriodExtensionMinsOk returns a tuple with the MaxActivationPeriodExtensionMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxActivationPeriodExtensionMins

`func (o *Jitactivationconfigresponse) SetMaxActivationPeriodExtensionMins(v int32)`

SetMaxActivationPeriodExtensionMins sets MaxActivationPeriodExtensionMins field to given value.

### HasMaxActivationPeriodExtensionMins

`func (o *Jitactivationconfigresponse) HasMaxActivationPeriodExtensionMins() bool`

HasMaxActivationPeriodExtensionMins returns a boolean if a field has been set.

### SetMaxActivationPeriodExtensionMinsNil

`func (o *Jitactivationconfigresponse) SetMaxActivationPeriodExtensionMinsNil(b bool)`

 SetMaxActivationPeriodExtensionMinsNil sets the value for MaxActivationPeriodExtensionMins to be an explicit nil

### UnsetMaxActivationPeriodExtensionMins
`func (o *Jitactivationconfigresponse) UnsetMaxActivationPeriodExtensionMins()`

UnsetMaxActivationPeriodExtensionMins ensures that no value is present for MaxActivationPeriodExtensionMins, not even an explicit nil
### GetDefaultMaxActivationPeriodMins

`func (o *Jitactivationconfigresponse) GetDefaultMaxActivationPeriodMins() int32`

GetDefaultMaxActivationPeriodMins returns the DefaultMaxActivationPeriodMins field if non-nil, zero value otherwise.

### GetDefaultMaxActivationPeriodMinsOk

`func (o *Jitactivationconfigresponse) GetDefaultMaxActivationPeriodMinsOk() (*int32, bool)`

GetDefaultMaxActivationPeriodMinsOk returns a tuple with the DefaultMaxActivationPeriodMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultMaxActivationPeriodMins

`func (o *Jitactivationconfigresponse) SetDefaultMaxActivationPeriodMins(v int32)`

SetDefaultMaxActivationPeriodMins sets DefaultMaxActivationPeriodMins field to given value.

### HasDefaultMaxActivationPeriodMins

`func (o *Jitactivationconfigresponse) HasDefaultMaxActivationPeriodMins() bool`

HasDefaultMaxActivationPeriodMins returns a boolean if a field has been set.

### SetDefaultMaxActivationPeriodMinsNil

`func (o *Jitactivationconfigresponse) SetDefaultMaxActivationPeriodMinsNil(b bool)`

 SetDefaultMaxActivationPeriodMinsNil sets the value for DefaultMaxActivationPeriodMins to be an explicit nil

### UnsetDefaultMaxActivationPeriodMins
`func (o *Jitactivationconfigresponse) UnsetDefaultMaxActivationPeriodMins()`

UnsetDefaultMaxActivationPeriodMins ensures that no value is present for DefaultMaxActivationPeriodMins, not even an explicit nil
### GetDefaultMaxActivationPeriodExtensionMins

`func (o *Jitactivationconfigresponse) GetDefaultMaxActivationPeriodExtensionMins() int32`

GetDefaultMaxActivationPeriodExtensionMins returns the DefaultMaxActivationPeriodExtensionMins field if non-nil, zero value otherwise.

### GetDefaultMaxActivationPeriodExtensionMinsOk

`func (o *Jitactivationconfigresponse) GetDefaultMaxActivationPeriodExtensionMinsOk() (*int32, bool)`

GetDefaultMaxActivationPeriodExtensionMinsOk returns a tuple with the DefaultMaxActivationPeriodExtensionMins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDefaultMaxActivationPeriodExtensionMins

`func (o *Jitactivationconfigresponse) SetDefaultMaxActivationPeriodExtensionMins(v int32)`

SetDefaultMaxActivationPeriodExtensionMins sets DefaultMaxActivationPeriodExtensionMins field to given value.

### HasDefaultMaxActivationPeriodExtensionMins

`func (o *Jitactivationconfigresponse) HasDefaultMaxActivationPeriodExtensionMins() bool`

HasDefaultMaxActivationPeriodExtensionMins returns a boolean if a field has been set.

### SetDefaultMaxActivationPeriodExtensionMinsNil

`func (o *Jitactivationconfigresponse) SetDefaultMaxActivationPeriodExtensionMinsNil(b bool)`

 SetDefaultMaxActivationPeriodExtensionMinsNil sets the value for DefaultMaxActivationPeriodExtensionMins to be an explicit nil

### UnsetDefaultMaxActivationPeriodExtensionMins
`func (o *Jitactivationconfigresponse) UnsetDefaultMaxActivationPeriodExtensionMins()`

UnsetDefaultMaxActivationPeriodExtensionMins ensures that no value is present for DefaultMaxActivationPeriodExtensionMins, not even an explicit nil
### GetNotificationRecipients

`func (o *Jitactivationconfigresponse) GetNotificationRecipients() []string`

GetNotificationRecipients returns the NotificationRecipients field if non-nil, zero value otherwise.

### GetNotificationRecipientsOk

`func (o *Jitactivationconfigresponse) GetNotificationRecipientsOk() (*[]string, bool)`

GetNotificationRecipientsOk returns a tuple with the NotificationRecipients field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationRecipients

`func (o *Jitactivationconfigresponse) SetNotificationRecipients(v []string)`

SetNotificationRecipients sets NotificationRecipients field to given value.

### HasNotificationRecipients

`func (o *Jitactivationconfigresponse) HasNotificationRecipients() bool`

HasNotificationRecipients returns a boolean if a field has been set.

### GetNotificationTemplate

`func (o *Jitactivationconfigresponse) GetNotificationTemplate() string`

GetNotificationTemplate returns the NotificationTemplate field if non-nil, zero value otherwise.

### GetNotificationTemplateOk

`func (o *Jitactivationconfigresponse) GetNotificationTemplateOk() (*string, bool)`

GetNotificationTemplateOk returns a tuple with the NotificationTemplate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNotificationTemplate

`func (o *Jitactivationconfigresponse) SetNotificationTemplate(v string)`

SetNotificationTemplate sets NotificationTemplate field to given value.

### HasNotificationTemplate

`func (o *Jitactivationconfigresponse) HasNotificationTemplate() bool`

HasNotificationTemplate returns a boolean if a field has been set.

### SetNotificationTemplateNil

`func (o *Jitactivationconfigresponse) SetNotificationTemplateNil(b bool)`

 SetNotificationTemplateNil sets the value for NotificationTemplate to be an explicit nil

### UnsetNotificationTemplate
`func (o *Jitactivationconfigresponse) UnsetNotificationTemplate()`

UnsetNotificationTemplate ensures that no value is present for NotificationTemplate, not even an explicit nil
### GetApplyToFutureAssignments

`func (o *Jitactivationconfigresponse) GetApplyToFutureAssignments() bool`

GetApplyToFutureAssignments returns the ApplyToFutureAssignments field if non-nil, zero value otherwise.

### GetApplyToFutureAssignmentsOk

`func (o *Jitactivationconfigresponse) GetApplyToFutureAssignmentsOk() (*bool, bool)`

GetApplyToFutureAssignmentsOk returns a tuple with the ApplyToFutureAssignments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApplyToFutureAssignments

`func (o *Jitactivationconfigresponse) SetApplyToFutureAssignments(v bool)`

SetApplyToFutureAssignments sets ApplyToFutureAssignments field to given value.



