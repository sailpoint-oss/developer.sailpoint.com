---
id: provisioning-policy-dto
title: ProvisioningPolicyDto
pagination_label: ProvisioningPolicyDto
sidebar_label: ProvisioningPolicyDto
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'ProvisioningPolicyDto', 'ProvisioningPolicyDto'] 
slug: /tools/sdk/go//models/provisioning-policy-dto
tags: ['SDK', 'Software Development Kit', 'ProvisioningPolicyDto', 'ProvisioningPolicyDto']
---

# ProvisioningPolicyDto

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | the provisioning policy name | 
**Description** | Pointer to **string** | the description of the provisioning policy | [optional] 
**UsageType** | Pointer to [**UsageType**](usage-type) |  | [optional] 
**Fields** | Pointer to [**[]FieldDetailsDto**](field-details-dto) |  | [optional] 

## Methods

### NewProvisioningPolicyDto

`func NewProvisioningPolicyDto(name string, ) *ProvisioningPolicyDto`

NewProvisioningPolicyDto instantiates a new ProvisioningPolicyDto object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningPolicyDtoWithDefaults

`func NewProvisioningPolicyDtoWithDefaults() *ProvisioningPolicyDto`

NewProvisioningPolicyDtoWithDefaults instantiates a new ProvisioningPolicyDto object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *ProvisioningPolicyDto) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *ProvisioningPolicyDto) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *ProvisioningPolicyDto) SetName(v string)`

SetName sets Name field to given value.


### GetDescription

`func (o *ProvisioningPolicyDto) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ProvisioningPolicyDto) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ProvisioningPolicyDto) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ProvisioningPolicyDto) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetUsageType

`func (o *ProvisioningPolicyDto) GetUsageType() UsageType`

GetUsageType returns the UsageType field if non-nil, zero value otherwise.

### GetUsageTypeOk

`func (o *ProvisioningPolicyDto) GetUsageTypeOk() (*UsageType, bool)`

GetUsageTypeOk returns a tuple with the UsageType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsageType

`func (o *ProvisioningPolicyDto) SetUsageType(v UsageType)`

SetUsageType sets UsageType field to given value.

### HasUsageType

`func (o *ProvisioningPolicyDto) HasUsageType() bool`

HasUsageType returns a boolean if a field has been set.

### GetFields

`func (o *ProvisioningPolicyDto) GetFields() []FieldDetailsDto`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *ProvisioningPolicyDto) GetFieldsOk() (*[]FieldDetailsDto, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *ProvisioningPolicyDto) SetFields(v []FieldDetailsDto)`

SetFields sets Fields field to given value.

### HasFields

`func (o *ProvisioningPolicyDto) HasFields() bool`

HasFields returns a boolean if a field has been set.


