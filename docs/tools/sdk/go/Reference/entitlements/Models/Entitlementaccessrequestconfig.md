---
id: v1-entitlementaccessrequestconfig
title: Entitlementaccessrequestconfig
pagination_label: Entitlementaccessrequestconfig
sidebar_label: Entitlementaccessrequestconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementaccessrequestconfig', 'V1Entitlementaccessrequestconfig'] 
slug: /tools/sdk/go/entitlements/models/entitlementaccessrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementaccessrequestconfig', 'V1Entitlementaccessrequestconfig']
---

# Entitlementaccessrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]Entitlementapprovalscheme**](entitlementapprovalscheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 
**RequestCommentRequired** | Pointer to **bool** | If the requester must provide a comment during access request. | [optional] [default to false]
**DenialCommentRequired** | Pointer to **bool** | If the reviewer must provide a comment when denying the access request. | [optional] [default to false]
**ReauthorizationRequired** | Pointer to **bool** | Is Reauthorization Required | [optional] [default to false]
**RequireEndDate** | Pointer to **bool** | If true, then remove date or sunset date is required in access request of the entitlement. | [optional] [default to false]
**MaxPermittedAccessDuration** | Pointer to [**NullableEntitlementaccessrequestconfigMaxPermittedAccessDuration**](entitlementaccessrequestconfig-max-permitted-access-duration) |  | [optional] 

## Methods

### NewEntitlementaccessrequestconfig

`func NewEntitlementaccessrequestconfig() *Entitlementaccessrequestconfig`

NewEntitlementaccessrequestconfig instantiates a new Entitlementaccessrequestconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementaccessrequestconfigWithDefaults

`func NewEntitlementaccessrequestconfigWithDefaults() *Entitlementaccessrequestconfig`

NewEntitlementaccessrequestconfigWithDefaults instantiates a new Entitlementaccessrequestconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *Entitlementaccessrequestconfig) GetApprovalSchemes() []Entitlementapprovalscheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *Entitlementaccessrequestconfig) GetApprovalSchemesOk() (*[]Entitlementapprovalscheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *Entitlementaccessrequestconfig) SetApprovalSchemes(v []Entitlementapprovalscheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *Entitlementaccessrequestconfig) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.

### GetRequestCommentRequired

`func (o *Entitlementaccessrequestconfig) GetRequestCommentRequired() bool`

GetRequestCommentRequired returns the RequestCommentRequired field if non-nil, zero value otherwise.

### GetRequestCommentRequiredOk

`func (o *Entitlementaccessrequestconfig) GetRequestCommentRequiredOk() (*bool, bool)`

GetRequestCommentRequiredOk returns a tuple with the RequestCommentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequestCommentRequired

`func (o *Entitlementaccessrequestconfig) SetRequestCommentRequired(v bool)`

SetRequestCommentRequired sets RequestCommentRequired field to given value.

### HasRequestCommentRequired

`func (o *Entitlementaccessrequestconfig) HasRequestCommentRequired() bool`

HasRequestCommentRequired returns a boolean if a field has been set.

### GetDenialCommentRequired

`func (o *Entitlementaccessrequestconfig) GetDenialCommentRequired() bool`

GetDenialCommentRequired returns the DenialCommentRequired field if non-nil, zero value otherwise.

### GetDenialCommentRequiredOk

`func (o *Entitlementaccessrequestconfig) GetDenialCommentRequiredOk() (*bool, bool)`

GetDenialCommentRequiredOk returns a tuple with the DenialCommentRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDenialCommentRequired

`func (o *Entitlementaccessrequestconfig) SetDenialCommentRequired(v bool)`

SetDenialCommentRequired sets DenialCommentRequired field to given value.

### HasDenialCommentRequired

`func (o *Entitlementaccessrequestconfig) HasDenialCommentRequired() bool`

HasDenialCommentRequired returns a boolean if a field has been set.

### GetReauthorizationRequired

`func (o *Entitlementaccessrequestconfig) GetReauthorizationRequired() bool`

GetReauthorizationRequired returns the ReauthorizationRequired field if non-nil, zero value otherwise.

### GetReauthorizationRequiredOk

`func (o *Entitlementaccessrequestconfig) GetReauthorizationRequiredOk() (*bool, bool)`

GetReauthorizationRequiredOk returns a tuple with the ReauthorizationRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReauthorizationRequired

`func (o *Entitlementaccessrequestconfig) SetReauthorizationRequired(v bool)`

SetReauthorizationRequired sets ReauthorizationRequired field to given value.

### HasReauthorizationRequired

`func (o *Entitlementaccessrequestconfig) HasReauthorizationRequired() bool`

HasReauthorizationRequired returns a boolean if a field has been set.

### GetRequireEndDate

`func (o *Entitlementaccessrequestconfig) GetRequireEndDate() bool`

GetRequireEndDate returns the RequireEndDate field if non-nil, zero value otherwise.

### GetRequireEndDateOk

`func (o *Entitlementaccessrequestconfig) GetRequireEndDateOk() (*bool, bool)`

GetRequireEndDateOk returns a tuple with the RequireEndDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRequireEndDate

`func (o *Entitlementaccessrequestconfig) SetRequireEndDate(v bool)`

SetRequireEndDate sets RequireEndDate field to given value.

### HasRequireEndDate

`func (o *Entitlementaccessrequestconfig) HasRequireEndDate() bool`

HasRequireEndDate returns a boolean if a field has been set.

### GetMaxPermittedAccessDuration

`func (o *Entitlementaccessrequestconfig) GetMaxPermittedAccessDuration() EntitlementaccessrequestconfigMaxPermittedAccessDuration`

GetMaxPermittedAccessDuration returns the MaxPermittedAccessDuration field if non-nil, zero value otherwise.

### GetMaxPermittedAccessDurationOk

`func (o *Entitlementaccessrequestconfig) GetMaxPermittedAccessDurationOk() (*EntitlementaccessrequestconfigMaxPermittedAccessDuration, bool)`

GetMaxPermittedAccessDurationOk returns a tuple with the MaxPermittedAccessDuration field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaxPermittedAccessDuration

`func (o *Entitlementaccessrequestconfig) SetMaxPermittedAccessDuration(v EntitlementaccessrequestconfigMaxPermittedAccessDuration)`

SetMaxPermittedAccessDuration sets MaxPermittedAccessDuration field to given value.

### HasMaxPermittedAccessDuration

`func (o *Entitlementaccessrequestconfig) HasMaxPermittedAccessDuration() bool`

HasMaxPermittedAccessDuration returns a boolean if a field has been set.

### SetMaxPermittedAccessDurationNil

`func (o *Entitlementaccessrequestconfig) SetMaxPermittedAccessDurationNil(b bool)`

 SetMaxPermittedAccessDurationNil sets the value for MaxPermittedAccessDuration to be an explicit nil

### UnsetMaxPermittedAccessDuration
`func (o *Entitlementaccessrequestconfig) UnsetMaxPermittedAccessDuration()`

UnsetMaxPermittedAccessDuration ensures that no value is present for MaxPermittedAccessDuration, not even an explicit nil

