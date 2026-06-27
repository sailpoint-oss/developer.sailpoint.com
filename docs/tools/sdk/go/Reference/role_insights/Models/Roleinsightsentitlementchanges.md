---
id: v1-roleinsightsentitlementchanges
title: Roleinsightsentitlementchanges
pagination_label: Roleinsightsentitlementchanges
sidebar_label: Roleinsightsentitlementchanges
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Roleinsightsentitlementchanges', 'V1Roleinsightsentitlementchanges'] 
slug: /tools/sdk/go/roleinsights/models/roleinsightsentitlementchanges
tags: ['SDK', 'Software Development Kit', 'Roleinsightsentitlementchanges', 'V1Roleinsightsentitlementchanges']
---

# Roleinsightsentitlementchanges

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **string** | Name of the entitlement | [optional] 
**Id** | Pointer to **string** | Id of the entitlement | [optional] 
**Description** | Pointer to **NullableString** | Description for the entitlement | [optional] 
**Attribute** | Pointer to **string** | Attribute for the entitlement | [optional] 
**Value** | Pointer to **string** | Attribute value for the entitlement | [optional] 
**Source** | Pointer to **string** | Source or the application for the entitlement | [optional] 
**Insight** | Pointer to [**Roleinsightsinsight**](roleinsightsinsight) |  | [optional] 

## Methods

### NewRoleinsightsentitlementchanges

`func NewRoleinsightsentitlementchanges() *Roleinsightsentitlementchanges`

NewRoleinsightsentitlementchanges instantiates a new Roleinsightsentitlementchanges object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoleinsightsentitlementchangesWithDefaults

`func NewRoleinsightsentitlementchangesWithDefaults() *Roleinsightsentitlementchanges`

NewRoleinsightsentitlementchangesWithDefaults instantiates a new Roleinsightsentitlementchanges object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *Roleinsightsentitlementchanges) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *Roleinsightsentitlementchanges) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *Roleinsightsentitlementchanges) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *Roleinsightsentitlementchanges) HasName() bool`

HasName returns a boolean if a field has been set.

### GetId

`func (o *Roleinsightsentitlementchanges) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Roleinsightsentitlementchanges) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Roleinsightsentitlementchanges) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Roleinsightsentitlementchanges) HasId() bool`

HasId returns a boolean if a field has been set.

### GetDescription

`func (o *Roleinsightsentitlementchanges) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *Roleinsightsentitlementchanges) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *Roleinsightsentitlementchanges) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *Roleinsightsentitlementchanges) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### SetDescriptionNil

`func (o *Roleinsightsentitlementchanges) SetDescriptionNil(b bool)`

 SetDescriptionNil sets the value for Description to be an explicit nil

### UnsetDescription
`func (o *Roleinsightsentitlementchanges) UnsetDescription()`

UnsetDescription ensures that no value is present for Description, not even an explicit nil
### GetAttribute

`func (o *Roleinsightsentitlementchanges) GetAttribute() string`

GetAttribute returns the Attribute field if non-nil, zero value otherwise.

### GetAttributeOk

`func (o *Roleinsightsentitlementchanges) GetAttributeOk() (*string, bool)`

GetAttributeOk returns a tuple with the Attribute field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAttribute

`func (o *Roleinsightsentitlementchanges) SetAttribute(v string)`

SetAttribute sets Attribute field to given value.

### HasAttribute

`func (o *Roleinsightsentitlementchanges) HasAttribute() bool`

HasAttribute returns a boolean if a field has been set.

### GetValue

`func (o *Roleinsightsentitlementchanges) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Roleinsightsentitlementchanges) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Roleinsightsentitlementchanges) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *Roleinsightsentitlementchanges) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetSource

`func (o *Roleinsightsentitlementchanges) GetSource() string`

GetSource returns the Source field if non-nil, zero value otherwise.

### GetSourceOk

`func (o *Roleinsightsentitlementchanges) GetSourceOk() (*string, bool)`

GetSourceOk returns a tuple with the Source field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSource

`func (o *Roleinsightsentitlementchanges) SetSource(v string)`

SetSource sets Source field to given value.

### HasSource

`func (o *Roleinsightsentitlementchanges) HasSource() bool`

HasSource returns a boolean if a field has been set.

### GetInsight

`func (o *Roleinsightsentitlementchanges) GetInsight() Roleinsightsinsight`

GetInsight returns the Insight field if non-nil, zero value otherwise.

### GetInsightOk

`func (o *Roleinsightsentitlementchanges) GetInsightOk() (*Roleinsightsinsight, bool)`

GetInsightOk returns a tuple with the Insight field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInsight

`func (o *Roleinsightsentitlementchanges) SetInsight(v Roleinsightsinsight)`

SetInsight sets Insight field to given value.

### HasInsight

`func (o *Roleinsightsentitlementchanges) HasInsight() bool`

HasInsight returns a boolean if a field has been set.


