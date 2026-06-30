---
id: v1-entitlementrequestconfigv2
title: Entitlementrequestconfigv2
pagination_label: Entitlementrequestconfigv2
sidebar_label: Entitlementrequestconfigv2
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementrequestconfigv2', 'V1Entitlementrequestconfigv2'] 
slug: /tools/sdk/go/accessrequests/models/entitlementrequestconfigv2
tags: ['SDK', 'Software Development Kit', 'Entitlementrequestconfigv2', 'V1Entitlementrequestconfigv2']
---

# Entitlementrequestconfigv2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | Pointer to [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 

## Methods

### NewEntitlementrequestconfigv2

`func NewEntitlementrequestconfigv2() *Entitlementrequestconfigv2`

NewEntitlementrequestconfigv2 instantiates a new Entitlementrequestconfigv2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrequestconfigv2WithDefaults

`func NewEntitlementrequestconfigv2WithDefaults() *Entitlementrequestconfigv2`

NewEntitlementrequestconfigv2WithDefaults instantiates a new Entitlementrequestconfigv2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *Entitlementrequestconfigv2) GetAccessRequestConfig() Entitlementaccessrequestconfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *Entitlementrequestconfigv2) GetAccessRequestConfigOk() (*Entitlementaccessrequestconfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *Entitlementrequestconfigv2) SetAccessRequestConfig(v Entitlementaccessrequestconfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *Entitlementrequestconfigv2) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *Entitlementrequestconfigv2) GetRevocationRequestConfig() Entitlementrevocationrequestconfig`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *Entitlementrequestconfigv2) GetRevocationRequestConfigOk() (*Entitlementrevocationrequestconfig, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *Entitlementrequestconfigv2) SetRevocationRequestConfig(v Entitlementrevocationrequestconfig)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *Entitlementrequestconfigv2) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.


