---
id: before-provisioning-rule-dto
title: BeforeProvisioningRuleDto
pagination_label: BeforeProvisioningRuleDto
sidebar_label: BeforeProvisioningRuleDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'BeforeProvisioningRuleDto', 'BeforeProvisioningRuleDto'] 
slug: /tools/sdk/go//models/before-provisioning-rule-dto
tags: ['SDK', 'Software Development Kit', 'BeforeProvisioningRuleDto', 'BeforeProvisioningRuleDto']
---

# BeforeProvisioningRuleDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | Pointer to **string** | Before Provisioning Rule DTO type. | [optional] 
**Id** | Pointer to **string** | Before Provisioning Rule ID. | [optional] 
**Name** | Pointer to **string** | Rule display name. | [optional] 

## Methods

### NewBeforeProvisioningRuleDto

`func NewBeforeProvisioningRuleDto() *BeforeProvisioningRuleDto`

NewBeforeProvisioningRuleDto instantiates a new BeforeProvisioningRuleDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBeforeProvisioningRuleDtoWithDefaults

`func NewBeforeProvisioningRuleDtoWithDefaults() *BeforeProvisioningRuleDto`

NewBeforeProvisioningRuleDtoWithDefaults instantiates a new BeforeProvisioningRuleDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *BeforeProvisioningRuleDto) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *BeforeProvisioningRuleDto) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *BeforeProvisioningRuleDto) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *BeforeProvisioningRuleDto) HasType() bool`

HasType returns a boolean if a field has been set.

### GetId

`func (o *BeforeProvisioningRuleDto) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BeforeProvisioningRuleDto) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BeforeProvisioningRuleDto) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BeforeProvisioningRuleDto) HasId() bool`

HasId returns a boolean if a field has been set.

### GetName

`func (o *BeforeProvisioningRuleDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *BeforeProvisioningRuleDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *BeforeProvisioningRuleDto) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *BeforeProvisioningRuleDto) HasName() bool`

HasName returns a boolean if a field has been set.


