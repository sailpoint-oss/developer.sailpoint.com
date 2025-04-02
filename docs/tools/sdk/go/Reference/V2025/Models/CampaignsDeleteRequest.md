---
id: campaigns-delete-request
title: CampaignsDeleteRequest
pagination_label: CampaignsDeleteRequest
sidebar_label: CampaignsDeleteRequest
sidebar_class_name: gosdk
keywords: ['go', 'Golang', 'sdk', 'CampaignsDeleteRequest', 'CampaignsDeleteRequest'] 
slug: /tools/sdk/go//models/campaigns-delete-request
tags: ['SDK', 'Software Development Kit', 'CampaignsDeleteRequest', 'CampaignsDeleteRequest']
---

# CampaignsDeleteRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Ids** | Pointer to **[]string** | The ids of the campaigns to delete | [optional] 

## Methods

### NewCampaignsDeleteRequest

`func NewCampaignsDeleteRequest() *CampaignsDeleteRequest`

NewCampaignsDeleteRequest instantiates a new CampaignsDeleteRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCampaignsDeleteRequestWithDefaults

`func NewCampaignsDeleteRequestWithDefaults() *CampaignsDeleteRequest`

NewCampaignsDeleteRequestWithDefaults instantiates a new CampaignsDeleteRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIds

`func (o *CampaignsDeleteRequest) GetIds() []string`

GetIds returns the Ids field if non-nil, zero value otherwise.

### GetIdsOk

`func (o *CampaignsDeleteRequest) GetIdsOk() (*[]string, bool)`

GetIdsOk returns a tuple with the Ids field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIds

`func (o *CampaignsDeleteRequest) SetIds(v []string)`

SetIds sets Ids field to given value.

### HasIds

`func (o *CampaignsDeleteRequest) HasIds() bool`

HasIds returns a boolean if a field has been set.


