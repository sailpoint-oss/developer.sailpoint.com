---
id: v1-accessrequestconfig
title: Accessrequestconfig
pagination_label: Accessrequestconfig
sidebar_label: Accessrequestconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Accessrequestconfig', 'V1Accessrequestconfig'] 
slug: /tools/sdk/go/accessrequests/models/accessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Accessrequestconfig', 'V1Accessrequestconfig']
---

# Accessrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalsMustBeExternal** | Pointer to **bool** | If this is true, approvals must be processed by an external system. Also, if this is true, it blocks Request Center access requests and returns an error for any user who isn't an org admin. | [optional] [default to false]
**AutoApprovalEnabled** | Pointer to **bool** | If this is true and the requester and reviewer are the same, the request is automatically approved. | [optional] [default to false]
**ReauthorizationEnabled** | Pointer to **bool** | If this is true, reauthorization will be enforced for appropriately configured access items. Enablement of this feature is currently in a limited state. | [optional] [default to false]
**RequestOnBehalfOfConfig** | Pointer to [**Requestonbehalfofconfig**](requestonbehalfofconfig) |  | [optional] 
**ApprovalReminderAndEscalationConfig** | Pointer to [**Approvalreminderandescalationconfig**](approvalreminderandescalationconfig) |  | [optional] 
**EntitlementRequestConfig** | Pointer to [**Entitlementrequestconfig**](entitlementrequestconfig) |  | [optional] 

## Methods

### NewAccessrequestconfig

`func NewAccessrequestconfig() *Accessrequestconfig`

NewAccessrequestconfig instantiates a new Accessrequestconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAccessrequestconfigWithDefaults

`func NewAccessrequestconfigWithDefaults() *Accessrequestconfig`

NewAccessrequestconfigWithDefaults instantiates a new Accessrequestconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalsMustBeExternal

`func (o *Accessrequestconfig) GetApprovalsMustBeExternal() bool`

GetApprovalsMustBeExternal returns the ApprovalsMustBeExternal field if non-nil, zero value otherwise.

### GetApprovalsMustBeExternalOk

`func (o *Accessrequestconfig) GetApprovalsMustBeExternalOk() (*bool, bool)`

GetApprovalsMustBeExternalOk returns a tuple with the ApprovalsMustBeExternal field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalsMustBeExternal

`func (o *Accessrequestconfig) SetApprovalsMustBeExternal(v bool)`

SetApprovalsMustBeExternal sets ApprovalsMustBeExternal field to given value.

### HasApprovalsMustBeExternal

`func (o *Accessrequestconfig) HasApprovalsMustBeExternal() bool`

HasApprovalsMustBeExternal returns a boolean if a field has been set.

### GetAutoApprovalEnabled

`func (o *Accessrequestconfig) GetAutoApprovalEnabled() bool`

GetAutoApprovalEnabled returns the AutoApprovalEnabled field if non-nil, zero value otherwise.

### GetAutoApprovalEnabledOk

`func (o *Accessrequestconfig) GetAutoApprovalEnabledOk() (*bool, bool)`

GetAutoApprovalEnabledOk returns a tuple with the AutoApprovalEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAutoApprovalEnabled

`func (o *Accessrequestconfig) SetAutoApprovalEnabled(v bool)`

SetAutoApprovalEnabled sets AutoApprovalEnabled field to given value.

### HasAutoApprovalEnabled

`func (o *Accessrequestconfig) HasAutoApprovalEnabled() bool`

HasAutoApprovalEnabled returns a boolean if a field has been set.

### GetReauthorizationEnabled

`func (o *Accessrequestconfig) GetReauthorizationEnabled() bool`

GetReauthorizationEnabled returns the ReauthorizationEnabled field if non-nil, zero value otherwise.

### GetReauthorizationEnabledOk

`func (o *Accessrequestconfig) GetReauthorizationEnabledOk() (*bool, bool)`

GetReauthorizationEnabledOk returns a tuple with the ReauthorizationEnabled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationEnabled

`func (o *Accessrequestconfig) SetReauthorizationEnabled(v bool)`

SetReauthorizationEnabled sets ReauthorizationEnabled field to given value.

### HasReauthorizationEnabled

`func (o *Accessrequestconfig) HasReauthorizationEnabled() bool`

HasReauthorizationEnabled returns a boolean if a field has been set.

### GetRequestOnBehalfOfConfig

`func (o *Accessrequestconfig) GetRequestOnBehalfOfConfig() Requestonbehalfofconfig`

GetRequestOnBehalfOfConfig returns the RequestOnBehalfOfConfig field if non-nil, zero value otherwise.

### GetRequestOnBehalfOfConfigOk

`func (o *Accessrequestconfig) GetRequestOnBehalfOfConfigOk() (*Requestonbehalfofconfig, bool)`

GetRequestOnBehalfOfConfigOk returns a tuple with the RequestOnBehalfOfConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestOnBehalfOfConfig

`func (o *Accessrequestconfig) SetRequestOnBehalfOfConfig(v Requestonbehalfofconfig)`

SetRequestOnBehalfOfConfig sets RequestOnBehalfOfConfig field to given value.

### HasRequestOnBehalfOfConfig

`func (o *Accessrequestconfig) HasRequestOnBehalfOfConfig() bool`

HasRequestOnBehalfOfConfig returns a boolean if a field has been set.

### GetApprovalReminderAndEscalationConfig

`func (o *Accessrequestconfig) GetApprovalReminderAndEscalationConfig() Approvalreminderandescalationconfig`

GetApprovalReminderAndEscalationConfig returns the ApprovalReminderAndEscalationConfig field if non-nil, zero value otherwise.

### GetApprovalReminderAndEscalationConfigOk

`func (o *Accessrequestconfig) GetApprovalReminderAndEscalationConfigOk() (*Approvalreminderandescalationconfig, bool)`

GetApprovalReminderAndEscalationConfigOk returns a tuple with the ApprovalReminderAndEscalationConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalReminderAndEscalationConfig

`func (o *Accessrequestconfig) SetApprovalReminderAndEscalationConfig(v Approvalreminderandescalationconfig)`

SetApprovalReminderAndEscalationConfig sets ApprovalReminderAndEscalationConfig field to given value.

### HasApprovalReminderAndEscalationConfig

`func (o *Accessrequestconfig) HasApprovalReminderAndEscalationConfig() bool`

HasApprovalReminderAndEscalationConfig returns a boolean if a field has been set.

### GetEntitlementRequestConfig

`func (o *Accessrequestconfig) GetEntitlementRequestConfig() Entitlementrequestconfig`

GetEntitlementRequestConfig returns the EntitlementRequestConfig field if non-nil, zero value otherwise.

### GetEntitlementRequestConfigOk

`func (o *Accessrequestconfig) GetEntitlementRequestConfigOk() (*Entitlementrequestconfig, bool)`

GetEntitlementRequestConfigOk returns a tuple with the EntitlementRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEntitlementRequestConfig

`func (o *Accessrequestconfig) SetEntitlementRequestConfig(v Entitlementrequestconfig)`

SetEntitlementRequestConfig sets EntitlementRequestConfig field to given value.

### HasEntitlementRequestConfig

`func (o *Accessrequestconfig) HasEntitlementRequestConfig() bool`

HasEntitlementRequestConfig returns a boolean if a field has been set.


