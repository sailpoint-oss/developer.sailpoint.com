---
id: role-insights-entitlement
title: RoleInsightsEntitlement
pagination_label: RoleInsightsEntitlement
sidebar_label: RoleInsightsEntitlement
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsightsEntitlement', 'RoleInsightsEntitlement'] 
slug: /tools/sdk/go//models/role-insights-entitlement
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlement', 'RoleInsightsEntitlement']
---

# RoleInsightsEntitlement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the entitlement | [optional] 
**Id** | Pointer to **string** | Id of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Description for the entitlement | [optional] 
**Source** | Pointer to **string** | Source or the application for the entitlement | [optional] 
**Attribute** | Pointer to **string** | Attribute for the entitlement | [optional] 
**Value** | Pointer to **string** | Attribute value for the entitlement | [optional] 

## Methods

### NewRoleInsightsEntitlement

`func NewRoleInsightsEntitlement() *RoleInsightsEntitlement`

NewRoleInsightsEntitlement instantiates a new RoleInsightsEntitlement object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightsEntitlementWithDefaults

`func NewRoleInsightsEntitlementWithDefaults() *RoleInsightsEntitlement`

NewRoleInsightsEntitlementWithDefaults instantiates a new RoleInsightsEntitlement object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *RoleInsightsEntitlement) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleInsightsEntitlement) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleInsightsEntitlement) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleInsightsEntitlement) HasName() bool`

HasName returns a boolean if a field has been set.

### GetId

`func (o *RoleInsightsEntitlement) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleInsightsEntitlement) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleInsightsEntitlement) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleInsightsEntitlement) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *RoleInsightsEntitlement) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleInsightsEntitlement) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleInsightsEntitlement) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleInsightsEntitlement) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleInsightsEntitlement) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleInsightsEntitlement) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetSource

`func (o *RoleInsightsEntitlement) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RoleInsightsEntitlement) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RoleInsightsEntitlement) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *RoleInsightsEntitlement) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetAttribute

`func (o *RoleInsightsEntitlement) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleInsightsEntitlement) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleInsightsEntitlement) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RoleInsightsEntitlement) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *RoleInsightsEntitlement) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *RoleInsightsEntitlement) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *RoleInsightsEntitlement) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *RoleInsightsEntitlement) HasValue() bool`

HasValue returns a boolean if a field has been set.


