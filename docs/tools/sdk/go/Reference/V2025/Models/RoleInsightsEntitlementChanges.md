---
id: role-insights-entitlement-changes
title: RoleInsightsEntitlementChanges
pagination_label: RoleInsightsEntitlementChanges
sidebar_label: RoleInsightsEntitlementChanges
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'RoleInsightsEntitlementChanges', 'RoleInsightsEntitlementChanges'] 
slug: /tools/sdk/go//models/role-insights-entitlement-changes
tags: ['SDK', 'Software Development Kit', 'RoleInsightsEntitlementChanges', 'RoleInsightsEntitlementChanges']
---

# RoleInsightsEntitlementChanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the entitlement | [optional] 
**Id** | Pointer to **string** | Id of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Description for the entitlement | [optional] 
**Attribute** | Pointer to **string** | Attribute for the entitlement | [optional] 
**Value** | Pointer to **string** | Attribute value for the entitlement | [optional] 
**Source** | Pointer to **string** | Source or the application for the entitlement | [optional] 
**Insight** | Pointer to [**RoleInsightsInsight**](role-insights-insight) |  | [optional] 

## Methods

### NewRoleInsightsEntitlementChanges

`func NewRoleInsightsEntitlementChanges() *RoleInsightsEntitlementChanges`

NewRoleInsightsEntitlementChanges instantiates a new RoleInsightsEntitlementChanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleInsightsEntitlementChangesWithDefaults

`func NewRoleInsightsEntitlementChangesWithDefaults() *RoleInsightsEntitlementChanges`

NewRoleInsightsEntitlementChangesWithDefaults instantiates a new RoleInsightsEntitlementChanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *RoleInsightsEntitlementChanges) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *RoleInsightsEntitlementChanges) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *RoleInsightsEntitlementChanges) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *RoleInsightsEntitlementChanges) HasName() bool`

HasName returns a boolean if a field has been set.

### GetId

`func (o *RoleInsightsEntitlementChanges) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *RoleInsightsEntitlementChanges) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *RoleInsightsEntitlementChanges) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *RoleInsightsEntitlementChanges) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *RoleInsightsEntitlementChanges) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoleInsightsEntitlementChanges) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoleInsightsEntitlementChanges) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoleInsightsEntitlementChanges) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *RoleInsightsEntitlementChanges) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *RoleInsightsEntitlementChanges) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttribute

`func (o *RoleInsightsEntitlementChanges) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *RoleInsightsEntitlementChanges) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *RoleInsightsEntitlementChanges) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *RoleInsightsEntitlementChanges) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *RoleInsightsEntitlementChanges) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *RoleInsightsEntitlementChanges) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *RoleInsightsEntitlementChanges) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *RoleInsightsEntitlementChanges) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSource

`func (o *RoleInsightsEntitlementChanges) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *RoleInsightsEntitlementChanges) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *RoleInsightsEntitlementChanges) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *RoleInsightsEntitlementChanges) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetInsight

`func (o *RoleInsightsEntitlementChanges) GetInsight() RoleInsightsInsight`

GetInsight returns the Insight field if non-nil, zero value otherwise.

### GetInsightOk

`func (o *RoleInsightsEntitlementChanges) GetInsightOk() (*RoleInsightsInsight, bool)`

GetInsightOk returns a tuple with the Insight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsight

`func (o *RoleInsightsEntitlementChanges) SetInsight(v RoleInsightsInsight)`

SetInsight sets Insight field to given value.

### HasInsight

`func (o *RoleInsightsEntitlementChanges) HasInsight() bool`

HasInsight returns a boolean if a field has been set.


