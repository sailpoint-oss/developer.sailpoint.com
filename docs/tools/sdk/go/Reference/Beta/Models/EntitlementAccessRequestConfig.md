---
id: beta-entitlement-access-request-config
title: EntitlementAccessRequestConfig
pagination_label: EntitlementAccessRequestConfig
sidebar_label: EntitlementAccessRequestConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementAccessRequestConfig', 'BetaEntitlementAccessRequestConfig'] 
slug: /tools/sdk/go/beta/models/entitlement-access-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementAccessRequestConfig', 'BetaEntitlementAccessRequestConfig']
---

# EntitlementAccessRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**RequestCommentRequired** | Pointer to **bool** | If the requester must provide a comment during access request. | [optional] [default to false]
**DenialCommentRequired** | Pointer to **bool** | If the reviewer must provide a comment when denying the access request. | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **bool** | Is Reauthorization Required | [optional] [default to false]
**RequireEndDate** | Pointer to **bool** | If true, then remove date or sunset date is required in access request of the entitlement. | [optional] [default to false]
**MaxPermittedAccessDuration** | Pointer to [**NullablePendingApprovalMaxPermittedAccessDuration**](pending-approval-max-permitted-access-duration) |  | [optional] 

## Methods

### NewEntitlementAccessRequestConfig

`func NewEntitlementAccessRequestConfig() *EntitlementAccessRequestConfig`

NewEntitlementAccessRequestConfig instantiates a new EntitlementAccessRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementAccessRequestConfigWithDefaults

`func NewEntitlementAccessRequestConfigWithDefaults() *EntitlementAccessRequestConfig`

NewEntitlementAccessRequestConfigWithDefaults instantiates a new EntitlementAccessRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *EntitlementAccessRequestConfig) GetApprovalSchemes() []EntitlementApprovalScheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *EntitlementAccessRequestConfig) GetApprovalSchemesOk() (*[]EntitlementApprovalScheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *EntitlementAccessRequestConfig) SetApprovalSchemes(v []EntitlementApprovalScheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *EntitlementAccessRequestConfig) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetRequestCommentRequired

`func (o *EntitlementAccessRequestConfig) GetRequestCommentRequired() bool`

GetRequestCommentRequired returns the RequestCommentRequired field if non-nil, zero value otherwise.

### GetRequestCommentRequiredOk

`func (o *EntitlementAccessRequestConfig) GetRequestCommentRequiredOk() (*bool, bool)`

GetRequestCommentRequiredOk returns a tuple with the RequestCommentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentRequired

`func (o *EntitlementAccessRequestConfig) SetRequestCommentRequired(v bool)`

SetRequestCommentRequired sets RequestCommentRequired field to given value.

### HasRequestCommentRequired

`func (o *EntitlementAccessRequestConfig) HasRequestCommentRequired() bool`

HasRequestCommentRequired returns a boolean if a field has been set.

### GetDenialCommentRequired

`func (o *EntitlementAccessRequestConfig) GetDenialCommentRequired() bool`

GetDenialCommentRequired returns the DenialCommentRequired field if non-nil, zero value otherwise.

### GetDenialCommentRequiredOk

`func (o *EntitlementAccessRequestConfig) GetDenialCommentRequiredOk() (*bool, bool)`

GetDenialCommentRequiredOk returns a tuple with the DenialCommentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentRequired

`func (o *EntitlementAccessRequestConfig) SetDenialCommentRequired(v bool)`

SetDenialCommentRequired sets DenialCommentRequired field to given value.

### HasDenialCommentRequired

`func (o *EntitlementAccessRequestConfig) HasDenialCommentRequired() bool`

HasDenialCommentRequired returns a boolean if a field has been set.

### GetReauthorizationRequired

`func (o *EntitlementAccessRequestConfig) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *EntitlementAccessRequestConfig) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *EntitlementAccessRequestConfig) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *EntitlementAccessRequestConfig) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### GetRequireEndDate

`func (o *EntitlementAccessRequestConfig) GetRequireEndDate() bool`

GetRequireEndDate returns the RequireEndDate field if non-nil, zero value otherwise.

### GetRequireEndDateOk

`func (o *EntitlementAccessRequestConfig) GetRequireEndDateOk() (*bool, bool)`

GetRequireEndDateOk returns a tuple with the RequireEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireEndDate

`func (o *EntitlementAccessRequestConfig) SetRequireEndDate(v bool)`

SetRequireEndDate sets RequireEndDate field to given value.

### HasRequireEndDate

`func (o *EntitlementAccessRequestConfig) HasRequireEndDate() bool`

HasRequireEndDate returns a boolean if a field has been set.

### GetMaxPermittedAccessDuration

`func (o *EntitlementAccessRequestConfig) GetMaxPermittedAccessDuration() PendingApprovalMaxPermittedAccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *EntitlementAccessRequestConfig) GetMaxPermittedAccessDurationOk() (*PendingApprovalMaxPermittedAccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *EntitlementAccessRequestConfig) SetMaxPermittedAccessDuration(v PendingApprovalMaxPermittedAccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *EntitlementAccessRequestConfig) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *EntitlementAccessRequestConfig) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *EntitlementAccessRequestConfig) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil

