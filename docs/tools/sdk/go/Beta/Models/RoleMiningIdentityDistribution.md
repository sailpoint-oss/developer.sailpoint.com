---
id: role-mining-identity-distribution
title: RoleMiningIdentityDistribution
pagination_label: RoleMiningIdentityDistribution
sidebar_label: RoleMiningIdentityDistribution
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'RoleMiningIdentityDistribution'] 
slug: /tools/sdk/go/beta/models/role-mining-identity-distribution
tags: ['SDK', 'Software Development Kit', 'RoleMiningIdentityDistribution']
---

# RoleMiningIdentityDistribution

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AttributeName** |  Pointer to **string** | Id of the potential role | [optional] 
**Distribution** |  Pointer to **[]map[string]string** |  | [optional] 

## Methods

### NewRoleMiningIdentityDistribution

`func NewRoleMiningIdentityDistribution() *RoleMiningIdentityDistribution`

NewRoleMiningIdentityDistribution instantiates a new RoleMiningIdentityDistribution object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleMiningIdentityDistributionWithDefaults

`func NewRoleMiningIdentityDistributionWithDefaults() *RoleMiningIdentityDistribution`

NewRoleMiningIdentityDistributionWithDefaults instantiates a new RoleMiningIdentityDistribution object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAttributeName

`func (o *RoleMiningIdentityDistribution) GetAttributeName() string`

GetAttributeName returns the AttributeName field if non-nil, zero value otherwise.

### GetAttributeNameOk

`func (o *RoleMiningIdentityDistribution) GetAttributeNameOk() (*string, bool)`

GetAttributeNameOk returns a tuple with the AttributeName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttributeName

`func (o *RoleMiningIdentityDistribution) SetAttributeName(v string)`

SetAttributeName sets AttributeName field to given value.

### HasAttributeName

`func (o *RoleMiningIdentityDistribution) HasAttributeName() bool`

HasAttributeName returns a boolean if a field has been set.

### GetDistribution

`func (o *RoleMiningIdentityDistribution) GetDistribution() []map[string]string`

GetDistribution returns the Distribution field if non-nil, zero value otherwise.

### GetDistributionOk

`func (o *RoleMiningIdentityDistribution) GetDistributionOk() (*[]map[string]string, bool)`

GetDistributionOk returns a tuple with the Distribution field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDistribution

`func (o *RoleMiningIdentityDistribution) SetDistribution(v []map[string]string)`

SetDistribution sets Distribution field to given value.

### HasDistribution

`func (o *RoleMiningIdentityDistribution) HasDistribution() bool`

HasDistribution returns a boolean if a field has been set.


[[Back to top]](#) 


