---
id: v1-entitlementrecommendationassignee
title: Entitlementrecommendationassignee
pagination_label: Entitlementrecommendationassignee
sidebar_label: Entitlementrecommendationassignee
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementrecommendationassignee', 'V1Entitlementrecommendationassignee'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/entitlementrecommendationassignee
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignee', 'V1Entitlementrecommendationassignee']
---

# Entitlementrecommendationassignee

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Type** | **string** | The type of assignee. | 
**Value** | **string** | The ID of the identity or governance group to assign to. | 

## Methods

### NewEntitlementrecommendationassignee

`func NewEntitlementrecommendationassignee(type_ string, value string, ) *Entitlementrecommendationassignee`

NewEntitlementrecommendationassignee instantiates a new Entitlementrecommendationassignee object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrecommendationassigneeWithDefaults

`func NewEntitlementrecommendationassigneeWithDefaults() *Entitlementrecommendationassignee`

NewEntitlementrecommendationassigneeWithDefaults instantiates a new Entitlementrecommendationassignee object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetType

`func (o *Entitlementrecommendationassignee) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *Entitlementrecommendationassignee) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *Entitlementrecommendationassignee) SetType(v string)`

SetType sets Type field to given value.


### GetValue

`func (o *Entitlementrecommendationassignee) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *Entitlementrecommendationassignee) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *Entitlementrecommendationassignee) SetValue(v string)`

SetValue sets Value field to given value.



