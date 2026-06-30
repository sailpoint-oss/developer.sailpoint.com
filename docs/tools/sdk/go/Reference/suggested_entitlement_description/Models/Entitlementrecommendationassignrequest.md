---
id: v1-entitlementrecommendationassignrequest
title: Entitlementrecommendationassignrequest
pagination_label: Entitlementrecommendationassignrequest
sidebar_label: Entitlementrecommendationassignrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Entitlementrecommendationassignrequest', 'V1Entitlementrecommendationassignrequest'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/entitlementrecommendationassignrequest
tags: ['SDK', 'Software Development Kit', 'Entitlementrecommendationassignrequest', 'V1Entitlementrecommendationassignrequest']
---

# Entitlementrecommendationassignrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | **[]string** | The list of recommendation record IDs to assign. | 
**Assignee** | [**Entitlementrecommendationassignee**](entitlementrecommendationassignee) |  | 

## Methods

### NewEntitlementrecommendationassignrequest

`func NewEntitlementrecommendationassignrequest(items []string, assignee Entitlementrecommendationassignee, ) *Entitlementrecommendationassignrequest`

NewEntitlementrecommendationassignrequest instantiates a new Entitlementrecommendationassignrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEntitlementrecommendationassignrequestWithDefaults

`func NewEntitlementrecommendationassignrequestWithDefaults() *Entitlementrecommendationassignrequest`

NewEntitlementrecommendationassignrequestWithDefaults instantiates a new Entitlementrecommendationassignrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Entitlementrecommendationassignrequest) GetItems() []string`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Entitlementrecommendationassignrequest) GetItemsOk() (*[]string, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Entitlementrecommendationassignrequest) SetItems(v []string)`

SetItems sets Items field to given value.


### GetAssignee

`func (o *Entitlementrecommendationassignrequest) GetAssignee() Entitlementrecommendationassignee`

GetAssignee returns the Assignee field if non-nil, zero value otherwise.

### GetAssigneeOk

`func (o *Entitlementrecommendationassignrequest) GetAssigneeOk() (*Entitlementrecommendationassignee, bool)`

GetAssigneeOk returns a tuple with the Assignee field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssignee

`func (o *Entitlementrecommendationassignrequest) SetAssignee(v Entitlementrecommendationassignee)`

SetAssignee sets Assignee field to given value.



