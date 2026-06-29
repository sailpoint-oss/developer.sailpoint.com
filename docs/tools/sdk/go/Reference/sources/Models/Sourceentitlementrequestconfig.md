---
id: v1-sourceentitlementrequestconfig
title: Sourceentitlementrequestconfig
pagination_label: Sourceentitlementrequestconfig
sidebar_label: Sourceentitlementrequestconfig
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Sourceentitlementrequestconfig', 'V1Sourceentitlementrequestconfig'] 
slug: /tools/sdk/go/sources/models/sourceentitlementrequestconfig
tags: ['SDK', 'Software Development Kit', 'Sourceentitlementrequestconfig', 'V1Sourceentitlementrequestconfig']
---

# Sourceentitlementrequestconfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessRequestConfig** | Pointer to [**Entitlementaccessrequestconfig**](entitlementaccessrequestconfig) |  | [optional] 
**RevocationRequestConfig** | Pointer to [**Entitlementrevocationrequestconfig**](entitlementrevocationrequestconfig) |  | [optional] 

## Methods

### NewSourceentitlementrequestconfig

`func NewSourceentitlementrequestconfig() *Sourceentitlementrequestconfig`

NewSourceentitlementrequestconfig instantiates a new Sourceentitlementrequestconfig object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSourceentitlementrequestconfigWithDefaults

`func NewSourceentitlementrequestconfigWithDefaults() *Sourceentitlementrequestconfig`

NewSourceentitlementrequestconfigWithDefaults instantiates a new Sourceentitlementrequestconfig object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessRequestConfig

`func (o *Sourceentitlementrequestconfig) GetAccessRequestConfig() Entitlementaccessrequestconfig`

GetAccessRequestConfig returns the AccessRequestConfig field if non-nil, zero value otherwise.

### GetAccessRequestConfigOk

`func (o *Sourceentitlementrequestconfig) GetAccessRequestConfigOk() (*Entitlementaccessrequestconfig, bool)`

GetAccessRequestConfigOk returns a tuple with the AccessRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessRequestConfig

`func (o *Sourceentitlementrequestconfig) SetAccessRequestConfig(v Entitlementaccessrequestconfig)`

SetAccessRequestConfig sets AccessRequestConfig field to given value.

### HasAccessRequestConfig

`func (o *Sourceentitlementrequestconfig) HasAccessRequestConfig() bool`

HasAccessRequestConfig returns a boolean if a field has been set.

### GetRevocationRequestConfig

`func (o *Sourceentitlementrequestconfig) GetRevocationRequestConfig() Entitlementrevocationrequestconfig`

GetRevocationRequestConfig returns the RevocationRequestConfig field if non-nil, zero value otherwise.

### GetRevocationRequestConfigOk

`func (o *Sourceentitlementrequestconfig) GetRevocationRequestConfigOk() (*Entitlementrevocationrequestconfig, bool)`

GetRevocationRequestConfigOk returns a tuple with the RevocationRequestConfig field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRevocationRequestConfig

`func (o *Sourceentitlementrequestconfig) SetRevocationRequestConfig(v Entitlementrevocationrequestconfig)`

SetRevocationRequestConfig sets RevocationRequestConfig field to given value.

### HasRevocationRequestConfig

`func (o *Sourceentitlementrequestconfig) HasRevocationRequestConfig() bool`

HasRevocationRequestConfig returns a boolean if a field has been set.


