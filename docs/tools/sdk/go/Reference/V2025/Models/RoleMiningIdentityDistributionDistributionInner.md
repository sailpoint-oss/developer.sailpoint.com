---
id: v2025-role-mining-identity-distribution-distribution-inner
title: RoleMiningIdentityDistributionDistributionInner
pagination_label: RoleMiningIdentityDistributionDistributionInner
sidebar_label: RoleMiningIdentityDistributionDistributionInner
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleMiningIdentityDistributionDistributionInner', 'V2025RoleMiningIdentityDistributionDistributionInner'] 
slug: /tools/sdk/go/v2025/models/role-mining-identity-distribution-distribution-inner
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentityDistributionDistributionInner', 'V2025RoleMiningIdentityDistributionDistributionInner']
---

# RoleMiningIdentityDistributionDistributionInner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeValue** | Pointer to **string** | The attribute value that identities are grouped by | [optional] 
**Count** | Pointer to **int32** | The number of identities that have this attribute value | [optional] 

## Methods

### NewRoleMiningIdentityDistributionDistributionInner

`func NewRoleMiningIdentityDistributionDistributionInner() *RoleMiningIdentityDistributionDistributionInner`

NewRoleMiningIdentityDistributionDistributionInner instantiates a new RoleMiningIdentityDistributionDistributionInner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningIdentityDistributionDistributionInnerWithDefaults

`func NewRoleMiningIdentityDistributionDistributionInnerWithDefaults() *RoleMiningIdentityDistributionDistributionInner`

NewRoleMiningIdentityDistributionDistributionInnerWithDefaults instantiates a new RoleMiningIdentityDistributionDistributionInner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeValue

`func (o *RoleMiningIdentityDistributionDistributionInner) GetAttributeValue() string`

GetAttributeValue returns the AttributeValue field if non-nil, zero value otherwise.

### GetAttributeValueOk

`func (o *RoleMiningIdentityDistributionDistributionInner) GetAttributeValueOk() (*string, bool)`

GetAttributeValueOk returns a tuple with the AttributeValue field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeValue

`func (o *RoleMiningIdentityDistributionDistributionInner) SetAttributeValue(v string)`

SetAttributeValue sets AttributeValue field to given value.

### HasAttributeValue

`func (o *RoleMiningIdentityDistributionDistributionInner) HasAttributeValue() bool`

HasAttributeValue returns a boolean if a field has been set.

### GetCount

`func (o *RoleMiningIdentityDistributionDistributionInner) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *RoleMiningIdentityDistributionDistributionInner) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *RoleMiningIdentityDistributionDistributionInner) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *RoleMiningIdentityDistributionDistributionInner) HasCount() bool`

HasCount returns a boolean if a field has been set.


