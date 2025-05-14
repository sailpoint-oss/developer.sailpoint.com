---
id: v2025-entitlement-revocation-request-config
title: EntitlementRevocationRequestConfig
pagination_label: EntitlementRevocationRequestConfig
sidebar_label: EntitlementRevocationRequestConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRevocationRequestConfig', 'V2025EntitlementRevocationRequestConfig'] 
slug: /tools/sdk/go/v2025/models/entitlement-revocation-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRevocationRequestConfig', 'V2025EntitlementRevocationRequestConfig']
---

# EntitlementRevocationRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ApprovalSchemes** | Pointer to [**[]EntitlementApprovalScheme**](entitlement-approval-scheme) | Ordered list of approval steps for the access request. Empty when no approval is required. | [optional] 

## Methods

### NewEntitlementRevocationRequestConfig

`func NewEntitlementRevocationRequestConfig() *EntitlementRevocationRequestConfig`

NewEntitlementRevocationRequestConfig instantiates a new EntitlementRevocationRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRevocationRequestConfigWithDefaults

`func NewEntitlementRevocationRequestConfigWithDefaults() *EntitlementRevocationRequestConfig`

NewEntitlementRevocationRequestConfigWithDefaults instantiates a new EntitlementRevocationRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetApprovalSchemes

`func (o *EntitlementRevocationRequestConfig) GetApprovalSchemes() []EntitlementApprovalScheme`

GetApprovalSchemes returns the ApprovalSchemes field if non-nil, zero value otherwise.

### GetApprovalSchemesOk

`func (o *EntitlementRevocationRequestConfig) GetApprovalSchemesOk() (*[]EntitlementApprovalScheme, bool)`

GetApprovalSchemesOk returns a tuple with the ApprovalSchemes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApprovalSchemes

`func (o *EntitlementRevocationRequestConfig) SetApprovalSchemes(v []EntitlementApprovalScheme)`

SetApprovalSchemes sets ApprovalSchemes field to given value.

### HasApprovalSchemes

`func (o *EntitlementRevocationRequestConfig) HasApprovalSchemes() bool`

HasApprovalSchemes returns a boolean if a field has been set.


