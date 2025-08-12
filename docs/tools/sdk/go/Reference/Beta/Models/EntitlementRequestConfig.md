---
id: beta-entitlement-request-config
title: EntitlementRequestConfig
pagination_label: EntitlementRequestConfig
sidebar_label: EntitlementRequestConfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'EntitlementRequestConfig', 'BetaEntitlementRequestConfig'] 
slug: /tools/sdk/go/beta/models/entitlement-request-config
tags: ['SDK', 'Software Development Kit', 'EntitlementRequestConfig', 'BetaEntitlementRequestConfig']
---

# EntitlementRequestConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | Pointer to [**EntitlementAccessRequestConfig**](entitlement-access-request-config) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**EntitlementRevocationRequestConfig**](entitlement-revocation-request-config) |  | [optional] 

## Methods

### NewEntitlementRequestConfig

`func NewEntitlementRequestConfig() *EntitlementRequestConfig`

NewEntitlementRequestConfig instantiates a new EntitlementRequestConfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementRequestConfigWithDefaults

`func NewEntitlementRequestConfigWithDefaults() *EntitlementRequestConfig`

NewEntitlementRequestConfigWithDefaults instantiates a new EntitlementRequestConfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *EntitlementRequestConfig) GetAccessRequestConfig() EntitlementAccessRequestConfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *EntitlementRequestConfig) GetAccessRequestConfigOk() (*EntitlementAccessRequestConfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *EntitlementRequestConfig) SetAccessRequestConfig(v EntitlementAccessRequestConfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *EntitlementRequestConfig) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *EntitlementRequestConfig) GetRevocationRequestConfig() EntitlementRevocationRequestConfig`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *EntitlementRequestConfig) GetRevocationRequestConfigOk() (*EntitlementRevocationRequestConfig, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *EntitlementRequestConfig) SetRevocationRequestConfig(v EntitlementRevocationRequestConfig)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *EntitlementRequestConfig) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.


