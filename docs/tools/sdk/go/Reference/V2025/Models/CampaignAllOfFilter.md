---
id: v2025-campaign-all-of-filter
title: CampaignAllOfFilter
pagination_label: CampaignAllOfFilter
sidebar_label: CampaignAllOfFilter
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignAllOfFilter', 'V2025CampaignAllOfFilter'] 
slug: /tools/sdk/go/v2025/models/campaign-all-of-filter
tags: ['SDK', 'Software Development Kit', 'CampaignAllOfFilter', 'V2025CampaignAllOfFilter']
---

# CampaignAllOfFilter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** | The ID of whatever type of filter is being used. | [optional] 
**Type** | Pointer to **string** | Type of the filter | [optional] 
**Name** | Pointer to **string** | Name of the filter | [optional] 

## Methods

### NewCampaignAllOfFilter

`func NewCampaignAllOfFilter() *CampaignAllOfFilter`

NewCampaignAllOfFilter instantiates a new CampaignAllOfFilter object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignAllOfFilterWithDefaults

`func NewCampaignAllOfFilterWithDefaults() *CampaignAllOfFilter`

NewCampaignAllOfFilterWithDefaults instantiates a new CampaignAllOfFilter object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CampaignAllOfFilter) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CampaignAllOfFilter) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CampaignAllOfFilter) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CampaignAllOfFilter) HasId() bool`

HasId returns a boolean if a field has been set.

### GetType

`func (o *CampaignAllOfFilter) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *CampaignAllOfFilter) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *CampaignAllOfFilter) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *CampaignAllOfFilter) HasType() bool`

HasType returns a boolean if a field has been set.

### GetName

`func (o *CampaignAllOfFilter) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CampaignAllOfFilter) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CampaignAllOfFilter) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CampaignAllOfFilter) HasName() bool`

HasName returns a boolean if a field has been set.


