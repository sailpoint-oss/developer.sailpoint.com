---
id: v1-bulkapproveentitlementrecommendationrequest
title: Bulkapproveentitlementrecommendationrequest
pagination_label: Bulkapproveentitlementrecommendationrequest
sidebar_label: Bulkapproveentitlementrecommendationrequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'Bulkapproveentitlementrecommendationrequest', 'V1Bulkapproveentitlementrecommendationrequest'] 
slug: /tools/sdk/go/suggestedentitlementdescription/models/bulkapproveentitlementrecommendationrequest
tags: ['SDK', 'Software Development Kit', 'Bulkapproveentitlementrecommendationrequest', 'V1Bulkapproveentitlementrecommendationrequest']
---

# Bulkapproveentitlementrecommendationrequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**[]Bulkapproveentitlementrecommendationitem**](bulkapproveentitlementrecommendationitem) | The list of recommendation items to approve. | 

## Methods

### NewBulkapproveentitlementrecommendationrequest

`func NewBulkapproveentitlementrecommendationrequest(items []Bulkapproveentitlementrecommendationitem, ) *Bulkapproveentitlementrecommendationrequest`

NewBulkapproveentitlementrecommendationrequest instantiates a new Bulkapproveentitlementrecommendationrequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBulkapproveentitlementrecommendationrequestWithDefaults

`func NewBulkapproveentitlementrecommendationrequestWithDefaults() *Bulkapproveentitlementrecommendationrequest`

NewBulkapproveentitlementrecommendationrequestWithDefaults instantiates a new Bulkapproveentitlementrecommendationrequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetItems

`func (o *Bulkapproveentitlementrecommendationrequest) GetItems() []Bulkapproveentitlementrecommendationitem`

GetItems returns the Items field if non-nil, zero value otherwise.

### GetItemsOk

`func (o *Bulkapproveentitlementrecommendationrequest) GetItemsOk() (*[]Bulkapproveentitlementrecommendationitem, bool)`

GetItemsOk returns a tuple with the Items field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetItems

`func (o *Bulkapproveentitlementrecommendationrequest) SetItems(v []Bulkapproveentitlementrecommendationitem)`

SetItems sets Items field to given value.



