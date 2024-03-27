---
id: provisioning-criteria-level2
title: ProvisioningCriteriaLevel2
pagination_label: ProvisioningCriteriaLevel2
sidebar_label: ProvisioningCriteriaLevel2
sidebar_class_name: gosdk
keywords: ['go', 'golang', 'sdk', 'ProvisioningCriteriaLevel2'] 
slug: /tools/sdk/go/v3/models/provisioning-criteria-level2
tags: ['SDK', 'Software Development Kit', 'ProvisioningCriteriaLevel2']
---

# ProvisioningCriteriaLevel2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Operation** |  Pointer to [**ProvisioningCriteriaOperation**](provisioning-criteria-operation) |  | [optional] 
**Attribute** |  Pointer to **NullableString** | Name of the Account attribute to be tested. If **operation** is one of EQUALS, NOT_EQUALS, CONTAINS, or HAS, this field is required. Otherwise, specifying it is an error. | [optional] 
**Value** |  Pointer to **NullableString** | String value to test the Account attribute w/r/t the specified operation. If the operation is one of EQUALS, NOT_EQUALS, or CONTAINS, this field is required. Otherwise, specifying it is an error. If the Attribute is not String-typed, it will be converted to the appropriate type. | [optional] 
**Children** |  Pointer to [**[]ProvisioningCriteriaLevel3**](provisioning-criteria-level3) | Array of child criteria. Required if the operation is AND or OR, otherwise it must be left null. A maximum of three levels of criteria are supported, including leaf nodes. | [optional] 

## Methods

### NewProvisioningCriteriaLevel2

`func NewProvisioningCriteriaLevel2() *ProvisioningCriteriaLevel2`

NewProvisioningCriteriaLevel2 instantiates a new ProvisioningCriteriaLevel2 object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewProvisioningCriteriaLevel2WithDefaults

`func NewProvisioningCriteriaLevel2WithDefaults() *ProvisioningCriteriaLevel2`

NewProvisioningCriteriaLevel2WithDefaults instantiates a new ProvisioningCriteriaLevel2 object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetOperation

`func (o *ProvisioningCriteriaLevel2) GetOperation() ProvisioningCriteriaOperation`

GetOperation returns the Operation field if non-nil, zero value otherwise.

### GetOperationOk

`func (o *ProvisioningCriteriaLevel2) GetOperationOk() (*ProvisioningCriteriaOperation, bool)`

GetOperationOk returns a tuple with the Operation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOperation

`func (o *ProvisioningCriteriaLevel2) SetOperation(v ProvisioningCriteriaOperation)`

SetOperation sets Operation field to given value.

### HasOperation

`func (o *ProvisioningCriteriaLevel2) HasOperation() bool`

HasOperation returns a boolean if a field has been set.

### GetAttribute

`func (o *ProvisioningCriteriaLevel2) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *ProvisioningCriteriaLevel2) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *ProvisioningCriteriaLevel2) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *ProvisioningCriteriaLevel2) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### SetAttributeNil

`func (o *ProvisioningCriteriaLevel2) SetAttributeNil(b bool)`

 SetAttributeNil sets the value for Attribute to be an explicit nil

### UnsetAttribute
`func (o *ProvisioningCriteriaLevel2) UnsetAttribute()`

UnsetAttribute ensures that no value is present for Attribute, not even an explicit nil
### GetValue

`func (o *ProvisioningCriteriaLevel2) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *ProvisioningCriteriaLevel2) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *ProvisioningCriteriaLevel2) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *ProvisioningCriteriaLevel2) HasValue() bool`

HasValue returns a boolean if a field has been set.

### SetValueNil

`func (o *ProvisioningCriteriaLevel2) SetValueNil(b bool)`

 SetValueNil sets the value for Value to be an explicit nil

### UnsetValue
`func (o *ProvisioningCriteriaLevel2) UnsetValue()`

UnsetValue ensures that no value is present for Value, not even an explicit nil
### GetChildren

`func (o *ProvisioningCriteriaLevel2) GetChildren() []ProvisioningCriteriaLevel3`

GetChildren returns the Children field if non-nil, zero value otherwise.

### GetChildrenOk

`func (o *ProvisioningCriteriaLevel2) GetChildrenOk() (*[]ProvisioningCriteriaLevel3, bool)`

GetChildrenOk returns a tuple with the Children field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChildren

`func (o *ProvisioningCriteriaLevel2) SetChildren(v []ProvisioningCriteriaLevel3)`

SetChildren sets Children field to given value.

### HasChildren

`func (o *ProvisioningCriteriaLevel2) HasChildren() bool`

HasChildren returns a boolean if a field has been set.

### SetChildrenNil

`func (o *ProvisioningCriteriaLevel2) SetChildrenNil(b bool)`

 SetChildrenNil sets the value for Children to be an explicit nil

### UnsetChildren
`func (o *ProvisioningCriteriaLevel2) UnsetChildren()`

UnsetChildren ensures that no value is present for Children, not even an explicit nil

[[Back to top]](#) 


