---
id: v1-entitlementrequestconfig
title: Entitlementrequestconfig
pagination_label: Entitlementrequestconfig
sidebar_label: Entitlementrequestconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementrequestconfig', 'V1Entitlementrequestconfig'] 
slug: /tools/sdk/go/entitlements/models/entitlementrequestconfig
tags: ['SDK', 'Software Development Kit', 'Entitlementrequestconfig', 'V1Entitlementrequestconfig']
---

# Entitlementrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | Pointer to [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 

## Methods

### NewEntitlementrequestconfig

`func NewEntitlementrequestconfig() *Entitlementrequestconfig`

NewEntitlementrequestconfig instantiates a new Entitlementrequestconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrequestconfigWithDefaults

`func NewEntitlementrequestconfigWithDefaults() *Entitlementrequestconfig`

NewEntitlementrequestconfigWithDefaults instantiates a new Entitlementrequestconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *Entitlementrequestconfig) GetAccessRequestConfig() Entitlementaccessrequestconfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *Entitlementrequestconfig) GetAccessRequestConfigOk() (*Entitlementaccessrequestconfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *Entitlementrequestconfig) SetAccessRequestConfig(v Entitlementaccessrequestconfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *Entitlementrequestconfig) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *Entitlementrequestconfig) GetRevocationRequestConfig() Entitlementrevocationrequestconfig`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *Entitlementrequestconfig) GetRevocationRequestConfigOk() (*Entitlementrevocationrequestconfig, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *Entitlementrequestconfig) SetRevocationRequestConfig(v Entitlementrevocationrequestconfig)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *Entitlementrequestconfig) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.


